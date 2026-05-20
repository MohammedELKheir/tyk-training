---
id: graphql-2025/040-persisting-graphql-queries-4
deck_id: graphql-2025
order: 40
slug: persisting-graphql-queries-4
title: "Persisting GraphQL queries"
summary: "Each entry includes: method – e.g., GET path – e.g., /getContinentByCode operation – the GraphQL query variables – parameters passed to the query { \"data\": { \"continent\": { \"code\":"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/041-dynamic-variables]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Persisting GraphQL queries

Each entry includes:
method – e.g., GET
path – e.g., /getContinentByCode
operation – the GraphQL query
variables – parameters passed to the query
{
    "data": {
        "continent": {
            "code": "EU",
            "name": "Europe",
            "countries": [
                {
                    "name": "Andorra"
                },
                ...
            ]
        }
    }
}

<!-- Notes: In this final step, we configure the actual persisted query.
The path /getContinentByCode becomes a usable REST endpoint.
When Tyk receives a GET request to that path, it will construct and send the defined GraphQL operation to the upstream — in this case, fetching the continent by code.
The query and variables are hardcoded, so it's predictable and easy to cache or control. -->
