import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('example deck has three ordered slide files', async () => {
  const first = await readFile(new URL('../../decks/api-gateway-fundamentals/slides/001-title.md', import.meta.url), 'utf8');
  const second = await readFile(new URL('../../decks/api-gateway-fundamentals/slides/002-what-is-tyk.md', import.meta.url), 'utf8');
  const third = await readFile(new URL('../../decks/api-gateway-fundamentals/slides/003-control-plane-vs-data-plane.md', import.meta.url), 'utf8');
  assert.match(first, /order: 1/);
  assert.match(second, /order: 2/);
  assert.match(third, /order: 3/);
});
