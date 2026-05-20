---
id: custom-plugins-2025/004-custom-middleware
deck_id: custom-plugins-2025
order: 4
slug: custom-middleware
title: "Custom Middleware"
summary: "Hook Type Plugin Type Phase Execution Details Common Use Case Pre (Request) Request Plugin HTTP Request Before reverse proxy First middleware to execute before proxying. IP rate li"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/005-plugin-types]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Custom Middleware</h1>

<table style="width:100%; border-collapse:collapse; font-size:0.66rem; color:#03031C;">
  <thead>
    <tr style="background:#6d6d6d; color:white;">
      <th style="padding:0.45rem; text-align:left; border:1px solid #cfcfcf;">Hook Type</th>
      <th style="padding:0.45rem; text-align:left; border:1px solid #cfcfcf;">Plugin Type</th>
      <th style="padding:0.45rem; text-align:left; border:1px solid #cfcfcf;">Phase</th>
      <th style="padding:0.45rem; text-align:left; border:1px solid #cfcfcf;">Execution</th>
      <th style="padding:0.45rem; text-align:left; border:1px solid #cfcfcf;">Details</th>
      <th style="padding:0.45rem; text-align:left; border:1px solid #cfcfcf;">Common Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Pre (Request)</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Request Plugin</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">HTTP Request</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Before reverse proxy</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">First middleware to execute before proxying.</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">IP rate limiting or request enrichment.</td>
    </tr>
    <tr style="background:#fafafa;">
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Authentication</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Auth Plugin</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">HTTP Request</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Before reverse proxy</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Replaces default authentication flow.</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Custom auth against identity providers or legacy systems.</td>
    </tr>
    <tr>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Post-Auth (Request)</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Auth Plugin</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">HTTP Request</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Before reverse proxy</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Runs after authentication for extra checks.</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Authorization and role or permission validation.</td>
    </tr>
    <tr style="background:#fafafa;">
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Post (Request)</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Request Plugin</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">HTTP Request</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Before reverse proxy</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Final request phase before upstream.</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Header injection, payload transforms, tracking IDs.</td>
    </tr>
    <tr>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Response</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Response Plugin</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">HTTP Response</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">After reverse proxy</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Modifies upstream response before client delivery.</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Masking sensitive data, formatting JSON, adding cache headers.</td>
    </tr>
    <tr style="background:#fafafa;">
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Analytics</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Analytics Plugin</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Request/Response</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">After reverse proxy</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Final middleware for logging and analytics.</td>
      <td style="padding:0.42rem; border:1px solid #d8d8d8;">Obfuscating sensitive data in logs.</td>
    </tr>
  </tbody>
</table>

<!-- Notes: Overview of the Table:
“Here, I’ve summarized the key middleware hooks, their purpose, and common use cases.
Pre (Request) runs before reverse proxying and is often used for rate limiting or request enrichment.
Authentication lets you replace Tyk’s default auth flow with your own.
Post-Auth runs after auth but before proxying, which is useful for extra authorization checks.
Post (Request) is the last chance to modify a request before it goes upstream.
Response runs after the upstream sends data back, letting you shape the response.
Analytics is for logging and analytics logic, often including data masking.
By using these hooks, you gain control over the full request and response lifecycle.” -->
