---
id: foundational-onboarding/027-rate-limiting
deck_id: foundational-onboarding
order: 27
slug: rate-limiting
title: "**Rate-Limiting**"
summary: "A rate limit is a short-term restriction on the number of requests an API client can make to an API Defined as a number of requests over a number of seconds Exceeding the rate limi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/028-rate-limiting-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Rate-Limiting**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>A rate limit is a short-term restriction on the number of requests an API client can make to an API</li>
    <li>Defined as a number of requests over a number of seconds</li>
    <li>Exceeding the rate limit results in the request being blocked</li>
    <li>Can be applied in three ways, to suit different needs:
      <ul>
        <li>Keys, for individual rate limits</li>
        <li>Policies, for centralised control of rate limits across many Keys and APIs</li>
        <li>APIs, for aggregated rate limits across all API clients</li>
      </ul>
    </li>
  </ul>
</div>
