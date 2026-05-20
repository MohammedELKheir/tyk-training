---
id: graphql-2025/055-key-concepts-reusing-response-fields
deck_id: graphql-2025
order: 55
slug: key-concepts-reusing-response-fields
title: "Key Concepts - Reusing response fields"
summary: "Chaining Data Across APIs You can use data from one API response to call another API. Example APIs: People List: https://people-api.dev/people Person Details: https://people-api.de"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/056-key-concepts-defining-data-source-urls]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts - Reusing response fields</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Chaining Data Across APIs
You can use data from one API response to call another API.
Example APIs:
People List: https://people-api.dev/people
Person Details: https://people-api.dev/people/{person_id}
Driver Licenses: https://driver-license-api.dev/driver-licenses/{driver_license_id}</pre>
</div>

<!-- Notes: With Universal Data Graph, you can chain API responses using fields from one API to query another.
In this example, we start with the People API, which gives us a driverLicenseID.
That field becomes the key to fetch full driver license details from a separate API. -->
