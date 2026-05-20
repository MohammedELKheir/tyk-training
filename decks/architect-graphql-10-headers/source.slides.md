---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Headers"
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

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:76px; top:32px; font-size:3.65rem; line-height:1.05; font-weight:800; color:#5900CB;">Introspection Headers</h1>

  <pre style="position:absolute; left:58px; top:142px; margin:0; font-size:1.06rem; line-height:1.72; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#111; background:transparent; white-space:pre;">"graphql": {
  "execution_mode": "proxyOnly",
  "proxy": {
    "auth_headers": {
      "admin-auth": "token-value"
    }
  }
}</pre>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

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
