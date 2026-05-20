---
id: architect-graphql-federation-1-graphql-federation/007-federated-supergraph-schema
deck_id: architect-graphql-federation-1-graphql-federation
order: 7
slug: federated-supergraph-schema
title: "Federated Supergraph Schema"
summary: "After federating all subgraphs in Tyk, the unified supergraph schema looks like: type Query { topProducts(first: Int = 5): [Product] me: User } type Subscription { updatedPrice: Pr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/008-subgraph-and-supergraphs-summary]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="background:#1a1a2e; border-radius:6px; padding:8px 12px; max-width:860px;">
  <p style="color:#8438FA; font-size:0.7rem; font-weight:600; margin:0 0 4px 0;">After federating all subgraphs in Tyk, the unified supergraph schema looks like:</p>
  <pre style="color:#e0e0e0; font-size:0.48rem; margin:0; font-family:monospace; line-height:1.4; white-space:pre;">type Query {
  topProducts(first: Int = 5): [Product]
  me: User
}
type Subscription {
  updatedPrice: Product!
  updateProductPrice(upc: String!): Product!
  stock: [Product!]
}
type Review {
  body: String!
  author: User!
  product: Product!
}
type Product {
  upc: String!
  name: String!
  price: Int!
  inStock: Int!
  reviews: [Review]
}
type User {
  id: ID!
  username: String!
  reviews: [Review]
}</pre>
</div>

<!-- Notes: Once we've defined and registered all our subgraphs—like Users, Products, and Reviews—we federate them into a single supergraph within the Tyk Gateway. Here, you can see the complete schema that gets exposed to the client. It merges the capabilities of each subgraph: topProducts and subscriptions come from the Products subgraph, me and user details from the Users subgraph, Review ties it all together—pulling user and product data from other subgraphs. All this is made possible through federation. And the best part? The client doesn't know or care which subgraph the data came from—they query one unified schema. Tyk manages all the complexity behind the scenes. -->
