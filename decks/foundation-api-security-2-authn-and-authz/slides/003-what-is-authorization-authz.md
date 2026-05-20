---
id: foundation-api-security-2-authn-and-authz/003-what-is-authorization-authz
deck_id: foundation-api-security-2-authn-and-authz
order: 3
slug: what-is-authorization-authz
title: "What Is Authorization (AuthZ)?"
summary: "Authorization means checking what you’re allowed to do. Once Tyk knows who you are, it checks your Access Rights : Can you call this API? Can you access this version of the API? Ar"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-2-authn-and-authz/004-api-request-flow]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0.2rem 0 0.6rem;">
  <h1 style="margin:0; color:#6517d9; font-size:3.4rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">What Is Authorization (AuthZ)?</h1>

  <div style="margin-top:2.1rem; max-width:860px; color:#111; font-size:1.18rem; line-height:1.55;">
    <div style="margin-bottom:1.1rem;">Authorization means checking what you’re allowed to do.</div>
    <div style="margin-bottom:0.7rem;">Once Tyk knows who you are, it checks your <strong>Access Rights</strong>:</div>
    <ul style="margin:0.25rem 0 0 1.65rem; padding:0;">
      <li style="margin:0.35rem 0;">Can you call this API?</li>
      <li style="margin:0.35rem 0;">Can you access this version of the API?</li>
      <li style="margin:0.35rem 0;">Are you within the allowed rate limit or quota?</li>
    </ul>
    <div style="margin-top:1.15rem;"><strong>Example:</strong></div>
    <div style="margin-top:0.35rem; margin-left:1.3rem;">Even if a user has a valid key, Tyk checks, “Does this key allow access to the /admin API?”</div>
    <div style="margin-top:0.95rem;"><strong>Objective of AuthZ:</strong> Decide what you’re allowed to do.</div>
  </div>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Encapsulation of rules
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
-->
