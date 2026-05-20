---
id: architect-graphql-11-persisting-graphql-queries/003-persisting-graphql-queries-the-vital-part-of-this-is-the-extended-paths
deck_id: architect-graphql-11-persisting-graphql-queries
order: 3
slug: persisting-graphql-queries-the-vital-part-of-this-is-the-extended-paths
title: "Persisting GraphQL queries The vital part of this is the extended_paths.persist_"
summary: "graphql field Sample persist_graphql configuration: \"persist_graphql\": [ { \"method\": \"GET\", \"path\": \"/getContinentByCode\", \"operation\": \"query ($continentCode: ID!) { continent(cod"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-11-persisting-graphql-queries/004-persisting-graphql-queries-each-entry-includes-method-e-g-get-path-e-g]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-slide">
  <div class="tyk-title">Persisting GraphQL queries</div>

  <div style="position:absolute; left:42px; top:132px; width:850px; color:#03031C;">
    <div style="font-size:1.19rem; line-height:1.16; font-weight:800; margin-bottom:0.32rem;">The vital part of this is the <span class="tyk-mono" style="font-size:0.98em;">extended_paths.persist_graphql</span> field</div>
    <div style="font-size:1.02rem; line-height:1.22; font-weight:400; margin-bottom:0.56rem;">Sample persist_graphql configuration:</div>
  </div>

  <pre class="tyk-pre" style="position:absolute; left:42px; top:208px; width:860px; font-size:0.68rem; line-height:1.74; color:#333;">"persist_graphql": [
  {
    "method": "GET",
    "path": "/getContinentByCode",
    "operation": "query ($continentCode: ID!) { continent(code: $continentCode)
{ code name countries { name } } }",
    "variables": {
      "continentCode": "EU"
    }
  }
]</pre>

  <div class="tyk-badge">
    <img :src="'/icons/tyk-logo-badge.png'" alt="Tyk logo" />
  </div>
</div>

<!-- Notes: Once the API definition is in place, versioning plays an important role — even if you're not managing multiple versions.
By setting not_versioned: true and providing a "Default" version, you activate the GraphQL-to-REST middleware. This is where the persist_graphql configuration lives. -->
