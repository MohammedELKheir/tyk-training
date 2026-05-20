---
id: graphql-2025/058-response-example-data-people-id-1-name-john-doe
deck_id: graphql-2025
order: 58
slug: response-example-data-people-id-1-name-john-doe
title: "Response Example: { \"data\": { \"people\": [ { \"id\": 1, \"name\": \"John Doe\","
summary: "\"age\": 40, \"driverLicense\": { \"id\": \"DL1234\", \"issuedBy\": \"United Kingdom\", \"validUntil\": \"2040-01-01\" } }, { \"id\": 2, \"name\": \"Jane Doe\", \"age\": 30, \"driverLicense\": { \"id\": \"DL55"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/059-udg-header-management]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Response Example:
{
  "data": {
    "people": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 40,
        "driverLicense": {
          "id": "DL1234",
          "issuedBy": "United Kingdom",
          "validUntil": "2040-01-01"
        }
      },
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 30,
        "driverLicense": {
          "id": "DL5555",
          "issuedBy": "United Kingdom",
          "validUntil": "2035-01-01"
        }
      }
    ]
  }
}



<!-- Notes: This is the final result of our setup.
Using only a single GraphQL query, Tyk's Universal Data Graph engine makes multiple backend calls — first to the People API, then to the Driver License API — and stitches the data together automatically.
The end user sees a clean, unified response, while the complexity of backend integrations is abstracted away.
 This is the core power of UDG: connecting distributed APIs into a single queryable graph. -->
