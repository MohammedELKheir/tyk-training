---
id: architect-universal-data-graph-1-udg-overview/010-key-concepts-reusing-response-fields-chaining-data-across-apis-you-can-u
deck_id: architect-universal-data-graph-1-udg-overview
order: 10
slug: key-concepts-reusing-response-fields-chaining-data-across-apis-you-can-u
title: "Key Concepts - Reusing response fields Chaining Data Across APIs You can use dat"
summary: "a from one API response to call another API. Example APIs: People List: https://people-api.dev/people Person Details: https://people-api.dev/people/{person_id} Driver Licenses: htt"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/011-key-concepts-defining-data-source-urls-static-and-dynamic-url-templates]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:2.78rem; line-height:1.04; font-weight:900;">Key Concepts - Reusing response fields</h1>
  <p style="margin:0 0 0.22rem 0; font-size:0.95rem; font-weight:800;">Chaining Data Across APIs</p>
  <p style="margin:0 0 0.42rem 0; font-size:0.78rem;">You can use data from one API response to call another API.</p>
  <p style="margin:0 0 0.12rem 0; font-size:0.78rem; font-weight:700;">Example APIs:</p>
  <ul style="margin:0 0 0 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.5;">
    <li>People List: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">https://people-api.dev/people</span></li>
    <li>Person Details: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">https://people-api.dev/people/{person_id}</span></li>
    <li>Driver Licenses: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">https://driver-license-api.dev/driver-licenses/{driver_license_id}</span></li>
  </ul>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: With Universal Data Graph, you can chain API responses using fields from one API to query another. In this example, we start with the People API, which gives us a driverLicenseID. That field becomes the key to fetch full driver license details from a separate API. -->
