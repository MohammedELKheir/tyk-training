---
id: graphql-2025/092-udg-countries-enriched-how-it-works
deck_id: graphql-2025
order: 92
slug: udg-countries-enriched-how-it-works
title: "UDG Countries Enriched — How it works"
summary: "The UDG engine: Calls the GraphQL Countries API (internal): Uses tyk://8ba9f26729e041a95f84f01dd0ce6d9b/ Passes code: \"GB\" as an argument Gets back: { code: \"GB\", name: \"United Kin"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/093-data-sources-configuration]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">UDG Countries Enriched — How it works</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre v-pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">The UDG engine:
Calls the GraphQL Countries API (internal):
Uses tyk://8ba9f26729e041a95f84f01dd0ce6d9b/
Passes code: "GB" as an argument
Gets back: { code: "GB", name: "United Kingdom" }
Calls the REST Countries API (external):
URL: http://countries-rest-api:4100/cca2/{{.object.code}}
Uses {{.object.code}} from the GraphQL response (dynamic templating)
Gets back: { population: 67081000 }
Merges the results:
Maps population → pop (field mapping)
Returns: { code: "GB", name: "United Kingdom", pop: 67081000 }</pre>
</div>

<!-- Notes: Here's where it gets interesting. When that query comes in, Tyk's UDG engine performs a three-step orchestration process.
First, it calls the GraphQL Countries API. Notice it uses the tyk:// protocol - that's Tyk's internal protocol for calling other APIs that are already defined in the Tyk ecosystem. It passes the country code 'GB' as an argument and gets back the basic country information: code and name, which in this case is 'United Kingdom'.
Next, the engine makes a second call, this time to an external REST API. But here's the clever part - look at that URL template. It uses {{.object.code}} - that's dynamic templating. The engine takes the code value it just received from the first API call and uses it to construct the REST API URL. So it calls the REST endpoint with 'GB' and gets back the population data: 67 million, 81 thousand.
Finally, the engine merges these results. It maps the 'population' field from the REST response to the 'pop' field in our schema - that's field mapping in action. And it returns a single, unified response that combines data from both sources.
All of this happens automatically - the client just sees one clean response. -->
