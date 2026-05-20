---
id: graphql-2025/035-request-headers
deck_id: graphql-2025
order: 35
slug: request-headers
title: "Request Headers"
summary: "Purpose: Used to inject additional headers into runtime requests proxied through Tyk Gateway. Usage scenario: Add metadata, tokens, or dynamic values to upstream requests. Key Poin"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/036-request-headers-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Request Headers

Purpose: Used to inject additional headers into runtime requests proxied through Tyk Gateway.
Usage scenario: Add metadata, tokens, or dynamic values to upstream requests.
Key Points:
Only active during actual API requests, not during introspection.
Supports static values or dynamic context variables like $tyk_context.*.
Configurable in the Advanced Options tab or raw API definition:

<!-- Notes: This feature is used to inject additional headers into runtime requests that are proxied through the Tyk Gateway.
It’s useful when you want to add metadata, tokens, or other dynamic values to requests sent to your upstream GraphQL API.
Importantly, these headers are only active during actual API requests from clients — they are not applied during schema introspection.
You can configure headers with static values or use dynamic context variables, such as $tyk_context.*, to customize them per request.
These settings can be found in the Advanced Options tab or by editing the raw API definition. -->
