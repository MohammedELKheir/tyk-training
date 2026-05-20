---
id: foundation-api-security-6-rate-limiting-introduction/007-why-it-s-important
deck_id: foundation-api-security-6-rate-limiting-introduction
order: 7
slug: why-it-s-important
title: "Why it’s important?"
summary: "Help mitigate API abuse and maintain performance Rate limiting may be used as an extra line of defense around attempted denial of service attacks. For instance, if you have load-te"
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

<div style="position:relative; width:100%; height:100%; color:#525783;">
  <h1 style="margin:0; color:#5A18D6; font-size:3.62rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Why it’s important?</h1>

  <div style="margin-top:1.95rem; margin-left:0.18rem; width:888px; color:#525783; font-size:0.97rem; line-height:1.54; letter-spacing:-0.01em;">
    <p style="margin:0 0 1.55rem 0;">Help mitigate API abuse and maintain performance</p>
    <p style="margin:0 0 1.55rem 0;">Rate limiting may be used as an <span style="font-weight:800; color:#4f537d;">extra line of defense</span> around attempted denial of service attacks.</p>
    <p style="margin:0;">For instance, if you have load-tested your current system and established a performance threshold that you would not want to exceed to ensure system availability and/or performance then you may want to set a global rate limit as a defense to ensure it hasn’t exceeded.</p>
  </div>

  <TykFooter />
</div>

<!-- Notes: Now that we know what rate limiting is, let's talk about why it matters.

First, it helps mitigate API abuse and maintain performance. Without rate limiting, a single user — or worse, a bad actor — could flood your system with requests, causing slowdowns or even outages for everyone else.

Rate limiting acts like an extra line of defense, especially in situations like DDoS attacks, where attackers try to overwhelm your API by sending massive amounts of traffic.

A good practice is to load-test your system first so you know its safe operating threshold. Once you know that, you can configure a global rate limit in Tyk to ensure the API never exceeds that limit, helping you protect availability and performance even under stress. -->
