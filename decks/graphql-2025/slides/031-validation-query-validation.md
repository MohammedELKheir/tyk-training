---
id: graphql-2025/031-validation-query-validation
deck_id: graphql-2025
order: 31
slug: validation-query-validation
title: "Validation - Query Validation"
summary: "Tyk supports validation of GraphQL queries and schemas to prevent errors during request processing. Query Validation: Tyk’s native GraphQL engine validates queries against the Grap"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/032-validation-schema-validation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Validation - Query Validation

Tyk supports validation of GraphQL queries and schemas to prevent errors during request processing.
Query Validation:
Tyk’s native GraphQL engine validates queries against the GraphQL Specification.
Both the Gateway in front of your existing GraphQL API and any Universal Data Graph have validation middleware.
Invalid requests are caught by the Gateway and not forwarded upstream, returning errors to the client.

<!-- Notes: Tyk provides robust validation of GraphQL queries and schemas to help prevent errors during request processing.
Using Tyk’s native GraphQL engine, all incoming queries are validated against the official GraphQL Specification.
This validation happens both at the Gateway, which sits in front of your existing GraphQL API, and in any Universal Data Graph you might be using.
As a result, invalid requests are caught early by Tyk — they are blocked at the Gateway and never forwarded upstream.
Instead, the client receives clear error messages, which helps maintain API reliability and protects your backend services from malformed queries. -->
