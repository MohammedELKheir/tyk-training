---
id: architect-graphql-3-graphql-proxy-only/001-graphql-proxy-only
deck_id: architect-graphql-3-graphql-proxy-only
order: 1
slug: graphql-proxy-only
title: "GraphQL Proxy Only"
summary: "**Definition:** GraphQL Proxy Only is a type of GraphQL API in Tyk that: - Uses a single data source - Has a read-only schema - Automatically loads schema from the upstream using i"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-3-graphql-proxy-only/002-creating-a-graphql-proxy-only-api]
customer_visible: true
notes_visibility: customer-safe
---
# GraphQL Proxy Only

**Definition:** GraphQL Proxy Only is a type of GraphQL API in Tyk that:
- Uses a single data source
- Has a read-only schema
- Automatically loads schema from the upstream using introspection queries

**Key Characteristics:**
- Upstream must support introspection
- Useful for exposing existing GraphQL services securely
- Supports all Tyk features like policies and rate limiting
- Minimal configuration — no schema stitching or data merging

<!-- Notes: Let's talk about GraphQL Proxy Only, one of the modes available for managing GraphQL APIs in Tyk. Definition GraphQL Proxy Only is a simplified way of exposing an existing GraphQL service through Tyk. In this mode: Tyk acts as a pass-through — it proxies a single data source. It's read-only from a schema perspective — meaning we don't define or modify the schema in Tyk. Instead, Tyk automatically pulls the schema from the upstream using introspection queries. Key Characteristics Because Tyk -->
