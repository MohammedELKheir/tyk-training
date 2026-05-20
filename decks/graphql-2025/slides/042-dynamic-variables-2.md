---
id: graphql-2025/042-dynamic-variables-2
deck_id: graphql-2025
order: 42
slug: dynamic-variables-2
title: "Dynamic Variables"
summary: "Request Header: code: UK Example: Extract countryCode from request header code { \"method\": \"GET\", \"path\": \"/getCountryByCode\", \"operation\": \"query ($countryCode: ID!) {\\n country(c"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/043-dynamic-variables-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Dynamic Variables</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Request Header:
code: UK
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Example: Extract countryCode from request header code
{
  "method": "GET",
  "path": "/getCountryByCode",
  "operation": "query ($countryCode: ID!) {\n   country(code: $countryCode) {\n        code\n        name\n   }\n}",
  "variables": {
    "countryCode": "$tyk_context.headers_Code"
  }
}</pre>
  </div>
</div>

<!-- Notes: Here, we’re using a header called code as the value for the GraphQL variable countryCode.
This way, your consumers can send different values in the header, and Tyk will inject them into the query.
It’s especially useful when your consumers can’t modify the URL but can control headers. -->
