---
id: architect-graphql-12-dynamic-variables/002-dynamic-variables-2
deck_id: architect-graphql-12-dynamic-variables
order: 2
slug: dynamic-variables-2
title: "Dynamic Variables"
summary: "Example: Extract countryCode from request header code { \"method\": \"GET\", \"path\": \"/getCountryByCode\", \"operation\": \"query ($countryCode: ID!) {\\n country(code: $countryCode) {\\n co"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-12-dynamic-variables/003-dynamic-variables-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:56px; top:120px; width:610px;">
    <p style="font-size:0.95rem; font-weight:600; color:#03031C; margin:0 0 8px 0;">Example: Extract countryCode from request header code</p>
    <pre style="margin:0; font-size:0.7rem; line-height:1.8; font-family:'Courier New', Courier, monospace; color:#111; background:transparent; white-space:pre;">{
  "method": "GET",
  "path": "/getCountryByCode",
  "operation": "query ($countryCode: ID!) {\n
country(code: $countryCode) {\n        code\n
name\n   }\n}",
  "variables": {
    "countryCode": "$tyk_context.headers_Code"
  }
}</pre>
  </div>

  <div style="position:absolute; right:54px; top:160px; width:260px; color:#03031C;">
    <p style="font-size:0.95rem; font-weight:700; color:#03031C; margin:0 0 14px 0;">Request Header:</p>
    <p style="font-size:0.86rem; color:#03031C; margin:0; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">code: UK</p>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Here, we're using a header called code as the value for the GraphQL variable countryCode.
This way, your consumers can send different values in the header, and Tyk will inject them into the query.
It's especially useful when your consumers can't modify the URL but can control headers. -->
