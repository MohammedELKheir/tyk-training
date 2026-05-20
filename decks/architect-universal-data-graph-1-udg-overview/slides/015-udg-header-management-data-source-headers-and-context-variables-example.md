---
id: architect-universal-data-graph-1-udg-overview/015-udg-header-management-data-source-headers-and-context-variables-example
deck_id: architect-universal-data-graph-1-udg-overview
order: 15
slug: udg-header-management-data-source-headers-and-context-variables-example
title: "UDG Header Management Data Source Headers and Context Variables Example - Data S"
summary: "ource Header Config: { \"headers\": { \"data-source-header\": \"data-source-header-value\", \"datasource1-jwt-claim\": \"$tyk_context.jwt_claims_datasource1\" } } Key Notes: Defined per data"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/016-udg-header-management-header-precedence-rules-when-header-keys-overlap-t]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">UDG Header Management</h1>
  <p style="margin:0 0 0.2rem 0; font-size:0.95rem; font-weight:800;">Data Source Headers and Context Variables</p>
  <p style="margin:0 0 0.18rem 0; font-size:0.78rem; font-weight:700;">Example - Data Source Header Config:</p>
  <pre v-pre style="margin:0 0 0.7rem 0; background:transparent; color:#171932; font-size:0.72rem; line-height:1.36; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "headers": {
    "data-source-header": "data-source-header-value",
    "datasource1-jwt-claim": "$tyk_context.jwt_claims_datasource1"
  }
}</pre>
  <p style="margin:0 0 0.12rem 0; font-size:0.8rem; font-weight:700;">Key Notes:</p>
  <ul style="margin:0 0 0 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.5;">
    <li>Defined per data source</li>
    <li>Ideal for individual API authentication needs</li>
    <li>Can also access JWT claims and request context values</li>
  </ul>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Data source headers work similarly but are scoped more narrowly — they apply only to the specific data source you define them under.
This is especially useful when you're dealing with multiple APIs that require different credentials, JWT claims, or custom headers.
Just like global headers, these can use context variables like JWT claims — so you can pass identity or tenant info dynamically. -->
