---
id: foundation-api-security-1-access-rights-and-policies/003-what-an-api-client-is-allowed-to-access-every-api-client-like-a-user-app
deck_id: foundation-api-security-1-access-rights-and-policies
order: 3
slug: what-an-api-client-is-allowed-to-access-every-api-client-like-a-user-app
title: "What an API Client Is Allowed to Access Every API client (like a user, applicati"
summary: "on, or service) is associated with an API Key or token. That key defines the client’s Access Rights — a list of APIs and API versions it is allowed to call. You can explicitly allo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-1-access-rights-and-policies/004-without-access-rights]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.1rem 0 0 0.1rem; color:#585858;">
  <h1 style="font-size:2.18rem; line-height:1.05; font-weight:800; color:#5b10d9; margin:0 0 0.85rem 0; max-width:6.8in; border:0;">What an API Client Is Allowed to Access</h1>
  <div style="width:7.7in; font-size:0.77rem; line-height:1.58; color:#595959;">
    <p style="margin:0 0 0.8rem 0;">Every API client (like a user, application, or service) is associated with an API Key or token. That key defines the client’s Access Rights — a list of APIs and API versions it is allowed to call.</p>
    <ul style="margin:0 0 0 1.2rem; padding:0; line-height:1.7;">
      <li>You can explicitly allow specific APIs or versions.</li>
      <li>You do not need to define what is denied — if an API isn’t listed, access is automatically blocked.</li>
    </ul>
    <p style="margin:1rem 0 0 0;">If the client tries to access an unauthorized API, the Tyk Gateway will reject the request with a 403 Forbidden error.</p>
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
