---
id: foundation-api-security-1-access-rights-and-policies/007-access-rights-path-based-permissions-path-based-permissions-provide-addi
deck_id: foundation-api-security-1-access-rights-and-policies
order: 7
slug: access-rights-path-based-permissions-path-based-permissions-provide-addi
title: "Access Rights: Path Based Permissions Path-based permissions provide additional"
summary: "granular control of API access, based on HTTP methods and paths: Defined as the HTTP methods allowed for a path e.g. GET /hello Paths and methods act as an allow list APIs must be"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-1-access-rights-and-policies/008-access-rights-path-based-permissions-enforcement-enforcement-is-based-on]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.1rem 0 0 0.05rem; color:#595959;">
  <h1 style="font-size:1.9rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0 0 1rem 0; max-width:7.2in; border:0;">Access Rights: Path Based Permissions</h1>
  <div style="width:7.7in; font-size:0.74rem; line-height:1.55; color:#595959;">
    <p style="margin:0 0 0.45rem 0;">Path-based permissions provide additional granular control of API access, based on HTTP methods and paths:</p>
    <ul style="margin:0 0 0 1.05rem; padding:0; line-height:1.7;">
      <li>Defined as the HTTP methods allowed for a path e.g. <code style="font-size:0.72rem; background:#f4f4f4; padding:0 0.14rem; border-radius:0.15rem;">GET /hello</code></li>
      <li>Paths and methods act as an allow list</li>
    </ul>
    <p style="margin:1.05rem 0 0 0;">APIs must be selected in Access Rights to enable path-based permissions to be defined for them</p>
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
