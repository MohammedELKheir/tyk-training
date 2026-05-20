---
id: graphql-2025/038-persisting-graphql-queries-2
deck_id: graphql-2025
order: 38
slug: persisting-graphql-queries-2
title: "Persisting GraphQL queries"
summary: "API Definition & Versioning Setup Basic API definition: \"proxy\": { \"listen_path\": \"/trevorblades/\", \"target_url\": \"https://countries.trevorblades.com\", \"strip_listen_path\": true }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/039-persisting-graphql-queries-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Persisting GraphQL queries</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">API Definition &amp; Versioning Setup
Basic API definition:
"proxy": {
  "listen_path": "/trevorblades/",
  "target_url": "https://countries.trevorblades.com",
  "strip_listen_path": true
}
Enable versioning with:
use_extended_paths: true
not_versioned: true
GraphQL to REST middleware lives inside extended_paths.persist_graphql.</pre>
</div>

<!-- Notes: Here’s a basic example of an API definition for a GraphQL proxy in Tyk:
The listen_path is set to /trevorblades/.

The target_url points to the upstream GraphQL service at https://countries.trevorblades.com.

We enable strip_listen_path to remove the prefix before forwarding requests upstream.

To enable versioning with this setup:
Set use_extended_paths to true — this allows more granular path handling.

Set not_versioned to true if you want to disable automatic versioning behavior.

The important piece for GraphQL-to-REST conversion is that the middleware handling this logic lives inside the extended_paths.persist_graphql section.
This modular approach gives you flexibility to manage your API versions and expose GraphQL queries as REST endpoints with fine control -->
