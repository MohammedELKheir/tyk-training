---
id: foundational-onboarding/039-quota-headers
deck_id: foundational-onboarding
order: 39
slug: quota-headers
title: "**Quota Headers**"
summary: "For requests subject to a quota, the Gateway will return headers in the response which provide the current status of the quota: X-Ratelimit-Limit: The original quota amount X-Ratel"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/040-quota-example]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Quota Headers**

<div style="font-size: 1.05rem; line-height: 1.7; margin-top: 1.5rem;">
  <p>For requests subject to a quota, the Gateway will return headers in the response which provide the current status of the quota:</p>
  <ul>
    <li>X-Ratelimit-Limit: The original quota amount</li>
    <li>X-Ratelimit-Remaining: The current quota remaining</li>
    <li>X-Ratelimit-Reset: The epoch from which the quota can renew</li>
  </ul>
  <p>These headers are not returned when a request is blocked due to exceeding the quota</p>
</div>
