---
name: update-catalog
description: Use when deck, slide, taxonomy, or publishing metadata changes require regenerated catalog artifacts and site-facing outputs.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [catalog, metadata, build, validation, site]
    related_skills: [modify-deck, add-deck, build-customer-subdeck]
---

# Update the catalog

## Overview

Use this skill when source changes under `decks/`, `catalog/taxonomy.json`, schemas, or related tooling require refreshed generated artifacts. The catalog is derived output, so treat it as something you regenerate from source metadata rather than edit directly.

## When to use

Use this skill for:
- changes to deck manifests
- changes to slide frontmatter
- taxonomy registry updates
- work that affects dependency or discoverability metadata
- tasks where the static site should reflect updated catalog data

Do not use this skill for:
- docs-only changes with no impact on source metadata
- repo-local skill edits that do not affect catalog consumers

## Artifacts owned by this workflow

Primary generated artifacts:
- `catalog/decks-index.json`
- `catalog/slides-index.json`
- `catalog/dependency-graph.json`

Potentially related site output:
- `site/dist/`

## Workflow

### 1. Confirm the source change

Inspect the source files first:
- `decks/**/manifest.yaml`
- `decks/**/slides/*.md`
- `catalog/taxonomy.json`
- any tooling or schema changes that alter catalog expectations

### 2. Validate before regenerating

Run:

```bash
npm run validate
```

This catches missing required scaffold files and malformed JSON artifacts before you refresh outputs.

### 3. Regenerate the catalog

Run:

```bash
npm run build:catalog
```

In the current scaffold this primarily refreshes derived catalog placeholders/timestamps, but the workflow should stay stable as the implementation grows.

### 4. Rebuild the site if needed

If the catalog or browse surface is expected to change, run:

```bash
npm run build
```

This rebuilds catalog + site and refreshes `site/dist/`.

### 5. Run tests

Run:

```bash
npm test
```

## What to review after regeneration

- Did regenerated files change only where expected?
- Do catalog outputs still match the current deck metadata model?
- Did site output refresh when required?
- Was any generated churn caused by unrelated edits?

## Common pitfalls

1. Editing `catalog/*.json` by hand and forgetting to regenerate from source.
2. Rebuilding the site without first checking whether source metadata is valid.
3. Claiming catalog changes are meaningful when only timestamps changed.
4. Forgetting to include `site/dist/` updates when the site build depends on catalog output.

## Verification checklist

- [ ] Source changes were inspected first
- [ ] `npm run validate` passed
- [ ] `npm run build:catalog` passed
- [ ] `npm run build` ran if site-visible output should change
- [ ] `npm test` passed
- [ ] Regenerated files reflect the intended source change
