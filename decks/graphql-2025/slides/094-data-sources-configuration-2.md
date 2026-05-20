---
id: graphql-2025/094-data-sources-configuration-2
deck_id: graphql-2025
order: 94
slug: data-sources-configuration-2
title: "Data sources configuration"
summary: "Features Dynamic templating: {{.object.code}} uses data from the first data source Field mapping: population → pop Internal API calls: uses tyk:// to call another Tyk API External"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/095-graphql-federation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Data sources configuration</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre v-pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Features
Dynamic templating: {{.object.code}} uses data from the first data source
Field mapping: population → pop
Internal API calls: uses tyk:// to call another Tyk API
External API calls: can call any REST endpoint
Single request: client makes one query, UDG handles multiple upstream calls
Example query
curl -X POST http://tyk-gateway.localhost:8080/universal-data-graph-composed/ \
 -H "Content-Type: application/json" \
 -d '{
   "query": "query { country(code: \"GB\") { code name pop } }"
 }'</pre>
</div>

<!-- Notes: Let me highlight the key features that make UDG powerful.
First, dynamic templating - that {{.object.code}} syntax allows you to use data from one data source to construct requests to another. This enables sophisticated data composition patterns.
Second, field mapping - you can transform field names to match your desired schema. Here, the REST API returns 'population', but we map it to 'pop' in our GraphQL schema.
Third, internal API calls using the tyk:// protocol - this allows efficient communication between Tyk-managed APIs without going through external network calls.
Fourth, external API calls - UDG can call any REST endpoint, giving you the flexibility to federate data from services you don't control.
And finally, the single request pattern - from the client's perspective, they make one GraphQL query, and Tyk handles all the complexity of calling multiple upstream services, waiting for responses, and merging the data.
Here's a practical example of how you'd use this API. It's a simple curl command that posts a GraphQL query to the endpoint. The client just specifies what they want - code, name, and pop for country 'GB' - and Tyk does all the heavy lifting behind the scenes.
This is the power of Universal Data Graph - it lets you build sophisticated, federated APIs while keeping the client experience simple and clean. -->
