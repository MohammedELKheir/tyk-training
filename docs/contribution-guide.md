# Contribution guide

Use this guide when adding decks, editing slides, updating metadata, or changing repo automation.

## Contribution principles

- Keep canonical deck content under `decks/` as the primary authored source.
- Prefer explicit metadata over conventions hidden in prose or filenames.
- Preserve stable identifiers once content is referenced by catalog consumers.
- Make changes in small, reviewable increments.
- When a workflow is still a placeholder, extend the existing entrypoint instead of inventing a parallel ad-hoc script.

## Before you change anything

1. Read `docs/architecture.md` to understand the source-of-truth model.
2. Read `docs/taxonomy.md` and `docs/metadata-schema.md` if you will touch manifests or slide frontmatter.
3. Inspect the target deck's `manifest.yaml`, slide ordering, and any `notes/` context.
4. Decide whether your change is source-only, metadata-only, or will affect generated outputs.

## Editing an existing deck

1. Open `decks/<deck-slug>/manifest.yaml`.
2. Confirm the deck's `id`, `slug`, taxonomy, and `canonical_order` still match the intended slide set.
3. Edit slide markdown under `decks/<deck-slug>/slides/`.
4. Keep zero-padded filenames stable unless you are intentionally reordering slides.
5. Update slide frontmatter if the slide's purpose, taxonomy, or dependencies changed.
6. Run validation and tests before handoff.

## Adding a new deck

1. Create `decks/<deck-slug>/`.
2. Add at minimum:
   - `manifest.yaml`
   - `slides/`
   - `assets/`
3. Add `notes/` when migration context, speaker notes, or source references matter.
4. Use a stable kebab-case deck slug that can survive publication.
5. Seed `canonical_order` in the manifest to match the zero-padded slide filenames.
6. Rebuild catalog artifacts after the new deck is in place.

## Updating metadata

When touching taxonomy, dependencies, standalone-safety flags, or publishing fields:

- update the nearest source file, not generated outputs first
- keep deck and slide identifiers stable unless a migration is deliberate
- prefer fixing incorrect defaults in the manifest over adding many per-slide exceptions
- make dependency relationships explicit in slide frontmatter
- update `catalog/taxonomy.json` only when a reusable shared term is genuinely missing

## Working with generated outputs

Generated artifacts live in `catalog/` and `site/dist/`.

- Never hand-edit generated files as the source of truth.
- Regenerate them from deck and metadata sources.
- Include regenerated outputs in the review when the underlying source changed.
- If only docs or repo-local skills changed, catalog regeneration is usually unnecessary.

## Validation and verification commands

Run the narrowest command set that matches your change:

- `npm run validate` — basic repo structure and JSON checks
- `npm run build:catalog` — refresh catalog outputs after metadata or deck changes
- `npm run build` — rebuild catalog and static site after site-visible changes
- `npm test` — smoke-test schema, extraction, and catalog scaffolding

Recommended minimums:

- docs-only or skills-only change: `npm run validate && npm test`
- deck or metadata change: `npm run validate && npm run build:catalog && npm test`
- site-visible change: `npm run validate && npm run build && npm test`

## Pull request expectations

A review-ready change should include:

- a concise summary of what changed and why
- any taxonomy additions or identifier migrations called out explicitly
- the verification commands you ran and whether they passed
- regenerated catalog/site artifacts when source changes require them
- notes about placeholder workflow boundaries if the task could not fully automate something yet

## Things to avoid

- renaming deck IDs or slugs casually
- introducing customer-specific content directly into canonical shared decks
- burying dependency information in speaker notes instead of metadata
- creating duplicate taxonomy terms for nearly identical concepts
- bypassing the existing `tools/extract` or `tools/compose` entrypoints with throwaway scripts unless the task is explicitly experimental
