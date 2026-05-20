---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Rate Limiting Scopes"
layout: cover
background: 'linear-gradient(135deg, #8438FA 0%, #8c35f5 50%, #C014FF 100%)'
---

<div style="position:relative; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; color:white; padding:0 5rem 1rem 5rem;">
  <h1 style="margin:0; font-size:3.55rem; line-height:1.07; font-weight:800; color:white; letter-spacing:-0.03em; border:0;">API Security with Tyk:<br/>Rate Limiting Scopes</h1>
  <p style="margin:1.5rem 0 0 0; max-width:760px; font-size:1.08rem; line-height:1.5; color:white; opacity:0.96;">
    Learn how to define how rate limits apply across different levels.<br/>
    Giving you fine-grained control to protect critical services and ensure<br/>
    reliable performance
  </p>
  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

---
layout: default
---

<div class="content-shell">
  <h1 style="margin:0 0 1.6rem 0; font-size:3.45rem; line-height:1.03; font-weight:800; color:#5d11d4; letter-spacing:-0.03em; border:0;">API-Level Rate Limiting</h1>

  <div class="body-copy" style="max-width:910px; margin-left:0.25rem;">
    <p style="margin:0 0 1.35rem 0; font-size:1.02rem;">Protecting the whole API</p>
    <ul style="font-size:0.97rem; line-height:1.45; max-width:900px;">
      <li style="margin-bottom:0.2rem;">This limits how much total traffic the entire API can handle — no matter who is making the requests</li>
      <li>It protects your backend system from getting too many requests at once (which could slow it down or crash it). Think of it like setting a maximum capacity for a restaurant — once it's full, no one else can enter.</li>
    </ul>
  </div>

  <div class="tyk-mini-brand"><span class="mark"></span><span>Tyk</span></div>
  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

<!-- Notes: So first we’re talking about API level rate limiting.
This type of rate limiting is all about protecting the entire API — regardless of who the user is.
It sets a global limit on how much total traffic the API can handle in a given period. So whether you have one user or a hundred, they all share the same cap.
Why is this useful?
It protects your backend from being overwhelmed by too many requests at once.
Think of it like setting a maximum capacity for a restaurant. Once it's full, no more people can come in until others leave — regardless of whether they're VIPs or regulars. -->

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
