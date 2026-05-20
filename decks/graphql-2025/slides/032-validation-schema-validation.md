---
id: graphql-2025/032-validation-schema-validation
deck_id: graphql-2025
order: 32
slug: validation-schema-validation
title: "Validation - Schema Validation"
summary: "Schema Validation: Prevents broken or invalid schemas from being saved or updated in Tyk. Available only via Tyk Dashboard or Dashboard API. Ensures schemas do not contain: Duplica"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/033-introspection-headers]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Validation - Schema Validation</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Schema Validation:
Prevents broken or invalid schemas from being saved or updated in Tyk.
Available only via Tyk Dashboard or Dashboard API.
Ensures schemas do not contain:
Duplicated operation types (Query, Mutation, Subscription)
Duplicated type names, field names, or enum values
Usage of unknown types
If schema validation fails via the API, a 400 Bad Request is returned with detailed errors.</pre>
</div>

<!-- Notes: "Schema validation is a crucial feature in Tyk’s Universal Data Graph that helps maintain the integrity and reliability of your GraphQL APIs.
When you create or update a schema—whether through the Tyk Dashboard or the Dashboard API—Tyk automatically validates it to prevent broken or invalid schemas from being saved.
This validation checks for common errors such as:
Duplicate operation types like multiple Queries or Mutations defined,

Duplicate type names, field names, or enum values,

And the usage of unknown or undefined types.

If any of these issues are found, the system will reject the schema update and return a 400 Bad Request response with detailed error messages.
This safeguard ensures that your API schemas remain consistent and error-free, preventing runtime failures and unexpected behaviors downstream.
Overall, schema validation acts as an early warning system, catching issues before they impact your users." -->
