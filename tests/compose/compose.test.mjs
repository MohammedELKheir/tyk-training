import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import { mkdtemp, cp, mkdir, writeFile, readFile, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { composeDeck, writeComposedDeck } from '../../tools/compose/lib.mjs';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(new URL('../..', import.meta.url).pathname);

async function makeTempRepo() {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), 'compose-tool-'));
  const repoCopy = path.join(tempRoot, 'repo');
  await cp(repoRoot, repoCopy, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repoRoot, source);
      if (!relative) return true;
      return !relative.startsWith('.git') && !relative.startsWith('node_modules') && !relative.startsWith('site/dist');
    },
  });
  return { tempRoot, repoCopy };
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

function extractScalar(frontmatter, fieldName) {
  const match = frontmatter.match(new RegExp(`^${fieldName}:\\s*(.+)$`, 'm'));
  assert.ok(match, `expected field '${fieldName}' in generated slide frontmatter`);
  return match[1].trim();
}

function parseGeneratedSlidesMarkdown(markdown) {
  const introMatch = markdown.match(/^---\n([\s\S]*?)\n---\n\n# ([^\n]+)\n\n([\s\S]*?)(?=\n---\n---\n|$)/);
  assert.ok(introMatch, 'generated slides.md should start with deck frontmatter and intro slide');

  const deckFrontmatter = introMatch[1];
  const slideMatches = [...markdown.matchAll(/\n---\n---\n([\s\S]*?)\n---\n\n([\s\S]*?)(?=\n---\n---\n|$)/g)];
  assert.ok(slideMatches.length > 0, 'generated slides.md should contain at least one composed slide');

  const slides = slideMatches.map((match) => {
    const frontmatter = match[1];
    const body = match[2].trim();
    assert.notEqual(body, '', 'each composed slide should include slide body content');
    return {
      id: extractScalar(frontmatter, 'id'),
      source_slide_id: extractScalar(frontmatter, 'source_slide_id'),
      source_file: extractScalar(frontmatter, 'source_file'),
      inclusion_reason: extractScalar(frontmatter, 'inclusion_reason'),
      body,
    };
  });

  return {
    deckTitle: introMatch[2].trim(),
    deckFrontmatter,
    introBody: introMatch[3].trim(),
    slides,
  };
}

test('composeDeck selects metadata matches and adds dependency closure', async () => {
  const { repoCopy } = await makeTempRepo();

  const plan = await composeDeck({
    repoRoot: repoCopy,
    requirements: {
      customer: 'Acme',
      deck_slug: 'acme-architecture-onboarding',
      title: 'Acme Architecture Onboarding',
      topics: ['architecture'],
      audiences: ['solutions-architect'],
      use_cases: ['onboarding'],
    },
  });

  assert.deepEqual(
    plan.selectedSlides.map((slide) => slide.id),
    [
      'api-gateway-fundamentals/001-title',
      'api-gateway-fundamentals/002-what-is-tyk',
      'api-gateway-fundamentals/003-control-plane-vs-data-plane',
    ],
  );
  assert.deepEqual(plan.directMatchSlideIds, ['api-gateway-fundamentals/003-control-plane-vs-data-plane']);
  assert.deepEqual(
    plan.dependencyAddedSlideIds,
    ['api-gateway-fundamentals/001-title', 'api-gateway-fundamentals/002-what-is-tyk'],
  );
  assert.equal(plan.summary.totalSelectedSlides, 3);
  assert.equal(plan.summary.totalDirectMatches, 1);
});

test('writeComposedDeck emits repo-ready output with provenance and copied assets', async () => {
  const { repoCopy, tempRoot } = await makeTempRepo();
  const assetPath = path.join(repoCopy, 'decks', 'api-gateway-fundamentals', 'assets', 'architecture-diagram.txt');
  await mkdir(path.dirname(assetPath), { recursive: true });
  await writeFile(assetPath, 'diagram placeholder\n');

  const slidePath = path.join(repoCopy, 'decks', 'api-gateway-fundamentals', 'slides', '003-control-plane-vs-data-plane.md');
  const originalSlide = await readFile(slidePath, 'utf8');
  const updatedSlide = originalSlide.replace('assets: []', 'assets:\n  - architecture-diagram.txt');
  await writeFile(slidePath, updatedSlide);

  const plan = await composeDeck({
    repoRoot: repoCopy,
    requirements: {
      customer: 'Acme',
      deck_slug: 'acme-architecture-onboarding',
      title: 'Acme Architecture Onboarding',
      topics: ['architecture'],
      audiences: ['solutions-architect'],
      use_cases: ['onboarding'],
    },
  });

  const outputRoot = path.join(tempRoot, 'customer-output');
  const result = await writeComposedDeck(plan, { outputRoot });
  const slidesMd = await readFile(path.join(result.deckDir, 'slides.md'), 'utf8');
  const provenance = JSON.parse(await readFile(path.join(result.deckDir, 'composition.json'), 'utf8'));

  assert.match(slidesMd, /Acme Architecture Onboarding/);
  assert.match(slidesMd, /source_slide_id: api-gateway-fundamentals\/003-control-plane-vs-data-plane/);
  assert.deepEqual(provenance.direct_match_slide_ids, ['api-gateway-fundamentals/003-control-plane-vs-data-plane']);
  assert.deepEqual(
    provenance.dependency_added_slide_ids,
    ['api-gateway-fundamentals/001-title', 'api-gateway-fundamentals/002-what-is-tyk'],
  );
  await access(path.join(result.deckDir, 'assets', 'api-gateway-fundamentals', 'architecture-diagram.txt'));
});

test('compose CLI writes output and prints JSON summary', async () => {
  const { repoCopy, tempRoot } = await makeTempRepo();
  const requirementsPath = path.join(tempRoot, 'requirements.json');
  await writeFile(
    requirementsPath,
    JSON.stringify(
      {
        customer: 'Acme',
        deck_slug: 'acme-architecture-onboarding',
        title: 'Acme Architecture Onboarding',
        topics: ['architecture'],
        audiences: ['solutions-architect'],
        use_cases: ['onboarding'],
      },
      null,
      2,
    ),
  );

  const { stdout } = await execFileAsync('node', ['tools/compose/main.mjs', '--repo', repoCopy, '--requirements', requirementsPath, '--output', path.join(tempRoot, 'generated')], {
    cwd: repoRoot,
  });

  const summary = JSON.parse(stdout);
  assert.equal(summary.deck_slug, 'acme-architecture-onboarding');
  assert.equal(summary.total_selected_slides, 3);
  await access(summary.deck_dir);
});

test('requirements fixture composes a coherent and buildable Slidev deck', async () => {
  const { repoCopy, tempRoot } = await makeTempRepo();
  const fixtureDir = path.join(repoCopy, 'tests', 'fixtures', 'composition', 'acme-architecture-onboarding');
  const requirementsPath = path.join(fixtureDir, 'requirements.json');
  const expected = await readJson(path.join(fixtureDir, 'expected-output.json'));
  const outputRoot = path.join(repoCopy, 'generated-customer-decks');

  const { stdout } = await execFileAsync('node', ['tools/compose/main.mjs', '--repo', repoCopy, '--requirements', requirementsPath, '--output', outputRoot], {
    cwd: repoRoot,
  });

  const summary = JSON.parse(stdout);
  const deckDir = path.join(outputRoot, expected.deck_slug);
  const copiedRequirements = await readJson(path.join(deckDir, 'requirements.json'));
  const composition = await readJson(path.join(deckDir, 'composition.json'));
  const slidesMarkdown = await readFile(path.join(deckDir, 'slides.md'), 'utf8');
  const parsedDeck = parseGeneratedSlidesMarkdown(slidesMarkdown);
  const readme = await readFile(path.join(deckDir, 'README.md'), 'utf8');
  const slidevOutDir = path.join(deckDir, '.artifacts', 'slidev-build');

  assert.equal(summary.deck_slug, expected.deck_slug);
  assert.equal(summary.title, expected.title);
  assert.equal(summary.customer, expected.customer);
  assert.equal(summary.deck_dir, deckDir);
  assert.equal(summary.total_selected_slides, expected.total_selected_slides);
  assert.deepEqual(summary.direct_match_slide_ids, expected.direct_match_slide_ids);
  assert.deepEqual(summary.dependency_added_slide_ids, expected.dependency_added_slide_ids);

  assert.deepEqual(copiedRequirements, await readJson(requirementsPath));

  assert.equal(composition.customer, expected.customer);
  assert.equal(composition.deck_slug, expected.deck_slug);
  assert.equal(composition.title, expected.title);
  assert.equal(composition.total_selected_slides, expected.total_selected_slides);
  assert.deepEqual(composition.direct_match_slide_ids, expected.direct_match_slide_ids);
  assert.deepEqual(composition.dependency_added_slide_ids, expected.dependency_added_slide_ids);
  assert.deepEqual(
    composition.selected_slides.map((slide) => ({
      id: slide.id,
      source_file: slide.source_file,
      inclusion_reason: slide.inclusion_reason,
    })),
    expected.selected_slides,
  );

  assert.match(parsedDeck.deckFrontmatter, /^title: \"Acme Architecture Onboarding\"$/m);
  assert.match(parsedDeck.deckFrontmatter, /^theme: default$/m);
  assert.equal(parsedDeck.deckTitle, expected.title);
  assert.match(parsedDeck.introBody, /Generated for Acme\./);
  assert.deepEqual(
    parsedDeck.slides.map((slide) => ({
      id: slide.id,
      source_file: slide.source_file,
      inclusion_reason: slide.inclusion_reason,
    })),
    expected.selected_slides,
  );
  assert.deepEqual(
    parsedDeck.slides.map((slide) => slide.source_slide_id),
    expected.selected_slides.map((slide) => slide.id),
  );

  for (const outputFile of composition.output_files) {
    const copiedSlidePath = path.join(deckDir, outputFile.file);
    const sourceSlidePath = path.join(repoCopy, outputFile.source_file);
    await access(copiedSlidePath);
    assert.equal(await readFile(copiedSlidePath, 'utf8'), await readFile(sourceSlidePath, 'utf8'));
  }

  assert.match(readme, /Generated customer-specific deck composed from canonical training slides\./);
  assert.match(readme, /Selected slides:/);
  assert.match(readme, /api-gateway-fundamentals\/003-control-plane-vs-data-plane/);

  await execFileAsync('npm', ['ci'], {
    cwd: repoCopy,
    env: { ...process.env, CI: 'true' },
  });

  await execFileAsync('npm', ['exec', '--', 'slidev', 'build', 'slides.md', '--out', '.artifacts/slidev-build'], {
    cwd: deckDir,
    env: { ...process.env, CI: 'true' },
  });

  await access(path.join(slidevOutDir, 'index.html'));
});
