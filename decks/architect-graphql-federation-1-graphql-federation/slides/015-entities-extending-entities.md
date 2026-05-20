---
id: architect-graphql-federation-1-graphql-federation/015-entities-extending-entities
deck_id: architect-graphql-federation-1-graphql-federation
order: 15
slug: entities-extending-entities
title: "Entities – Extending Entities"
summary: "Extensions add fields to base entities in other subgraphs Must use @key with the same primary key fields Primary keys referenced with @external directive Example: extend type MyEnt"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/016-entities-entity-stubs]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Entities – Extending Entities</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Extensions add fields to base entities in other subgraphs</li>
  <li>Must use @key with the same primary key fields</li>
  <li>Primary keys referenced with @external directive</li>
</ul>

<p style="font-size:0.95rem; font-weight:600; color:#333; margin-bottom:0.5rem;">Example:</p>

<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; max-width:600px;">
  <pre style="color:#e0e0e0; font-size:0.65rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">extend type MyEntity @key(fields: "id") {
  id: ID! @external
  newField: String!
}</pre>
</div>

<!-- Notes: Other subgraphs can extend base entities to add new fields. They must declare the primary key with @external to indicate it's defined elsewhere. This allows subgraphs to share and build on common entities without duplication. -->
