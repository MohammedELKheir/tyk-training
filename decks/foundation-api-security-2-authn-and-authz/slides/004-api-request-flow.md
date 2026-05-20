---
id: foundation-api-security-2-authn-and-authz/004-api-request-flow
deck_id: foundation-api-security-2-authn-and-authz
order: 4
slug: api-request-flow
title: "API Request Flow"
summary: "1. A request is made to an API behind Tyk Gateway"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-2-authn-and-authz/005-api-request-flow-2]
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
      <TykAuthFlow :client-to-gateway="true" />
    </div>
    <div style="flex:1; padding-top:1.55rem; color:#111; font-size:1.22rem; line-height:1.22;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:330px;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
A client sends a request to an API that's managed by Tyk.
Once the request reaches the Tyk Gateway, it immediately tries to match the incoming request's URL path to the "listen paths" of the APIs it's managing
Each API definition in Tyk's memory has a unique listen path. The Gateway compares the incoming request URL to these paths. If it finds a match, it knows which API should handle the request.
Now that Tyk has identified the correct API, it prepares to process the request according to that API's specific configuration
-->
