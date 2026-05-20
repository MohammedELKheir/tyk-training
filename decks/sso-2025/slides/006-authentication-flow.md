---
id: sso-2025/006-authentication-flow
deck_id: sso-2025
order: 6
slug: authentication-flow
title: "Authentication Flow"
summary: "User initiates authentication via TIB. TIB validates identity via IDP. IDP requests for authentication data from the client. TIB receives accepted or rejected response from IDP. TI"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/007-tib-architecture]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Authentication Flow

<div style="display:flex; gap:2rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <ol style="margin-top:0; padding-left:1.2rem;">
      <li>User initiates authentication via TIB.</li>
      <li>TIB validates identity via IDP.</li>
      <li>IDP requests for authentication data from the client.</li>
      <li>TIB receives accepted or rejected response from IDP.</li>
      <li>TIB requests for token from Tyk Gateway.</li>
      <li>Returns token to client.</li>
      <li>Client can now make a request to the Gateway.</li>
    </ol>
  </div>
  <div style="flex:1.5; display:flex; align-items:center; justify-content:center;">
    <img src="/icons/auth-flow-diagram.png" style="width:100%; max-width:522px; border-radius:8px;" />
  </div>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
