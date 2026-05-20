---
theme: tyk
layout: cover
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Authentication & Authorization"
---

<style>
.slidev-layout.cover {
  background: linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%) !important;
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

<p style="opacity: 0.85; margin-top: 1.5em; max-width: 700px; margin-left: auto; margin-right: auto;">
Tyk secures your APIs by verifying who's making a request (AuthN) and what they're allowed to do (AuthZ).
</p>

<img src="./images/icons/tyk-logo.png" style="position: absolute; bottom: 1.5rem; right: 1.5rem; width: 6rem; opacity: 0.8;" />

---
layout: default
---

# What Is Authentication (AuthN)?

- Authentication means proving your identity.

<v-click>

- In Tyk, when a request comes in, it checks who is calling the API. This is usually done using:
  - **API Keys** – A unique string like a password
  - **JWT tokens** – Signed tokens that include identity and permissions
  - **OAuth clients** – Used in modern identity systems like Google or Microsoft
  - **mTLS (Mutual TLS)** – Certificates to verify client identity

</v-click>

<v-click>

- **Example:**
  - A user sends a request with an API key — Tyk checks "Is this a valid key?"
- **Objective of AuthN:** Confirm who you are.

</v-click>

<!-- Notes: Authentication is the first step in API security.
Tyk supports multiple authentication methods to fit different use cases.
API Keys are the simplest, while mTLS provides the highest security. -->

---
layout: default
---

# What Is Authorization (AuthZ)?

- Authorization means checking what you're allowed to do.

<v-click>

- Once Tyk knows who you are, it checks your **Access Rights**:
  - Can you call this API?
  - Can you access this version of the API?
  - Are you within the allowed rate limit or quota?

</v-click>

<v-click>

- **Example:**
  - Even if a user has a valid key, Tyk checks, "Does this key allow access to the /admin API?"
- **Objective of AuthZ:** Decide what you're allowed to do.

</v-click>

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

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:8px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; border-top:1px solid #ddd; padding-top:8px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

</div>
</div>

<!-- Notes: A client sends a request to an API that's managed by Tyk.
Once the request reaches the Tyk Gateway, it immediately tries to match the incoming request's URL path to the "listen paths" of the APIs it's managing
Each API definition in Tyk's memory has a unique listen path. The Gateway compares the incoming request URL to these paths. If it finds a match, it knows which API should handle the request.
Now that Tyk has identified the correct API, it prepares to process the request according to that API's specific configuration -->

---
layout: default
---

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:4px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="width:3px; height:28px; background:#555;"></div>
    <div style="display:flex; flex-direction:column; align-items:center; padding-top:4px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).

</div>
</div>

<!-- Notes: Tyk immediately checks if the request is authenticated and authorized. This process involves several steps:

First, Tyk extracts the authentication token from the request. This could be from the Authorization header, a query parameter, or a cookie, depending on the API's configuration.
Next, Tyk looks up this token in its Redis database. Each access key is stored as a record in Redis, containing important metadata.

Tyk checks several things:
1. Does the key exist in Redis?
2. Has the key expired?
3. Does the key have permission to access this specific API and endpoint?
4. Are there any rate limits or quotas that have been exceeded?

If the key is valid and has the necessary permissions, Tyk allows the request to proceed. This are Tyk's core processing which includes:

Tyk performs its core functions, which typically include:

Authentication
Authorization
Rate limiting
Quota checking -->

---
layout: default
---

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:8px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; border-top:1px solid #ddd; padding-top:8px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
    <div style="display:flex; justify-content:center; padding-top:4px;">
      <img src="./images/icons/check-icon.png" style="width:40px; height:40px;" />
    </div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).

3. If authentication succeeds, Tyk then authorizes the request:
   - Is this client allowed to call this API?
   - Are they within rate limits?

</div>
</div>

<!-- Notes: Before the request is proxied to the upstream API, "post" middleware are executed.
Post-processing middleware can be used for tasks like request transformation, additional logging, or any final modifications before the request is sent upstream -->

---
layout: default
---

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:8px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; border-top:1px solid #ddd; padding-top:8px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).

3. If authentication succeeds, Tyk then authorizes the request:
   - Is this client allowed to call this API?
   - Are they within rate limits?

4. If both checks pass, the request is forwarded to the API.

</div>
</div>

<!-- Notes: Tyk then routes the request to the appropriate backend service
When proxying to an API Server, the target URL can be defined in a number of ways:
Target URL property of the API Definition (single or multiple)
Dynamically set by a service discovery endpoint
Dynamically set by the URL Rewrite plugin
Dynamically set by custom middleware
Defined as a GraphQL Data Source -->

---
layout: default
---

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:8px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; border-top:1px solid #ddd; padding-top:8px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

2. Tyk authenticates the request (using API Key, JWT, OAuth, or mTLS).

3. If authentication succeeds, Tyk then authorizes the request:
   - Is this client allowed to call this API?
   - Are they within rate limits?

4. If both checks pass, the request is forwarded to the API.

5. If either check fails, Tyk blocks the request with an error (e.g., 403 Forbidden or 401 Unauthorized).

</div>
</div>

<!-- Notes: The backend API processes the request and sends a response back to Tyk.

Tyk can also transform the response if needed, perhaps removing sensitive data or adding custom headers. -->

---
layout: default
---

# How Tyk Applies Security

- There are a wide array of options for authentication and authorizing access to APIs with Tyk.

<v-click>

- These are configured as part of API definitions via:
  - Gateway REST API in headless open-source installations
  - or the Dashboard API or API Designer UI when using the Tyk Dashboard
  - Config-as-code via Tyk Operator

</v-click>

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
