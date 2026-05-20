---
id: architect-universal-data-graph-1-udg-overview/012-key-concepts-defining-data-source-urls-graphql-query-people-id-name-age
deck_id: architect-universal-data-graph-1-udg-overview
order: 12
slug: key-concepts-defining-data-source-urls-graphql-query-people-id-name-age
title: "Key Concepts - Defining Data Source URLs GraphQL Query: { people { id name age d"
summary: "riverLicense { id issuedBy validUntil } } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/013-response-example-data-people-id-1-name-john-doe-age]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0; color:#5B11D9; font-size:3rem; line-height:0.98; font-weight:900;">Key Concepts - Defining Data Source<br />URLs</h1>
  <p style="margin:0.2rem 0 0.1rem 0; font-size:0.95rem; font-weight:800;">GraphQL Query:</p>
  <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.88rem; line-height:1.56; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
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
}</pre>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Now that we’ve defined our schema, the next step is to connect each field to the appropriate data source using URLs.
For simple fields like people, you can use a static URL. But when arguments are involved — like the id in person(id: Int!) — you use the .arguments placeholder to inject the argument into the URL.
For nested objects like driverLicense, we want to use a field (driverLicenseID) from the parent object (Person). This is where .object.driverLicenseID comes in — it tells Tyk to use a property from the parent object when forming the request URL. -->
