---
id: graphql-2025/056-key-concepts-defining-data-source-urls
deck_id: graphql-2025
order: 56
slug: key-concepts-defining-data-source-urls
title: "Key Concepts - Defining Data Source URLs"
summary: "Reminder: Use .object to reference fields from the parent object. Use .arguments to reference query arguments. Static and Dynamic URL Templates Query.people Static URL for retrievi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/057-key-concepts-defining-data-source-urls-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts - Defining Data Source URLs</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Reminder:
Use .object to reference fields from the parent object.
Use .arguments to reference query arguments.
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre v-pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Static and Dynamic URL Templates
Query.people
Static URL for retrieving the list of people:
https://people-api.dev/people
Query.person
Uses the id argument dynamically in the URL:
https://people-api.dev/people/{{.arguments.id}}
Person.driverLicense
Uses data from the parent object via .object placeholder:
https://driver-license-api.dev/driver-licenses/{{.object.driverLicenseID}}</pre>
  </div>
</div>

<!-- Notes: Now that we’ve defined our schema, the next step is to connect each field to the appropriate data source using URLs.
For simple fields like people, you can use a static URL.
 But when arguments are involved — like the id in person(id: Int!) — you use the .arguments placeholder to inject the argument into the URL.
For nested objects like driverLicense, we want to use a field (driverLicenseID) from the parent object (Person).
 This is where .object.driverLicenseID comes in — it tells Tyk to use a property from the parent object when forming the request URL. -->
