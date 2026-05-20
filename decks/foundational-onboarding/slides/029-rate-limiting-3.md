---
id: foundational-onboarding/029-rate-limiting-3
deck_id: foundational-onboarding
order: 29
slug: rate-limiting-3
title: "**Rate-Limiting**"
summary: "Rate limiting can be disabled in two ways: Via the API definition: Set disable_rate_limit to true to disable rate limiting for all requests for the API Via the Key or Policy: Set r"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/030-rate-limiting-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Rate-Limiting**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>Rate limiting can be disabled in two ways:
      <ul>
        <li>Via the API definition: Set disable_rate_limit to true to disable rate limiting for all requests for the API</li>
        <li>Via the Key or Policy: Set rate to a value less than 1 to disable rate limiting for the individual Key or all keys related to the Policy</li>
      </ul>
    </li>
    <li>If either of these conditions is set then the related requests will no be subject to rate limiting</li>
  </ul>
</div>
