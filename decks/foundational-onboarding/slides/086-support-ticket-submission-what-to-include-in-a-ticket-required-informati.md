---
id: foundational-onboarding/086-support-ticket-submission-what-to-include-in-a-ticket-required-informati
deck_id: foundational-onboarding
order: 86
slug: support-ticket-submission-what-to-include-in-a-ticket-required-informati
title: "SUPPORT TICKET SUBMISSION What to include in a ticket Required information when"
summary: "submitting tickets: Gateway down Gateway debug logs Gateway configuration and/or env variables Response of {Gateway}/hello Dashboard down Dashboard Configuration / env variables Da"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/087-retrieving-logs-retrieve-logs-depending-on-your-os-tyk-usually-stores-lo]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


<p style="color:#8438FA; font-size:0.75rem; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">SUPPORT TICKET SUBMISSION</p>

<h2 style="color:#03031C; font-size:1.8rem; font-weight:bold; margin-bottom:0.8rem;">What to include in a ticket</h2>

<p style="color:#03031C; font-size:0.85rem; margin-bottom:0.6rem;">Required information when submitting tickets:</p>

<div style="display:flex; gap:0.8rem;">
  <!-- Left: Yellow-bordered ticket type boxes -->
  <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
    <div style="border:2px solid #FFD93D; border-radius:8px; padding:8px 10px; background:#FFFDE7;">
      <p style="font-weight:bold; margin:0 0 4px 0; color:#03031C; font-size:0.82rem;">Gateway down</p>
      <ul style="margin:0; padding-left:1rem; font-size:0.72rem; color:#333; line-height:1.35;">
        <li>Gateway debug logs</li>
        <li>Gateway configuration and/or env variables</li>
        <li>Response of <code>{Gateway}/hello</code></li>
      </ul>
    </div>
    <div style="border:2px solid #FFD93D; border-radius:8px; padding:8px 10px; background:#FFFDE7;">
      <p style="font-weight:bold; margin:0 0 4px 0; color:#03031C; font-size:0.82rem;">Dashboard down</p>
      <ul style="margin:0; padding-left:1rem; font-size:0.72rem; color:#333; line-height:1.35;">
        <li>Dashboard Configuration / env variables</li>
        <li>Dashboard Debug Logs</li>
        <li>Verification if your Mongo/ Postgres instance is up and running</li>
      </ul>
    </div>
    <div style="border:2px solid #FFD93D; border-radius:8px; padding:8px 10px; background:#FFFDE7;">
      <p style="font-weight:bold; margin:0 0 4px 0; color:#03031C; font-size:0.82rem;">API down</p>
      <ul style="margin:0; padding-left:1rem; font-size:0.72rem; color:#333; line-height:1.35;">
        <li>API definition(s) (with plugins or bundles)</li>
        <li>Request API call made alongside the API response</li>
      </ul>
    </div>
  </div>
  <!-- Right: Yellow-highlighted general ticket list -->
  <div style="flex:1;">
    <p style="color:#03031C; font-size:0.82rem; margin-bottom:0.35rem; font-weight:600;">Things to include in general tickets:</p>
    <div style="border:2px solid #FFD93D; border-radius:8px; padding:8px 10px; background:#FFFDE7;">
      <ul style="margin:0; padding-left:1rem; font-size:0.74rem; color:#333; line-height:1.55;">
        <li>Gateway/ Dashboard logs (debug mode)</li>
        <li>Response of <code>{gateway}/hello</code> endpoint</li>
        <li>Expected behaviour versus actual behaviour</li>
        <li>Replicable steps</li>
        <li>API definition with any plugins/bundles</li>
      </ul>
    </div>
  </div>
</div>
