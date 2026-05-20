---
id: foundational-onboarding/036-quota-configuration
deck_id: foundational-onboarding
order: 36
slug: quota-configuration
title: "**Quota Configuration**"
summary: "Quotas are configured on a Key or Policy via these properties: quota_max is the amount of quota initially provided quota_renewal_rate is used to calculate the epoch after which the"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/037-quota-enforcement]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Quota Configuration**

<div style="font-size: 1.05rem; line-height: 1.7; margin-top: 1.5rem;">
  <p>Quotas are configured on a Key or Policy via these properties:</p>
  <ul>
    <li>quota_max is the amount of quota initially provided</li>
    <li>quota_renewal_rate is used to calculate the epoch after which the quota can be reset to the maximum value</li>
    <li>Policies can define separate quotas for each API they grant access to</li>
  </ul>
  <p>A Key will track the quota state via these properties:</p>
  <ul>
    <li>quota_remaining is the amount of quota remaining</li>
    <li>quota_renews is the epoch after which the quota can be renewed</li>
  </ul>
</div>
