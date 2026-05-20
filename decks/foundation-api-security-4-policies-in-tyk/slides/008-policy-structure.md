---
id: foundation-api-security-4-policies-in-tyk/008-policy-structure
deck_id: foundation-api-security-4-policies-in-tyk
order: 8
slug: policy-structure
title: "Policy Structure"
summary: "Quota and rate limiting data Access control (API ID / Path Version) Lock out policy holders Meta data and analytics"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-4-policies-in-tyk/009-key-policy-fields]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Policy Structure</h2>

<div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
  <div style="flex:1; display:flex; flex-direction:column; gap:0.8rem;">
    <div style="display:flex; align-items:center; gap:0.8rem;">
      <div style="width:10px; height:10px; background:#8438FA; border-radius:50%;"></div>
      <p style="margin:0; font-size:0.95rem; color:#03031C;">Quota and rate limiting data</p>
    </div>
    <div style="display:flex; align-items:center; gap:0.8rem;">
      <div style="width:10px; height:10px; background:#8438FA; border-radius:50%;"></div>
      <p style="margin:0; font-size:0.95rem; color:#03031C;">Access control (API ID / Path Version)</p>
    </div>
    <div style="display:flex; align-items:center; gap:0.8rem;">
      <div style="width:10px; height:10px; background:#8438FA; border-radius:50%;"></div>
      <p style="margin:0; font-size:0.95rem; color:#03031C;">Lock out policy holders</p>
    </div>
    <div style="display:flex; align-items:center; gap:0.8rem;">
      <div style="width:10px; height:10px; background:#8438FA; border-radius:50%;"></div>
      <p style="margin:0; font-size:0.95rem; color:#03031C;">Meta data and analytics</p>
    </div>
  </div>
  <div style="flex:1.2; display:flex; align-items:center; justify-content:center;">
    <img src="./images/icons/slide-008-Google-Shape;120;p21.png" style="max-width:100%; max-height:380px; border-radius:8px;" />
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
