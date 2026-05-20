---
id: foundation-api-security-3-authentication-methods/006-basic-authentication
deck_id: foundation-api-security-3-authentication-methods
order: 6
slug: basic-authentication
title: "Basic Authentication"
summary: "Basic Authentication is a simple method where credentials (username and password) are sent to the server, typically via an HTTP header. Credentials are combined as username:passwor"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/007-basic-authentication-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Basic Authentication

<div style="font-size:0.95rem; line-height:1.5;">
  <p>Basic Authentication is a simple method where credentials (username and password) are sent to the server, typically via an HTTP header.</p>
  <p>Credentials are combined as <code>username:password</code>, then base64 encoded:</p>
  <div class="code-card" style="margin:0.7rem 0 0.9rem 0;">
    <pre>Basic base64Encode(username:password)
Authorization: Basic am9obkBzbWl0aC5jb206MTIzNDU2Nw==</pre>
  </div>
  <p style="font-weight:700; margin-bottom:0.35rem;">Security Warning:</p>
  <ul class="bullet-tight">
    <li>Credentials are sent as base64-encoded plain text.</li>
    <li>Susceptible to interception.</li>
    <li><strong>Use only with TLS/mTLS for additional protection.</strong></li>
  </ul>
</div>

<!-- Notes: Let's talk about Basic Authentication, one of the oldest and simplest forms of API authentication. It works by taking a user’s credentials—just a username and a password—combining them with a colon in between, and base64 encoding the result. This string is then sent in the Authorization header of the request. As shown in the example here, anyone with access to that string could decode it and gain access, so the main risk is that it’s essentially plain text over the wire. Because of this, we strongly advise using Basic Auth only over secure channels like TLS, and ideally combine it with additional security layers like mutual TLS (mTLS) for client certificate verification. In most modern use cases, we prefer more secure alternatives like OAuth2 or JWT, but Basic Auth can still be useful for simple internal integrations where risk is minimal and the communication is secure. -->
