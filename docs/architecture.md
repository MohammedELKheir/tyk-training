# Repository architecture

This repository is a deck-centric source tree for Tyk training content. Full decks are the canonical authored assets. Everything else in the repo exists either to describe those decks, validate them, derive discovery data from them, or publish that derived data.

## Design goals

- Keep authoring close to the slide source instead of splitting content across disconnected systems.
- Preserve a stable deck-level unit for review, ownership, and publication.
- Store structured metadata next to decks and slides so automation can reason about reuse.
- Generate machine-readable catalog outputs for discovery and future composition tooling.
- Publish a static, read-only GitHub Pages surface without making the site the source of truth.

## Source-of-truth hierarchy

1. `decks/<deck-slug>/manifest.yaml`
2. `decks/<deck-slug>/slides/*.md`
3. `catalog/*.json` derived from deck and slide metadata
4. `site/dist/` built from the catalog and static site sources

If generated artifacts disagree with deck sources, update the deck sources first and then regenerate artifacts.

## Top-level layout

```text
.
├── README.md
├── docs/                  # human-readable repo policy and workflow docs
├── decks/                 # canonical deck source directories
├── catalog/               # generated JSON indexes used by tools and the site
├── site/                  # static GitHub Pages app scaffold and built output
├── schemas/               # JSON schema contracts for deck/slide/taxonomy metadata
├── skills/                # repo-local agent skills for common maintenance tasks
├── tests/                 # schema, extraction, and catalog smoke tests
├── tools/                 # local automation entry points
└── .github/workflows/     # CI and Pages publishing workflows
```

## Deck directory contract

Every canonical deck lives under `decks/<deck-slug>/`.

Expected contents:

- `manifest.yaml`: deck-level metadata and publishing/extraction defaults
- `deck.md`: optional deck-level Slidev wrapper or composition entrypoint
- `slides/`: ordered slide markdown files with zero-padded filenames such as `001-title.md`
- `assets/`: deck-scoped published media
- `notes/`: working notes, source references, or non-published migration context

A deck directory should be understandable in isolation: a maintainer should be able to open the manifest, inspect the slides folder, and infer deck scope, order, audience, and reuse constraints.

## Metadata layering model

Metadata is intentionally layered.

- Deck manifest defines the default identity, ownership, taxonomy, and extraction policy for the whole deck.
- Slide frontmatter defines slide identity, per-slide taxonomy, standalone safety, and dependencies.
- Catalog outputs aggregate and normalize those metadata records for search, review, and future composition.

Important rule: slide metadata may narrow or extend deck-level defaults, but it should not silently contradict them. If many slides need exceptions, the deck-level metadata is probably wrong.

## Tooling responsibilities

- `tools/validate/main.mjs`: smoke-validates required repo files and JSON parseability.
- `tools/build-catalog/main.mjs`: refreshes generated catalog artifacts from canonical deck and slide metadata.
- `tools/extract/main.mjs`: reserved phase-1 placeholder for extraction logic.
- `tools/compose/main.mjs`: builds customer-specific Slidev deck bundles from validated canonical slides, taxonomy filters, and dependency closure.
- `tools/build-slidev/main.mjs`: runs real Slidev builds for publishable canonical decks so CI verifies the authored deck tree end to end.
- `site/build.mjs`: builds the static browse surface into `site/dist/`.

The current toolchain remains intentionally conservative about provenance. Extraction is still a future phase, but validation, catalog generation, site output, and customer-deck composition now share stable repo-local entrypoints so future tasks can deepen behavior without changing operator workflows.

## End-to-end content flow

1. Author or update a canonical deck under `decks/`.
2. Keep taxonomy and dependency metadata accurate in `manifest.yaml` and slide frontmatter.
3. Run `npm run validate`.
4. Run `npm run build:catalog` after metadata changes.
5. Run `npm run build` when site-visible catalog content changes.
6. Run `npm test` before handoff or review.
7. Publish via GitHub Pages workflows after repository review.

## Repository invariants

These rules should remain true unless the architecture spec changes:

- Decks are the authored source of truth.
- Generated files in `catalog/` are reproducible from source metadata.
- Slide ordering is explicit and stable.
- Reuse metadata is structured, not implied by filenames or prose.
- GitHub Pages stays read-only and derived.
- Customer-specific output should be composed from validated canonical content rather than hand-forked from published decks.

## Phase-1 boundaries

The current repository intentionally does not yet provide:

- automated extraction of reusable slide units beyond placeholder entrypoints
- automated visual fidelity review for converted slide decks
- a second source-of-truth outside the canonical deck tree

What it does provide today:

- automated customer-specific deck composition through `tools/compose/main.mjs`
- a reviewable generated output bundle under `generated-customer-decks/`
- real Slidev build verification for publishable canonical decks and test-covered Slidev build verification for the generated customer-deck fixture

When extending the repo, prefer filling in the existing `tools/extract` and `tools/compose` entrypoints rather than inventing parallel workflows.

## Related references

- `docs/taxonomy.md` for allowed classification axes and naming guidance
- `docs/metadata-schema.md` for required metadata fields
- `docs/contribution-guide.md` for contribution rules
- `docs/review-workflow.md` for author/reviewer checks
- `docs/extraction-rules.md` for extraction and composition constraints

For the detailed approval artifact behind this scaffold, see:
`/Users/mohammedelkheir/.hermes/kanban/boards/tyk-training-slides/workspaces/t_821d364b/docs/repo-architecture-spec.md`
