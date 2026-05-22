---
id: architect-universal-data-graph-1-udg-overview/013-response-example-data-people-id-1-name-user-1-age
deck_id: architect-universal-data-graph-1-udg-overview
order: 13
slug: response-example-data-people-id-1-name-user-1-age
title: "Response Example: { \"data\": { \"people\": [ { \"id\": 1, \"name\": \"User 1\", \"age\":"
summary: "40, \"driverLicense\": { \"id\": \"DL1234\", \"issuedBy\": \"United Kingdom\", \"validUntil\": \"2040-01-01\" } }, { \"id\": 2, \"name\": \"User 2\", \"age\": 30, \"driverLicense\": { \"id\": \"DL5555\", \"i"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/014-udg-header-management-two-levels-of-header-control-global-headers-define]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <p style="margin:0; font-size:0.92rem; font-weight:800;">Response Example:</p>
  <pre v-pre style="margin:0.05rem 0 0 0; background:transparent; color:#171932; font-size:0.72rem; line-height:1.38; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "data": {
    "people": [
      {
        "id": 1,
        "name": "User 1",
        "age": 40,
        "driverLicense": {
          "id": "DL1234",
          "issuedBy": "United Kingdom",
          "validUntil": "2040-01-01"
        }
      },
      {
        "id": 2,
        "name": "User 2",
        "age": 30,
        "driverLicense": {
          "id": "DL5555",
          "issuedBy": "United Kingdom",
          "validUntil": "2035-01-01"
        }
      }
    ]
  }
}</pre>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: This is the final result of our setup.
Using only a single GraphQL query, Tyk's Universal Data Graph engine makes multiple backend calls — first to the People API, then to the Driver License API — and stitches the data together automatically.
The end user sees a clean, unified response, while the complexity of backend integrations is abstracted away. This is the core power of UDG: connecting distributed APIs into a single queryable graph. -->
