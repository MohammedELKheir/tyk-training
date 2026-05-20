---
id: foundation-api-security-9-rate-limiting-algorithms/006-fixed-window-rate-limiter-fixed-window-rate-limiter-will-limit-the-numbe
deck_id: foundation-api-security-9-rate-limiting-algorithms
order: 6
slug: fixed-window-rate-limiter-fixed-window-rate-limiter-will-limit-the-numbe
title: "Fixed Window Rate Limiter Fixed Window Rate Limiter will limit the number of req"
summary: "uests in a particular window in time. Once the defined rate limit has been reached, the requests will be blocked for the remainder of the configured window duration. Uses a simple"
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

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
<h1 style="margin:0; color:#5E17D8; font-size:3.9rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Fixed Window Rate Limiter</h1>
<div style="margin-top:1.55rem; margin-left:1rem; width:800px; font-size:0.82rem; line-height:1.34; color:#111;">
<p style="margin:0 0 0.75rem 0;">Fixed Window Rate Limiter will limit the number of requests in a particular window in time.</p>
<p style="margin:0 0 0.75rem 0;">Once the defined rate limit has been reached, the requests will be blocked for the remainder of the configured window duration.</p>
<ul style="margin:0 0 0.9rem 1.7rem; padding:0; line-height:1.32;">
<li style="margin:0.1rem 0;">Uses a simple counter per time window (e.g., per minute)</li>
<li style="margin:0.1rem 0;">Once the limit is hit, it blocks all further requests for that window</li>
</ul>
<p style="margin:0 0 0.2rem 0;">Example:</p>
<ul style="margin:0 0 0 1.7rem; padding:0; line-height:1.3;">
<li style="margin:0.1rem 0;">Set 100 requests per minute
  <ul style="margin:0.12rem 0 0 1.55rem; padding:0; line-height:1.28;">
    <li style="margin:0.08rem 0;">Client sends 100 quickly → they’re blocked for the rest of the minute</li>
    <li style="margin:0.08rem 0;">New minute starts → they can send 100 again</li>
  </ul>
</li>
</ul>
</div>
<img src="./public/icons/tyk-logo-light.png" style="position:absolute; left:0.2rem; bottom:-0.2rem; width:24px; height:auto; display:block;" />
<img src="./public/icons/tyk-logo-badge.png" style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:auto; display:block;" />
</div>

<!-- Notes: Now let’s dive one level deeper — into endpoint-level rate limiting.

This type of rate limiting lets you control how often a specific path or function in your API can be accessed. So instead of limiting an entire API or a whole user, you can target just one endpoint.

Why is this useful?
It helps protect critical or sensitive operations from being overloaded — such as payment gateways, account updates, or resource-intensive database queries.

Here’s a simple example:
You might allow a user to make 10 requests per minute to the /checkout/pay endpoint — even if they’re allowed more requests overall.

In Tyk, you configure this under key-level policies, where you can define custom limits for individual endpoints. -->
