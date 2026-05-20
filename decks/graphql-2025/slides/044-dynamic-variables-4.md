---
id: graphql-2025/044-dynamic-variables-4
deck_id: graphql-2025
order: 44
slug: dynamic-variables-4
title: "Dynamic Variables"
summary: "Request URL: /getCountryByCode/NG Example: Extract countryCode from the URL { \"method\": \"GET\", \"path\": \"/getCountryByCode/{countryCode}\", \"operation\": \"query ($countryCode: ID!) {\\"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/045-dynamic-variables-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Dynamic Variables</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Request URL:
/getCountryByCode/NG
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Example: Extract countryCode from the URL
{
  "method": "GET",
  "path": "/getCountryByCode/{countryCode}",
  "operation": "query ($countryCode: ID!) {\n   country(code: $countryCode) {\n        code\n        name\n   }\n}",
  "variables": {
    "countryCode": "$path.countryCode"
  }
}</pre>
  </div>
</div>

<!-- Notes: In this case, we’re using a path parameter from the URL itself to extract the variable value.
Tyk will automatically parse the value after /getCountryByCode/ and inject it into the GraphQL query.
This is great for clean, REST-style API paths while still harnessing GraphQL behind the scenes. -->
