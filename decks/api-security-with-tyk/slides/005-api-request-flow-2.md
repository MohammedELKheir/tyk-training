---
id: api-security-with-tyk/005-api-request-flow-2
deck_id: api-security-with-tyk
order: 5
slug: api-request-flow-2
title: "API Request Flow"
summary: "Client Redis Gateway Server 1. A request is made to an API behind Tyk Gateway. 2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS)"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [api-security-with-tyk/006-api-request-flow-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:4px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="width:3px; height:28px; background:#555;"></div>
    <div style="display:flex; flex-direction:column; align-items:center; padding-top:4px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).

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

If the key is valid and has the necessary permissions, Tyk allows the request to proceed. This are Tyk's core processing which includes:

Tyk performs its core functions, which typically include:

Authentication
Authorization
Rate limiting
Quota checking -->
