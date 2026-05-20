---
id: architect-graphql-federation-1-graphql-federation/008-subgraph-and-supergraphs-summary
deck_id: architect-graphql-federation-1-graphql-federation
order: 8
slug: subgraph-and-supergraphs-summary
title: "Subgraph and Supergraphs Summary"
summary: "Subgraph and Supergraphs Split your schema across multiple subgraphs for modularity Use @key, @external, and @provides to link types across services All subgraphs unified and gover"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/009-creating-a-subgraph-via-the-dashboard-ui]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">Subgraph and Supergraphs</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem;">
  <li>Split your schema across multiple subgraphs for modularity</li>
  <li>Use @key, @external, and @provides to link types across services</li>
  <li>All subgraphs unified and governed via Tyk Gateway</li>
  <li>Benefits: Faster development, clear service ownership, centralized security</li>
  <li>One supergraph = One entry point for all consumers</li>
</ul>

<!-- Notes: Let's summarize what we've learned: Federation allows us to break up our GraphQL schema into multiple subgraphs, each maintained by different teams or services. This enables faster development and clearer ownership. We use directives like @key, @external, and @provides to establish relationships across these subgraphs. This makes the overall schema composable and flexible. All these subgraphs are unified at the Tyk Gateway level, which handles cross-cutting concerns like authentication, authorization, rate limiting, and more—ensuring governance and performance. The end result is a single supergraph exposed to clients—whether they're web apps, mobile apps, or other consumers—offering one consistent API entry point. Tyk's federation support gives you the flexibility of a distributed architecture with the simplicity of a unified GraphQL interface. -->
