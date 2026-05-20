---
id: foundation-api-security-2-authn-and-authz/007-api-request-flow-4
deck_id: foundation-api-security-2-authn-and-authz
order: 7
slug: api-request-flow-4
title: "API Request Flow"
summary: "1. A request is made to an API behind Tyk Gateway. 1. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS). 1. If authentication succeeds, Tyk then authorizes the req"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-2-authn-and-authz/008-api-request-flow-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0 0 0.4rem; overflow:hidden;">
  <h1 style="margin:0 0 0 0.25rem; color:#6517d9; font-size:3.8rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; margin-top:1.1rem; gap:1.05rem; align-items:flex-start;">
    <div style="width:478px; height:396px; padding-left:0.1rem; transform:scale(0.92); transform-origin:top left;">
      <TykAuthFlow :gateway-to-server="true" />
    </div>
    <div style="flex:1; padding-top:1.35rem; color:#111; font-size:0.98rem; line-height:1.12;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:340px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:410px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:450px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>
          If authentication succeeds, Tyk then authorizes the request:
          <div style="margin-top:0.45rem; margin-left:1.6rem;">a.&nbsp;&nbsp;&nbsp;Is this client allowed to call this API?</div>
          <div style="margin-top:0.25rem; margin-left:1.6rem;">b.&nbsp;&nbsp;&nbsp;Are they within rate limits?</div>
        </div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:420px;">
        <div style="width:1.5rem;">1.</div>
        <div>If both checks pass, the request is forwarded to the API.</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Tyk then routes the request to the appropriate backend service
When proxying to an API Server, the target URL can be defined in a number of ways:
Target URL property of the API Definition (single or multiple)
Dynamically set by a service discovery endpoint
Dynamically set by the URL Rewrite plugin
Dynamically set by custom middleware
Defined as a GraphQL Data Source
-->
