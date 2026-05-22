import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { loadRepositoryMetadata } from '../validate/metadata.mjs';
import { parseBuildDeckOptions, resolveChangedFileSource, selectDecksToBuild } from './lib.mjs';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', '..');
const options = parseBuildDeckOptions(process.argv.slice(2));

const repository = await loadRepositoryMetadata(root);
const publishableDecks = repository.decks.filter(
  (deck) => deck.publishing?.github_pages === true && deck.status !== 'archived',
);
const changedFiles = options.changedOnly ? await getChangedFiles() : [];
const decksToBuild = selectDecksToBuild({
  repository: { decks: publishableDecks },
  options,
  changedFiles,
});

if (publishableDecks.length === 0) {
  console.log('No publishable decks found for Slidev validation.');
  process.exit(0);
}

if (decksToBuild.length === 0) {
  console.log(options.changedOnly
    ? 'No publishable deck changes detected; skipping Slidev builds.'
    : 'No publishable decks selected for Slidev validation.');
  process.exit(0);
}

await runWithConcurrency(decksToBuild, options.concurrency, buildDeck);

async function buildDeck(deck) {
  const deckRoot = path.join(root, 'decks', deck.slug);
  const generatedEntryPath = path.join(deckRoot, '.generated-slidev-entry.md');
  const presentationDir = path.join(deckRoot, '.artifacts', 'presentation');
  const sourceSlidesPath = path.join(deckRoot, 'source.slides.md');
  const publicDir = path.join(deckRoot, 'public');
  const deckSlides = deck.canonical_order.map((slideSlug) => {
    const slide = deck.slides.find((candidate) => candidate.file.endsWith(`${slideSlug}.md`));
    if (!slide) {
      throw new Error(`Deck ${deck.slug} canonical_order references missing slide ${slideSlug}`);
    }
    return slide;
  });

  const slideChunks = [];
  for (const slide of deckSlides) {
    const sourcePath = path.join(root, slide.file);
    const content = await readFile(sourcePath, 'utf8');
    const { body } = splitFrontmatter(content);
    slideChunks.push(normalizeSlideSource(body));
  }

  const deckFrontmatter = await readDeckFrontmatter(sourceSlidesPath);
  const finalFrontmatter = ensureHashRouterFrontmatter(deckFrontmatter || 'routerMode: hash');
  const compiledBody = slideChunks
    .map((chunk, index) => {
      if (index === 0) {
        return chunk;
      }

      return chunk.startsWith('---\n') ? chunk : `---\n\n${chunk}`;
    })
    .join('\n\n');
  const compiled = `---\n${finalFrontmatter.trim()}\n---\n\n${compiledBody}\n`;

  await rm(presentationDir, { recursive: true, force: true });
  await mkdir(path.dirname(presentationDir), { recursive: true });
  await writeFile(generatedEntryPath, compiled);

  try {
    await execFileAsync(
      'npm',
      ['exec', '--', 'slidev', 'build', path.basename(generatedEntryPath), '--base', './', '--out', '.artifacts/presentation'],
      { cwd: deckRoot, env: { ...process.env, CI: 'true' } },
    );

    await cp(publicDir, path.join(presentationDir, 'public'), {
      recursive: true,
      force: true,
      errorOnExist: false,
    }).catch(() => {});
  } finally {
    await rm(generatedEntryPath, { force: true });
  }

  console.log(`Built Slidev deck ${deck.slug} -> ${path.relative(root, presentationDir)}`);
}

async function getChangedFiles() {
  const source = resolveChangedFileSource({ env: process.env, options });

  try {
    if (source.type === 'diff') {
      const { stdout } = await execFileAsync('git', ['diff', '--name-only', '--diff-filter=ACMRTUXB', source.range], { cwd: root });
      console.log(`Detected changed files from ${source.label}.`);
      return stdout
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
    }

    const { stdout } = await execFileAsync('git', ['status', '--porcelain'], { cwd: root });
    console.log(`Detected changed files from ${source.label}.`);
    return stdout
      .split('\n')
      .map((line) => line.trimEnd())
      .filter(Boolean)
      .map(parsePorcelainPath)
      .filter(Boolean);
  } catch (error) {
    console.warn(`Failed to read changed files from ${source.label}; falling back to full build. ${error.message}`);
    return publishableDecks.map((deck) => `decks/${deck.slug}/manifest.yaml`);
  }
}

function parsePorcelainPath(line) {
  const payload = line.slice(3);
  if (!payload) {
    return '';
  }

  if (payload.includes(' -> ')) {
    return payload.split(' -> ').at(-1) ?? '';
  }

  return payload;
}

async function runWithConcurrency(items, concurrency, worker) {
  const limit = Math.max(1, concurrency);
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex]);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => runWorker());
  await Promise.all(workers);
}

async function readDeckFrontmatter(sourceSlidesPath) {
  try {
    const raw = await readFile(sourceSlidesPath, 'utf8');
    const { frontmatter } = splitFrontmatter(raw);
    return frontmatter;
  } catch {
    return '';
  }
}

function splitFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) {
    return { frontmatter: '', body: markdown };
  }

  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) {
    return { frontmatter: '', body: markdown };
  }

  return {
    frontmatter: markdown.slice(4, end),
    body: markdown.slice(end + 5),
  };
}

function ensureHashRouterFrontmatter(frontmatter) {
  return /(^|\n)routerMode\s*:/m.test(frontmatter)
    ? frontmatter.replace(/(^|\n)routerMode\s*:\s*.*(?=\n|$)/m, '$1routerMode: hash')
    : `${frontmatter.trim()}\nrouterMode: hash`.trim();
}

function normalizeSlideSource(markdown) {
  const trimmed = markdown.trim();

  if (!trimmed.startsWith('---\n')) {
    return trimmed;
  }

  const { frontmatter, body } = splitFrontmatter(trimmed);
  if (!frontmatter) {
    return trimmed;
  }

  return `---\n${frontmatter.trim()}\n---\n\n${body.trim()}`;
}
