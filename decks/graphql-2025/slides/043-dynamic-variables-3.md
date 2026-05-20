---
id: graphql-2025/043-dynamic-variables-3
deck_id: graphql-2025
order: 43
slug: dynamic-variables-3
title: "Dynamic Variables"
summary: "Response: { \"data\": { \"country\": { \"code\": \"UK\", \"name\": \"United Kingdom\" } } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/044-dynamic-variables-4]
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
      "code": "UK",
      "name": "United Kingdom"
    }
  }
}

<!-- Notes: Tyk’s persisted query middleware isn’t limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk’s request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->
