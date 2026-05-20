---
id: foundational-onboarding/032-throttling
deck_id: foundational-onboarding
order: 32
slug: throttling
title: "**Throttling**"
summary: "Throttling enables requests which exceed their rate limit to be retried by the API Gateway The Gateway will retry the request a number of times until it either succeeds or fails to"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/033-throttling-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Throttling**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>Throttling enables requests which exceed their rate limit to be retried by the API Gateway</li>
    <li>The Gateway will retry the request a number of times until it either succeeds or fails too many times</li>
    <li>This process can reduce the number of rate limit error responses received by API Clients</li>
    <li>The throttling process is hidden from the API Client, as their connection is kept open during the throttling process</li>
  </ul>
</div>
