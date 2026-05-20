---
id: graphql-2025/102-subgraph-and-supergraphs
deck_id: graphql-2025
order: 102
slug: subgraph-and-supergraphs
title: "Subgraph and Supergraphs"
summary: "Split your schema across multiple subgraphs for modularity Use @key, @external, and @provides to link types across services All subgraphs unified and governed via Tyk Gateway Benef"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/103-creating-a-subgraph-via-the-dashboard-ui]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Subgraph and Supergraphs</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Split your schema across multiple subgraphs for modularity
Use @key, @external, and @provides to link types across services
All subgraphs unified and governed via Tyk Gateway
Benefits: Faster development, clear service ownership, centralized security
One supergraph = One entry point for all consumers</pre>
</div>

<!-- Notes: Let’s summarize what we’ve learned:
Federation allows us to break up our GraphQL schema into multiple subgraphs, each maintained by different teams or services. This enables faster development and clearer ownership.

We use directives like @key, @external, and @provides to establish relationships across these subgraphs. This makes the overall schema composable and flexible.

All these subgraphs are unified at the Tyk Gateway level, which handles cross-cutting concerns like authentication, authorization, rate limiting, and more—ensuring governance and performance.

The end result is a single supergraph exposed to clients—whether they’re web apps, mobile apps, or other consumers—offering one consistent API entry point.

Tyk’s federation support gives you the flexibility of a distributed architecture with the simplicity of a unified GraphQL interface. -->
