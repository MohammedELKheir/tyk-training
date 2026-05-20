---
id: sso-2025/005-sso-flow
deck_id: sso-2025
order: 5
slug: sso-flow
title: "SSO Flow"
summary: "User initiates login via SSO endpoint. TIB redirects to IDP for authentication. Keycloak validates user and returns ID token. TIB verifies token and searches in database for user."
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/006-authentication-flow]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# SSO Flow

<div style="display:flex; gap:2rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <ol style="margin-top:0; padding-left:1.2rem;">
      <li>User initiates login via SSO endpoint.</li>
      <li>TIB redirects to IDP for authentication.</li>
      <li>Keycloak validates user and returns ID token.</li>
      <li>TIB verifies token and searches in database for user.</li>
      <li>If found, nonce code created.</li>
      <li>If not found, ad hoc user session is created.</li>
      <li>Redirects to Dashboard.</li>
    </ol>
  </div>
  <div style="flex:1.5; display:flex; align-items:center; justify-content:center;">
    <img src="/icons/sso-flow-diagram.png" style="width:100%; max-width:534px; border-radius:8px;" />
  </div>
</div>

<!-- Notes: The user starts by hitting the SSO login endpoint.
TIB redirects them to the Identity Provider.
The IDP handles the authentication and returns an ID token.
TIB verifies that token, then checks the database for the user.
If the user exists, TIB creates a nonce code.
If not, it creates an ad hoc session on the fly.
Finally, the user is seamlessly redirected into the Tyk Dashboard. -->
