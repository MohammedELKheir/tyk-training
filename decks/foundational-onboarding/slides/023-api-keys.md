---
id: foundational-onboarding/023-api-keys
deck_id: foundational-onboarding
order: 23
slug: api-keys
title: "**API Keys**"
summary: "Underlying data structure for keys stored in Tyk (in Redis) Every auth type in the gateway will result in a structure like this existing under the hood. Can be hashed with a number"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/024-policies]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **API Keys**

<div style="display: flex; gap: 2rem; margin-top: 1rem;">
  <div style="flex: 2; font-size: 1.05rem; line-height: 1.7;">
    <div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px;">
      <ul>
        <li>Underlying data structure for keys stored in Tyk (in Redis)</li>
        <li>Every auth type in the gateway will result in a structure like this existing under the hood.</li>
        <li>Can be hashed with a number of algorithms i.e. murmur 64/128, sha1/256 or not at all.</li>
      </ul>
    </div>
  </div>
  <div style="flex: 3;">
    <img src="./images/icons/api-keys-structure.png" style="width: 100%; max-height: 400px; object-fit: contain;" />
  </div>
</div>
