---
id: architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas/003-circuit-breaker-parameters
deck_id: architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas
order: 3
slug: circuit-breaker-parameters
title: "Circuit Breaker Parameters"
summary: "Parameter Purpose enabled Turns the middleware on or off for this operation threshold The error rate limit (0.0–1.0) that trips the breaker sampleSize Minimum # of requests in the"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas/004-example-full-tyk-oas-api-definition]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">Circuit Breaker Parameters</h2>

<table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
  <thead>
    <tr style="background:#f0f0f0;">
      <th style="padding:12px 16px; text-align:left; color:#5900CB; font-weight:bold; border-bottom:2px solid #ddd; width:35%;">Parameter</th>
      <th style="padding:12px 16px; text-align:left; color:#5900CB; font-weight:bold; border-bottom:2px solid #ddd;">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">enabled</td>
      <td style="padding:10px 16px; color:#03031C;">Turns the middleware on or off for this operation</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">threshold</td>
      <td style="padding:10px 16px; color:#03031C;">The error rate limit (0.0–1.0) that trips the breaker</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">sampleSize</td>
      <td style="padding:10px 16px; color:#03031C;">Minimum # of requests in the 10s rolling window before breaker can trip</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">coolDownPeriod</td>
      <td style="padding:10px 16px; color:#03031C;">How long (in seconds) the breaker remains open once tripped</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">halfOpenStateEnabled</td>
      <td style="padding:10px 16px; color:#03031C;">Enables probing mode to restore service before cooldown ends</td>
    </tr>
  </tbody>
</table>

<!-- Notes: Let's break down the configuration fields:
threshold is your error rate trigger, sampleSize sets how many requests must happen before checking.
Once tripped, the breaker stays open for the coolDownPeriod.
Enabling halfOpenStateEnabled makes Tyk periodically check if the upstream is back without waiting the full cooldown. -->
