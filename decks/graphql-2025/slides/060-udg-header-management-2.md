---
id: graphql-2025/060-udg-header-management-2
deck_id: graphql-2025
order: 60
slug: udg-header-management-2
title: "UDG Header Management"
summary: "Data Source Headers and Context Variables Example - Data Source Header Config: { \"headers\": { \"data-source-header\": \"data-source-header-value\", \"datasource1-jwt-claim\": \"$tyk_conte"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/061-udg-header-management-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# UDG Header Management

Data Source Headers and Context Variables
Example - Data Source Header Config:
{
  "headers": {
    "data-source-header": "data-source-header-value",
    "datasource1-jwt-claim": "$tyk_context.jwt_claims_datasource1"
  }
}
Key Notes:
Defined per data source
Ideal for individual API authentication needs
Can also access JWT claims and request context values

<!-- Notes: Data source headers work similarly but are scoped more narrowly — they apply only to the specific data source you define them under.
This is especially useful when you're dealing with multiple APIs that require different credentials, JWT claims, or custom headers.
Just like global headers, these can use context variables like JWT claims — so you can pass identity or tenant info dynamically. -->
