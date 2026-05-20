---
id: foundation-api-security-5-api-keys/011-key-lifetime-and-expiry
deck_id: foundation-api-security-5-api-keys
order: 11
slug: key-lifetime-and-expiry
title: "Key Lifetime and Expiry"
summary: "Tyk distinguishes between: Expiry: token can’t be used (but still in Redis) Lifetime: how long token stays in Redis before deletion Controlling Key Lifetime You can control key del"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/012-lifetime-example]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Lifetime and Expiry

<div style="margin-top:0.9rem; font-size:1.12rem; line-height:1.55; color:#111827; max-width:860px;">
  <p style="margin:0 0 0.9rem 0;">Tyk distinguishes between:</p>
  <ul style="padding-left:2rem; margin:0 0 1.45rem 0;">
    <li>Expiry: token can’t be used (but still in Redis)</li>
    <li>Lifetime: how long token stays in Redis before deletion</li>
  </ul>

  <p style="margin:0; font-size:1.35rem; font-weight:800;">Controlling Key Lifetime</p>
  <p style="margin:0.15rem 0 0.9rem 0;">You can control key deletion at:</p>
  <ol style="padding-left:2.2rem; margin:0 0 1.2rem 0;">
    <li>API level → <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">session_lifetime</span> in API definition</li>
    <li>Gateway level → <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">global_session_lifetime</span> in <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">tyk.conf</span></li>
  </ol>

  <p style="margin:0; font-size:1.08rem;">Note: a <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">0</span> value means infinite lifetime (never deleted).</p>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
