---
id: foundation-api-security-5-api-keys/005-api-keys
deck_id: foundation-api-security-5-api-keys
order: 5
slug: api-keys
title: "API Keys"
summary: "Underlying data structure for keys stored in Tyk (in Redis) Every auth type in the gateway will result in a structure like this existing under the hood. Can be hashed with a number"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/006-key-fields-explained-1-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# API Keys

<div style="display:flex; gap:1.6rem; align-items:flex-start; margin-top:0.8rem;">
  <div style="flex:1.1; font-size:1.1rem; line-height:1.65; color:#111827;">
    <ul style="padding-left:2rem; margin:0;">
      <li style="margin-bottom:0.8rem;">Underlying data structure for keys stored in Tyk (in Redis)</li>
      <li style="margin-bottom:0.8rem;">Every auth type in the gateway will result in a structure like this existing under the hood.</li>
      <li>Can be hashed with a number of algorithms i.e. murmur 64/128, sha1/256 or not at all.</li>
    </ul>
  </div>
  <div style="flex:0.98; display:flex; justify-content:flex-end;">
    <img src="./public/screenshots/image-6cecfed92e6e.png" style="width:100%; max-width:380px; border-radius:6px; box-shadow:0 8px 24px rgba(0,0,0,0.14);" />
  </div>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
