---
id: foundation-api-security-3-authentication-methods/014-json-web-tokens-2
deck_id: foundation-api-security-3-authentication-methods
order: 14
slug: json-web-tokens-2
title: "JSON Web Tokens"
summary: "Token signing method: RSA Public Key, HMAC Secret, ECDSA, or JWKS URI. Subject identity claim: claim used to represent the client identity, such as name or userID. Public key / sec"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/015-json-web-tokens-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# JSON Web Tokens

<div style="display:flex; gap:1rem; margin-top:0.8rem; align-items:flex-start;">
  <div style="flex:1.25;">
    <img src="./public/screenshots/jwt-config.png" style="width:100%; border:1px solid #d8d8e5; border-radius:12px;" />
  </div>
  <div style="flex:0.95; font-size:0.88rem; line-height:1.42;">
    <ul class="callout-list">
      <li><strong>Token signing method:</strong> RSA Public Key, HMAC Secret, ECDSA, or JWKS URI.</li>
      <li><strong>Subject identity claim:</strong> claim used to represent the client identity, such as name or userID.</li>
      <li><strong>Public key / secret / JWKS URI:</strong> verification material used to validate the JWT.</li>
      <li><strong>Policy claim:</strong> claim containing the Tyk policy ID.</li>
      <li><strong>Default policy:</strong> fallback policy if no policy claim is found.</li>
    </ul>
  </div>
</div>

<!-- Notes: In the Tyk dashboard, when JWT authentication is selected, you have the option to configure the signing method, the subject identity claim, the public key / secret / JWKS URI used to validate the token, the policy claim that ties the JWT to a Tyk policy, and the default policy that will be used if no policy claim is present. -->
