# tyk-training-slides

Canonical source repository for reusable Tyk training decks, deck/slide metadata, derived discovery catalog data, and a static GitHub Pages site.

## Repository goals

- Keep complete source decks as the canonical authored unit.
- Store structured deck and slide metadata close to the source content.
- Validate taxonomy tags, dependency references, sequence groups, and inheritance automatically.
- Generate machine-readable catalog artifacts for discovery and customer-specific composition tooling.
- Publish a read-only GitHub Pages site for browsing decks, slides, taxonomy, and dependencies.

## Top-level layout

```text
.
├── docs/                  # architecture, taxonomy, schema, extraction, review docs
├── decks/                 # canonical source decks
├── catalog/               # generated machine-readable indexes
├── site/                  # static GitHub Pages app scaffold
├── schemas/               # JSON Schema contracts
├── tools/                 # local validation/build/extraction/compose tooling
├── skills/                # repo-local agent skills
├── tests/                 # fixtures + schema/extraction/catalog tests
├── .github/workflows/     # CI and GitHub Pages publication workflows
└── package.json           # repo task runner
```

## Quick start

Requirements:
- Node.js 20+

Commands:
- `npm run validate` — validate taxonomy, manifests, slide frontmatter, dependencies, and sequence-group rules
- `npm run build:catalog` — regenerate deck/slide indexes and the dependency graph from source metadata
- `npm run build:site` — build the static site into `site/dist/`
- `npm run build` — build catalog + site
- `npm run compose -- --requirements ./requirements/acme.json --output ./generated-customer-decks` — generate a customer-specific deck bundle from metadata filters and dependency closure
- `npm test` — run repository smoke tests and metadata validation tests

## Current status

The repo now includes a concrete metadata model for deck manifests and slide frontmatter, dependency-aware validation tooling, a sample deck that exercises standalone safety, context references, and multi-slide sequence grouping, and a working customer-composition tool under `tools/compose/main.mjs`. See `docs/composition-tool.md` for requirements format, output layout, and provenance rules.
