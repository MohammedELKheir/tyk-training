---
id: foundation-api-security-3-authentication-methods/012-json-web-tokens
deck_id: foundation-api-security-3-authentication-methods
order: 12
slug: json-web-tokens
title: "JSON Web Tokens"
summary: "JSON web tokens are cryptographically signed. Claims are often signed by a trusted 3rd party. Configure Tyk to extract user ID and policy ID from claims. Authorization: Bearer eyJh"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/013-jwt-flow-diagram]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# JSON Web Tokens

<ul class="bullet-tight" style="font-size:0.98rem; line-height:1.45; margin-top:0.8rem;">
  <li>JSON web tokens are cryptographically signed.</li>
  <li>Claims are often signed by a trusted 3rd party.</li>
  <li>Configure Tyk to extract user ID and policy ID from claims.</li>
</ul>

<div class="token-box" style="margin-top:1rem;">Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...MHrH</div>

<!-- Notes: JWTs are a widely used method for securely transmitting information between parties. They are cryptographically signed, ensuring that the claims they carry haven’t been altered. In many cases, the claims are signed by a trusted third party, such as an authentication provider. This means that when a user presents a JWT, Tyk doesn’t need to call the provider again—it can simply verify the signature and extract the claims. Within Tyk, we can configure it to extract specific claims such as User ID and Policy ID. By doing this, Tyk can enforce security policies dynamically, ensuring the right users have the right level of access without additional database lookups or API calls. -->
