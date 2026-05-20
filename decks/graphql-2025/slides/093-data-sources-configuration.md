---
id: graphql-2025/093-data-sources-configuration
deck_id: graphql-2025
order: 93
slug: data-sources-configuration
title: "Data sources configuration"
summary: "Data Source 1: GraphQL Countries (Internal) Kind: GraphQL Internal: true (uses tyk:// protocol to call another Tyk API) Provides: code, name Root fields: Query.country Data Source"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/094-data-sources-configuration-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Data sources configuration</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre v-pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Data Source 1: GraphQL Countries (Internal)
Kind: GraphQL
Internal: true (uses tyk:// protocol to call another Tyk API)
Provides: code, name
Root fields: Query.country
Data Source 2: REST Countries (External)
Kind: REST
Internal: false
URL: http://countries-rest-api:4100/cca2/{{.object.code}}
Provides: population (mapped to pop)
Root fields: Country.pop</pre>
</div>

<!-- Notes: Let's break down how these data sources are configured.
The first data source is the GraphQL Countries API. It's marked as internal, which means it's another API that's already managed by Tyk. When you set internal to true, Tyk uses its special tyk:// protocol to route the request efficiently within the Tyk ecosystem. This data source provides the code and name fields, and it handles the root Query.country field.
The second data source is the REST Countries API. This one is marked as external - it's not a Tyk-managed API, just a regular REST service. The URL uses that dynamic templating we saw earlier, where {{.object.code}} gets replaced with the actual country code from the previous data source. This REST API provides the population data, which gets mapped to our schema's pop field. It's configured to handle the Country.pop field specifically.
This configuration shows the flexibility of UDG - you can mix and match internal Tyk APIs with external services, GraphQL with REST, and Tyk handles all the complexity of orchestrating these calls. -->
