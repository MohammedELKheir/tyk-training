---
id: foundation-api-security-4-policies-in-tyk/011-policies-general-vs-per-api-rules
deck_id: foundation-api-security-4-policies-in-tyk
order: 11
slug: policies-general-vs-per-api-rules
title: "Policies: General vs Per-API Rules"
summary: "Rules defined in the policy can be set generally for all APIs, or specifically for individual APIs. Only some rules can be set per-API: - Rate limiting - Throttling - Quotas - Path"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-4-policies-in-tyk/012-policies-policy-partitioning]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Policies: General vs Per-API Rules

Rules defined in the policy can be set generally for all APIs, or specifically for individual APIs.

Only some rules can be set per-API:

- Rate limiting
- Throttling
- Quotas
- Path-based permissions

<div style="background:#FFF3CD; border-left:4px solid #FFC107; padding:10px 16px; margin-top:1rem; border-radius:4px;">
  <p style="margin:0; font-size:0.9rem; color:#856404; font-weight:600;">Important: This cannot be used at the same time as Policy partitioning</p>
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
