---
id: architect-graphql-federation-1-graphql-federation/014-entities-defining-the-base-entity
deck_id: architect-graphql-federation-1-graphql-federation
order: 14
slug: entities-defining-the-base-entity
title: "Entities – Defining the Base Entity"
summary: "Base entity must have @key directive with fields that uniquely identify it Multiple primary keys allowed Example: type MyEntity @key(fields: \"id\") @key(fields: \"name\") { id: ID! na"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/015-entities-extending-entities]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Entities – Defining the Base Entity</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Base entity must have @key directive with fields that uniquely identify it</li>
  <li>Multiple primary keys allowed</li>
</ul>

<p style="font-size:0.95rem; font-weight:600; color:#333; margin-bottom:0.25rem;">Example:</p>

<div style="max-width:640px; padding-top:0.1rem;">
  <pre style="color:#4b5563; font-size:0.82rem; margin:0; font-family:monospace; line-height:1.55; white-space:pre;">type MyEntity @key(fields: "id") @key(fields: "name") {
  id: ID!
  name: String!
}</pre>
</div>

<!-- Notes: In federation, entities represent core objects shared across subgraphs. A base entity is defined in one subgraph with the @key directive to specify unique identifiers. You can define multiple keys for flexibility in referencing entities. -->
