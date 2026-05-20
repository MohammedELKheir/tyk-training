---
id: foundation-api-security-2-authn-and-authz/009-how-tyk-applies-security
deck_id: foundation-api-security-2-authn-and-authz
order: 9
slug: how-tyk-applies-security
title: "How Tyk Applies Security"
summary: "There are a wide array of options for authentication and authorizing access to APIs with Tyk. These are configured as part of API definitions via: Gateway REST API in headless open"
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

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0.2rem 0 0.6rem;">
  <h1 style="margin:0; color:#6517d9; font-size:3.65rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">How Tyk Applies Security</h1>

  <div style="margin-top:2.25rem; max-width:1120px; color:#111; font-size:1.18rem; line-height:1.6;">
    <div style="margin-bottom:2.2rem;">There are a wide array of options for authentication and authorizing access to APIs with Tyk.</div>
    <div style="margin-bottom:0.8rem;">These are configured as part of API definitions via:</div>
    <ul style="margin:0.2rem 0 0 1.65rem; padding:0; font-size:1.14rem; line-height:1.7;">
      <li style="margin:0.45rem 0;">Gateway REST API in headless open-source installations</li>
      <li style="margin:0.45rem 0;">or the Dashboard API or API Designer UI when using the Tyk Dashboard</li>
      <li style="margin:0.45rem 0;">Config-as-code via Tyk Operator</li>
    </ul>
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
However, with policy partitioning it is possible to override only a particular part of the token – the ACL, rate limit, or quota
-->
