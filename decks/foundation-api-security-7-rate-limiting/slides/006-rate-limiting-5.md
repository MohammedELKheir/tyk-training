---
id: foundation-api-security-7-rate-limiting/006-rate-limiting-5
deck_id: foundation-api-security-7-rate-limiting
order: 6
slug: rate-limiting-5
title: "Rate-Limiting"
summary: "For situations where a rate limit is defined on both a Key/Policy and also the API Definition: If the request causes any of the various rate limits to be exceed, the Gateway will b"
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

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.35rem; margin-left:0.15rem; width:915px; color:#111; font-size:1.01rem; line-height:1.47;">
    <p style="margin:0 0 0.52rem 0;">For situations where a rate limit is defined on both a Key/Policy and also the API Definition:</p>
    <ul style="margin:0; padding-left:1.95rem; list-style-type:disc; line-height:1.47;">
      <li style="margin-bottom:0.72rem;">If the request causes any of the various rate limits to be exceed, the Gateway will block the request</li>
      <li>This means that an API client may be within their Key/Policy rate limit, but if their request causes the API Definition’s global rate limit to be exceeded, then the request is blocked</li>
    </ul>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
</div>

<!-- Notes: Encapsulation of rules
Policies give you a way to encapsulate security and other access settings into a pre-defined entity.
Purpose is to make your life easier when managing lots of tokens.
The important thing to understand about policies is that a single policy can apply to many tokens, so having a few policies can let you manage very large numbers of tokens easily.

They allow you to define:
An access control list, which sets which APIs, versions, endpoints and methods the policy can access.
Rate limit
Quota

Dynamically attached
When a policy is saved on the Dashboard, it only takes around 10 seconds for it to take effect on the server.
Policies are attached to request sessions at the start of the Tyk processing pipeline, so updates are take effect immediately.

Partitioning
Once a policy is assigned to a token it will override the settings of that token.
However, with policy partitioning it is possible to override only a particular part of the token – the ACL, rate limit, or quota (or any combination of the three).

No effect on open APIs
Policies have no effect one APIs which have been configured to be open.
This is because the Tyk pipeline skips all authentication so does not process any tokens provided. -->
