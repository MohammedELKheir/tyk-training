# Review workflow

This repository uses a source-first review flow: reviewers check the canonical deck content and metadata first, then verify generated artifacts.

## What a reviewer should verify

### 1. Source integrity

Review the changed source files under `decks/`, `docs/`, `skills/`, `schemas/`, `tools/`, or `site/src/`.

Confirm that:
- canonical deck edits are made in the deck source, not only in generated outputs
- deck IDs, slide IDs, slugs, and order remain coherent
- metadata changes are explicit and justified
- new docs or skills align with the approved repository architecture

### 2. Generated artifact integrity

If the change touches deck content, metadata, taxonomy, or site-visible catalog behavior, verify the matching generated artifacts:

- `catalog/decks-index.json`
- `catalog/slides-index.json`
- `catalog/dependency-graph.json`
- `site/dist/`

Generated files should reflect the source changes and should not contain unrelated churn.

### 3. Command verification

Run the command set appropriate to the change:

- `npm run validate`
- `npm run build:catalog` when deck or metadata changes occurred
- `npm run build` when the static site output changed or should be refreshed
- `npm test`

A docs-only or skills-only task can usually skip catalog/site regeneration if no source data or site code changed.

## Author handoff checklist

Before asking for review, the author should provide:

- summary of changed files
- reason for the change
- any taxonomy additions or metadata policy changes
- commands run and pass/fail status
- any remaining placeholder limitations

## Review focus by change type

### Deck content change

Focus on:
- correctness of slide ordering
- appropriateness of taxonomy tags
- dependency and standalone-safety metadata
- whether deck-level defaults still fit the slides

### Metadata or schema change

Focus on:
- compatibility with existing manifests/slides
- impact on catalog generation
- whether the new rule belongs in schema/tooling instead of prose

### Docs or skills change

Focus on:
- alignment with current repository behavior
- clarity for future coding agents
- avoidance of promising automation that does not yet exist
- clear distinction between phase-1 scaffolding and future workflows

### Site or generated catalog change

Focus on:
- source-to-output consistency
- stability of JSON shape for downstream consumers
- whether generated outputs can be reproduced locally

## Escalation rules

Block or request changes when:
- generated outputs were edited without corresponding source edits
- taxonomy additions are ambiguous or redundant
- deck/slide identifiers were changed without migration rationale
- documentation claims capabilities that the repo tooling does not actually implement
- customer-specific material is being added directly to canonical shared decks

## Phase-1 review boundaries

The current repository does not yet have automated visual fidelity checks. Reviewers should not pretend those checks happened. For the rest of the flow, review against the automation that now exists:

- verify canonical metadata and internal references with `npm run validate`
- verify the Pages catalog/site with `npm run build` and the site tests
- verify publishable canonical decks with `npm run build:decks`
- verify customer-deck composition with `node tools/compose/main.mjs --requirements <file> --output <dir>` and the compose tests
- ensure proposed extension points still land in `tools/extract` and `tools/compose`
- capture missing automation as future follow-up work rather than silently widening scope
