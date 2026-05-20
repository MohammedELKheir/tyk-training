---
id: graphql-2025/061-udg-header-management-3
deck_id: graphql-2025
order: 61
slug: udg-header-management-3
title: "UDG Header Management"
summary: "Header Precedence Rules When header keys overlap, Tyk applies priority: Data Source header overrides Global header if both define the same key"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/062-datasources]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# UDG Header Management

Header Precedence Rules
When header keys overlap, Tyk applies priority:
Data Source header overrides Global header if both define the same key.

<!-- Notes: Now, if you define the same header at both the global and data source levels, the data source version takes precedence.
This gives you flexibility — you can set broad headers by default, but override them where needed for specific upstream APIs.
In this example, example-header is defined at both levels, but the data source’s value wins.
This rule helps prevent conflicts and gives you precise control over how each API call is formed. -->
