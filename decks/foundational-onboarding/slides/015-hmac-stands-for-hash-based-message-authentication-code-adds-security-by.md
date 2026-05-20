---
id: foundational-onboarding/015-hmac-stands-for-hash-based-message-authentication-code-adds-security-by
deck_id: foundational-onboarding
order: 15
slug: hmac-stands-for-hash-based-message-authentication-code-adds-security-by
title: "HMAC Stands for Hash-Based Message Authentication Code Adds security by requirin"
summary: "g a signature with each request Uses a secret key that is never sent over the network Client creates a signature using a date header and a secret key: Base64Encode(HMAC-SHA1(\"date:"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/016-hmac-tyk-verifies-the-request-extracts-the-keyid-from-the-header-retriev]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---
<h1 style="font-size:2rem; font-weight:700; color:#5900CB; margin-bottom:1rem;">HMAC</h1>

<div style="background:#f0f0f0; border-radius:12px; padding:14px 18px; margin-top:0.5rem;">
<ul style="list-style:none; padding-left:0; font-size:1.05rem; line-height:1.9; color:#333;">
<li style="margin-bottom:0.5rem;">Stands for Hash-Based Message Authentication Code</li>
<li style="margin-bottom:0.5rem;">Adds security by requiring a signature with each request</li>
<li>Uses a secret key that is never sent over the network</li>
</ul>
</div>

<div style="background:#fff; border:1px solid #ddd; border-radius:8px; padding:10px 14px; margin-top:1rem; font-size:0.9rem;">
<p style="margin:0 0 0.3rem 0; color:#333;">Client creates a signature using a date header and a secret key:</p>
<p style="margin:0; font-family:monospace; color:#0569A9; word-break:break-all;">Base64Encode(HMAC-SHA1("date: Mon, 02 Jan 2006 15:04:05 MST", secret_key))</p>
</div>

<div style="background:#fff; border:1px solid #ddd; border-radius:8px; padding:10px 14px; margin-top:0.8rem; font-size:0.9rem;">
<p style="margin:0 0 0.3rem 0; color:#333;">request is sent with an Authorization header:</p>
<p style="margin:0; font-family:monospace; color:#0569A9; word-break:break-all; font-size:0.8rem;">Authorization: Signature keyId="hmac-key-1",algorithm="hmac-sha1",signature="Base64(HMAC-SHA1(signing string))“</p>
</div>
