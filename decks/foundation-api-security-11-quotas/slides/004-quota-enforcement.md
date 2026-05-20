---
id: foundation-api-security-11-quotas/004-quota-enforcement
deck_id: foundation-api-security-11-quotas
order: 4
slug: quota-enforcement
title: "Quota Enforcement"
summary: "Quota calculation is based on the amount of quota remaining: If the quota remaining is zero, the request is blocked Otherwise, the remaining quota is reduced by 1 API clients which"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-11-quotas/005-quota-renewal]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quota Enforcement</h1>

  <div style="margin-top:2.05rem; margin-left:0.1rem; width:915px; color:#111; font-size:1.04rem; line-height:1.46;">
    <p style="margin:0 0 0.5rem 0;">Quota calculation is based on the amount of quota remaining:</p>
    <ul style="margin:0 0 0.7rem 0; padding-left:2rem; line-height:1.43;">
      <li>If the quota remaining is zero, the request is blocked</li>
      <li>Otherwise, the remaining quota is reduced by 1</li>
    </ul>
    <p style="margin:0 0 0.45rem 0;">API clients which have no quota remaining receive this response:</p>
    <ul style="margin:0 0 0.7rem 0; padding-left:2rem; line-height:1.43;">
      <li>HTTP status code: 403 Forbidden</li>
      <li>Body: <span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">quota exceeded</span></li>
      <li>A Tyk <span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">&lsquo;quota exceeded&rsquo;</span> system event is triggered</li>
    </ul>
    <p style="margin:0;">If a quota renewal value is set to -1 then no quota is enforced</p>
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
