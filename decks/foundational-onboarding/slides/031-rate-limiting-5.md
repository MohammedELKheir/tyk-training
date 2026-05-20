---
id: foundational-onboarding/031-rate-limiting-5
deck_id: foundational-onboarding
order: 31
slug: rate-limiting-5
title: "**Rate-Limiting**"
summary: "For situations where a rate limit is defined on both a Key/Policy and also the API Definition: If the request causes any of the various rate limits to be exceed, the Gateway will b"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/032-throttling]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Rate-Limiting**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>For situations where a rate limit is defined on both a Key/Policy and also the API Definition:</li>
    <li>If the request causes any of the various rate limits to be exceed, the Gateway will block the request</li>
    <li>This means that an API client may be within their Key/Policy rate limit, but if their request causes the API Definition's global rate limit to be exceeded, then the request is blocked</li>
  </ul>
</div>
