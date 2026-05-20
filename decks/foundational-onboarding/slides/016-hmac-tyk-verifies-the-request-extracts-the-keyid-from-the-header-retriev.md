---
id: foundational-onboarding/016-hmac-tyk-verifies-the-request-extracts-the-keyid-from-the-header-retriev
deck_id: foundational-onboarding
order: 16
slug: hmac-tyk-verifies-the-request-extracts-the-keyid-from-the-header-retriev
title: "HMAC Tyk verifies the request: Extracts the keyId from the header Retrieves the"
summary: "secret key from Redis Recreates the HMAC signature based on the request’s date header If the generated signature matches the one in the request, access is granted Creating HMAC key"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/017-hmac-upstream-signing-tyk-takes-the-request-it-s-about-to-send-upstream]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---
<h1 style="font-size:2rem; font-weight:700; color:#5900CB; margin-bottom:1rem;">HMAC</h1>

<div style="font-size:1.05rem; line-height:1.9; color:#333; margin-top:0.5rem;">
<ul style="list-style:none; padding-left:0;">
<li style="margin-bottom:0.6rem;">Tyk verifies the request:</li>
<ul style="padding-left:1.5rem; margin-bottom:0.8rem;">
<li style="list-style:disc;">Extracts the keyId from the header</li>
<li style="list-style:disc;">Retrieves the secret key from Redis</li>
<li style="list-style:disc;">Recreates the HMAC signature based on the request’s date header</li>
<li style="list-style:disc;">If the generated signature matches the one in the request, access is granted</li>
</ul>
<li style="margin-bottom:0.6rem;">Creating HMAC keys is the same as creating regular access tokens</li>
<li>Tyk generates a secret key for the key owner to be stored</li>
</ul>
</div>
