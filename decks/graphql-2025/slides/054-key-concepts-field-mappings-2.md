---
id: graphql-2025/054-key-concepts-field-mappings-2
deck_id: graphql-2025
order: 54
slug: key-concepts-field-mappings-2
title: "Key Concepts - Field Mappings"
summary: "Field Mappings – Handling Different Field Names If the REST response uses a different field name, field mapping is required. Example REST response: { \"id\": 1, \"user_name\": \"Martin"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/055-key-concepts-reusing-response-fields]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Concepts - Field Mappings

Field Mappings – Handling Different Field Names
If the REST response uses a different field name, field mapping is required.
Example REST response:
{
  "id": 1,
  "user_name": "Martin Buhr"
}
In this case, manual mapping is needed:
Uncheck "Disable field mapping"
Set name field path to user_name
Nested fields can use dot notation: user.full_name
GraphQL schema:
{
  "id": 1,
  "user_name": "Martin Buhr"
}

<!-- Notes: When the field names don’t match, UDG cannot automatically resolve the response.
 In this example, the API returns user_name, but your schema defines the field as name.
 To fix this, enable field mapping manually and point the name field to user_name.
 For nested JSON fields, use dot notation like user.full_name. -->
