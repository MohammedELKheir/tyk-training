---
id: foundation-api-security-3-authentication-methods/008-basic-authentication-3
deck_id: foundation-api-security-3-authentication-methods
order: 8
slug: basic-authentication-3
title: "Basic Authentication"
summary: "Tyk does not generate Basic Auth credentials. You must manually create and register usernames and passwords. This is done by creating a Tyk key that: includes a username and passwo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/009-hmac]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Basic Authentication

<ul class="bullet-tight" style="font-size:0.96rem; line-height:1.45; margin-top:1rem;">
  <li>Tyk does not generate Basic Auth credentials.</li>
  <li>You must manually create and register usernames and passwords.</li>
  <li>This is done by creating a Tyk key that:
    <ul>
      <li>includes a username and password</li>
      <li>grants access to the protected API</li>
    </ul>
  </li>
</ul>

<p style="margin-top:1rem; font-weight:700;">Important:</p>
<p style="font-size:1rem; line-height:1.45; margin-top:0.2rem;"><strong>The API key itself is not used directly by the client.</strong><br/>Clients must send Basic Auth credentials (<code>username:password</code>) in the request.</p>

<!-- Notes: When using Basic Authentication with Tyk, the process is slightly different from token-based auth. Tyk does not issue the actual credentials. Instead, you are responsible for creating and registering the users' usernames and passwords. To implement this, you create a standard Tyk access key, just like you would for an API token, but you also define a username and password as part of that key. At runtime, Tyk doesn't expect clients to use the access key itself. Instead, the client must send the Base64-encoded username and password via the Authorization header. Tyk then looks up the provided credentials and validates them against the registered key data. This approach offers centralized control and aligns with Tyk’s usual access control methods, even for Basic Auth. -->
