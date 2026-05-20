---
id: foundation-api-security-11-quotas/006-quota-headers
deck_id: foundation-api-security-11-quotas
order: 6
slug: quota-headers
title: "Quota Headers"
summary: "For requests subject to a quota, the Gateway will return headers in the response which provide the current status of the quota: X-Ratelimit-Limit : The original quota amount X-Rate"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-11-quotas/007-quota-example]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quota Headers</h1>

  <div style="margin-top:2.05rem; margin-left:0.1rem; width:920px; color:#111; font-size:1.04rem; line-height:1.46;">
    <p style="margin:0 0 0.55rem 0;">For requests subject to a quota, the Gateway will return headers in the response which provide the current status of the quota:</p>
    <ul style="margin:0 0 0.7rem 0; padding-left:2rem; line-height:1.43;">
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">X-Ratelimit-Limit</span>: The original quota amount</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">X-Ratelimit-Remaining</span>: The current quota remaining</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">X-Ratelimit-Reset</span>: The epoch from which the quota can renew</li>
    </ul>
    <p style="margin:0;">These headers are not returned when a request is blocked due to exceeding the quota</p>
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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
