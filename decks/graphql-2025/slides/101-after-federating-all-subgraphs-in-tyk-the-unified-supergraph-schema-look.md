---
id: graphql-2025/101-after-federating-all-subgraphs-in-tyk-the-unified-supergraph-schema-look
deck_id: graphql-2025
order: 101
slug: after-federating-all-subgraphs-in-tyk-the-unified-supergraph-schema-look
title: "After federating all subgraphs in Tyk, the unified supergraph schema looks like: type Query { topP"
summary: "roducts(first: Int = 5): [Product] me: User } type Subscription { updatedPrice: Product! updateProductPrice(upc: String!): Product! stock: [Product!] } type Review { body: String!"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/102-subgraph-and-supergraphs]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# After federating all subgraphs in Tyk, the unified supergraph schema looks like:
type Query {
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
}



<!-- Notes: Once we’ve defined and registered all our subgraphs—like Users, Products, and Reviews—we federate them into a single supergraph within the Tyk Gateway.
Here, you can see the complete schema that gets exposed to the client.
 It merges the capabilities of each subgraph:
topProducts and subscriptions come from the Products subgraph

me and user details from the Users subgraph

Review ties it all together—pulling user and product data from other subgraphs

All this is made possible through federation. And the best part? The client doesn’t know or care which subgraph the data came from—they query one unified schema.
 Tyk manages all the complexity behind the scenes. -->
