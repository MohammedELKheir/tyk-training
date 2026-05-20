---
id: graphql-2025/028-introspection-3
deck_id: graphql-2025
order: 28
slug: introspection-3
title: "Introspection"
summary: "GraphQL Introspection in Production Introspection is useful for development and debugging. In production, introspection can: Reveal sensitive schema and implementation details. All"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/029-introspection-queries]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection

GraphQL Introspection in Production
Introspection is useful for development and debugging.
In production, introspection can:
Reveal sensitive schema and implementation details.
Allow attackers to discover and map out your API.
If Authentication Mode is Open (Keyless):
Introspection is always enabled and cannot be disabled.
You can disable introspection per key or via security policy using:
Tyk Dashboard
Tyk Gateway API

<!-- Notes: GraphQL introspection is designed as a discovery and diagnostic feature to help developers during the development process. It allows tools and developers to query the API for its schema, including types, fields, and relationships.
However, enabling introspection in production can expose your API’s structure, making it easier for attackers to understand and exploit potential vulnerabilities. For example, they could discover hidden mutations or sensitive fields that were not meant to be public.
A critical consideration is that if your API is configured with Open (Keyless) authentication, Tyk enables introspection by default, and this setting cannot be changed. This presents a security risk, especially for publicly accessible APIs.
Tyk allows you to control introspection more securely by disabling it on a per-key or per-policy basis. This configuration can be done through the Tyk Dashboard or programmatically through the Tyk Gateway API.
The recommendation is to disable introspection in production environments, and only enable it in development or controlled internal settings. -->
