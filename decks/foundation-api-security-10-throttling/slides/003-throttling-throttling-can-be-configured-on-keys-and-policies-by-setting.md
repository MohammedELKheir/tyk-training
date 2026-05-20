---
id: foundation-api-security-10-throttling/003-throttling-throttling-can-be-configured-on-keys-and-policies-by-setting
deck_id: foundation-api-security-10-throttling
order: 3
slug: throttling-throttling-can-be-configured-on-keys-and-policies-by-setting
title: "Throttling Throttling can be configured on Keys and Policies by setting a thrott"
summary: "ling interval and retry limit: Interval: Number of seconds to wait between retries, defined by the throttle_interval property Retry limit: Number of retries to attempt, defined by"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-10-throttling/004-throttling-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Throttling</h1>

  <div style="margin-top:2.7rem; margin-left:0.85rem; width:875px; color:#111; font-size:1.03rem; line-height:1.68;">
    <p style="margin:0 0 0.95rem 0;">Throttling can be configured on Keys and Policies by setting a throttling interval and retry limit:</p>
    <ul style="margin:0; padding-left:2.3rem; line-height:1.74; list-style-type:disc;">
      <li style="margin-bottom:0.55rem;">Interval: Number of seconds to wait between retries, defined by the <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">throttle_interval</span> property</li>
      <li style="margin-bottom:0.55rem;">Retry limit: Number of retries to attempt, defined by the <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">throttle_retry_limit</span> property</li>
      <li style="margin-bottom:0.55rem;">Policies can define separate throttling configurations for each API they grant access to</li>
    </ul>
    <p style="margin:0.2rem 0 0 0;">Setting the properties to -1 will disable throttling, which is the default setting</p>
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
