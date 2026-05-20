---
id: graphql-2025/107-entities-defining-the-base-entity
deck_id: graphql-2025
order: 107
slug: entities-defining-the-base-entity
title: "Entities – Defining the Base Entity"
summary: "Base entity must have @key directive with fields that uniquely identify it Multiple primary keys allowed Example: type MyEntity @key(fields: \"id\") @key(fields: \"name\") { id: ID! na"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/108-entities-extending-entities]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Entities – Defining the Base Entity</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Base entity must have @key directive with fields that uniquely identify it
Multiple primary keys allowed
Example:
type MyEntity @key(fields: "id") @key(fields: "name") {
  id: ID!
  name: String!
}</pre>
</div>

<!-- Notes: In federation, entities represent core objects shared across subgraphs.
A base entity is defined in one subgraph with the @key directive to specify unique identifiers.
You can define multiple keys for flexibility in referencing entities. -->
