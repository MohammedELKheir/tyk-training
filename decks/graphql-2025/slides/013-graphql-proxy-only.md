---
id: graphql-2025/013-graphql-proxy-only
deck_id: graphql-2025
order: 13
slug: graphql-proxy-only
title: "GraphQL Proxy Only"
summary: "Definition: GraphQL Proxy Only is a type of GraphQL API in Tyk that: Uses a single data source Has a read-only schema Automatically loads schema from the upstream using introspecti"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/014-creating-a-graphql-proxy-only-api]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">GraphQL Proxy Only</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Definition:
 GraphQL Proxy Only is a type of GraphQL API in Tyk that:
Uses a single data source
Has a read-only schema
Automatically loads schema from the upstream using introspection queries
Key Characteristics:
Upstream must support introspection
Useful for exposing existing GraphQL services securely
Supports all Tyk features like policies and rate limiting
Minimal configuration — no schema stitching or data merging</pre>
</div>

<!-- Notes: Let's talk about GraphQL Proxy Only, one of the modes available for managing GraphQL APIs in Tyk.
Definition
 GraphQL Proxy Only is a simplified way of exposing an existing GraphQL service through Tyk. In this mode:
Tyk acts as a pass-through — it proxies a single data source.

It’s read-only from a schema perspective — meaning we don’t define or modify the schema in Tyk.

Instead, Tyk automatically pulls the schema from the upstream using introspection queries.

Key Characteristics
Because Tyk relies on introspection, the upstream GraphQL service must support introspection.

This is especially useful when you want to securely expose an existing GraphQL service without making changes to its implementation.

You still get the full benefits of Tyk’s API management features — like rate limiting, authentication, policies, analytics, and more.

Configuration is minimal. There’s no need to stitch multiple schemas or do complex data merging — making it ideal for quick exposure and governance.

This is a great option for teams looking to add governance and control to a GraphQL API that’s already up and running. -->
