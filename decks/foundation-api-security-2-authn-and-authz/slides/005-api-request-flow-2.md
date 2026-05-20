---
id: foundation-api-security-2-authn-and-authz/005-api-request-flow-2
deck_id: foundation-api-security-2-authn-and-authz
order: 5
slug: api-request-flow-2
title: "API Request Flow"
summary: "1. A request is made to an API behind Tyk Gateway. 1. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS)"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-2-authn-and-authz/006-api-request-flow-3]
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
      <TykAuthFlow :gateway-to-redis="true" />
    </div>
    <div style="flex:1; padding-top:1.45rem; color:#111; font-size:1.18rem; line-height:1.18;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:340px; margin-bottom:1.95rem;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:410px;">
        <div style="width:1.5rem;">1.</div>
        <div>Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Tyk immediately checks if the request is authenticated and authorized. This process involves several steps:

First, Tyk extracts the authentication token from the request. This could be from the Authorization header, a query parameter, or a cookie, depending on the API's configuration.
Next, Tyk looks up this token in its Redis database. Each access key is stored as a record in Redis, containing important metadata.

Tyk checks several things:
1. Does the key exist in Redis?
2. Has the key expired?
3. Does the key have permission to access this specific API and endpoint?
4. Are there any rate limits or quotas that have been exceeded?

If the key is valid and has the necessary permissions, Tyk allows the request to proceed. This are Tyk’s core processing which includes:

Tyk performs its core functions, which typically include:

Authentication
Authorization
Rate limiting
Quota checking
-->
