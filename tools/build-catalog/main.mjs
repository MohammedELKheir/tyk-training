import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadRepositoryMetadata } from '../validate/metadata.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', '..');
const repository = await loadRepositoryMetadata(root);
const generatedAt = new Date().toISOString();

const decksIndex = {
  generated_at: generatedAt,
  decks: repository.decks.map((deck) => ({
    id: deck.id,
    slug: deck.slug,
    title: deck.title,
    status: deck.status,
    version: deck.version,
    summary: deck.summary,
    owners: deck.owners,
    topics: deck.topics,
    categories: deck.categories,
    audiences: deck.audiences,
    use_cases: deck.use_cases,
    products: deck.products,
    prerequisites: deck.prerequisites,
    related_decks: deck.related_decks,
    slide_count: deck.slides.length,
    reusable_slide_count: deck.slides.filter((slide) => slide.reusable).length,
    publishing: deck.publishing,
    extraction_defaults: deck.extraction_defaults,
  })),
};

const slidesIndex = {
  generated_at: generatedAt,
  slides: repository.slides
    .filter((slide) => slide.reusable && repository.decks.find((deck) => deck.id === slide.deck_id)?.status !== 'archived')
    .map((slide) => ({
      id: slide.id,
      deck_id: slide.deck_id,
      order: slide.order,
      slug: slide.slug,
      title: slide.title,
      summary: slide.summary,
      topics: slide.topics,
      categories: slide.categories,
      audiences: slide.audiences,
      use_cases: slide.use_cases,
      products: slide.products ?? [],
      standalone_safe: slide.standalone_safe,
      reusable: slide.reusable,
      sequence_group: slide.sequence_group ?? null,
      sequence_role: slide.sequence_role ?? null,
      requires_context: slide.requires_context,
      builds_on: slide.builds_on,
      recommended_next: slide.recommended_next,
      customer_visible: slide.customer_visible ?? true,
      notes_visibility: slide.notes_visibility ?? 'internal',
      assets: slide.assets,
      source_file: slide.file,
    })),
};

const dependencyGraph = {
  generated_at: generatedAt,
  nodes: repository.slides.map((slide) => ({
    id: slide.id,
    deck_id: slide.deck_id,
    sequence_group: slide.sequence_group ?? null,
    sequence_role: slide.sequence_role ?? null,
  })),
  edges: buildEdges(repository.slides),
};

await writeFile(path.join(root, 'catalog', 'decks-index.json'), JSON.stringify(decksIndex, null, 2) + '\n');
await writeFile(path.join(root, 'catalog', 'slides-index.json'), JSON.stringify(slidesIndex, null, 2) + '\n');
await writeFile(path.join(root, 'catalog', 'dependency-graph.json'), JSON.stringify(dependencyGraph, null, 2) + '\n');

console.log(`Built catalog artifacts for ${repository.decks.length} deck(s) and ${repository.slides.length} slide(s).`);

function buildEdges(slides) {
  const edges = [];
  const seen = new Set();

  const pushEdge = (from, to, type) => {
    const key = `${from}|${to}|${type}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push({ from, to, type });
  };

  for (const slide of slides) {
    for (const ref of slide.requires_context) {
      pushEdge(ref, slide.id, 'requires_context');
    }
    for (const ref of slide.builds_on) {
      pushEdge(ref, slide.id, 'builds_on');
    }
    for (const ref of slide.recommended_next) {
      pushEdge(slide.id, ref, 'recommended_next');
    }
  }

  const groups = new Map();
  for (const slide of slides) {
    if (!slide.sequence_group) continue;
    const key = `${slide.deck_id}::${slide.sequence_group}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(slide);
  }

  for (const groupSlides of groups.values()) {
    const ordered = [...groupSlides].sort((a, b) => a.order - b.order);
    for (let index = 0; index < ordered.length - 1; index += 1) {
      pushEdge(ordered[index].id, ordered[index + 1].id, 'sequence');
    }
  }

  return edges;
}
