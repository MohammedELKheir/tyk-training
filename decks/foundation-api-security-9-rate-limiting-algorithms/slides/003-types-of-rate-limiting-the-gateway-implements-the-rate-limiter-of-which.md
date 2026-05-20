---
id: foundation-api-security-9-rate-limiting-algorithms/003-types-of-rate-limiting-the-gateway-implements-the-rate-limiter-of-which
deck_id: foundation-api-security-9-rate-limiting-algorithms
order: 3
slug: types-of-rate-limiting-the-gateway-implements-the-rate-limiter-of-which
title: "Types of Rate Limiting The Gateway implements the rate limiter, of which there a"
summary: "re three types: Transactional Non-transactional Distributed Default choice is Distributed, but this can be overridden through tyk.conf: Set enable_redis_rolling_limiter to true for"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-9-rate-limiting-algorithms/004-distributed-rate-limiter-drl-think-of-this-like-having-buckets-on-each-g]
customer_visible: true
notes_visibility: customer-safe
---
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
