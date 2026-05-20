---
id: api-security-with-tyk/003-what-is-authorization-authz
deck_id: api-security-with-tyk
order: 3
slug: what-is-authorization-authz
title: "What Is Authorization (AuthZ)?"
summary: "Authorization means checking what you're allowed to do. - Once Tyk knows who you are, it checks your **Access Rights**: - Can you call this API? - Can you access this version of th"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [api-security-with-tyk/004-api-request-flow]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# What Is Authorization (AuthZ)?

- Authorization means checking what you're allowed to do.

<v-click>

- Once Tyk knows who you are, it checks your **Access Rights**:
  - Can you call this API?
  - Can you access this version of the API?
  - Are you within the allowed rate limit or quota?

</v-click>

<v-click>

- **Example:**
  - Even if a user has a valid key, Tyk checks, "Does this key allow access to the /admin API?"
- **Objective of AuthZ:** Decide what you're allowed to do.

</v-click>

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
