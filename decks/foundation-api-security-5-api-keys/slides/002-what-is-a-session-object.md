---
id: foundation-api-security-5-api-keys/002-what-is-a-session-object
deck_id: foundation-api-security-5-api-keys
order: 2
slug: what-is-a-session-object
title: "What is a Session Object?"
summary: "In Tyk, every identity maps to a Session Object. Supported identity types: Bearer Tokens HMAC Keys JSON Web Tokens (JWT) OpenID Connect (OIDC) identities Basic Auth users Think of"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/003-what-does-a-session-object-contain]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# What is a Session Object?

<div style="margin-top:1.1rem; font-size:1.2rem; line-height:1.65; color:#111827;">
  <ul style="padding-left:2rem; margin:0;">
    <li style="margin-bottom:0.8rem;">In Tyk, every identity maps to a Session Object.</li>
    <li style="margin-bottom:0.35rem;">Supported identity types:</li>
  </ul>
  <ul style="padding-left:4rem; margin:0.15rem 0 0 0; list-style-type:circle;">
    <li>Bearer Tokens</li>
    <li>HMAC Keys</li>
    <li>JSON Web Tokens (JWT)</li>
    <li>OpenID Connect (OIDC) identities</li>
    <li>Basic Auth users</li>
  </ul>
  <ul style="padding-left:2rem; margin:0.7rem 0 0 0;">
    <li>Think of it as the user’s metadata — how Tyk knows who is accessing what and how.</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
