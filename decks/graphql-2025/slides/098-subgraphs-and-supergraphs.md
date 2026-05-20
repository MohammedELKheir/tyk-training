---
id: graphql-2025/098-subgraphs-and-supergraphs
deck_id: graphql-2025
order: 98
slug: subgraphs-and-supergraphs
title: "Subgraphs and Supergraphs"
summary: "Subgraph is a representation of a back-end service and defines a distinct GraphQL schema. It can be queried directly as a separate service or it can be federated into a larger sche"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/099-subgraph-examples]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Subgraphs and Supergraphs

Subgraph is a representation of a back-end service and defines a distinct GraphQL schema. It can be queried directly as a separate service or it can be federated into a larger schema of a supergraph.
Supergraph is a composition of several subgraphs that allows the execution of a query across multiple services in the backend.
