---
id: api-security-with-tyk/008-api-request-flow-5
deck_id: api-security-with-tyk
order: 8
slug: api-request-flow-5
title: "API Request Flow"
summary: "Client Redis Gateway Server 1. A request is made to an API behind Tyk Gateway. 2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS). 3. If authentication succeeds,"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [api-security-with-tyk/009-how-tyk-applies-security]
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
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:8px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; border-top:1px solid #ddd; padding-top:8px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).

3. If authentication succeeds, Tyk then authorizes the request:
   - Is this client allowed to call this API?
   - Are they within rate limits?

4. If both checks pass, the request is forwarded to the API.

5. If either check fails, Tyk blocks the request with an error (e.g., 403 Forbidden or 401 Unauthorized).

</div>
</div>

<!-- Notes: The backend API processes the request and sends a response back to Tyk.

Tyk can also transform the response if needed, perhaps removing sensitive data or adding custom headers. -->
