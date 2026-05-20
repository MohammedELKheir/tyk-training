---
id: foundation-api-security-8-rate-limiting-scopes/004-endpoint-level-rate-limiting
deck_id: foundation-api-security-8-rate-limiting-scopes
order: 4
slug: endpoint-level-rate-limiting
title: "Endpoint-Level Rate Limiting"
summary: "Endpoint-level rate limiting allows you to control how often a specific path or function in your API can be accessed Helps protect critical or sensitive operations from being overl"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="margin:0 0 1.45rem 0; font-size:3.45rem; line-height:1.03; font-weight:800; color:#5d11d4; letter-spacing:-0.03em; border:0;">Endpoint-Level Rate Limiting</h1>

<div class="body-copy" style="max-width:925px; margin-left:0.45rem; font-size:1rem; line-height:1.48;">
  <p style="margin:0 0 1.45rem 0;">Endpoint-level rate limiting allows you to control how often a specific path or function in your API can be accessed</p>
  <p style="margin:0 0 0.1rem 0;">Helps protect critical or sensitive operations from being overloaded or abused.</p>
  <ul style="list-style-type:circle; margin:0 0 1.45rem 1.1rem; padding-left:1.2rem;">
    <li>Example: User 123 can only make 10 req/min to checkout/pay</li>
  </ul>
  <p style="margin:0;">In Tyk, you can set this under key-level policies by defining custom limits per endpoint.</p>
</div>

<div class="tyk-mini-brand"><span class="mark"></span><span>Tyk</span></div>
<div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>

<!-- Notes: Now let’s dive one level deeper — into endpoint-level rate limiting.
This type of rate limiting lets you control how often a specific path or function in your API can be accessed. So instead of limiting an entire API or a whole user, you can target just one endpoint.
Why is this useful?
It helps protect critical or sensitive operations from being overloaded — such as payment gateways, account updates, or resource-intensive database queries.
Here’s a simple example:
You might allow a user to make 10 requests per minute to the /checkout/pay endpoint — even if they’re allowed more requests overall.
In Tyk, you configure this under key-level policies, where you can define custom limits for individual endpoints. -->
