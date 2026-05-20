---
id: foundational-onboarding/017-hmac-upstream-signing-tyk-takes-the-request-it-s-about-to-send-upstream
deck_id: foundational-onboarding
order: 17
slug: hmac-upstream-signing-tyk-takes-the-request-it-s-about-to-send-upstream
title: "HMAC Upstream Signing Tyk takes the request it’s about to send upstream. It crea"
summary: "tes an HMAC signature of key parts of that request: (request-target) → the method and path. All the headers in the request. If there’s no Date header, Tyk adds one automatically (b"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/018-json-web-tokens-json-web-tokens-cryptographically-signed-claims-signed-b]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---
<h1 style="font-size:2rem; font-weight:700; color:#5900CB; margin-bottom:1rem;">HMAC</h1>

<div style="font-size:1.05rem; line-height:1.9; color:#333; margin-top:0.5rem;">
<ul style="list-style:none; padding-left:0;">
<li style="margin-bottom:0.6rem;">Upstream Signing</li>
<li style="margin-bottom:0.6rem;">Tyk takes the request it’s about to send upstream.</li>
<li style="margin-bottom:0.6rem;">It creates an HMAC signature of key parts of that request:</li>
<ul style="padding-left:1.5rem; margin-bottom:0.8rem;">
<li style="list-style:disc;">(request-target) &#8594; the method and path.</li>
<li style="list-style:disc;">All the headers in the request.</li>
</ul>
<li>If there’s no Date header, Tyk adds one automatically (because it’s required by the HMAC signing standard).</li>
</ul>
</div>
