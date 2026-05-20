---
id: foundation-api-security-9-rate-limiting-algorithms/002-why-multiple-algorithms-not-all-api-traffic-are-the-same-examples-apis-g
deck_id: foundation-api-security-9-rate-limiting-algorithms
order: 2
slug: why-multiple-algorithms-not-all-api-traffic-are-the-same-examples-apis-g
title: "Why Multiple Algorithms? Not all API traffic are the same. Examples: APIs get a"
summary: "lot off traffic APIs get bursts APIs need fair sharing APIs need to stay simple and light Tyk offers various algorithms Distributed Rate Limited (DRL) - Default Redis Rate Limiter"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-9-rate-limiting-algorithms/003-types-of-rate-limiting-the-gateway-implements-the-rate-limiter-of-which]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
<h1 style="margin:0; color:#5E17D8; font-size:3.9rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Why Multiple Algorithms?</h1>
<div style="margin-top:1.55rem; margin-left:0.85rem; width:740px; font-size:0.94rem; line-height:1.38; color:#111;">
<p style="margin:0 0 1rem 0;">Not all API traffic are the same.</p>
<p style="margin:0 0 0.25rem 0;">Examples:</p>
<ul style="margin:0 0 1rem 1.6rem; padding:0; line-height:1.34;">
<li style="margin:0.1rem 0;">APIs get a <strong>lot off traffic</strong></li>
<li style="margin:0.1rem 0;">APIs get <strong>bursts</strong></li>
<li style="margin:0.1rem 0;">APIs need <strong>fair sharing</strong></li>
<li style="margin:0.1rem 0;">APIs need to <strong>stay simple and light</strong></li>
</ul>
<p style="margin:0 0 0.22rem 0;">Tyk offers various algorithms</p>
<ul style="margin:0 0 0 1.6rem; padding:0; line-height:1.32;">
<li style="margin:0.1rem 0;">Distributed Rate Limited (DRL) - <strong>Default</strong></li>
<li style="margin:0.1rem 0;">Redis Rate Limiter (RRL) - sliding window log</li>
<li style="margin:0.1rem 0;">Fixed Window Rate Limiter - basic &amp; simple</li>
<li style="margin:0.1rem 0;">Redis Sentinel Rate Limiter - low latency + sliding log</li>
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
