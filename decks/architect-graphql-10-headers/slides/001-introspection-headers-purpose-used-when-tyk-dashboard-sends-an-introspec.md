---
id: architect-graphql-10-headers/001-introspection-headers-purpose-used-when-tyk-dashboard-sends-an-introspec
deck_id: architect-graphql-10-headers
order: 1
slug: introspection-headers-purpose-used-when-tyk-dashboard-sends-an-introspec
title: "Introspection Headers Purpose: Used when Tyk Dashboard sends an introspection qu"
summary: "ery to fetch the upstream GraphQL schema. Usage scenario: Required when upstream GraphQL APIs are protected and require authorization for schema discovery. Key Points: Headers are"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-10-headers/002-introspection-headers-graphql-execution-mode-proxyonly-proxy-au]
customer_visible: true
notes_visibility: customer-safe
---
<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:32px; font-size:3.65rem; line-height:1.05; font-weight:800; color:#5900CB;">Introspection Headers</h1>

  <div style="position:absolute; left:56px; top:126px; width:854px; font-size:1.16rem; line-height:1.82; color:#03031C;">
    <ul style="margin:0; padding-left:2.35rem; list-style-type:disc;">
      <li style="margin:0 0 0.85rem 0; padding-left:0.55rem;">Purpose: Used when Tyk Dashboard sends an introspection query to fetch the upstream GraphQL schema.</li>
      <li style="margin:0 0 0.6rem 0; padding-left:0.55rem;">Usage scenario: Required when upstream GraphQL APIs are protected and require authorization for schema discovery.</li>
      <li style="margin:0; padding-left:0.55rem;">Key Points:
        <ul style="margin:0.35rem 0 0 0.55rem; padding-left:2.1rem; list-style-type:circle; font-size:1.02rem; line-height:1.75;">
          <li style="margin-bottom:0.38rem; padding-left:0.45rem;">Headers are only used during schema introspection from the Dashboard.</li>
          <li style="margin-bottom:0.38rem; padding-left:0.45rem;">These headers are not forwarded during runtime API requests from consumers.</li>
          <li style="padding-left:0.45rem;">Configurable in the Advanced Options tab or via raw API definition:</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: This feature is used when the Tyk Dashboard sends an introspection query to fetch the upstream GraphQL schema.
It’s especially important in scenarios where your upstream GraphQL APIs are protected and require authorization for schema discovery.
A key point to note is that these authorization headers are only used during the schema introspection process from the Dashboard.
They are not forwarded during runtime API requests made by your API consumers, so your API security remains intact.
You can configure these headers easily in the Advanced Options tab of your API settings or by editing the raw API definition. -->
