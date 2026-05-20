---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Rate Limiting Algorithms"
layout: cover
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #7E3FF2 0%, #8C33F8 42%, #C215FF 100%); margin:-1.8rem -3.2rem; padding:0 3rem; overflow:hidden;">
<h1 style="font-size:4.28rem; line-height:1.02; font-weight:800; color:white; margin:0; border:0; max-width:860px; letter-spacing:-0.03em;">API Security with Tyk:<br>Rate Limiting Algorithms</h1>
<p style="font-size:1.19rem; line-height:1.42; color:white; opacity:0.96; margin:1.55rem 0 0 0; max-width:660px;">
Tyk supports various types of algorithms. Discover how different algorithms help to smooth traffic spikes, enforce usage limits, and maintain API reliability under load.
</p>
<img src="./public/icons/tyk-logo-badge.png" style="position:absolute; right:0; bottom:0; width:106px; height:auto; display:block;" />
</div>

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

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
<h1 style="margin:0; color:#5E17D8; font-size:3.92rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Types of Rate Limiting</h1>
<div style="margin-top:1.7rem; margin-left:0.9rem; width:760px; font-size:0.98rem; line-height:1.42; color:#111;">
<p style="margin:0 0 0.55rem 0;">The Gateway implements the rate limiter, of which there are three types:</p>
<ul style="margin:0 0 1rem 1.65rem; padding:0; line-height:1.42;">
<li style="margin:0.12rem 0;">Transactional</li>
<li style="margin:0.12rem 0;">Non-transactional</li>
<li style="margin:0.12rem 0;">Distributed</li>
</ul>
<p style="margin:0 0 0.55rem 0;">Default choice is Distributed, but this can be overridden through tyk.conf:</p>
<ul style="margin:0 0 0 1.65rem; padding:0; line-height:1.42;">
<li style="margin:0.12rem 0;">Set <span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">enable_redis_rolling_limiter</span> to true for transactional</li>
<li style="margin:0.12rem 0;">In addition, set <span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">enable_non_transactional_rate_limiter</span> to true for non-transactional</li>
</ul>
</div>
<img src="./public/icons/tyk-logo-light.png" style="position:absolute; left:0.2rem; bottom:-0.2rem; width:24px; height:auto; display:block;" />
<img src="./public/icons/tyk-logo-badge.png" style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:auto; display:block;" />
</div>

<!-- Notes: Encapsulation of rules
Policies give you a way to encapsulate security and other access settings into a pre-defined entity.
Purpose is to make your life easier when managing lots of tokens.
The important thing to understand about policies is that a single policy can apply to many tokens, so having a few policies can let you manage very large numbers of tokens easily.

They allow you to define:
An access control list, which sets which APIs, versions, endpoints and methods the policy can access.
Rate limit
Quota

Dynamically attached
When a policy is saved on the Dashboard, it only takes around 10 seconds for it to take effect on the server.
Policies are attached to request sessions at the start of the Tyk processing pipeline, so updates are take effect immediately.

Partitioning
Once a policy is assigned to a token it will override the settings of that token. 
However, with policy partitioning it is possible to override only a particular part of the token – the ACL, rate limit, or quota (or any combination of the three).

No effect on open APIs 
Policies have no effect one APIs which have been configured to be open.
This is because the Tyk pipeline skips all authentication so does not process any tokens provided. -->

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
