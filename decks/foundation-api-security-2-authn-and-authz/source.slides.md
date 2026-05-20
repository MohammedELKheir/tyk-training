---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Authentication & Authorization"
layout: cover
---

<style>
.slidev-layout.cover {
  background: linear-gradient(135deg, #7e3ff2 0%, #8f37f7 40%, #c20fff 100%) !important;
  color: white !important;
}
.slidev-layout.cover h1,
.slidev-layout.cover h2,
.slidev-layout.cover p {
  color: white !important;
  border-color: transparent !important;
}
</style>

# API Security with Tyk:
## Authentication & Authorization

<p style="opacity:0.96; margin-top:1.8rem; max-width:780px; margin-left:auto; margin-right:auto; font-size:1.28rem; line-height:1.45;">
Tyk secures your APIs by verifying who’s making a request (AuthN) and what they’re allowed to do (AuthZ).
</p>

<img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:10.4rem; height:auto;" />

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0.2rem 0 0.6rem;">
  <h1 style="margin:0; color:#6517d9; font-size:3.4rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">What Is Authentication (AuthN)?</h1>

  <div style="margin-top:2.1rem; max-width:830px; color:#111; font-size:1.18rem; line-height:1.55;">
    <div style="margin-bottom:1.1rem;">Authentication means proving your identity.</div>
    <div style="margin-bottom:0.7rem;">In Tyk, when a request comes in, it checks who is calling the API. This is usually done using:</div>
    <ul style="margin:0.25rem 0 0 1.65rem; padding:0;">
      <li style="margin:0.35rem 0;"><strong>API Keys</strong> – A unique string like a password</li>
      <li style="margin:0.35rem 0;"><strong>JWT tokens</strong> – Signed tokens that include identity and permissions</li>
      <li style="margin:0.35rem 0;"><strong>OAuth clients</strong> – Used in modern identity systems like Google or Microsoft</li>
      <li style="margin:0.35rem 0;"><strong>mTLS (Mutual TLS)</strong> – Certificates to verify client identity</li>
    </ul>
    <div style="margin-top:1.15rem;"><strong>Example:</strong></div>
    <div style="margin-top:0.35rem; margin-left:1.3rem;">A user sends a request with an API key — Tyk checks “Is this a valid key?”</div>
    <div style="margin-top:0.95rem;"><strong>Objective of AuthN:</strong> Confirm who you are.</div>
  </div>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Authentication is the first step in API security.
Tyk supports multiple authentication methods to fit different use cases.
API Keys are the simplest, while mTLS provides the highest security.
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0.2rem 0 0.6rem;">
  <h1 style="margin:0; color:#6517d9; font-size:3.4rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">What Is Authorization (AuthZ)?</h1>

  <div style="margin-top:2.1rem; max-width:860px; color:#111; font-size:1.18rem; line-height:1.55;">
    <div style="margin-bottom:1.1rem;">Authorization means checking what you’re allowed to do.</div>
    <div style="margin-bottom:0.7rem;">Once Tyk knows who you are, it checks your <strong>Access Rights</strong>:</div>
    <ul style="margin:0.25rem 0 0 1.65rem; padding:0;">
      <li style="margin:0.35rem 0;">Can you call this API?</li>
      <li style="margin:0.35rem 0;">Can you access this version of the API?</li>
      <li style="margin:0.35rem 0;">Are you within the allowed rate limit or quota?</li>
    </ul>
    <div style="margin-top:1.15rem;"><strong>Example:</strong></div>
    <div style="margin-top:0.35rem; margin-left:1.3rem;">Even if a user has a valid key, Tyk checks, “Does this key allow access to the /admin API?”</div>
    <div style="margin-top:0.95rem;"><strong>Objective of AuthZ:</strong> Decide what you’re allowed to do.</div>
  </div>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Encapsulation of rules
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
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0 0 0.4rem; overflow:hidden;">
  <h1 style="margin:0 0 0 0.25rem; color:#6517d9; font-size:3.8rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; margin-top:1.1rem; gap:1.05rem; align-items:flex-start;">
    <div style="width:478px; height:396px; padding-left:0.1rem; transform:scale(0.92); transform-origin:top left;">
      <TykAuthFlow :client-to-gateway="true" />
    </div>
    <div style="flex:1; padding-top:1.55rem; color:#111; font-size:1.22rem; line-height:1.22;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:330px;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
A client sends a request to an API that's managed by Tyk.
Once the request reaches the Tyk Gateway, it immediately tries to match the incoming request's URL path to the "listen paths" of the APIs it's managing
Each API definition in Tyk's memory has a unique listen path. The Gateway compares the incoming request URL to these paths. If it finds a match, it knows which API should handle the request.
Now that Tyk has identified the correct API, it prepares to process the request according to that API's specific configuration
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0 0 0.4rem; overflow:hidden;">
  <h1 style="margin:0 0 0 0.25rem; color:#6517d9; font-size:3.8rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; margin-top:1.1rem; gap:1.05rem; align-items:flex-start;">
    <div style="width:478px; height:396px; padding-left:0.1rem; transform:scale(0.92); transform-origin:top left;">
      <TykAuthFlow :gateway-to-redis="true" />
    </div>
    <div style="flex:1; padding-top:1.45rem; color:#111; font-size:1.18rem; line-height:1.18;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:340px; margin-bottom:1.95rem;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:410px;">
        <div style="width:1.5rem;">1.</div>
        <div>Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Tyk immediately checks if the request is authenticated and authorized. This process involves several steps:

First, Tyk extracts the authentication token from the request. This could be from the Authorization header, a query parameter, or a cookie, depending on the API's configuration.
Next, Tyk looks up this token in its Redis database. Each access key is stored as a record in Redis, containing important metadata.

Tyk checks several things:
1. Does the key exist in Redis?
2. Has the key expired?
3. Does the key have permission to access this specific API and endpoint?
4. Are there any rate limits or quotas that have been exceeded?

If the key is valid and has the necessary permissions, Tyk allows the request to proceed. This are Tyk’s core processing which includes:

Tyk performs its core functions, which typically include:

Authentication
Authorization
Rate limiting
Quota checking
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0 0 0.4rem; overflow:hidden;">
  <h1 style="margin:0 0 0 0.25rem; color:#6517d9; font-size:3.8rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; margin-top:1.1rem; gap:1.05rem; align-items:flex-start;">
    <div style="width:478px; height:396px; padding-left:0.1rem; transform:scale(0.92); transform-origin:top left;">
      <TykAuthFlow :show-gear="true" />
    </div>
    <div style="flex:1; padding-top:1.35rem; color:#111; font-size:0.98rem; line-height:1.12;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:340px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:410px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:450px;">
        <div style="width:1.5rem;">1.</div>
        <div>
          If authentication succeeds, Tyk then authorizes the request:
          <div style="margin-top:0.45rem; margin-left:1.6rem;">a.&nbsp;&nbsp;&nbsp;Is this client allowed to call this API?</div>
          <div style="margin-top:0.25rem; margin-left:1.6rem;">b.&nbsp;&nbsp;&nbsp;Are they within rate limits?</div>
        </div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Before the request is proxied to the upstream API, "post" middleware are executed.
Post-processing middleware can be used for tasks like request transformation, additional logging, or any final modifications before the request is sent upstream
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0 0 0.4rem; overflow:hidden;">
  <h1 style="margin:0 0 0 0.25rem; color:#6517d9; font-size:3.8rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; margin-top:1.1rem; gap:1.05rem; align-items:flex-start;">
    <div style="width:478px; height:396px; padding-left:0.1rem; transform:scale(0.92); transform-origin:top left;">
      <TykAuthFlow :gateway-to-server="true" />
    </div>
    <div style="flex:1; padding-top:1.35rem; color:#111; font-size:0.98rem; line-height:1.12;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:340px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:410px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:450px; margin-bottom:1.55rem;">
        <div style="width:1.5rem;">1.</div>
        <div>
          If authentication succeeds, Tyk then authorizes the request:
          <div style="margin-top:0.45rem; margin-left:1.6rem;">a.&nbsp;&nbsp;&nbsp;Is this client allowed to call this API?</div>
          <div style="margin-top:0.25rem; margin-left:1.6rem;">b.&nbsp;&nbsp;&nbsp;Are they within rate limits?</div>
        </div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:420px;">
        <div style="width:1.5rem;">1.</div>
        <div>If both checks pass, the request is forwarded to the API.</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Tyk then routes the request to the appropriate backend service
When proxying to an API Server, the target URL can be defined in a number of ways:
Target URL property of the API Definition (single or multiple)
Dynamically set by a service discovery endpoint
Dynamically set by the URL Rewrite plugin
Dynamically set by custom middleware
Defined as a GraphQL Data Source
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0 0 0.4rem; overflow:hidden;">
  <h1 style="margin:0 0 0 0.25rem; color:#6517d9; font-size:3.8rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; margin-top:1.1rem; gap:1.05rem; align-items:flex-start;">
    <div style="width:478px; height:396px; padding-left:0.1rem; transform:scale(0.92); transform-origin:top left;">
      <TykAuthFlow :server-to-gateway="true" :gateway-to-client-back="true" />
    </div>
    <div style="flex:1; padding-top:1.35rem; color:#111; font-size:0.92rem; line-height:1.08;">
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:340px; margin-bottom:1.35rem;">
        <div style="width:1.5rem;">1.</div>
        <div>A request is made to an API behind Tyk Gateway.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:410px; margin-bottom:1.35rem;">
        <div style="width:1.5rem;">1.</div>
        <div>Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:450px; margin-bottom:1.35rem;">
        <div style="width:1.5rem;">1.</div>
        <div>
          If authentication succeeds, Tyk then authorizes the request:
          <div style="margin-top:0.35rem; margin-left:1.6rem;">a.&nbsp;&nbsp;&nbsp;Is this client allowed to call this API?</div>
          <div style="margin-top:0.2rem; margin-left:1.6rem;">b.&nbsp;&nbsp;&nbsp;Are they within rate limits?</div>
        </div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:420px; margin-bottom:1.25rem;">
        <div style="width:1.5rem;">1.</div>
        <div>If both checks pass, the request is forwarded to the API.</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.8rem; max-width:460px;">
        <div style="width:1.5rem;">1.</div>
        <div>If either check fails, Tyk blocks the request with an error (e.g., 403 Forbidden or 401 Unauthorized).</div>
      </div>
    </div>
  </div>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
The backend API processes the request and sends a response back to Tyk.

Tyk can also transform the response if needed, perhaps removing sensitive data or adding custom headers.
-->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding:0.3rem 0.2rem 0 0.6rem;">
  <h1 style="margin:0; color:#6517d9; font-size:3.65rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">How Tyk Applies Security</h1>

  <div style="margin-top:2.25rem; max-width:1120px; color:#111; font-size:1.18rem; line-height:1.6;">
    <div style="margin-bottom:2.2rem;">There are a wide array of options for authentication and authorizing access to APIs with Tyk.</div>
    <div style="margin-bottom:0.8rem;">These are configured as part of API definitions via:</div>
    <ul style="margin:0.2rem 0 0 1.65rem; padding:0; font-size:1.14rem; line-height:1.7;">
      <li style="margin:0.45rem 0;">Gateway REST API in headless open-source installations</li>
      <li style="margin:0.45rem 0;">or the Dashboard API or API Designer UI when using the Tyk Dashboard</li>
      <li style="margin:0.45rem 0;">Config-as-code via Tyk Operator</li>
    </ul>
  </div>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:0; bottom:0; width:8.8rem; height:auto;" />
</div>

<!-- Notes:
Encapsulation of rules
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
However, with policy partitioning it is possible to override only a particular part of the token – the ACL, rate limit, or quota
-->
