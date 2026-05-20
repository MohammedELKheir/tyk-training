---
id: graphql-2025/057-key-concepts-defining-data-source-urls-2
deck_id: graphql-2025
order: 57
slug: key-concepts-defining-data-source-urls-2
title: "Key Concepts - Defining Data Source URLs"
summary: "GraphQL Query: { people { id name age driverLicense { id issuedBy validUntil } } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/058-response-example-data-people-id-1-name-john-doe]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Concepts - Defining Data Source URLs

GraphQL Query:
{
  people {
    id
    name
    age
    driverLicense {
      id
      issuedBy
      validUntil
    }
  }
}

<!-- Notes: Now that we’ve defined our schema, the next step is to connect each field to the appropriate data source using URLs.
For simple fields like people, you can use a static URL.
 But when arguments are involved — like the id in person(id: Int!) — you use the .arguments placeholder to inject the argument into the URL.
For nested objects like driverLicense, we want to use a field (driverLicenseID) from the parent object (Person).
 This is where .object.driverLicenseID comes in — it tells Tyk to use a property from the parent object when forming the request URL. -->
