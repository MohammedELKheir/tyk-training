---
id: graphql-2025/036-request-headers-2
deck_id: graphql-2025
order: 36
slug: request-headers-2
title: "Request Headers"
summary: "\"graphql\": { \"execution_mode\": \"proxyOnly\", \"proxy\": { \"request_headers\": { \"context-vars-metadata\": \"$tyk_context.path\", \"static-metadata\": \"static-value\" } } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/037-persisting-graphql-queries]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Request Headers</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">"graphql": {
  "execution_mode": "proxyOnly",
  "proxy": {
    "request_headers": {
      "context-vars-metadata": "$tyk_context.path",
      "static-metadata": "static-value"
    }
  }
}</pre>
</div>

<!-- Notes: While introspection headers are used during setup, Request headers are used during live API traffic.
They allow you to pass additional information to the upstream, like static metadata or dynamic values extracted from the request — for example, the path or user identity.
This can be particularly useful for multi-tenant APIs or APIs that expect custom authorization headers.
Just like introspection headers, request headers can be configured either through the Tyk Dashboard UI or directly in the raw API definition — giving you flexibility and automation options. -->
