---
id: sso-2025/009-identity-handlers
deck_id: sso-2025
order: 9
slug: identity-handlers
title: "Identity Handlers"
summary: "GenerateOrLoginUserProfile → Dashboard SSO GenerateOrLoginDeveloperProfile → Portal SSO GenerateOAuthTokenForClient → Issue Tyk OAuth token"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/010-profiles]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Identity Handlers

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<ul style="padding-left:1.2rem;">
  <li><strong>GenerateOrLoginUserProfile</strong> → Dashboard SSO</li>
  <li><strong>GenerateOrLoginDeveloperProfile</strong> → Portal SSO</li>
  <li><strong>GenerateOAuthTokenForClient</strong> → Issue Tyk OAuth token</li>
</ul>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
