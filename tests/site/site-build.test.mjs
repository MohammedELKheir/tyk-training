import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

test('site build creates landing page assets and deck links', async () => {
  await execFileAsync(process.execPath, ['site/build.mjs'], {
    cwd: new URL('../../', import.meta.url),
  });

  const html = await readFile(new URL('../../site/dist/index.html', import.meta.url), 'utf8');
  assert.match(html, /Find relevant content/);
  assert.match(html, /Plan a composition/);
  assert.match(html, /Taxonomy overview/);

  const mainJs = await readFile(new URL('../../site/dist/main.js', import.meta.url), 'utf8');
  assert.match(mainJs, /use_cases/);
  assert.match(mainJs, /compositionCandidates/);

  await access(new URL('../../site/dist/decks/api-gateway-fundamentals/deck.md', import.meta.url));
  await access(new URL('../../site/dist/decks/api-gateway-fundamentals/manifest.yaml', import.meta.url));
});
