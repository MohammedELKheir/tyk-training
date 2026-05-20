---
id: graphql-2025/065-graphql-datasource-overview-2
deck_id: graphql-2025
order: 65
slug: graphql-datasource-overview-2
title: "GraphQL Datasource Overview"
summary: "GraphQL Response Parsing Actual Response: { \"data\": { \"employee\": { \"id\": 1, \"name\": \"Martin Buhr\" } } } Tyk Extracts: { \"employee\": { \"id\": 1, \"name\": \"Martin Buhr\" } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/066-graphql-datasource-overview-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# GraphQL Datasource Overview

GraphQL Response Parsing
Actual Response:
{
  "data": {
    "employee": {
        "id": 1,
        "name": "Martin Buhr"
    }
  }
}
Tyk Extracts:
{
  "employee": {
    "id": 1,
    "name": "Martin Buhr"
  }
}

<!-- Notes: Unlike REST, GraphQL wraps responses inside a data object. Tyk automatically unwraps this for you, simplifying field mapping. -->
