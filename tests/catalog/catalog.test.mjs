import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('catalog JSON loads and includes the example deck', async () => {
  const parsed = JSON.parse(await readFile(new URL('../../catalog/decks-index.json', import.meta.url), 'utf8'));
  assert.equal(parsed.decks[0].id, 'api-gateway-fundamentals');
});
