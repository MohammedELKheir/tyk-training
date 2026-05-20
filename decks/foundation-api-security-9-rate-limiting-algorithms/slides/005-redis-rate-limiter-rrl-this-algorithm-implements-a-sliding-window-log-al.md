---
id: foundation-api-security-9-rate-limiting-algorithms/005-redis-rate-limiter-rrl-this-algorithm-implements-a-sliding-window-log-al
deck_id: foundation-api-security-9-rate-limiting-algorithms
order: 5
slug: redis-rate-limiter-rrl-this-algorithm-implements-a-sliding-window-log-al
title: "Redis Rate Limiter (RRL) This algorithm implements a sliding window log algorith"
summary: "m Spike arrest: It won’t allow traffic again until the rate falls below the limit for a full window Uses a lot of Redis CPU, since every request is logged. Keeps a log of every req"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-9-rate-limiting-algorithms/006-fixed-window-rate-limiter-fixed-window-rate-limiter-will-limit-the-numbe]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
<h1 style="margin:0; color:#5E17D8; font-size:3.88rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Redis Rate Limiter (RRL)</h1>
<div style="margin-top:1.55rem; margin-left:0.9rem; width:820px; font-size:0.83rem; line-height:1.35; color:#111;">
<p style="margin:0 0 0.72rem 0;">This algorithm implements a sliding window log algorithm</p>
<ul style="margin:0 0 0.85rem 1.7rem; padding:0; line-height:1.32;">
<li style="margin:0.1rem 0;">Spike arrest:
  <ul style="margin:0.12rem 0 0 1.55rem; padding:0; line-height:1.3;">
    <li style="margin:0.08rem 0;">It won’t allow traffic again until the rate falls below the limit for a full window</li>
  </ul>
</li>
<li style="margin:0.1rem 0;">Uses a lot of Redis CPU, since every request is logged.</li>
<li style="margin:0.1rem 0;">Keeps a log of every request in Redis, If too many requests come in over the set time, it blocks them</li>
</ul>
<p style="margin:0 0 0.2rem 0;">Example:</p>
<ul style="margin:0 0 0 1.7rem; padding:0; line-height:1.3;">
<li style="margin:0.1rem 0;">You set 3000 requests/min.
  <ul style="margin:0.12rem 0 0 1.55rem; padding:0; line-height:1.28;">
    <li style="margin:0.08rem 0;">If a client sends 4000 requests in one minute, they get blocked.</li>
  </ul>
</li>
<li style="margin:0.1rem 0;">Even if they slow down, the system waits until the whole minute passes with fewer than 3000 requests before allowing access again.</li>
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
