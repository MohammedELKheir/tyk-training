---
id: architect-graphql-10-headers/004-request-headers-graphql-execution-mode-proxyonly-proxy-request
deck_id: architect-graphql-10-headers
order: 4
slug: request-headers-graphql-execution-mode-proxyonly-proxy-request
title: "Request Headers \"graphql\": { \"execution_mode\": \"proxyOnly\", \"proxy\": { \"request_"
summary: "headers\": { \"context-vars-metadata\": \"$tyk_context.path\", \"static-metadata\": \"static-value\" } } } Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:76px; top:32px; font-size:3.65rem; line-height:1.05; font-weight:800; color:#5900CB;">Request Headers</h1>

  <pre style="position:absolute; left:58px; top:142px; margin:0; font-size:0.98rem; line-height:1.72; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#111; background:transparent; white-space:pre;">"graphql": {
  "execution_mode": "proxyOnly",
  "proxy": {
    "request_headers": {
      "context-vars-metadata": "$tyk_context.path",
      "static-metadata": "static-value"
    }
  }
}</pre>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: While introspection headers are used during setup, Request headers are used during live API traffic.
They allow you to pass additional information to the upstream, like static metadata or dynamic values extracted from the request — for example, the path or user identity.
This can be particularly useful for multi-tenant APIs or APIs that expect custom authorization headers.
Just like introspection headers, request headers can be configured either through the Tyk Dashboard UI or directly in the raw API definition — giving you flexibility and automation options. -->
