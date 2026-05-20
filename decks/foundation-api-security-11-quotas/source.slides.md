---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Request Quotas"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%); margin:-1.8rem -3.2rem; padding:0 3rem; overflow:hidden;">
  <h1 style="font-size:3.48rem; line-height:1.08; font-weight:760; color:white; margin:-0.95rem 0 0 0; border:0; max-width:730px;">API Security with Tyk:<br>Request Quotas</h1>
  <p style="font-size:0.98rem; line-height:1.4; color:white; opacity:0.96; margin:1.28rem 0 0 0; max-width:590px;">
    Learn how request quotas in Tyk limit the total number of API calls a user or client can make over a defined time period (e.g., daily, monthly). This helps enforce usage plans, prevent abuse, and manage resource consumption fairly.
  </p>
  <div style="position:absolute; right:0; bottom:0; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quotas</h1>

  <div style="margin-top:2.2rem; margin-left:0.1rem; width:920px; color:#111; font-size:1.12rem; line-height:1.56;">
    <p style="margin:0 0 0.55rem 0;">A quota provides a limit of the number of requests an API client can make:</p>
    <ul style="margin:0 0 0.9rem 0; padding-left:2rem; line-height:1.52;">
      <li>Similar to a rate limit, but over a longer term</li>
    </ul>
    <p style="margin:0 0 0.55rem 0;">Defined as a number of requests over a specific period of time, based on a selection of predefined durations:</p>
    <ul style="margin:0 0 0.85rem 0; padding-left:2rem; line-height:1.52;">
      <li>1 hour, 6 hours, 12 hours, 24 hours, 1 week, 1 month, 6 months, 12 months</li>
    </ul>
    <p style="margin:0;">Once the quota is depleted, requests will be blocked</p>
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quota Configuration</h1>

  <div style="margin-top:2.05rem; margin-left:0.1rem; width:920px; color:#111; font-size:1.04rem; line-height:1.46;">
    <p style="margin:0 0 0.55rem 0;">Quotas are configured on a Key or Policy via these properties:</p>
    <ul style="margin:0 0 0.8rem 0; padding-left:2rem; line-height:1.43;">
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">quota_max</span> is the amount of quota initially provided</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">quota_renewal_rate</span> is used to calculate the epoch after which the quota can be reset to the maximum value</li>
      <li>Policies can define separate quotas for each API they grant access to</li>
    </ul>
    <p style="margin:0 0 0.45rem 0;">A Key will track the quota state via these properties:</p>
    <ul style="margin:0; padding-left:2rem; line-height:1.43;">
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">quota_remaining</span> is the amount of quota remaining</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">quota_renews</span> is the epoch after which the quota can be renewed</li>
    </ul>
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quota Enforcement</h1>

  <div style="margin-top:2.05rem; margin-left:0.1rem; width:915px; color:#111; font-size:1.04rem; line-height:1.46;">
    <p style="margin:0 0 0.5rem 0;">Quota calculation is based on the amount of quota remaining:</p>
    <ul style="margin:0 0 0.7rem 0; padding-left:2rem; line-height:1.43;">
      <li>If the quota remaining is zero, the request is blocked</li>
      <li>Otherwise, the remaining quota is reduced by 1</li>
    </ul>
    <p style="margin:0 0 0.45rem 0;">API clients which have no quota remaining receive this response:</p>
    <ul style="margin:0 0 0.7rem 0; padding-left:2rem; line-height:1.43;">
      <li>HTTP status code: 403 Forbidden</li>
      <li>Body: <span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">quota exceeded</span></li>
      <li>A Tyk <span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">&lsquo;quota exceeded&rsquo;</span> system event is triggered</li>
    </ul>
    <p style="margin:0;">If a quota renewal value is set to -1 then no quota is enforced</p>
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quota Renewal</h1>

  <div style="margin-top:2.15rem; margin-left:0.1rem; width:920px; color:#111; font-size:1.04rem; line-height:1.47;">
    <p style="margin:0 0 0.55rem 0;">Quotas are renewed on the first request after the quota renewal epoch:</p>
    <ul style="margin:0 0 0.8rem 0; padding-left:2rem; line-height:1.45;">
      <li>The quota remaining is reset to the original quota value</li>
      <li>The new quota renewal epoch is calculated as the current time of the request plus the quota period</li>
    </ul>
    <p style="margin:0;">As the new epoch is calculated using the time of the request which triggers the renewal, the quota &lsquo;window&rsquo; will move forward at each renewal</p>
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800;">Quota Headers</h1>

  <div style="margin-top:2.05rem; margin-left:0.1rem; width:920px; color:#111; font-size:1.04rem; line-height:1.46;">
    <p style="margin:0 0 0.55rem 0;">For requests subject to a quota, the Gateway will return headers in the response which provide the current status of the quota:</p>
    <ul style="margin:0 0 0.7rem 0; padding-left:2rem; line-height:1.43;">
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">X-Ratelimit-Limit</span>: The original quota amount</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">X-Ratelimit-Remaining</span>: The current quota remaining</li>
      <li><span style="font-family:Menlo,Consolas,monospace; font-size:0.97em;">X-Ratelimit-Reset</span>: The epoch from which the quota can renew</li>
    </ul>
    <p style="margin:0;">These headers are not returned when a request is blocked due to exceeding the quota</p>
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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
  <h1 style="margin:0; color:#5F16D9; font-size:3.32rem; line-height:1; font-weight:800;">Quota Example</h1>

  <div style="display:flex; justify-content:center; align-items:center; margin-top:0.35rem; width:100%;">
    <img src="./public/icons/quota-example.png" style="width:850px; max-height:424px; object-fit:contain; display:block; transform:translateX(-14px);" />
  </div>

  <div style="position:absolute; right:-3.2rem; bottom:-1.8rem; width:106px; height:72px; background:#000; border-top-left-radius:34px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 14px; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:74px; height:auto; display:block;" />
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
