---
id: foundation-api-security-6-rate-limiting-introduction/002-what-is-rate-limiting
deck_id: foundation-api-security-6-rate-limiting-introduction
order: 2
slug: what-is-rate-limiting
title: "What is Rate Limiting?"
summary: "• Rate limiting controls how many requests a user/system can make in a given timeframe. • Prevent API abuse and maintain performance • Client can make x number of requests per y nu"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-6-rate-limiting-introduction/003-rate-limiting-analogy]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#525783;">
  <h1 style="margin:0; color:#5A18D6; font-size:3.54rem; line-height:1.02; font-weight:800; letter-spacing:-0.03em;">What is Rate Limiting?</h1>

  <div style="margin-top:1.92rem; margin-left:0.18rem; width:868px; color:#525783; font-size:0.98rem; line-height:1.56;">
    <p style="position:relative; margin:0 0 1.22rem 0; padding-left:1.28rem;"><span style="position:absolute; left:0; top:0.04rem; font-size:1.26rem; line-height:1;">•</span>Rate limiting controls how many requests a user/system can make in a given timeframe.</p>
    <p style="position:relative; margin:0 0 1.22rem 0; padding-left:1.28rem;"><span style="position:absolute; left:0; top:0.04rem; font-size:1.26rem; line-height:1;">•</span>Prevent API abuse and maintain performance</p>
    <p style="position:relative; margin:0; padding-left:1.28rem;"><span style="position:absolute; left:0; top:0.04rem; font-size:1.26rem; line-height:1;">•</span>Client can make x number of requests per y number of seconds</p>
  </div>

  <TykFooter />
</div>

<!-- Notes: Let's start with the basics — what is rate limiting?

Rate limiting is a way to control how many requests a user or system can make to an API within a specific timeframe.

Why do we need this? Because without any limits, someone — either intentionally or accidentally — could overload our system by sending thousands of requests in a short amount of time.

So, by applying rate limits, we can protect our backend services, prevent abuse, and ensure that all users get a fair and consistent experience.

For example, you can say: “This user can make 100 requests every 60 seconds.” Once they hit that limit, any additional requests will be blocked — usually with an HTTP 429 status code, which means Too Many Requests.

It's kind of like traffic lights for your API — allowing the right flow of requests while preventing a traffic jam. -->
