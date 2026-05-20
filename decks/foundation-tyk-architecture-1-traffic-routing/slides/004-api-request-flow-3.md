---
id: foundation-tyk-architecture-1-traffic-routing/004-api-request-flow-3
deck_id: foundation-tyk-architecture-1-traffic-routing
order: 4
slug: api-request-flow-3
title: "API Request Flow"
summary: "API Request Flow"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-traffic-routing/005-api-request-flow-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-redis="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Tyk immediately checks if the request is authenticated and authorized. This process involves several steps:

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
Quota checking -->
