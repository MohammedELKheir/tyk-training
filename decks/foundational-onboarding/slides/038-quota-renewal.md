---
id: foundational-onboarding/038-quota-renewal
deck_id: foundational-onboarding
order: 38
slug: quota-renewal
title: "**Quota Renewal**"
summary: "Quotas are renewed on the first request after the quota renewal epoch: The quota remaining is reset to the original quota value The new quota renewal epoch is calculated as the cur"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/039-quota-headers]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Quota Renewal**

<div style="font-size: 1.05rem; line-height: 1.7; margin-top: 1.5rem;">
  <p>Quotas are renewed on the first request after the quota renewal epoch:</p>
  <ul>
    <li>The quota remaining is reset to the original quota value</li>
    <li>The new quota renewal epoch is calculated as the current time of the request plus the quota period</li>
    <li>As the new epoch is calculated using the time of the request which triggers the renewal, the quota 'window' will move forward at each renewal</li>
  </ul>
</div>
