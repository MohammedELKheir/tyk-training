---
id: foundation-api-security-10-throttling/004-throttling-tyk
deck_id: foundation-api-security-10-throttling
order: 4
slug: throttling-tyk
title: "Throttling Tyk"
summary: "Throttling Tyk"
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
  <h1 style="position:absolute; left:0; top:3px; margin:0; color:#5F16D9; font-size:3.45rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Throttling</h1>

  <div style="position:absolute; left:246px; top:6px; width:640px; height:470px;">
    <ThrottlingFlow />
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
