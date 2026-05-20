import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadRepositoryMetadata } from '../tools/validate/metadata.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(__dirname, 'dist');
const repository = await loadRepositoryMetadata(root);

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(path.join(__dirname, 'src'), outDir, { recursive: true });
await cp(path.join(root, 'catalog'), path.join(outDir, 'catalog'), { recursive: true });
await cp(path.join(root, 'decks'), path.join(outDir, 'decks'), {
  recursive: true,
  filter: (source) => !source.split(path.sep).includes('.artifacts'),
});
await cp(path.join(__dirname, 'public'), outDir, { recursive: true });

for (const deck of repository.decks.filter((candidate) => candidate.publishing?.github_pages === true && candidate.status !== 'archived')) {
  const renderedSource = path.join(root, 'decks', deck.slug, '.artifacts', 'presentation');
  const renderedDest = path.join(outDir, 'decks', deck.slug, 'presentation');
  await cp(renderedSource, renderedDest, { recursive: true, force: true });
}

const htmlPath = path.join(outDir, 'index.html');
const html = await readFile(htmlPath, 'utf8');
await writeFile(htmlPath, html.replaceAll('../catalog/', './catalog/'));

console.log(`Built static site scaffold at ${outDir}`);
