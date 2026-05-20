---
id: foundational-onboarding/033-throttling-2
deck_id: foundational-onboarding
order: 33
slug: throttling-2
title: "**Throttling**"
summary: "Throttling can be configured on Keys and Policies by setting a throttling interval and retry limit: Interval: Number of seconds to wait between retries, defined by the throttle_int"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/034-throttling-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Throttling**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>Throttling can be configured on Keys and Policies by setting a throttling interval and retry limit:</li>
    <li>Interval: Number of seconds to wait between retries, defined by the throttle_interval property</li>
    <li>Retry limit: Number of retries to attempt, defined by the throttle_retry_limit property</li>
    <li>Policies can define separate throttling configurations for each API they grant access to</li>
    <li>Setting the properties to -1 will disable throttling, which is the default setting</li>
  </ul>
</div>
