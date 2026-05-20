---
id: foundational-onboarding/024-policies
deck_id: foundational-onboarding
order: 24
slug: policies
title: "**Policies**"
summary: "Policies simplify the process of managing large quantities of keys, through the definition of standard rule sets A policy can have access rights to multiple APIs with the same auth"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/025-policies-encapsulation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Policies**

<div style="background: #f0f0f0; border-radius: 12px; padding: 12px 16px; margin-top: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
  <ul>
    <li>Policies simplify the process of managing large quantities of keys, through the definition of standard rule sets</li>
    <li>A policy can have access rights to multiple APIs with the same authentication</li>
    <li>When a Policy is associated with a Key, the Policy rules override those in the Key:
      <ul>
        <li>Rate limiting, Throttling and Quota</li>
        <li>Access Rights</li>
        <li>Expiry</li>
        <li>Tags</li>
        <li>Metadata</li>
        <li>GraphQL query depth</li>
      </ul>
    </li>
  </ul>
</div>
