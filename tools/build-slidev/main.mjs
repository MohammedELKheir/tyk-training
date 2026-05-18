import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { loadRepositoryMetadata } from '../validate/metadata.mjs';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', '..');
const outDir = path.join(root, '.artifacts', 'slidev');
const tempRoot = path.join(root, '.artifacts', 'slidev-src');

try {
  const repository = await loadRepositoryMetadata(root);
  const publishableDecks = repository.decks.filter(
    (deck) => deck.publishing?.github_pages === true && deck.status !== 'archived',
  );

  if (publishableDecks.length === 0) {
    console.log('No publishable decks found for Slidev validation.');
    process.exit(0);
  }

  await rm(outDir, { recursive: true, force: true });
  await rm(tempRoot, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  await mkdir(tempRoot, { recursive: true });

  for (const deck of publishableDecks) {
    const slidevEntryPath = path.join(tempRoot, `${deck.slug}.md`);
    const deckOutDir = path.join(outDir, deck.slug);
    const deckSlides = deck.canonical_order.map((slideSlug) => {
      const slide = deck.slides.find((candidate) => candidate.file.endsWith(`${slideSlug}.md`));
      if (!slide) {
        throw new Error(`Deck ${deck.slug} canonical_order references missing slide ${slideSlug}`);
      }
      return slide;
    });

    const parts = [];
    for (const slide of deckSlides) {
      const sourcePath = path.join(root, slide.file);
      const content = await readFile(sourcePath, 'utf8');
      parts.push(content.trimEnd());
    }

    await writeFile(slidevEntryPath, `${parts.join('\n\n---\n\n')}\n`);

    await execFileAsync(
      'npm',
      ['exec', '--', 'slidev', 'build', slidevEntryPath, '--out', deckOutDir],
      { cwd: root, env: { ...process.env, CI: 'true' } },
    );

    console.log(`Built Slidev deck ${deck.slug} -> ${path.relative(root, deckOutDir)}`);
  }
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
