---
id: architect-universal-data-graph-1-udg-overview/014-udg-header-management-two-levels-of-header-control-global-headers-define
deck_id: architect-universal-data-graph-1-udg-overview
order: 14
slug: udg-header-management-two-levels-of-header-control-global-headers-define
title: "UDG Header Management Two levels of header control: Global Headers Defined in gr"
summary: "aphql.engine.global_headers Sent to all data sources Can include request context variables Data Source Headers Defined in graphql.engine.data_sources[].config.headers Specific to i"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/015-udg-header-management-data-source-headers-and-context-variables-example]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">UDG Header Management</h1>
  <p style="margin:0 0 0.2rem 0; font-size:0.95rem; font-weight:800;">Two levels of header control:</p>
  <p style="margin:0.02rem 0; font-size:0.94rem; font-weight:800;">Global Headers</p>
  <ul style="margin:0.06rem 0 0.6rem 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.45;">
    <li>Defined in <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">graphql.engine.global_headers</span></li>
    <li>Sent to all data sources</li>
    <li>Can include request context variables</li>
  </ul>
  <p style="margin:0.1rem 0 0 0; font-size:0.94rem; font-weight:800;">Data Source Headers</p>
  <ul style="margin:0.06rem 0 0.55rem 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.45;">
    <li>Defined in <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">graphql.engine.data_sources[].config.headers</span></li>
    <li>Specific to individual data sources</li>
    <li>Also supports context variables like JWT claims</li>
  </ul>
  <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.66rem; line-height:1.3; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "global_headers": [
    { "key": "global-header", "value": "example-value" },
    { "key": "request-id", "value": "$tyk_context.request_id" }
  ]
}</pre>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: With Tyk v5.2, you now have fine-grained control over HTTP headers for both the overall UDG and specific data sources.
Global headers are useful when you want to apply something like a request ID or an org-wide auth token across all upstream APIs.
These headers can include request context variables — for example, $tyk_context.request_id — so you can inject runtime values into the request.
We define these inside the global_headers section of the API definition. -->
