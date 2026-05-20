---
id: foundational-onboarding/028-rate-limiting-2
deck_id: foundational-onboarding
order: 28
slug: rate-limiting-2
title: "**Rate-Limiting**"
summary: "Key and Policy configuration is via the rate and per properties: rate is the number of requests per is the number seconds Per-API rate limits can also be defined, with separate rat"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/029-rate-limiting-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Rate-Limiting**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>Key and Policy configuration is via the rate and per properties:
      <ul>
        <li>rate is the number of requests</li>
        <li>per is the number seconds</li>
      </ul>
    </li>
    <li>Per-API rate limits can also be defined, with separate rate and per properties for each API, stored within the access_rights section</li>
    <li>API Definition configuration uses the same properties, but stores them within the global_rate_limit property:
      <ul>
        <li>global_rate_limit.rate and global_rate_limit.per</li>
      </ul>
    </li>
  </ul>
</div>
