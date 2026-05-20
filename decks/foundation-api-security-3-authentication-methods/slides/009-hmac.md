---
id: foundation-api-security-3-authentication-methods/009-hmac
deck_id: foundation-api-security-3-authentication-methods
order: 9
slug: hmac
title: "HMAC"
summary: "Stands for Hash-Based Message Authentication Code. Adds security by requiring a signature with each request. Uses a secret key that is never sent over the network. Signature creati"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/010-hmac-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# HMAC

<ul class="bullet-tight" style="font-size:0.95rem; line-height:1.4;">
  <li>Stands for Hash-Based Message Authentication Code.</li>
  <li>Adds security by requiring a signature with each request.</li>
  <li>Uses a secret key that is never sent over the network.</li>
</ul>

<div style="display:flex; gap:1rem; margin-top:0.8rem; align-items:flex-start;">
  <div style="flex:1;" class="code-card">
    <div class="section-label" style="margin-bottom:0.45rem;">Signature creation</div>
    <pre>Base64Encode(
  HMAC-SHA1(
    "date: Mon, 02 Jan 2006 15:04:05 MST",
    secret_key
  )
)</pre>
  </div>
  <div style="flex:1.1;" class="code-card">
    <div class="section-label" style="margin-bottom:0.45rem;">Authorization header</div>
    <pre>Authorization: Signature
  keyId="hmac-key-1",
  algorithm="hmac-sha1",
  signature="Base64(HMAC-SHA1(signing string))"</pre>
  </div>
</div>

<!-- Notes: HMAC stands for Hash-Based Message Authentication Code. It adds an extra layer of security by requiring the client to send a signature with every request. This signature proves the request is authentic, using a secret key that’s never sent over the network. The client generates a signature using the Date header and their secret key, then sends the request to Tyk including an Authorization header. Tyk validates the signature by recreating it using the same secret key. If the signatures match, the request is trusted and processed. If not, it’s rejected. -->
