---
id: architect-graphql-federation-1-graphql-federation/005-subgraph-examples-users-products
deck_id: architect-graphql-federation-1-graphql-federation
order: 5
slug: subgraph-examples-users-products
title: "Subgraph Examples (Users + Products)"
summary: "Subgraph Examples Users extend type Query { me: User } type User @key(fields: \"id\") { id: ID! username: String! } Products extend type Query { topProducts(first: Int = 5): [Product"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/006-subgraph-examples-reviews]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:2.25rem; font-weight:700; margin-bottom:0.95rem;">Subgraph Examples</h2>

<div style="display:flex; gap:1.3rem; margin-top:0.35rem; align-items:flex-start;">
  <div style="flex:0.92; background:#ffffff; border:1px solid #3f3f52; border-radius:0; padding:14px 16px 12px 16px; box-sizing:border-box;">
    <p style="color:#111827; font-size:0.95rem; font-weight:700; margin:0 0 14px 0;">Users</p>
    <pre style="color:#4b5563; font-size:0.82rem; margin:0; font-family:monospace; line-height:1.55; white-space:pre;">extend type Query {
  me: User
}
type User @key(fields: "id") {
  id: ID!
  username: String!
}</pre>
  </div>

  <div style="flex:1.58; background:#ffffff; border:1px solid #3f3f52; border-radius:0; padding:14px 16px 12px 16px; box-sizing:border-box;">
    <p style="color:#111827; font-size:0.95rem; font-weight:700; margin:0 0 14px 0;">Products</p>
    <pre style="color:#4b5563; font-size:0.72rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">extend type Query {
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
</div>

<!-- Notes: Let's walk through a couple of subgraph examples that demonstrate how teams can independently define parts of a federated schema. First, the Users subgraph: We're extending the Query type with a new field called me, which returns a User. The User type is marked with @key(fields: "id"). This tells the federation system that id is the unique identifier for this entity, and other subgraphs can reference or resolve this user using the id field. This subgraph might be owned by the Identity or Auth team, focused solely on user data. Now the Products subgraph: Here, the Query type is extended again, this time with a topProducts field that returns a list of products. This subgraph also extends Subscription with live updates like updatedPrice and stock—so you can enable real-time features in the same graph. The Product type is defined with a @key(fields: "upc"), meaning the unique product code (UPC) identifies each product entity across the supergraph. This subgraph is likely owned by the eCommerce or Inventory team. By breaking these definitions out into subgraphs and federating them, we maintain team autonomy, deployment flexibility, and a unified API interface for consumers—this is the real power of GraphQL Federation with Tyk. -->
