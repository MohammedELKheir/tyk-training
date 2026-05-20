---
id: foundation-api-security-8-rate-limiting-scopes/002-api-level-rate-limiting
deck_id: foundation-api-security-8-rate-limiting-scopes
order: 2
slug: api-level-rate-limiting
title: "API-Level Rate Limiting"
summary: "Protecting the whole API This limits how much total traffic the entire API can handle — no matter who is making the requests It protects your backend system from getting too many r"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-8-rate-limiting-scopes/003-key-level-rate-limiting]
customer_visible: true
notes_visibility: customer-safe
---
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
