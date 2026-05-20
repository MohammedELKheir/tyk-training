---
id: graphql-2025/099-subgraph-examples
deck_id: graphql-2025
order: 99
slug: subgraph-examples
title: "Subgraph Examples"
summary: "Users extend type Query { me: User } type User @key(fields: \"id\") { id: ID! username: String! } Products extend type Query { topProducts(first: Int = 5): [Product] } extend type Su"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/100-subgraph-examples-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Subgraph Examples</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Users
extend type Query {
  me: User
}
type User @key(fields: "id") {
  id: ID!
  username: String!
}
Products
extend type Query {
  topProducts(first: Int = 5): [Product]
}
extend type Subscription {
  updatedPrice: Product!
  updateProductPrice(upc: String!): Product!
  stock: [Product!]
}
type Product @key(fields: "upc") {
  upc: String!
  name: String!
  price: Int!
  inStock: Int!
}</pre>
</div>

<!-- Notes: Let’s walk through a couple of subgraph examples that demonstrate how teams can independently define parts of a federated schema.

First, the Users subgraph:

We’re extending the Query type with a new field called me, which returns a User.

The User type is marked with @key(fields: "id"). This tells the federation system that id is the unique identifier for this entity, and other subgraphs can reference or resolve this user using the id field.

This subgraph might be owned by the Identity or Auth team, focused solely on user data.

Now the Products subgraph:

Here, the Query type is extended again, this time with a topProducts field that returns a list of products.

This subgraph also extends Subscription with live updates like updatedPrice and stock—so you can enable real-time features in the same graph.

The Product type is defined with a @key(fields: "upc"), meaning the unique product code (UPC) identifies each product entity across the supergraph.

This subgraph is likely owned by the eCommerce or Inventory team.

By breaking these definitions out into subgraphs and federating them, we maintain team autonomy, deployment flexibility, and a unified API interface for consumers—this is the real power of GraphQL Federation with Tyk. -->
