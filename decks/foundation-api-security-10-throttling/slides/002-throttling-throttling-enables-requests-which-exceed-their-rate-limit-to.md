---
id: foundation-api-security-10-throttling/002-throttling-throttling-enables-requests-which-exceed-their-rate-limit-to
deck_id: foundation-api-security-10-throttling
order: 2
slug: throttling-throttling-enables-requests-which-exceed-their-rate-limit-to
title: "Throttling Throttling enables requests which exceed their rate limit to be retri"
summary: "ed by the API Gateway The Gateway will retry the request a number of times until it either succeeds or fails too many times This process can reduce the number of rate limit error r"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-10-throttling/003-throttling-throttling-can-be-configured-on-keys-and-policies-by-setting]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Throttling</h1>

  <div style="margin-top:2.8rem; margin-left:0.9rem; width:860px;">
    <ul style="margin:0; padding-left:2.35rem; font-size:1.1rem; line-height:1.83; color:#111; list-style-type:disc;">
      <li style="margin-bottom:0.45rem;">Throttling enables requests which exceed their rate limit to be retried by the API Gateway</li>
      <li style="margin-bottom:0.45rem;">The Gateway will retry the request a number of times until it either succeeds or fails too many times</li>
      <li style="margin-bottom:0.45rem;">This process can reduce the number of rate limit error responses received by API Clients</li>
      <li> The throttling process is hidden from the API Client, as their connection is kept open during the throttling process</li>
    </ul>
  </div>

  <div style="position:absolute; right:-3.55rem; bottom:-2.05rem; width:92px; height:62px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:10px 12px; box-sizing:border-box;">
    <div style="position:relative; width:64px; height:24px; display:flex; align-items:center; justify-content:flex-end; font-size:0.92rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:9px; height:9px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
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
