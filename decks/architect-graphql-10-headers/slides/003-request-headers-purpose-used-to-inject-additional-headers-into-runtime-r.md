---
id: architect-graphql-10-headers/003-request-headers-purpose-used-to-inject-additional-headers-into-runtime-r
deck_id: architect-graphql-10-headers
order: 3
slug: request-headers-purpose-used-to-inject-additional-headers-into-runtime-r
title: "Request Headers Purpose: Used to inject additional headers into runtime requests"
summary: "proxied through Tyk Gateway. Usage scenario: Add metadata, tokens, or dynamic values to upstream requests. Key Points: Only active during actual API requests, not during introspect"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-10-headers/004-request-headers-graphql-execution-mode-proxyonly-proxy-request]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:32px; font-size:3.65rem; line-height:1.05; font-weight:800; color:#5900CB;">Request Headers</h1>

  <div style="position:absolute; left:56px; top:126px; width:854px; font-size:1.16rem; line-height:1.82; color:#03031C;">
    <ul style="margin:0; padding-left:2.35rem; list-style-type:disc;">
      <li style="margin:0 0 0.85rem 0; padding-left:0.55rem;">Purpose: Used to inject additional headers into runtime requests proxied through Tyk Gateway.</li>
      <li style="margin:0 0 0.6rem 0; padding-left:0.55rem;">Usage scenario: Add metadata, tokens, or dynamic values to upstream requests.</li>
      <li style="margin:0; padding-left:0.55rem;">Key Points:
        <ul style="margin:0.35rem 0 0 0.55rem; padding-left:2.1rem; list-style-type:circle; font-size:1.02rem; line-height:1.75;">
          <li style="margin-bottom:0.38rem; padding-left:0.45rem;">Only active during actual API requests, not during introspection.</li>
          <li style="margin-bottom:0.38rem; padding-left:0.45rem;">Supports static values or dynamic context variables like $tyk_context.*.</li>
          <li style="padding-left:0.45rem;">Configurable in the Advanced Options tab or raw API definition:</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: This feature is used to inject additional headers into runtime requests that are proxied through the Tyk Gateway.
It’s useful when you want to add metadata, tokens, or other dynamic values to requests sent to your upstream GraphQL API.
Importantly, these headers are only active during actual API requests from clients — they are not applied during schema introspection.
You can configure headers with static values or use dynamic context variables, such as $tyk_context.*, to customize them per request.
These settings can be found in the Advanced Options tab or by editing the raw API definition. -->
