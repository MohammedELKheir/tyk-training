---
id: graphql-2025/109-entities-entity-stubs
deck_id: graphql-2025
order: 109
slug: entities-entity-stubs
title: "Entities – Entity Stubs"
summary: "Stubs reference an entity without adding fields Minimal info needed to identify the entity Example: extend type MyEntity @key(fields: \"id\") { id: ID! @external }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/110-shared-types-and-extending-shared-types]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Entities – Entity Stubs</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Stubs reference an entity without adding fields
Minimal info needed to identify the entity
Example:
extend type MyEntity @key(fields: "id") {
  id: ID! @external
}</pre>
</div>

<!-- Notes: Sometimes a subgraph only needs to reference an entity without adding new fields; this is called a stub.
It ensures the subgraph can refer to the entity while maintaining schema integrity in the supergraph. -->
