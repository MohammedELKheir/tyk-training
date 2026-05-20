---
id: foundation-api-security-11-quotas/007-quota-example
deck_id: foundation-api-security-11-quotas
order: 7
slug: quota-example
title: "Quota Example"
summary: "Quota Example"
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
  <h1 style="margin:0; color:#5F16D9; font-size:3.32rem; line-height:1; font-weight:800;">Quota Example</h1>

  <div style="display:flex; justify-content:center; align-items:center; margin-top:0.35rem; width:100%;">
    <img src="./public/icons/quota-example.png" style="width:850px; max-height:424px; object-fit:contain; display:block; transform:translateX(-14px);" />
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
