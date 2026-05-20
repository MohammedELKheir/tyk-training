---
id: architect-graphql-federation-1-graphql-federation/006-subgraph-examples-reviews
deck_id: architect-graphql-federation-1-graphql-federation
order: 6
slug: subgraph-examples-reviews
title: "Subgraph Examples (Reviews)"
summary: "Subgraph Examples Reviews type Review { body: String! author: User! @provides(fields: \"username\") product: Product! } extend type User @key(fields: \"id\") { id: ID! @external userna"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/007-federated-supergraph-schema]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Subgraph Examples</h2>

<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; max-width:860px;">
  <p style="color:#8438FA; font-size:0.75rem; font-weight:600; margin:0 0 4px 0;">Reviews</p>
  <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.45; white-space:pre;">type Review {
  body: String!
  author: User! @provides(fields: "username")
  product: Product!
}
extend type User @key(fields: "id") {
  id: ID! @external
  username: String! @external
  reviews: [Review]
}
extend type Product @key(fields: "upc") {
  upc: String! @external
  reviews: [Review]
}</pre>
</div>

<!-- Notes: Now let's look at an example that highlights how subgraphs interact with each other—using the Review subgraph. We start with the Review type, which defines fields for the review body, its author, and the related product. Notice the use of @provides(fields: "username") on the author field—this tells the supergraph that the Review subgraph can provide the username field from the User entity, even though it doesn't own the User type. Below that, we see how the User type is extended from another subgraph: It's marked with @key(fields: "id"), meaning id is used to uniquely identify a User across subgraphs. Both id and username are marked @external, because they are owned by the original User subgraph. The reviews field is added by this subgraph to enrich the User entity with related reviews. Similarly, the Product type is also extended: It uses the same pattern with @key and @external to integrate fields like upc, which is owned by the Products subgraph. Then, it adds a new reviews field to the Product entity. These patterns follow subgraph conventions in GraphQL Federation: Subgraphs can reference types defined in other subgraphs. Subgraphs can extend those types with additional fields. To make this work, any entity being shared across subgraphs must use the @key directive—this makes it an entity that others can build on. This modular, team-owned design allows you to scale your GraphQL architecture without building one giant monolithic schema. -->
