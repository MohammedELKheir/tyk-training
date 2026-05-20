---
id: architect-graphql-11-persisting-graphql-queries/004-persisting-graphql-queries-each-entry-includes-method-e-g-get-path-e-g
deck_id: architect-graphql-11-persisting-graphql-queries
order: 4
slug: persisting-graphql-queries-each-entry-includes-method-e-g-get-path-e-g
title: "Persisting GraphQL queries Each entry includes: method – e.g., GET path – e.g.,"
summary: "/getContinentByCode operation – the GraphQL query variables – parameters passed to the query { \"data\": { \"continent\": { \"code\": \"EU\", \"name\": \"Europe\", \"countries\": [ { \"name\": \"An"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-slide">
  <div class="tyk-title">Persisting GraphQL queries</div>

  <div style="position:absolute; left:42px; top:130px; width:500px; color:#03031C;">
    <div style="font-size:1.24rem; line-height:1.16; font-weight:800; margin-bottom:0.82rem;">Each entry includes:</div>
    <ul style="margin:0; padding-left:2.05rem; list-style-type:disc; font-size:1.03rem; line-height:1.42;">
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">method – e.g., <span class="tyk-mono">GET</span></li>
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">path – e.g., <span class="tyk-mono">/getContinentByCode</span></li>
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">operation – the GraphQL query</li>
      <li style="padding-left:0.58rem;">variables – parameters passed to the query</li>
    </ul>
  </div>

  <pre class="tyk-pre" style="position:absolute; left:544px; top:147px; width:392px; font-size:0.67rem; line-height:1.68; color:#333;">{
  "data": {
    "continent": {
      "code": "EU",
      "name": "Europe",
      "countries": [
        {
          "name": "Andorra"
        },
        ...
      ]
    }
  }
}</pre>

  <div class="tyk-badge">
    <img :src="'/icons/tyk-logo-badge.png'" alt="Tyk logo" />
  </div>
</div>

<!-- Notes: In this final step, we configure the actual persisted query.
The path /getContinentByCode becomes a usable REST endpoint.
When Tyk receives a GET request to that path, it will construct and send the defined GraphQL operation to the upstream — in this case, fetching the continent by code.
The query and variables are hardcoded, so it's predictable and easy to cache or control. -->
