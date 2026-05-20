---
id: foundation-api-security-5-api-keys/009-session-metadata-in-action
deck_id: foundation-api-security-5-api-keys
order: 9
slug: session-metadata-in-action
title: "Session Metadata in Action"
summary: "Metadata can be used by: URL Rewrite Header Transformations Body Transformations Virtual Endpoints Custom Plugins Example use case: Inject meta_data.user_email into a header for up"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/010-expiry-vs-invalidation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Session Metadata in Action

<div style="margin-top:0.95rem; font-size:1.18rem; line-height:1.6; color:#111827;">
  <p style="margin:0 0 0.55rem 0;">Metadata can be used by:</p>
  <ul style="padding-left:2rem; margin:0 0 1.1rem 0;">
    <li>URL Rewrite</li>
    <li>Header Transformations</li>
    <li>Body Transformations</li>
    <li>Virtual Endpoints</li>
    <li>Custom Plugins</li>
  </ul>
  <p style="margin:0 0 0.55rem 0;">Example use case:</p>
  <p style="margin:0; font-size:1.15rem;">
    Inject <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">meta_data.user_email</span> into a header for upstream logging.
  </p>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
