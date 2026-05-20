---
id: foundation-api-security-9-rate-limiting-algorithms/004-distributed-rate-limiter-drl-think-of-this-like-having-buckets-on-each-g
deck_id: foundation-api-security-9-rate-limiting-algorithms
order: 4
slug: distributed-rate-limiter-drl-think-of-this-like-having-buckets-on-each-g
title: "Distributed Rate Limiter (DRL) Think of this like having buckets on each gateway"
summary: ", and you divide the total allowed requests between them. Implemented using token bucket implementation that does not use redis Divides the configured rate limit between the number"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-9-rate-limiting-algorithms/005-redis-rate-limiter-rrl-this-algorithm-implements-a-sliding-window-log-al]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
<h1 style="margin:0; color:#5E17D8; font-size:3.88rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Distributed Rate Limiter (DRL)</h1>
<div style="margin-top:1.55rem; margin-left:0.92rem; width:835px; font-size:0.83rem; line-height:1.35; color:#111;">
<p style="margin:0 0 0.75rem 0;">Think of this like having buckets on each gateway, and you divide the total allowed requests between them.</p>
<ul style="margin:0 0 0.95rem 1.7rem; padding:0; line-height:1.34;">
<li style="margin:0.1rem 0;">Implemented using token bucket implementation that does not use redis</li>
<li style="margin:0.1rem 0;">Divides the configured rate limit between the number of gateway instances</li>
</ul>
<p style="margin:0 0 0.22rem 0;">Example:</p>
<ul style="margin:0 0 0.95rem 1.7rem; padding:0; line-height:1.34;">
<li style="margin:0.1rem 0;">You set 100 requests per minute, and you have 2 gateways.
  <ul style="margin:0.1rem 0 0 1.55rem; padding:0; line-height:1.32;">
    <li style="margin:0.08rem 0;">Each gateway gets 50 requests/minute.</li>
  </ul>
</li>
</ul>
<p style="margin:0;">If traffic is evenly distributed, this works great. But if one gateway gets more traffic than the other (due to sticky sessions or bad load balancing), it may rate limit early, even though the other gateway is idle.</p>
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
