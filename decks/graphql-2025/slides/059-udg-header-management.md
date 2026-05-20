---
id: graphql-2025/059-udg-header-management
deck_id: graphql-2025
order: 59
slug: udg-header-management
title: "UDG Header Management"
summary: "Two levels of header control: Global Headers Defined in graphql.engine.global_headers Sent to all data sources Can include request context variables Data Source Headers Defined in"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/060-udg-header-management-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# UDG Header Management

Two levels of header control:
Global Headers
Defined in graphql.engine.global_headers
Sent to all data sources
Can include request context variables
Data Source Headers
Defined in graphql.engine.data_sources[].config.headers
Specific to individual data sources
Also supports context variables like JWT claims
{
  "global_headers": [
    { "key": "global-header", "value": "example-value" },
    { "key": "request-id", "value": "$tyk_context.request_id" }
  ]
}

<!-- Notes: With Tyk v5.2, you now have fine-grained control over HTTP headers for both the overall UDG and specific data sources.
Global headers are useful when you want to apply something like a request ID or an org-wide auth token across all upstream APIs.
These headers can include request context variables — for example, $tyk_context.request_id — so you can inject runtime values into the request.
We define these inside the global_headers section of the API definition. -->
