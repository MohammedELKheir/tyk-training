---
id: api-security-with-tyk/002-what-is-authentication-authn
deck_id: api-security-with-tyk
order: 2
slug: what-is-authentication-authn
title: "What Is Authentication (AuthN)?"
summary: "Authentication means proving your identity. - In Tyk, when a request comes in, it checks who is calling the API. This is usually done using: - **API Keys** – A unique string like a"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [api-security-with-tyk/003-what-is-authorization-authz]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# What Is Authentication (AuthN)?

- Authentication means proving your identity.

<v-click>

- In Tyk, when a request comes in, it checks who is calling the API. This is usually done using:
  - **API Keys** – A unique string like a password
  - **JWT tokens** – Signed tokens that include identity and permissions
  - **OAuth clients** – Used in modern identity systems like Google or Microsoft
  - **mTLS (Mutual TLS)** – Certificates to verify client identity

</v-click>

<v-click>

- **Example:**
  - A user sends a request with an API key — Tyk checks "Is this a valid key?"
- **Objective of AuthN:** Confirm who you are.

</v-click>

<!-- Notes: Authentication is the first step in API security.
Tyk supports multiple authentication methods to fit different use cases.
API Keys are the simplest, while mTLS provides the highest security. -->
