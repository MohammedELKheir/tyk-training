---
id: graphql-2025/045-dynamic-variables-5
deck_id: graphql-2025
order: 45
slug: dynamic-variables-5
title: "Dynamic Variables"
summary: "Response: { \"data\": { \"country\": { \"code\": \"NG\", \"name\": \"Nigeria\" } } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/046-universal-data-graph]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Dynamic Variables

Response:
{
  "data": {
    "country": {
      "code": "NG",
      "name": "Nigeria"
    }
  }
}

<!-- Notes: Tyk’s persisted query middleware isn’t limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk’s request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->
