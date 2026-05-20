---
id: graphql-2025/086-connect-the-user-query-to-the-users-rest-api
deck_id: graphql-2025
order: 86
slug: connect-the-user-query-to-the-users-rest-api
title: "Connect the user Query to the Users REST API"
summary: "In the Schema tab, select the field user under Query Choose Data Source Type → REST Choose Use External Data Source Fill in: Datasource Name: getUserById HTTP Method: GET URL: http"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/087-test-the-api-in-graphql-playground]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Connect the user Query to the Users REST API</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre v-pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">In the Schema tab, select the field user under Query
Choose Data Source Type → REST
Choose Use External Data Source
Fill in:
Datasource Name: getUserById
HTTP Method: GET
URL: http://host.docker.internal:4000/users/{{.arguments.id}}
(This uses GraphQL args as a dynamic path param)
(Optional) Add headers if needed
Save &amp; Update API</pre>
</div>
