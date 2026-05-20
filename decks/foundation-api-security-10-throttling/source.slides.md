---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Request Throttling"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%); margin:-1.8rem -3.2rem; padding:0.8rem 3rem 0 3rem; overflow:hidden;">
  <h1 style="font-size:3.72rem; line-height:1.08; font-weight:800; color:white; margin:0; border:0; max-width:735px; letter-spacing:-0.015em;">API Security with Tyk:<br>Request Throttling</h1>
  <p style="font-size:1.1rem; line-height:1.43; color:white; opacity:0.96; margin:1.25rem 0 0 0; max-width:620px;">
    Learn how request throttling in Tyk controls the speed of incoming API requests to prevent overload. It ensures backend stability by spacing out traffic bursts and enforcing real-time rate limits per user or key
  </p>
  <div style="position:absolute; right:-1.2rem; bottom:-0.95rem; width:88px; height:58px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-end; padding:9px 11px; box-sizing:border-box;">
    <div style="position:relative; width:64px; height:24px; display:flex; align-items:center; justify-content:flex-end; font-size:0.92rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:9px; height:9px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Throttling</h1>

  <div style="margin-top:2.8rem; margin-left:0.9rem; width:860px;">
    <ul style="margin:0; padding-left:2.35rem; font-size:1.1rem; line-height:1.83; color:#111; list-style-type:disc;">
      <li style="margin-bottom:0.45rem;">Throttling enables requests which exceed their rate limit to be retried by the API Gateway</li>
      <li style="margin-bottom:0.45rem;">The Gateway will retry the request a number of times until it either succeeds or fails too many times</li>
      <li style="margin-bottom:0.45rem;">This process can reduce the number of rate limit error responses received by API Clients</li>
      <li> The throttling process is hidden from the API Client, as their connection is kept open during the throttling process</li>
    </ul>
  </div>

  <div style="position:absolute; right:-3.55rem; bottom:-2.05rem; width:92px; height:62px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:10px 12px; box-sizing:border-box;">
    <div style="position:relative; width:64px; height:24px; display:flex; align-items:center; justify-content:flex-end; font-size:0.92rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:9px; height:9px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
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

<div style="position:relative; width:100%; height:100%; color:#111;">
  <h1 style="margin:0; color:#5F16D9; font-size:3.55rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Throttling</h1>

  <div style="margin-top:2.7rem; margin-left:0.85rem; width:875px; color:#111; font-size:1.03rem; line-height:1.68;">
    <p style="margin:0 0 0.95rem 0;">Throttling can be configured on Keys and Policies by setting a throttling interval and retry limit:</p>
    <ul style="margin:0; padding-left:2.3rem; line-height:1.74; list-style-type:disc;">
      <li style="margin-bottom:0.55rem;">Interval: Number of seconds to wait between retries, defined by the <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">throttle_interval</span> property</li>
      <li style="margin-bottom:0.55rem;">Retry limit: Number of retries to attempt, defined by the <span style="font-family:Menlo,Consolas,monospace; font-size:0.98em;">throttle_retry_limit</span> property</li>
      <li style="margin-bottom:0.55rem;">Policies can define separate throttling configurations for each API they grant access to</li>
    </ul>
    <p style="margin:0.2rem 0 0 0;">Setting the properties to -1 will disable throttling, which is the default setting</p>
  </div>

  <div style="position:absolute; right:-3.55rem; bottom:-2.05rem; width:92px; height:62px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:10px 12px; box-sizing:border-box;">
    <div style="position:relative; width:64px; height:24px; display:flex; align-items:center; justify-content:flex-end; font-size:0.92rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:9px; height:9px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
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
  <h1 style="position:absolute; left:0; top:3px; margin:0; color:#5F16D9; font-size:3.45rem; line-height:1; font-weight:800; letter-spacing:-0.015em;">Throttling</h1>

  <div style="position:absolute; left:246px; top:6px; width:640px; height:470px;">
    <ThrottlingFlow />
  </div>

  <div style="position:absolute; right:-3.55rem; bottom:-2.05rem; width:92px; height:62px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:10px 12px; box-sizing:border-box;">
    <div style="position:relative; width:64px; height:24px; display:flex; align-items:center; justify-content:flex-end; font-size:0.92rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:5px; width:9px; height:9px; background:#20EDBA; border-bottom-left-radius:6px;"></div>
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
