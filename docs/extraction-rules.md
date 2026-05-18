# Extraction rules

Extraction is the process of identifying reusable slide units from canonical deck sources. In phase 1, the repository defines the contracts and entrypoints for extraction, but the extraction tool itself remains a placeholder.

## Current workflow boundary

- Canonical source lives under `decks/`.
- Extraction and composition policy is described by deck manifests and slide frontmatter.
- `tools/extract/main.mjs` remains the reserved extraction implementation entrypoint.
- `tools/compose/main.mjs` is now the active composition entrypoint for customer-specific deck generation.
- Generated customer output remains derived work and must stay traceable back to canonical source metadata and slide files.

Do not introduce a second source-of-truth for extracted slides. Any extracted or composed artifact must remain derivable from canonical deck content plus structured requirements.

## Extraction invariants

- Every slide belongs to exactly one canonical source deck.
- Slide ordering comes from zero-padded filenames and matching metadata order.
- Slide IDs must stay stable enough to be referenced by dependencies and future composed outputs.
- Reusable slide units are derived artifacts, not authored primary assets.
- Dependency information must be explicit in metadata, not inferred from visual adjacency alone.
- Standalone safety must be called out per slide when a slide can be reused without its surrounding context.

## Metadata fields that matter for extraction

At minimum, extraction-aware workflows should inspect:

Deck-level:
- `id`
- `slug`
- `canonical_order`
- `topics`
- `categories`
- `audiences`
- `use_cases`
- `products`
- `extraction_defaults`

Slide-level:
- `id`
- `deck_id`
- `order`
- `slug`
- `title`
- `summary`
- `topics`
- `categories`
- `audiences`
- `use_cases`
- `standalone_safe`
- `dependencies`

## How future extraction should behave

A future implementation under `tools/extract` should:

1. Read canonical deck manifests and slide frontmatter.
2. Normalize deck defaults plus slide-level overrides.
3. Emit stable extracted records keyed by slide ID.
4. Preserve dependency relationships.
5. Preserve enough source references to trace every extracted slide back to its deck and file path.
6. Refuse extraction when required metadata is missing or contradictory.

## How future composition should behave

The current implementation under `tools/compose` now:

1. starts from a customer or audience requirement set supplied as JSON
2. selects reusable, customer-visible slides using taxonomy metadata
3. preserves prerequisite order by recursively including `requires_context` and `builds_on` dependencies
4. copies referenced assets into the generated output tree
5. writes a reviewable composed bundle with `slides.md`, copied source slide fragments, and `composition.json` provenance

Future iterations can improve ranking, richer deck-level stitching, and downstream publishing ergonomics without changing the canonical-source contract.

## Manual phase-1 extraction/composition practice

While extraction remains a placeholder and composition output still requires human review, a coding agent building extraction or composition logic should:

- treat the canonical deck metadata as the contract
- design outputs that are deterministic and reproducible
- avoid hand-curating customer decks directly in `decks/` unless the repository architecture is intentionally changed
- document any assumptions about dependency closure or standalone safety in the review handoff

## Non-goals for phase 1

- a separate extraction-only GitHub workflow
- automated visual verification workflows
- customer-specific generated decks committed as first-class canonical source decks by default
- hidden per-customer tweaks inside shared manifests
