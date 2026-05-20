---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Rate Limiting in Tyk"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%); margin:-1.8rem -3.2rem; padding:0.15rem 3rem 0 3rem; overflow:hidden;">
  <h1 style="font-size:3.42rem; line-height:1.08; font-weight:800; color:white; margin:-0.3rem 0 0 0; border:0; max-width:690px; letter-spacing:-0.02em;">API Security with Tyk:<br>Rate Limiting in Tyk</h1>
  <p style="font-size:0.94rem; line-height:1.4; color:white; opacity:0.96; margin:1.15rem 0 0 0; max-width:560px;">
    Learn how to control how often clients can call your APIs to prevent abuse, ensure fair usage, and protect backend systems.
  </p>
  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111; overflow:hidden;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.55rem; margin-left:0.15rem; width:920px; color:#111; font-size:1.02rem; line-height:1.5;">
    <ul style="margin:0; padding-left:1.95rem; list-style-type:disc;">
      <li style="margin-bottom:0.72rem;">A rate limit is a short-term restriction on the number of requests an API client can make to an API</li>
      <li style="margin-bottom:0.72rem;">Defined as a number of requests over a number of seconds</li>
      <li style="margin-bottom:0.72rem;">Exceeding the rate limit results in the request being blocked</li>
      <li style="margin-bottom:0.2rem;">Can be applied in three ways, to suit different needs:</li>
    </ul>
    <ul style="margin:0.08rem 0 0 3.1rem; padding-left:1rem; list-style-type:circle; line-height:1.5;">
      <li style="margin-bottom:0.6rem;">Keys, for individual rate limits</li>
      <li style="margin-bottom:0.6rem;">Policies, for centralised control of rate limits across many Keys and APIs</li>
      <li>APIs, for aggregated rate limits across all API clients</li>
    </ul>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
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
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.3rem; margin-left:0.15rem; width:915px; color:#111; font-size:1.01rem; line-height:1.45;">
    <p style="margin:0 0 0.3rem 0;">Key and Policy configuration is via the rate and per properties:</p>
    <ul style="margin:0 0 0.72rem 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li style="margin-bottom:0.55rem;"><span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">rate</span> is the number of requests</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">per</span> is the number seconds</li>
    </ul>
    <p style="margin:0 0 0.72rem 0;">Per-API rate limits can also be defined, with separate <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">rate</span> and <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">per</span> properties for each API, stored within the <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">access_rights</span> section</p>
    <p style="margin:0 0 0.3rem 0;">API Definition configuration uses the same properties, but stores them within the <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">global_rate_limit</span> property:</p>
    <ul style="margin:0 0 0 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">global_rate_limit.rate</span> and <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">global_rate_limit.per</span></li>
    </ul>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
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
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.35rem; margin-left:0.15rem; width:915px; color:#111; font-size:1.01rem; line-height:1.45;">
    <p style="margin:0 0 0.28rem 0;">Rate limiting can be disabled in two ways:</p>
    <ul style="margin:0 0 0.74rem 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li style="margin-bottom:0.7rem;">Via the API definition: Set <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">disable_rate_limit</span> to <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">true</span> to disable rate limiting for all requests for the API</li>
      <li>Via the Key or Policy: Set <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">rate</span> to a value less than <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">1</span> to disable rate limiting for the individual Key or all keys related to the Policy</li>
    </ul>
    <p style="margin:0;">If either of these conditions is set then the related requests will no be subject to rate limiting</p>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
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
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.32rem; margin-left:0.15rem; width:915px; color:#111; font-size:1.01rem; line-height:1.45;">
    <p style="margin:0 0 0.28rem 0;">Rate limit calculation is based on the datetime of the request:</p>
    <ul style="margin:0 0 0.78rem 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li style="margin-bottom:0.64rem;">Previous requests within the rate limit period are totalled</li>
      <li>If total exceeds the maximum allowed in the period, the request is blocked</li>
    </ul>
    <p style="margin:0 0 0.28rem 0;">API clients which exceed the rate limit receive this response:</p>
    <ul style="margin:0 0 0.78rem 3.05rem; padding-left:0.95rem; list-style-type:circle; line-height:1.44;">
      <li style="margin-bottom:0.64rem;">HTTP status code: 429 Too Many Requests</li>
      <li>Body: <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">rate limit exceeded</span></li>
    </ul>
    <p style="margin:0;">A Tyk <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">‘rate limit exceeded’</span> system event is also triggered</p>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
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
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Rate-Limiting</h1>

  <div style="margin-top:2.35rem; margin-left:0.15rem; width:915px; color:#111; font-size:1.01rem; line-height:1.47;">
    <p style="margin:0 0 0.52rem 0;">For situations where a rate limit is defined on both a Key/Policy and also the API Definition:</p>
    <ul style="margin:0; padding-left:1.95rem; list-style-type:disc; line-height:1.47;">
      <li style="margin-bottom:0.72rem;">If the request causes any of the various rate limits to be exceed, the Gateway will block the request</li>
      <li>This means that an API client may be within their Key/Policy rate limit, but if their request causes the API Definition’s global rate limit to be exceeded, then the request is blocked</li>
    </ul>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:104px; height:70px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:70px; height:26px; display:flex; align-items:center; justify-content:flex-end; font-size:1rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
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
