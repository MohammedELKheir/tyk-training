---
id: graphql-2025/041-dynamic-variables
deck_id: graphql-2025
order: 41
slug: dynamic-variables
title: "Dynamic Variables"
summary: "You can pass dynamic variables to your persisted GraphQL queries. Supported sources: Request headers URL path parameters Use Tyk context variables to reference them. Ideal for flex"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/042-dynamic-variables-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Dynamic Variables

You can pass dynamic variables to your persisted GraphQL queries.
Supported sources:
Request headers
URL path parameters
Use Tyk context variables to reference them.
Ideal for flexible query inputs without hardcoding values.

<!-- Notes: Tyk’s persisted query middleware isn’t limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk’s request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->
