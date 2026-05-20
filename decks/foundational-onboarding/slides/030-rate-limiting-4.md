---
id: foundational-onboarding/030-rate-limiting-4
deck_id: foundational-onboarding
order: 30
slug: rate-limiting-4
title: "**Rate-Limiting**"
summary: "Rate limit calculation is based on the datetime of the request: Previous requests within the rate limit period are totalled If total exceeds the maximum allowed in the period, the"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/031-rate-limiting-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Rate-Limiting**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>Rate limit calculation is based on the datetime of the request:
      <ul>
        <li>Previous requests within the rate limit period are totalled</li>
        <li>If total exceeds the maximum allowed in the period, the request is blocked</li>
      </ul>
    </li>
    <li>API clients which exceed the rate limit receive this response:
      <ul>
        <li>HTTP status code: 429 Too Many Requests</li>
        <li>Body: rate limit exceeded</li>
      </ul>
    </li>
    <li>A Tyk 'rate limit exceeded' system event is also triggered</li>
  </ul>
</div>
