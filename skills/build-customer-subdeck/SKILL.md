---
name: build-customer-subdeck
description: Use when translating customer requirements into a derived customer deck output without mutating canonical shared source decks.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [composition, extraction, customers, requirements, reuse]
    related_skills: [modify-deck, add-deck, update-catalog]
---

# Build a customer-specific subdeck

## Overview

Use this skill when a task asks for a customer-focused subset, sequence, or variant built from the canonical slide library. The repository now includes a working composition entrypoint at `tools/compose/main.mjs`, so the expected output can be a generated deck bundle instead of only a manual plan. The tool still relies on metadata quality and should be treated as a reviewable derived-output generator, not an excuse to bypass provenance or dependency checks.

## Key principle

Customer-specific output is derived work. Do not bake one customer's requirements directly into a canonical shared deck unless the repository architecture is intentionally being changed.

## Inputs to gather

Before composing anything, collect or infer:
- target audience roles
- use case such as onboarding, workshop, or customer enablement
- relevant products or domains
- must-cover topics
- time-box or target slide count
- prerequisite knowledge or forbidden topics

## Source files to inspect

- `docs/taxonomy.md`
- `docs/extraction-rules.md`
- `catalog/taxonomy.json`
- candidate deck manifests under `decks/`
- candidate slide frontmatter under `decks/**/slides/*.md`
- `catalog/dependency-graph.json` when dependency relationships matter

## Phase-1 workflow

### 1. Translate requirements into metadata filters

Map the request onto repo taxonomy:
- topics
- categories
- audiences
- use_cases
- products

Document assumptions when the requirements do not map cleanly.

### 2. Identify candidate source material

Start from canonical decks, then narrow to slides with:
- matching taxonomy
- compatible audience/use-case fit
- acceptable standalone safety
- manageable dependency closure

The compose tool treats the provided taxonomy filters as direct-match requirements and will automatically add dependency closure for selected slides.

### 3. Build a dependency-safe outline

For each chosen slide, verify:
- whether it depends on earlier context slides
- whether it is marked `standalone_safe`
- whether the final order still makes instructional sense

If a slide requires context, either include the prerequisite slides or exclude it. The current tool includes `requires_context` and `builds_on` recursively and records which slides were dependency-added.

### 4. Produce a reviewable composition artifact

The preferred deliverable is a generated deck bundle containing:
- `slides.md`
- copied slide fragments under `slides/`
- `composition.json` provenance
- copied assets under `assets/`

Review the generated bundle before publishing it into a downstream onboarding repo.

### 5. Use the repo entrypoint

Put composition logic into:

```bash
node tools/compose/main.mjs --requirements ./requirements/customer.json --output ./generated-customer-decks
```

Do not create a separate hidden script for customer composition unless the task is explicitly a throwaway spike.

## Common pitfalls

1. Editing a canonical shared deck to satisfy one customer's needs.
2. Selecting slides by title alone without checking dependency metadata.
3. Ignoring `standalone_safe` and producing a contextless subdeck.
4. Treating the current compose tool as fully automatic final publishing instead of a reviewable derived-output generator.
5. Returning a customer deck with no traceability back to source slide IDs.

## Verification checklist

- [ ] Customer requirements were translated into taxonomy or composition filters
- [ ] Candidate slides were selected from canonical source decks
- [ ] Dependencies and standalone safety were reviewed
- [ ] Output remains traceable to source slide IDs
- [ ] Canonical shared decks were not mutated just to fit one customer
- [ ] Any automation work landed in `tools/compose` or was clearly marked as a prototype
