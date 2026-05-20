---
id: foundational-onboarding/037-quota-enforcement
deck_id: foundational-onboarding
order: 37
slug: quota-enforcement
title: "**Quota Enforcement**"
summary: "Quota calculation is based on the amount of quota remaining: If the quota remaining is zero, the request is blocked Otherwise, the remaining quota is reduced by 1 API clients which"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/038-quota-renewal]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Quota Enforcement**

<div style="font-size: 1.05rem; line-height: 1.7; margin-top: 1.5rem;">
  <p>Quota calculation is based on the amount of quota remaining:</p>
  <ul>
    <li>If the quota remaining is zero, the request is blocked</li>
    <li>Otherwise, the remaining quota is reduced by 1</li>
  </ul>
  <p>API clients which have no quota remaining receive this response:</p>
  <ul>
    <li>HTTP status code: 403 Forbidden</li>
    <li>Body: quota exceeded</li>
    <li>A Tyk 'quota exceeded' system event is triggered</li>
    <li>If a quota renewal value is set to -1 then no quota is enforced</li>
  </ul>
</div>
