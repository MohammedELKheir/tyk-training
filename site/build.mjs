import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(__dirname, 'dist');

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(path.join(__dirname, 'src'), outDir, { recursive: true });
await cp(path.join(root, 'catalog'), path.join(outDir, 'catalog'), { recursive: true });
await cp(path.join(root, 'decks'), path.join(outDir, 'decks'), { recursive: true });
await cp(path.join(__dirname, 'public'), outDir, { recursive: true });

const htmlPath = path.join(outDir, 'index.html');
const html = await readFile(htmlPath, 'utf8');
await writeFile(htmlPath, html.replaceAll('../catalog/', './catalog/'));

console.log(`Built static site scaffold at ${outDir}`);
