---
id: graphql-2025/033-introspection-headers
deck_id: graphql-2025
order: 33
slug: introspection-headers
title: "Introspection Headers"
summary: "Purpose: Used when Tyk Dashboard sends an introspection query to fetch the upstream GraphQL schema. Usage scenario: Required when upstream GraphQL APIs are protected and require au"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/034-introspection-headers-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection Headers

Purpose: Used when Tyk Dashboard sends an introspection query to fetch the upstream GraphQL schema.
Usage scenario: Required when upstream GraphQL APIs are protected and require authorization for schema discovery.
Key Points:
Headers are only used during schema introspection from the Dashboard.
These headers are not forwarded during runtime API requests from consumers.
Configurable in the Advanced Options tab or via raw API definition:

<!-- Notes: This feature is used when the Tyk Dashboard sends an introspection query to fetch the upstream GraphQL schema.
It’s especially important in scenarios where your upstream GraphQL APIs are protected and require authorization for schema discovery.
A key point to note is that these authorization headers are only used during the schema introspection process from the Dashboard.
They are not forwarded during runtime API requests made by your API consumers, so your API security remains intact.
You can configure these headers easily in the Advanced Options tab of your API settings or by editing the raw API definition. -->
