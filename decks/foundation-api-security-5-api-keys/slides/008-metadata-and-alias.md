---
id: foundation-api-security-5-api-keys/008-metadata-and-alias
deck_id: foundation-api-security-5-api-keys
order: 8
slug: metadata-and-alias
title: "Metadata & Alias"
summary: "Metadata Key/value pairs for user context (e.g., user_id, email, plan_type) Can be injected into: Headers URL rewrites Request/Response transforms Virtual Endpoints Used for person"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/009-session-metadata-in-action]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Metadata & Alias

<div style="margin-top:0.65rem; font-size:1.08rem; line-height:1.5; color:#111827;">
  <p style="font-size:1.12rem; margin:0 0 0.55rem 0;">Metadata</p>
  <ul style="padding-left:2rem; margin:0;">
    <li>Key/value pairs for user context (e.g., user_id, email, plan_type)</li>
    <li>Can be injected into:</li>
  </ul>
  <ul style="padding-left:4rem; margin:0.15rem 0 0 0; list-style-type:circle;">
    <li>Headers</li>
    <li>URL rewrites</li>
    <li>Request/Response transforms</li>
    <li>Virtual Endpoints</li>
  </ul>
  <ul style="padding-left:2rem; margin:0.3rem 0 0 0;">
    <li>Used for personalization, validation, or upstream enrichment.</li>
  </ul>

  <p style="font-size:1.12rem; margin:1rem 0 0.55rem 0;">Alias</p>
  <ul style="padding-left:2rem; margin:0;">
    <li>Human-readable identifier for a token</li>
    <li>Appears in logs and analytics (important because tokens are hashed in Redis)</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
