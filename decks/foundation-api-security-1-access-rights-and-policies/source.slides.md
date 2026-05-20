---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Security with Tyk: Access Rights"
---

<div style="position:relative; width:100%; height:100%; margin:-1.5rem -2rem; padding:0; overflow:hidden; background:linear-gradient(135deg, #7a27f5 0%, #8f2cff 48%, #c315ff 100%);">
  <div style="position:absolute; inset:0; display:flex; flex-direction:column; justify-content:center; align-items:center; color:white; text-align:center;">
    <h1 style="font-size:2.9rem; font-weight:800; line-height:1.1; color:white; margin:0; border:0;">Security with Tyk:</h1>
    <h2 style="font-size:2.1rem; font-weight:800; line-height:1.1; color:white; margin:0.35rem 0 0 0; border:0;">Access Rights</h2>
    <p style="font-size:0.8rem; color:rgba(255,255,255,0.88); margin-top:1.45rem;">In Tyk, Access rights control what APIs a client can use.</p>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:0; bottom:0; width:6.15rem;" />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.2rem 0 0 0.1rem; color:#5c5c5c;">
  <h1 style="font-size:2.35rem; line-height:1.05; font-weight:800; color:#5b10d9; margin:0 0 0.95rem 0; max-width:7.2in; border:0;">What are Access Rights in Tyk?</h1>
  <div style="width:7.45in; font-size:0.82rem; line-height:1.58; color:#595959;">
    <p style="margin:0 0 1rem 0;">Tyk is an enterprise-grade API Gateway that controls authentication, authorization, and traffic governance.</p>
    <p style="margin:0 0 0.6rem 0;">It enforces these rules through:</p>
    <ul style="margin:0 0 0 1.15rem; padding:0; line-height:1.72;">
      <li>Access Rights (per-client permissions)</li>
      <li>Policies (centralized templates for rate limits, quotas, and scopes)</li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.1rem 0 0 0.1rem; color:#585858;">
  <h1 style="font-size:2.18rem; line-height:1.05; font-weight:800; color:#5b10d9; margin:0 0 0.85rem 0; max-width:6.8in; border:0;">What an API Client Is Allowed to Access</h1>
  <div style="width:7.7in; font-size:0.77rem; line-height:1.58; color:#595959;">
    <p style="margin:0 0 0.8rem 0;">Every API client (like a user, application, or service) is associated with an API Key or token. That key defines the client’s Access Rights — a list of APIs and API versions it is allowed to call.</p>
    <ul style="margin:0 0 0 1.2rem; padding:0; line-height:1.7;">
      <li>You can explicitly allow specific APIs or versions.</li>
      <li>You do not need to define what is denied — if an API isn’t listed, access is automatically blocked.</li>
    </ul>
    <p style="margin:1rem 0 0 0;">If the client tries to access an unauthorized API, the Tyk Gateway will reject the request with a 403 Forbidden error.</p>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
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

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="font-size:3.15rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0.05rem 0 0 0.6rem; border:0;">Without Access rights</h1>
  <img src="./public/icons/api-gear.png" style="position:absolute; left:1.2rem; top:3.9rem; width:1.72in;" />
  <div style="position:absolute; left:3.92rem; top:5.92rem; width:2.65in; height:0.06in; background:#636363;"></div>
  <div style="position:absolute; left:3.64rem; top:5.79rem; width:0; height:0; border-top:0.13in solid transparent; border-bottom:0.13in solid transparent; border-right:0.25in solid #636363;"></div>
  <img src="./public/icons/traffic-light-green.jpg" style="position:absolute; left:4.86rem; top:2.65rem; width:1.05in;" />
  <div style="position:absolute; left:5.27rem; top:5.1rem; width:0.08in; height:0.87in; background:#636363;"></div>
  <div style="position:absolute; left:7.18rem; top:1.9rem; display:grid; grid-template-columns:1.02in 1.02in 1.02in; grid-template-rows:1in 1in 1in; column-gap:0.04in; row-gap:0.02in; width:3.05in;">
    <div style="grid-column:2; grid-row:1;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:2;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:2; grid-row:2;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
    <div style="grid-column:3; grid-row:2;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:3;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
    <div style="grid-column:2; grid-row:3;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:4; margin-top:-0.4in;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
</div>

<!-- Notes: Without Access Rights
Everyone (all users) can access the API freely.
Green light means there's no restriction, which matches reality when access rights are not enforced.
Implication: This can lead to unauthorized usage, abuse, or security issues. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="font-size:3rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0.1rem 0 0 0.12rem; border:0;">Access Rights with Tyk</h1>
  <img src="./public/icons/api-gear.png" style="position:absolute; left:0.25rem; top:3.75rem; width:1.68in;" />
  <div style="position:absolute; left:2.08rem; top:5.25rem; width:1.05in; height:0.03in; background:#6aa84f;"></div>
  <div style="position:absolute; left:1.8rem; top:5.14rem; width:0; height:0; border-top:0.11in solid transparent; border-bottom:0.11in solid transparent; border-right:0.22in solid #6aa84f;"></div>
  <img src="./public/icons/gateway-filter.png" style="position:absolute; left:3.7rem; top:3.55rem; width:1.95in;" />
  <div style="position:absolute; left:6.15rem; top:5.35rem; width:0.95in; height:0.03in; background:#666666;"></div>
  <div style="position:absolute; left:5.9rem; top:5.23rem; width:0; height:0; border-top:0.11in solid transparent; border-bottom:0.11in solid transparent; border-right:0.22in solid #666666;"></div>
  <div style="position:absolute; left:7.55rem; top:2.1rem; display:grid; grid-template-columns:1in 1in 1in; grid-template-rows:1in 1in 1in; column-gap:0.03in; row-gap:0.02in; width:2.7in;">
    <div style="grid-column:2; grid-row:1;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:2;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:2; grid-row:2;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
    <div style="grid-column:3; grid-row:2;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:2; grid-row:3;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:3;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
  </div>
  <div style="position:absolute; left:2.85rem; top:7rem; color:#666666; font-size:0.8rem; line-height:1.22;">
    <div style="display:flex; align-items:flex-start; gap:0.45rem;"><span style="font-size:1.15rem; line-height:1;">•</span><span>API Key valid?</span></div>
    <div style="display:flex; align-items:flex-start; gap:0.45rem;"><span style="font-size:1.15rem; line-height:1;">•</span><span>Does this key have access to the API?</span></div>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
</div>

<!-- Notes: Tyk sits in front of your APIs and enforces access control. For each incoming request, it checks:

For the key validity and whether that key is able to access the API

If both are true, the request is passed through. If not, it is denied. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.1rem 0 0 0.1rem; color:#595959; overflow:hidden;">
  <h1 style="font-size:2.16rem; line-height:1.05; font-weight:800; color:#5b10d9; margin:0 0 0.95rem 0; border:0;">Define Access Rights</h1>
  <div style="display:flex; gap:0.6rem; align-items:flex-start;">
    <div style="flex:1 1 61%; font-size:0.73rem; line-height:1.5; color:#595959; max-width:5.45in;">
      <p style="margin:0 0 0.45rem 0;">Access rights are configured in both API Key and Policy objects</p>
      <p style="margin:0 0 0.25rem 0;">Defined by the <code style="font-size:0.72rem; background:#f4f4f4; padding:0 0.18rem; border-radius:0.16rem;">access_rights</code> property:</p>
      <ul style="margin:0 0 0 1.05rem; padding:0; line-height:1.65;">
        <li>Contains a list of APIs which are allowed to be accessed</li>
        <li>Each API entry contains a list of versions which are allowed to be accessed</li>
      </ul>
      <p style="margin:1rem 0 0 0;">Note: When new versions of an API are created, they are not automatically added to access rights</p>
    </div>
    <div style="flex:1 1 39%; display:flex; justify-content:center; padding-top:1.05rem;">
      <img src="./public/icons/access-rights-json.png" style="width:2.45in; border-radius:0.06in; box-shadow:0 0 0 1px rgba(0,0,0,0.08);" />
    </div>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.1rem 0 0 0.05rem; color:#595959;">
  <h1 style="font-size:1.9rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0 0 1rem 0; max-width:7.2in; border:0;">Access Rights: Path Based Permissions</h1>
  <div style="width:7.7in; font-size:0.74rem; line-height:1.55; color:#595959;">
    <p style="margin:0 0 0.45rem 0;">Path-based permissions provide additional granular control of API access, based on HTTP methods and paths:</p>
    <ul style="margin:0 0 0 1.05rem; padding:0; line-height:1.7;">
      <li>Defined as the HTTP methods allowed for a path e.g. <code style="font-size:0.72rem; background:#f4f4f4; padding:0 0.14rem; border-radius:0.15rem;">GET /hello</code></li>
      <li>Paths and methods act as an allow list</li>
    </ul>
    <p style="margin:1.05rem 0 0 0;">APIs must be selected in Access Rights to enable path-based permissions to be defined for them</p>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
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

<div style="position:relative; width:100%; height:100%; padding:0.1rem 0 0 0.05rem; color:#595959;">
  <h1 style="font-size:1.82rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0 0 1.05rem 0; max-width:7.8in; border:0;">Access Rights: Path-Based Permissions Enforcement</h1>
  <div style="width:7.7in; font-size:0.72rem; line-height:1.52; color:#595959;">
    <p style="margin:0 0 0.35rem 0;">Enforcement is based on the permissions granted to the API client:</p>
    <ul style="margin:0 0 0 1.05rem; padding:0; line-height:1.65;">
      <li>If the requested API, HTTP method and path combination is not found in the path-based permissions then the request is blocked</li>
      <li>Example:
        <ul style="margin:0.3rem 0 0 0.9rem; line-height:1.55;">
          <li><code style="font-size:0.68rem; background:#f4f4f4; padding:0 0.15rem; border-radius:0.15rem;">/profile</code> allows <code style="font-size:0.68rem; background:#f4f4f4; padding:0 0.15rem; border-radius:0.15rem;">GET</code> requests, any <code style="font-size:0.68rem; background:#f4f4f4; padding:0 0.15rem; border-radius:0.15rem;">POST</code> requests for <code style="font-size:0.68rem; background:#f4f4f4; padding:0 0.15rem; border-radius:0.15rem;">/profile</code> are blocked</li>
        </ul>
      </li>
      <li style="margin-top:0.45rem;">API clients which fail the path-based permissions check will be blocked:
        <ul style="margin:0.3rem 0 0 0.9rem; line-height:1.55;">
          <li>HTTP status code: 403 Forbidden</li>
        </ul>
      </li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
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

<div style="position:relative; width:100%; height:100%; padding:0.05rem 0 0 0.55rem; color:#595959;">
  <h1 style="font-size:2.62rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0 0 0.85rem 0; max-width:7.5in; border:0;">Policies: Reusable Access Templates</h1>
  <div style="width:7.85in; font-size:0.76rem; line-height:1.5; color:#595959;">
    <p style="margin:0 0 0.85rem 0;">Rather than configuring access rights for every single API Key, Tyk lets you define Policies that group:</p>
    <ul style="margin:0 0 0 1.15rem; padding:0; line-height:1.55; font-size:0.82rem;">
      <li>Which APIs (and versions) can be accessed</li>
      <li>Quotas or usage limits</li>
      <li>Rate limiting rules</li>
      <li>Expiry rules or custom metadata</li>
    </ul>
    <p style="margin:1rem 0 0 0;">You assign policies to API keys, OAuth clients, or JWT tokens — making it easy to manage consistent access rules</p>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
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
