---
id: foundation-api-security-5-api-keys/010-expiry-vs-invalidation
deck_id: foundation-api-security-5-api-keys
order: 10
slug: expiry-vs-invalidation
title: "Expiry vs Invalidation"
summary: "Term Meaning Expiry Token remains in Redis but is no longer valid — returns 401 Key has expired. Invalidation / Deletion Token is deleted from Redis — returns 400 Access disallowed"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/011-key-lifetime-and-expiry]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Expiry vs Invalidation

<div style="margin-top:1rem; color:#111827;">
  <div style="display:grid; grid-template-columns: 260px 1fr; row-gap:1.2rem; column-gap:2rem; font-size:1.08rem; line-height:1.45; align-items:start;">
    <div style="font-weight:700; text-align:center;">Term</div>
    <div style="font-weight:700; text-align:center;">Meaning</div>
    <div style="font-weight:700;">Expiry</div>
    <div>Token remains in Redis but is no longer valid — returns <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">401 Key has expired.</span></div>
    <div style="font-weight:700;">Invalidation / Deletion</div>
    <div>Token is deleted from Redis — returns <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">400 Access disallowed.</span></div>
  </div>

  <div style="margin-top:3rem; margin-left:2rem; max-width:780px;">
    <p style="font-weight:700; margin:0 0 0.55rem 0; font-size:1.05rem;">Important:</p>
    <p style="margin:0; font-size:1.08rem; line-height:1.45;">Developers who hardcode tokens may need expiry to notify renewal instead of full invalidation.</p>
  </div>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
