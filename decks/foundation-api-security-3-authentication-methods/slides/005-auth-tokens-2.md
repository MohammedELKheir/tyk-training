---
id: foundation-api-security-3-authentication-methods/005-auth-tokens-2
deck_id: foundation-api-security-3-authentication-methods
order: 5
slug: auth-tokens-2
title: "Auth Tokens"
summary: "Auth Token Location and Advanced Options in Tyk OpenAPI securitySchemes components: securitySchemes: myAuthScheme: type: apiKey in: header name: Authorization Tyk expansion x-tyk-a"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/006-basic-authentication]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Auth Tokens

<p style="font-weight:700; margin-bottom:0.6rem;">Auth Token Location and Advanced Options in Tyk</p>

<div style="display:flex; gap:1rem; align-items:flex-start;">
  <div style="flex:1;">
    <div class="code-card">
      <div class="section-label" style="margin-bottom:0.45rem;">OpenAPI securitySchemes</div>
      <pre>components:
  securitySchemes:
    myAuthScheme:
      type: apiKey
      in: header
      name: Authorization</pre>
    </div>
  </div>
  <div style="flex:1.12;">
    <div class="code-card">
      <div class="section-label" style="margin-bottom:0.45rem;">Tyk expansion</div>
      <pre>x-tyk-api-gateway:
  server:
    authentication:
      enabled: true
      securitySchemes:
        myAuthScheme:
          enabled: true
          query:
            enabled: true
            name: query-auth
          cookie:
            enabled: true
            name: cookie-auth</pre>
    </div>
  </div>
</div>

<!-- Notes: While OpenAPI limits you to one location for a token, Tyk allows the securityScheme defined in the OAS to multiple locations for the authentication token — headers, query strings, cookies. -->
