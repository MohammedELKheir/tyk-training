---
id: foundation-api-security-4-policies-in-tyk/004-why-use-policies
deck_id: foundation-api-security-4-policies-in-tyk
order: 4
slug: why-use-policies
title: "Why Use Policies?"
summary: "Without policies: Each API key must be updated manually. With policies: Update once → all associated keys inherit changes. Example: Upgrade 10,000 users' quotas by updating just on"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-4-policies-in-tyk/005-policy-capabilities]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Why Use Policies?

<div style="display:flex; gap:2rem; margin-top:1rem;">
  <div style="flex:1;">
    <p style="font-weight:600; color:#03031C; margin-bottom:0.5rem;">Without policies:</p>
    <p style="color:#555; font-size:0.95rem;">Each API key must be updated manually.</p>

    <p style="font-weight:600; color:#03031C; margin-top:1rem; margin-bottom:0.5rem;">With policies:</p>
    <p style="color:#555; font-size:0.95rem;">Update once → all associated keys inherit changes.</p>

    <p style="color:#555; font-size:0.95rem; margin-top:0.5rem;">Example: Upgrade 10,000 users' quotas by updating just one policy.</p>
  </div>
  <div style="flex:1; display:flex; align-items:center; justify-content:center;">
    <img src="./images/icons/slide-004-Google-Shape;84;p17.png" style="max-width:100%; max-height:320px; border-radius:8px;" />
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
