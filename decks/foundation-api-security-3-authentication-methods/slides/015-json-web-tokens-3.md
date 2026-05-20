---
id: foundation-api-security-3-authentication-methods/015-json-web-tokens-3
deck_id: foundation-api-security-3-authentication-methods
order: 15
slug: json-web-tokens-3
title: "JSON Web Tokens"
summary: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. ey JzdWIiOiJpZGVudGlmaWVyLWlkIiwibmFtZSI6Ii kpvaG4gRG91Iiwi aWF0IjoxNTE2MjM5MDIyLCJw b2wiOiJwb2xpY3ktaWQifQ. kaBr00iPT00hUF5c fArMk2N4Teg8P2Ij"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/016-oauth-2-0]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# JSON Web Tokens

<div style="display:flex; gap:1rem; margin-top:0.7rem; align-items:flex-start;">
  <div style="flex:1;">
    <div class="token-box" style="min-height:260px; font-size:0.74rem; line-height:1.55; color:#d83cff;">
      <span style="color:#ff1e68;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.</span>ey<br/>
      JzdWIiOiJpZGVudGlmaWVyLWlkIiwibmFtZSI6Ii<br/>
      kpvaG4gRG91Iiwi aWF0IjoxNTE2MjM5MDIyLCJw<br/>
      b2wiOiJwb2xpY3ktaWQifQ.<span style="color:#0aa7e8;">kaBr00iPT00hUF5c</span><br/>
      <span style="color:#0aa7e8;">fArMk2N4Teg8P2Ijx8AfMKQ3NN4</span>
    </div>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; gap:0.55rem;">
    <div class="code-card" style="padding-top:0.55rem;">
      <div class="section-label" style="margin-bottom:0.3rem;">Header: algorithm &amp; token type</div>
      <pre>{
  "alg": "HS256",
  "typ": "JWT"
}</pre>
    </div>
    <div class="code-card" style="padding-top:0.55rem;">
      <div class="section-label" style="margin-bottom:0.3rem;">Payload: data</div>
      <pre>{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "sub": "identifier-id",
  "pol": "policy-id"
}</pre>
    </div>
    <div class="code-card" style="padding-top:0.55rem;">
      <div class="section-label" style="margin-bottom:0.3rem;">Verify signature</div>
      <pre>HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  "tyk-shared-secret"
)</pre>
    </div>
  </div>
</div>

<!-- Notes: A JWT consists of three parts: Header – specifies the algorithm used for signing. Payload – contains claims, which are statements about the user, such as their ID or permissions. As we can see in the payload, the 'sub' and 'pol' claims contain the identifier for the client and the policy ID to enforce on the token. Signature – created using a secret key or private key, making the token tamper-proof. In this example, we are using a HMAC shared secret, and the secret should match the value configured on the API definition in the Tyk Dashboard. -->
