import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const githubPagesBase = 'https://mohammedelkheir.github.io/tyk-training/decks/';

test('catalog JSON loads and README links every deck presentation', async () => {
  const parsed = JSON.parse(await readFile(new URL('../../catalog/decks-index.json', import.meta.url), 'utf8'));
  const readme = await readFile(new URL('../../README.md', import.meta.url), 'utf8');

  assert.ok(parsed.decks.length >= 67, 'expected the imported training decks to be indexed');
  assert.match(readme, /## Deck Inventory/);
  assert.match(readme, /Total decks: \*\*67\*\*/);

  for (const deck of parsed.decks) {
    assert.match(readme, new RegExp(`\n\| ${escapeRegExp(deck.title)} \|`));
    assert.match(readme, new RegExp(escapeRegExp(`${githubPagesBase}${deck.slug}/presentation/`)));
  }
});

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
