---
id: foundation-api-security-8-rate-limiting-scopes/003-key-level-rate-limiting
deck_id: foundation-api-security-8-rate-limiting-scopes
order: 3
slug: key-level-rate-limiting
title: "Key-Level Rate Limiting"
summary: "Controlling each user or app: Limits how many requests each individual user or API key can make Prevents any one user from hogging the system or abusing their access Types of Key-L"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-8-rate-limiting-scopes/004-endpoint-level-rate-limiting]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="margin:0 0 1.25rem 0; font-size:3.45rem; line-height:1.03; font-weight:800; color:#5d11d4; letter-spacing:-0.03em; border:0;">Key-Level Rate Limiting</h1>

<p style="margin:0 0 1.1rem 0.72rem; font-size:1rem; color:#55597d;">Controlling each user or app:</p>

<ul style="margin:0 0 1.45rem 2.2rem; padding-left:0.8rem; max-width:930px; font-size:0.98rem; line-height:1.42; color:#55597d;">
  <li>Limits how many requests each individual user or API key can make</li>
  <li>Prevents any one user from hogging the system or abusing their access</li>
</ul>

<p style="margin:0 0 1rem 0.72rem; font-size:1rem; color:#55597d;">Types of Key-Level Limits:</p>

<ul style="margin:0 0 0 2.2rem; padding-left:0.8rem; max-width:930px; font-size:0.98rem; line-height:1.42; color:#55597d;">
  <li style="margin-bottom:0.35rem;"><strong>Global (all APIs)</strong> – Limit how many total requests this user/API key can make across everything they have access to
    <ul style="list-style-type:circle; margin-top:0.15rem; padding-left:1.55rem;">
      <li>Example: “User123 can only make 500 requests per hour total.”</li>
    </ul>
  </li>
  <li style="margin-bottom:0.35rem;"><strong>Per API</strong> – Limit requests to one specific API
    <ul style="list-style-type:circle; margin-top:0.15rem; padding-left:1.55rem;">
      <li>Example: “User123 can only make 200 requests per hour to the Billing API.”</li>
    </ul>
  </li>
  <li><strong>Per Endpoint</strong> – Limit requests to a specific path or function
    <ul style="list-style-type:circle; margin-top:0.15rem; padding-left:1.55rem;">
      <li>Example: “User123 can only call /checkout/pay 10 times per minute.”</li>
    </ul>
  </li>
</ul>

<div class="tyk-mini-brand"><span class="mark"></span><span>Tyk</span></div>
<div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>

<!-- Notes: While API-level rate limiting protects the entire API, key-level rate limiting focuses on individual users or API keys.
Think of it like giving each user their own quota — a personal limit on how many requests they can make.
This helps prevent any one user from hogging resources or overwhelming the system. You can think of it like giving each person a ticket that allows them, say, 100 entries per hour — once they use them all, they have to wait.
There are a few ways to apply key-level limits:
Global — This sets a total request limit across all APIs the user can access.
For example: “User123 can only make 500 requests per hour, no matter which APIs they call.”
Per API — This narrows it down to just one API.
Example: “User123 can only make 200 requests per hour to the Billing API.”
Per Endpoint — This goes even more granular. You can limit specific functions or paths.
Example: “User123 can only call /checkout/pay 10 times per minute.” -->
