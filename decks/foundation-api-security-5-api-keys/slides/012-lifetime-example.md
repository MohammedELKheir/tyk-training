---
id: foundation-api-security-5-api-keys/012-lifetime-example
deck_id: foundation-api-security-5-api-keys
order: 12
slug: lifetime-example
title: "Lifetime Example"
summary: "Example: \"session_lifetime\": 86400 → Token deleted from Redis after 24 hours of creation. ⚠️ Use session_lifetime_respects_key_expiration: true to prevent early deletion"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/013-key-lifetime-precedence-summary]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Lifetime Example

<div style="margin-top:1.25rem; color:#111827; max-width:860px;">
  <p style="margin:0 0 1.25rem 0; font-size:1.3rem;">Example:</p>
  <p style="margin:0 0 1.4rem 0; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d; font-size:1.38rem;">"session_lifetime": 86400</p>
  <p style="margin:0 0 1.6rem 0; font-size:1.18rem;">→ Token deleted from Redis after 24 hours of creation.</p>
  <p style="margin:0; font-size:1.18rem; line-height:1.45;">
    ⚠️ Use <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">session_lifetime_respects_key_expiration: true</span> to prevent early deletion.
  </p>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
