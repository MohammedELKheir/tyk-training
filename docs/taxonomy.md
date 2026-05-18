# Taxonomy

Taxonomy values make decks and slides discoverable, composable, and reviewable. Use the same identifiers everywhere: in manifests, in slide frontmatter, in generated catalogs, and in future composition requirements.

The shared registry for phase 1 lives in `catalog/taxonomy.json`.

## Taxonomy axes

### `topics`
Subject matter covered by the content.

Current examples:
- `api-gateway`
- `traffic-management`
- `security`

Use `topics` to answer: what product or domain concept is this slide teaching?

### `categories`
The kind of instructional material.

Current examples:
- `fundamentals`
- `deep-dive`
- `operations`

Use `categories` to distinguish introductory material from deeper or operational material.

### `audiences`
The role or persona the content is for.

Current examples:
- `sales-engineer`
- `solutions-architect`
- `platform-engineer`

Use `audiences` to support both discovery and later customer-subdeck filtering.

### `use_cases`
The delivery context in which the deck or slide is useful.

Current examples:
- `onboarding`
- `workshop`
- `customer-enable`

Use `use_cases` for why the content exists, not what it teaches.

### `products`
Optional product/domain tags when product specificity matters.

Current examples:
- `tyk-gateway`
- `tyk-dashboard`
- `tyk-operator`

Use `products` when the material is tied to a specific Tyk component. Omit it when the content is intentionally product-agnostic.

## Authoring rules

- Prefer existing taxonomy identifiers over inventing near-duplicates.
- Use lowercase kebab-case identifiers.
- Keep identifiers stable once referenced by manifests, slides, or catalog consumers.
- Apply taxonomy at the deck level when it is true for most slides.
- Add slide-level overrides only when a slide is meaningfully narrower, broader, or different from the deck default.
- Do not encode ordering, prerequisites, or dependency information as taxonomy tags.

## Deck-level vs slide-level tagging

Deck manifest tags describe the default scope of the whole deck.

Use slide-level tags when:
- a slide focuses on a specific subtopic that is more precise than the deck
- a slide is safe to reuse for a different audience or use case than the rest of the deck
- a slide should be discoverable for future extraction even though the deck itself is broader

Avoid slide-level tags when:
- they merely duplicate the deck manifest with no added value
- they are being used to compensate for a poorly scoped deck
- they reflect transient customer names instead of reusable content properties

## Governance for new taxonomy terms

When a needed concept is missing from `catalog/taxonomy.json`:

1. Confirm that no existing identifier already fits.
2. Add the new identifier in `catalog/taxonomy.json`.
3. Update any schema/tests that assume the registry contents.
4. Update affected deck manifests or slide metadata.
5. Rebuild catalog outputs and run tests.
6. Document the rationale in the change review if the new term changes classification policy.

Add a new term only when it helps future discovery or composition. Do not create tags for one-off customer names, temporary project labels, or author convenience.

## Composition implications

Taxonomy should help answer questions like:

- which slides fit a workshop for solutions architects?
- which decks cover Tyk security at a fundamentals level?
- which content is relevant to customer enablement for Tyk Gateway?

If a tag would not help answer one of those discovery or composition questions, it probably does not belong in the taxonomy.

## Review checklist

Before review, confirm that:

- each manifest uses only allowed identifiers
- slide-level tags are justified, not copied blindly
- audience and use-case tags reflect how the content is actually delivered
- new identifiers, if any, are documented and intentional
- taxonomy choices remain reusable across multiple decks
