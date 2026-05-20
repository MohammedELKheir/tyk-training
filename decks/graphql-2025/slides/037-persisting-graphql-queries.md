---
id: graphql-2025/037-persisting-graphql-queries
deck_id: graphql-2025
order: 37
slug: persisting-graphql-queries
title: "Persisting GraphQL queries"
summary: "Tyk allows exposing a GraphQL query as a REST endpoint. Achieved using persist_graphql inside extended_paths. Configured on an HTTP-type API definition. Useful for: Creating simple"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/038-persisting-graphql-queries-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Persisting GraphQL queries</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Tyk allows exposing a GraphQL query as a REST endpoint.
Achieved using persist_graphql inside extended_paths.
Configured on an HTTP-type API definition.
Useful for:
Creating simple, cacheable REST endpoints
Predefined access to known GraphQL operations
Requirements:
The target_url must point to a GraphQL upstream.
enable_context_vars must be set to true.</pre>
</div>

<!-- Notes: Tyk allows you to expose a GraphQL query as a REST endpoint using the persist_graphql feature inside extended_paths.
This is configured on an HTTP-type API definition, not a GraphQL type.
It’s especially useful for:
Creating simple, cacheable REST endpoints from complex GraphQL queries.

Providing predefined access to specific GraphQL operations without exposing the full schema.

To use this feature, two requirements must be met:
The target_url must point to a valid GraphQL upstream.

enable_context_vars must be set to true.

This approach lets you combine the flexibility of GraphQL with the simplicity and caching benefits of REST. -->
