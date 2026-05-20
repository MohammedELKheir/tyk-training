---
id: architect-graphql-9-validation/001-validation-query-validation
deck_id: architect-graphql-9-validation
order: 1
slug: validation-query-validation
title: "Validation - Query Validation"
summary: "Tyk supports validation of GraphQL queries and schemas to prevent errors during request processing. **Query Validation:** - Tyk's native GraphQL engine validates queries against th"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-9-validation/002-validation-schema-validation]
customer_visible: true
notes_visibility: customer-safe
---
# Validation - Query Validation

Tyk supports validation of GraphQL queries and schemas to prevent errors during request processing.

**Query Validation:**

- Tyk's native GraphQL engine validates queries against the GraphQL Specification.
- Both the Gateway in front of your existing GraphQL API and any Universal Data Graph have validation middleware.
- Invalid requests are caught by the Gateway and not forwarded upstream, returning errors to the client.

<!-- Notes: Tyk provides robust validation of GraphQL queries and schemas to help prevent errors during request processing. Using Tyk's native GraphQL engine, all incoming queries are validated against the official GraphQL Specification. This validation happens both at the Gateway, which sits in front of your existing GraphQL API, and in any Universal Data Graph you might be using. As a result, invalid requests are caught early by Tyk — they are blocked at the Gateway and never forwarded upstream. Instead, the client receives clear error messages, which helps maintain API reliability and protects your backend services from malformed queries. -->
