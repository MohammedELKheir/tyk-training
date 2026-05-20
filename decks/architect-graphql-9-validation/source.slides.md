---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Validation"
---

# Validation - Query Validation

Tyk supports validation of GraphQL queries and schemas to prevent errors during request processing.

**Query Validation:**

- Tyk's native GraphQL engine validates queries against the GraphQL Specification.
- Both the Gateway in front of your existing GraphQL API and any Universal Data Graph have validation middleware.
- Invalid requests are caught by the Gateway and not forwarded upstream, returning errors to the client.

<!-- Notes: Tyk provides robust validation of GraphQL queries and schemas to help prevent errors during request processing. Using Tyk's native GraphQL engine, all incoming queries are validated against the official GraphQL Specification. This validation happens both at the Gateway, which sits in front of your existing GraphQL API, and in any Universal Data Graph you might be using. As a result, invalid requests are caught early by Tyk — they are blocked at the Gateway and never forwarded upstream. Instead, the client receives clear error messages, which helps maintain API reliability and protects your backend services from malformed queries. -->

---
layout: default
---

# Validation - Schema Validation

**Schema Validation:**

- Prevents broken or invalid schemas from being saved or updated in Tyk.
- Available only via Tyk Dashboard or Dashboard API.
- Ensures schemas do not contain:
  - Duplicated operation types (Query, Mutation, Subscription)
  - Duplicated type names, field names, or enum values
  - Usage of unknown types
- If schema validation fails via the API, a 400 Bad Request is returned with detailed errors.

<!-- Notes: Schema validation is a crucial feature in Tyk's Universal Data Graph that helps maintain the integrity and reliability of your GraphQL APIs. When you create or update a schema—whether through the Tyk Dashboard or the Dashboard API—Tyk automatically validates it to prevent broken or invalid schemas from being saved. This validation checks for common errors such as: Duplicate operation types like multiple Queries or Mutations defined, Duplicate type names, field names, or enum values, And the usage of unknown or undefined types. If any of these issues are found, the system will reject the schema update and return a 400 Bad Request response with detailed error messages. This safeguard ensures that your API schemas remain consistent and error-free, preventing runtime failures and unexpected behaviors downstream. Overall, schema validation acts as an early warning system, catching issues before they impact your users. -->
