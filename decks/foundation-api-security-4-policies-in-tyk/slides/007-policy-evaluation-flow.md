---
id: foundation-api-security-4-policies-in-tyk/007-policy-evaluation-flow
deck_id: foundation-api-security-4-policies-in-tyk
order: 7
slug: policy-evaluation-flow
title: "Policy Evaluation Flow"
summary: "When a request comes in: 1. Tyk reads the Access Key 2. Checks which Policies are linked 3. Merges rules → applies rate limit, quota, ACL 4. Grants or denies API access accordingly"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-4-policies-in-tyk/008-policy-structure]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Policy Evaluation Flow

When a request comes in:

1. Tyk reads the Access Key
2. Checks which Policies are linked
3. Merges rules → applies rate limit, quota, ACL
4. Grants or denies API access accordingly

Note: This enables centralized management and consistent enforcement.

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
