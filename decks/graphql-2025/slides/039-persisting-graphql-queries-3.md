---
id: graphql-2025/039-persisting-graphql-queries-3
deck_id: graphql-2025
order: 39
slug: persisting-graphql-queries-3
title: "Persisting GraphQL queries"
summary: "The vital part of this is the extended_paths.persist_graphql field Sample persist_graphql configuration: \"persist_graphql\": [ { \"method\": \"GET\", \"path\": \"/getContinentByCode\", \"ope"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/040-persisting-graphql-queries-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Persisting GraphQL queries</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">The vital part of this is the extended_paths.persist_graphql field
Sample persist_graphql configuration:
"persist_graphql": [
  {
    "method": "GET",
    "path": "/getContinentByCode",
    "operation": "query ($continentCode: ID!) { continent(code: $continentCode) { code name countries { name } } }",
    "variables": {
      "continentCode": "EU"
    }
  }
]</pre>
</div>

<!-- Notes: Once the API definition is in place, versioning plays an important role — even if you're not managing multiple versions.
By setting not_versioned: true and providing a "Default" version, you activate the GraphQL-to-REST middleware. This is where the persist_graphql configuration lives. -->
