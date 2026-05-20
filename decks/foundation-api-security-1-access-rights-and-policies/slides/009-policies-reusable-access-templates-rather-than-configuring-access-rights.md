---
id: foundation-api-security-1-access-rights-and-policies/009-policies-reusable-access-templates-rather-than-configuring-access-rights
deck_id: foundation-api-security-1-access-rights-and-policies
order: 9
slug: policies-reusable-access-templates-rather-than-configuring-access-rights
title: "Policies: Reusable Access Templates Rather than configuring access rights for ev"
summary: "ery single API Key, Tyk lets you define Policies that group: Which APIs (and versions) can be accessed Quotas or usage limits Rate limiting rules Expiry rules or custom metadata Yo"
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

<div style="position:relative; width:100%; height:100%; padding:0.05rem 0 0 0.55rem; color:#595959;">
  <h1 style="font-size:2.62rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0 0 0.85rem 0; max-width:7.5in; border:0;">Policies: Reusable Access Templates</h1>
  <div style="width:7.85in; font-size:0.76rem; line-height:1.5; color:#595959;">
    <p style="margin:0 0 0.85rem 0;">Rather than configuring access rights for every single API Key, Tyk lets you define Policies that group:</p>
    <ul style="margin:0 0 0 1.15rem; padding:0; line-height:1.55; font-size:0.82rem;">
      <li>Which APIs (and versions) can be accessed</li>
      <li>Quotas or usage limits</li>
      <li>Rate limiting rules</li>
      <li>Expiry rules or custom metadata</li>
    </ul>
    <p style="margin:1rem 0 0 0;">You assign policies to API keys, OAuth clients, or JWT tokens — making it easy to manage consistent access rules</p>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
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
