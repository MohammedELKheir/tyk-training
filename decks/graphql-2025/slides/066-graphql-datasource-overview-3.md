---
id: graphql-2025/066-graphql-datasource-overview-3
deck_id: graphql-2025
order: 66
slug: graphql-datasource-overview-3
title: "GraphQL Datasource Overview"
summary: "REST vs GraphQL REST APIs do not wrap responses GraphQL APIs wrap responses in root fields (like data, employee) GraphQL field mapping is enabled by default Why Use GraphQL Datasou"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/067-graphql-datasource-overview-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# GraphQL Datasource Overview

REST vs GraphQL
REST APIs do not wrap responses
GraphQL APIs wrap responses in root fields (like data, employee)
GraphQL field mapping is enabled by default
Why Use GraphQL Datasource?
Specification-compliant GraphQL requests
Supports nested REST &amp; GraphQL APIs in a single schema
Query planner sends correct queries to upstreams
How the Query Planner Works
Checks if a field has a datasource
That datasource resolves the field and its children
If a nested field has its own datasource, ownership shifts

<!-- Notes: One key takeaway: GraphQL responses include a wrapping field, while REST typically does not. Because of this, GraphQL field mapping is turned on by default.
Tyk’s GraphQL engine sends standard-compliant queries. You can mix multiple REST and GraphQL datasources—even nested—and Tyk will handle query composition and resolution automatically.
The query planner follows field ownership: when it hits a field with a datasource, it uses that datasource. If a nested field has its own, ownership shifts until it exits that field. -->
