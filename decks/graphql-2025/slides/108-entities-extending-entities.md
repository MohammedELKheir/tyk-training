---
id: graphql-2025/108-entities-extending-entities
deck_id: graphql-2025
order: 108
slug: entities-extending-entities
title: "Entities – Extending Entities"
summary: "Extensions add fields to base entities in other subgraphs Must use @key with the same primary key fields Primary keys referenced with @external directive Example: extend type MyEnt"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/109-entities-entity-stubs]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Entities – Extending Entities</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Extensions add fields to base entities in other subgraphs
Must use @key with the same primary key fields
Primary keys referenced with @external directive
Example:
extend type MyEntity @key(fields: "id") {
  id: ID! @external
  newField: String!
}</pre>
</div>

<!-- Notes: Other subgraphs can extend base entities to add new fields.
They must declare the primary key with @external to indicate it’s defined elsewhere.
This allows subgraphs to share and build on common entities without duplication. -->
