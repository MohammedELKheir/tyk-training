---
id: foundation-api-security-2-authn-and-authz/002-what-is-authentication-authn
deck_id: foundation-api-security-2-authn-and-authz
order: 2
slug: what-is-authentication-authn
title: "What Is Authentication (AuthN)?"
summary: "Authentication means proving your identity. In Tyk, when a request comes in, it checks who is calling the API. This is usually done using: API Keys – A unique string like a passwor"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-2-authn-and-authz/003-what-is-authorization-authz]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0.2rem 0 0.6rem;">
  <h1 style="margin:0; color:#6517d9; font-size:3.4rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">What Is Authentication (AuthN)?</h1>

  <div style="margin-top:2.1rem; max-width:830px; color:#111; font-size:1.18rem; line-height:1.55;">
    <div style="margin-bottom:1.1rem;">Authentication means proving your identity.</div>
    <div style="margin-bottom:0.7rem;">In Tyk, when a request comes in, it checks who is calling the API. This is usually done using:</div>
    <ul style="margin:0.25rem 0 0 1.65rem; padding:0;">
      <li style="margin:0.35rem 0;"><strong>API Keys</strong> – A unique string like a password</li>
      <li style="margin:0.35rem 0;"><strong>JWT tokens</strong> – Signed tokens that include identity and permissions</li>
      <li style="margin:0.35rem 0;"><strong>OAuth clients</strong> – Used in modern identity systems like Google or Microsoft</li>
      <li style="margin:0.35rem 0;"><strong>mTLS (Mutual TLS)</strong> – Certificates to verify client identity</li>
    </ul>
    <div style="margin-top:1.15rem;"><strong>Example:</strong></div>
    <div style="margin-top:0.35rem; margin-left:1.3rem;">A user sends a request with an API key — Tyk checks “Is this a valid key?”</div>
    <div style="margin-top:0.95rem;"><strong>Objective of AuthN:</strong> Confirm who you are.</div>
  </div>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Authentication is the first step in API security.
Tyk supports multiple authentication methods to fit different use cases.
API Keys are the simplest, while mTLS provides the highest security.
-->
