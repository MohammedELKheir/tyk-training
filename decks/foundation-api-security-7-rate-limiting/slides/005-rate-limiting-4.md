---
id: foundation-api-security-7-rate-limiting/005-rate-limiting-4
deck_id: foundation-api-security-7-rate-limiting
order: 5
slug: rate-limiting-4
title: "Rate-Limiting"
summary: "Rate limit calculation is based on the datetime of the request: Previous requests within the rate limit period are totalled If total exceeds the maximum allowed in the period, the"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-7-rate-limiting/006-rate-limiting-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.32rem; margin-left:0.15rem; width:915px; color:#111; font-size:1.01rem; line-height:1.45;">
    <p style="margin:0 0 0.28rem 0;">Rate limit calculation is based on the datetime of the request:</p>
    <ul style="margin:0 0 0.78rem 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li style="margin-bottom:0.64rem;">Previous requests within the rate limit period are totalled</li>
      <li>If total exceeds the maximum allowed in the period, the request is blocked</li>
    </ul>
    <p style="margin:0 0 0.28rem 0;">API clients which exceed the rate limit receive this response:</p>
    <ul style="margin:0 0 0.78rem 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li style="margin-bottom:0.64rem;">HTTP status code: 429 Too Many Requests</li>
      <li>Body: <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">rate limit exceeded</span></li>
    </ul>
    <p style="margin:0;">A Tyk <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">‘rate limit exceeded’</span> system event is also triggered</p>
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
