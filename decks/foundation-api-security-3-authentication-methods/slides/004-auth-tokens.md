---
id: foundation-api-security-3-authentication-methods/004-auth-tokens
deck_id: foundation-api-security-3-authentication-methods
order: 4
slug: auth-tokens
title: "Auth Tokens"
summary: "A bearer token is an access token that allows any party in possession of it to access associated resources. No cryptographic proof of ownership is required — possession alone is su"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/005-auth-tokens-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Auth Tokens

<div style="display:flex; gap:1rem; margin-top:0.8rem; align-items:flex-start;">
  <div style="flex:1.6; font-size:0.87rem; line-height:1.45;">
    <ul class="bullet-tight">
      <li>A bearer token is an access token that allows any party in possession of it to access associated resources.</li>
      <li>No cryptographic proof of ownership is required — possession alone is sufficient for access.</li>
      <li>Bearer tokens must be handled securely in transit and at rest.</li>
      <li>Typically sent in the <code>Authorization</code> header, but can also be passed by query parameter or cookie.</li>
      <li>Optional enhancements include Dynamic mTLS and signature validation for backward compatibility.</li>
    </ul>
  </div>
  <div style="flex:1;">
    <div class="code-card">
      <div class="section-label" style="margin-bottom:0.5rem;">Example header</div>
      <pre>Authorization: 58dbe0dbfe2f5a0b7af7f7d08cd4e31304414e994ff724126</pre>
    </div>
  </div>
</div>

<!-- Notes: "Bearer tokens offer a simple and flexible way to manage API access. However, their simplicity also makes them vulnerable if not protected properly. In this slide, we’re looking at what a bearer token is and why secure handling in both storage and transmission is critical. Tyk gives you flexibility to accept tokens from headers, query parameters, or cookies. We can also see how Tyk provides advanced configuration options - configure dynamic mTLS or request signing to support legacy systems like Mashery." -->
