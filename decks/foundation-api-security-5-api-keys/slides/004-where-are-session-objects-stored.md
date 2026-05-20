---
id: foundation-api-security-5-api-keys/004-where-are-session-objects-stored
deck_id: foundation-api-security-5-api-keys
order: 4
slug: where-are-session-objects-stored
title: "Where are Session Objects Stored?"
summary: "Stored in Redis (not MongoDB or Gateway memory). Stored as: <hashed_token_string> : <session_object_JSON> Tokens are hashed for security. Use Alias to identify sessions in logs and"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/005-api-keys]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Where are Session Objects Stored?

<div style="margin-top:0.8rem; font-size:1.15rem; line-height:1.65; color:#111827;">
  <ul style="padding-left:2rem; margin:0;">
    <li style="margin-bottom:0.45rem;">Stored in Redis (not MongoDB or Gateway memory).</li>
    <li>Stored as:</li>
  </ul>
  <div style="margin:1.05rem 0 1rem 2.7rem; font-family:Menlo, Monaco, Consolas, monospace; font-size:1.08rem; color:#15803d;">
    &lt;hashed_token_string&gt; : &lt;session_object_JSON&gt;
  </div>
  <ul style="padding-left:2rem; margin:0;">
    <li style="margin-bottom:0.45rem;">Tokens are hashed for security.</li>
    <li>Use Alias to identify sessions in logs and analytics.</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
