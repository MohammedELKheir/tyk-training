---
id: graphql-2025/030-introspection-queries-2
deck_id: graphql-2025
order: 30
slug: introspection-queries-2
title: "Introspection Queries"
summary: "Schema Overview Query Retrieves a summary of all types, queries, and mutations in the schema, including their names, kinds, and descriptions. Single Type Details Query Fetches deta"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/031-validation-query-validation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection Queries

Schema Overview Query
Retrieves a summary of all types, queries, and mutations in the schema, including their names, kinds, and descriptions.
Single Type Details Query
Fetches detailed information about a specific type, such as its fields, arguments, interfaces, enum values, and descriptions.
Field Arguments Query
Focuses on the arguments of a specific field, detailing their names, types, and default values.
Enum Values Query
Retrieves the possible values for an enum type, including descriptions and deprecation status.
Interface and Union Types Query
Provides information on the possible types that implement an interface or belong to a union.

<!-- Notes: GraphQL introspection allows you to explore the schema dynamically by sending different types of queries.

The Schema Overview Query gives a broad picture of everything the API offers, useful for initial exploration.

Single Type Details Query zooms into one type to understand its structure and relationships, essential for detailed API consumption.

Field Arguments Query helps when you want to know what inputs a particular field accepts, aiding in precise query construction.

Enum Values Query is handy when working with fields that have a fixed set of possible values, ensuring you use valid inputs.

Finally, Interface and Union Types Query helps understand polymorphic types, clarifying what concrete types to expect.

Knowing these query types helps you debug, document, and build better GraphQL clients and tools. -->
