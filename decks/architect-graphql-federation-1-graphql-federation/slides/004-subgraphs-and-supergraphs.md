---
id: architect-graphql-federation-1-graphql-federation/004-subgraphs-and-supergraphs
deck_id: architect-graphql-federation-1-graphql-federation
order: 4
slug: subgraphs-and-supergraphs
title: "Subgraphs and Supergraphs"
summary: "Subgraph is a representation of a back-end service and defines a distinct GraphQL schema. It can be queried directly as a separate service or it can be federated into a larger sche"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/005-subgraph-examples-users-products]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">Subgraphs and Supergraphs</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem;">
  <li style="margin-bottom:0.8rem;">Subgraph is a representation of a back-end service and defines a distinct GraphQL schema. It can be queried directly as a separate service or it can be federated into a larger schema of a supergraph.</li>
  <li>Supergraph is a composition of several subgraphs that allows the execution of a query across multiple services in the backend.</li>
</ul>
