---
theme: tyk
layout: cover
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Authentication Methods"
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <h1 style="font-size:2.6rem; font-weight:800; color:white; margin:0; border:0;">API Security with Tyk:</h1>
  <h2 style="font-size:1.45rem; font-weight:600; color:white; margin:0.6rem 0 0 0; border:0;">Authentication Methods</h2>
  <p style="opacity:0.85; margin-top:1.5em; max-width:700px; color:white;">
    Learn the different ways to verify and secure access to your APIs in Tyk
  </p>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; bottom:1.5rem; right:1.5rem; width:6rem; opacity:0.8;" />
</div>

---
layout: default
---

# AuthN and AuthZ

- Tyk Gateway acts as a secure intermediary between clients and services.
- Each API proxy can define authentication requirements.
- Controls request routing and access enforcement.

<div style="height:0.8rem"></div>

<p style="font-weight:700; margin-bottom:0.4rem;">Authentication vs. Authorization</p>

- Authentication (AuthN): confirms identity — who is calling.
- Authorization (AuthZ): grants permissions — what they can do.
- Work together to secure access.

<div style="height:0.8rem"></div>

- Prevent unauthorized access
- Protect data integrity
- Meet compliance requirements

---
layout: default
---

# How AuthN and AuthZ Works in Tyk

<ul class="bullet-tight">
  <li>Middleware chain processes each request.</li>
  <li>Multiple authentication methods supported.</li>
  <li>Custom authentication plugins supported.</li>
  <li>Auth methods can be chained, though order is not configurable.</li>
</ul>

---
layout: default
---

# Auth Tokens

<div style="display:flex; gap:1rem; margin-top:0.8rem; align-items:flex-start;">
  <div style="flex:1.6; font-size:0.87rem; line-height:1.45;">
    <ul class="bullet-tight">
      <li>A bearer token is an access token that allows any party in possession of it to access associated resources.</li>
      <li>No cryptographic proof of ownership is required — possession alone is sufficient for access.</li>
      <li>Bearer tokens must be handled securely in transit and at rest.</li>
      <li>Typically sent in the <code>Authorization</code> header, but can also be passed by query parameter or cookie.</li>
      <li>Optional enhancements include Dynamic mTLS and signature validation for backward compatibility.</li>
    </ul>
  </div>
  <div style="flex:1;">
    <div class="code-card">
      <div class="section-label" style="margin-bottom:0.5rem;">Example header</div>
      <pre>Authorization: 58dbe0dbfe2f5a0b7af7f7d08cd4e31304414e994ff724126</pre>
    </div>
  </div>
</div>

<!-- Notes: "Bearer tokens offer a simple and flexible way to manage API access. However, their simplicity also makes them vulnerable if not protected properly. In this slide, we’re looking at what a bearer token is and why secure handling in both storage and transmission is critical. Tyk gives you flexibility to accept tokens from headers, query parameters, or cookies. We can also see how Tyk provides advanced configuration options - configure dynamic mTLS or request signing to support legacy systems like Mashery." -->

---
layout: default
---

# Auth Tokens

<p style="font-weight:700; margin-bottom:0.6rem;">Auth Token Location and Advanced Options in Tyk</p>

<div style="display:flex; gap:1rem; align-items:flex-start;">
  <div style="flex:1;">
    <div class="code-card">
      <div class="section-label" style="margin-bottom:0.45rem;">OpenAPI securitySchemes</div>
      <pre>components:
  securitySchemes:
    myAuthScheme:
      type: apiKey
      in: header
      name: Authorization</pre>
    </div>
  </div>
  <div style="flex:1.12;">
    <div class="code-card">
      <div class="section-label" style="margin-bottom:0.45rem;">Tyk expansion</div>
      <pre>x-tyk-api-gateway:
  server:
    authentication:
      enabled: true
      securitySchemes:
        myAuthScheme:
          enabled: true
          query:
            enabled: true
            name: query-auth
          cookie:
            enabled: true
            name: cookie-auth</pre>
    </div>
  </div>
</div>

<!-- Notes: While OpenAPI limits you to one location for a token, Tyk allows the securityScheme defined in the OAS to multiple locations for the authentication token — headers, query strings, cookies. -->

---
layout: default
---

# Basic Authentication

<div style="font-size:0.95rem; line-height:1.5;">
  <p>Basic Authentication is a simple method where credentials (username and password) are sent to the server, typically via an HTTP header.</p>
  <p>Credentials are combined as <code>username:password</code>, then base64 encoded:</p>
  <div class="code-card" style="margin:0.7rem 0 0.9rem 0;">
    <pre>Basic base64Encode(username:password)
Authorization: Basic am9obkBzbWl0aC5jb206MTIzNDU2Nw==</pre>
  </div>
  <p style="font-weight:700; margin-bottom:0.35rem;">Security Warning:</p>
  <ul class="bullet-tight">
    <li>Credentials are sent as base64-encoded plain text.</li>
    <li>Susceptible to interception.</li>
    <li><strong>Use only with TLS/mTLS for additional protection.</strong></li>
  </ul>
</div>

<!-- Notes: Let's talk about Basic Authentication, one of the oldest and simplest forms of API authentication. It works by taking a user’s credentials—just a username and a password—combining them with a colon in between, and base64 encoding the result. This string is then sent in the Authorization header of the request. As shown in the example here, anyone with access to that string could decode it and gain access, so the main risk is that it’s essentially plain text over the wire. Because of this, we strongly advise using Basic Auth only over secure channels like TLS, and ideally combine it with additional security layers like mutual TLS (mTLS) for client certificate verification. In most modern use cases, we prefer more secure alternatives like OAuth2 or JWT, but Basic Auth can still be useful for simple internal integrations where risk is minimal and the communication is secure. -->

---
layout: default
---

# Basic Authentication

<p style="font-weight:700; margin-bottom:0.4rem;">Extracting Credentials from the Request Payload</p>

<ul class="bullet-tight" style="font-size:0.92rem; line-height:1.4;">
  <li>Some APIs, like SOAP, may include credentials in the request body instead of HTTP headers.</li>
  <li>Tyk can handle this by using regular expressions to extract credentials directly from the body.</li>
</ul>

<div style="display:flex; gap:1rem; align-items:flex-start; margin-top:0.8rem;">
  <div style="flex:1.35;">
    <div class="code-card">
      <pre>x-tyk-api-gateway:
  server:
    authentication:
      enabled: true
      securitySchemes:
        myAuthScheme:
          enabled: true
          extractCredentialsFromBody:
            enabled: true
            userRegexp: '&lt;User&gt;(.*)&lt;/User&gt;'
            passwordRegexp: '&lt;Password&gt;(.*)&lt;/Password&gt;'</pre>
    </div>
  </div>
  <div style="flex:0.9; font-size:0.86rem; line-height:1.4; color:#4e4e74; padding-top:0.5rem;">
    Regex patterns must capture only one group — the actual username and password values.
  </div>
</div>

<!-- Notes: In some legacy or specialized API use cases—like SOAP—credentials might be passed in the body of the request rather than in the headers. While this is non-standard from a RESTful perspective, Tyk supports it through regex-based extraction. With this feature, you define patterns that match the username and password in the request payload. For example, if the request XML body includes tags like <User> and <Password>, we use regular expressions to extract the values within those tags. The extractCredentialsFromBody field in the Tyk configuration allows us to enable this functionality and specify the regex patterns. Just make sure each regex has exactly one match group — that’s the part Tyk will use as the actual credential. This makes Tyk flexible enough to support a wide range of API formats, including those that don’t follow modern standards. -->

---
layout: default
---

# Basic Authentication

<ul class="bullet-tight" style="font-size:0.96rem; line-height:1.45; margin-top:1rem;">
  <li>Tyk does not generate Basic Auth credentials.</li>
  <li>You must manually create and register usernames and passwords.</li>
  <li>This is done by creating a Tyk key that:
    <ul>
      <li>includes a username and password</li>
      <li>grants access to the protected API</li>
    </ul>
  </li>
</ul>

<p style="margin-top:1rem; font-weight:700;">Important:</p>
<p style="font-size:1rem; line-height:1.45; margin-top:0.2rem;"><strong>The API key itself is not used directly by the client.</strong><br/>Clients must send Basic Auth credentials (<code>username:password</code>) in the request.</p>

<!-- Notes: When using Basic Authentication with Tyk, the process is slightly different from token-based auth. Tyk does not issue the actual credentials. Instead, you are responsible for creating and registering the users' usernames and passwords. To implement this, you create a standard Tyk access key, just like you would for an API token, but you also define a username and password as part of that key. At runtime, Tyk doesn't expect clients to use the access key itself. Instead, the client must send the Base64-encoded username and password via the Authorization header. Tyk then looks up the provided credentials and validates them against the registered key data. This approach offers centralized control and aligns with Tyk’s usual access control methods, even for Basic Auth. -->

---
layout: default
---

# HMAC

<ul class="bullet-tight" style="font-size:0.95rem; line-height:1.4;">
  <li>Stands for Hash-Based Message Authentication Code.</li>
  <li>Adds security by requiring a signature with each request.</li>
  <li>Uses a secret key that is never sent over the network.</li>
</ul>

<div style="display:flex; gap:1rem; margin-top:0.8rem; align-items:flex-start;">
  <div style="flex:1;" class="code-card">
    <div class="section-label" style="margin-bottom:0.45rem;">Signature creation</div>
    <pre>Base64Encode(
  HMAC-SHA1(
    "date: Mon, 02 Jan 2006 15:04:05 MST",
    secret_key
  )
)</pre>
  </div>
  <div style="flex:1.1;" class="code-card">
    <div class="section-label" style="margin-bottom:0.45rem;">Authorization header</div>
    <pre>Authorization: Signature
  keyId="hmac-key-1",
  algorithm="hmac-sha1",
  signature="Base64(HMAC-SHA1(signing string))"</pre>
  </div>
</div>

<!-- Notes: HMAC stands for Hash-Based Message Authentication Code. It adds an extra layer of security by requiring the client to send a signature with every request. This signature proves the request is authentic, using a secret key that’s never sent over the network. The client generates a signature using the Date header and their secret key, then sends the request to Tyk including an Authorization header. Tyk validates the signature by recreating it using the same secret key. If the signatures match, the request is trusted and processed. If not, it’s rejected. -->

---
layout: default
---

# HMAC

<ul class="bullet-tight" style="font-size:0.95rem; line-height:1.45; margin-top:0.8rem;">
  <li>Tyk verifies the request:</li>
  <ul>
    <li>Extracts the <code>keyId</code> from the header.</li>
    <li>Retrieves the secret key from Redis.</li>
    <li>Recreates the HMAC signature based on the request’s date header.</li>
    <li>If the generated signature matches the request, access is granted.</li>
  </ul>
  <li>Creating HMAC keys is the same as creating regular access tokens.</li>
  <li>Tyk generates a secret key for the key owner to be stored.</li>
</ul>

<!-- Notes: Let’s look at a little deeper how Tyk authenticates using HMAC. Tyk extracts the keyId from the Authorization header. It then retrieves the secret key from Redis, linked to that keyId. Tyk recreates the HMAC signature using the request’s Date header and the secret key. If Tyk’s signature matches the one sent in the request, the request is trusted and access is granted. HMAC keys in Tyk are created the same way as regular access tokens. When a key is created, Tyk also generates a secret key for the key owner, and that key is securely stored. -->

---
layout: default
---

# HMAC

<p style="font-weight:700; margin-bottom:0.45rem;">Upstream Signing</p>

<ul class="bullet-tight" style="font-size:0.95rem; line-height:1.45;">
  <li>Tyk takes the request it’s about to send upstream.</li>
  <li>It creates an HMAC signature of key parts of that request:</li>
  <ul>
    <li><code>(request-target)</code> — the method and path.</li>
    <li>All the headers in the request.</li>
  </ul>
  <li>If there’s no <code>Date</code> header, Tyk adds one automatically because the HMAC signing standard requires it.</li>
</ul>

<!-- Notes: Let’s talk about Upstream HMAC Signing in Tyk. After Tyk authenticates and processes a client’s request, it’s ready to send it upstream to your backend service. Before it does, Tyk creates an HMAC signature of key parts of that outgoing request. It signs the request-target, which includes the HTTP method and path, and all the headers in the request. If the request doesn’t already have a Date header, Tyk automatically adds one because it’s required by the HMAC signing standard. This ensures that the upstream service can verify the request and trust that it came through Tyk. -->

---
layout: default
---

# JSON Web Tokens

<ul class="bullet-tight" style="font-size:0.98rem; line-height:1.45; margin-top:0.8rem;">
  <li>JSON web tokens are cryptographically signed.</li>
  <li>Claims are often signed by a trusted 3rd party.</li>
  <li>Configure Tyk to extract user ID and policy ID from claims.</li>
</ul>

<div class="token-box" style="margin-top:1rem;">Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...MHrH</div>

<!-- Notes: JWTs are a widely used method for securely transmitting information between parties. They are cryptographically signed, ensuring that the claims they carry haven’t been altered. In many cases, the claims are signed by a trusted third party, such as an authentication provider. This means that when a user presents a JWT, Tyk doesn’t need to call the provider again—it can simply verify the signature and extract the claims. Within Tyk, we can configure it to extract specific claims such as User ID and Policy ID. By doing this, Tyk can enforce security policies dynamically, ensuring the right users have the right level of access without additional database lookups or API calls. -->

---
layout: fullscreen
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; display:flex; align-items:center; justify-content:center; background:white;">
  <img src="./source_renders/slide-13.png" style="width:100%; height:100%; object-fit:contain;" />
</div>

<!-- Notes: (EXPLAIN JWT FLOW WITH TYK) -->

---
layout: default
---

# JSON Web Tokens

<div style="display:flex; gap:1rem; margin-top:0.8rem; align-items:flex-start;">
  <div style="flex:1.25;">
    <img src="./public/screenshots/jwt-config.png" style="width:100%; border:1px solid #d8d8e5; border-radius:12px;" />
  </div>
  <div style="flex:0.95; font-size:0.88rem; line-height:1.42;">
    <ul class="callout-list">
      <li><strong>Token signing method:</strong> RSA Public Key, HMAC Secret, ECDSA, or JWKS URI.</li>
      <li><strong>Subject identity claim:</strong> claim used to represent the client identity, such as name or userID.</li>
      <li><strong>Public key / secret / JWKS URI:</strong> verification material used to validate the JWT.</li>
      <li><strong>Policy claim:</strong> claim containing the Tyk policy ID.</li>
      <li><strong>Default policy:</strong> fallback policy if no policy claim is found.</li>
    </ul>
  </div>
</div>

<!-- Notes: In the Tyk dashboard, when JWT authentication is selected, you have the option to configure the signing method, the subject identity claim, the public key / secret / JWKS URI used to validate the token, the policy claim that ties the JWT to a Tyk policy, and the default policy that will be used if no policy claim is present. -->

---
layout: default
---

# JSON Web Tokens

<div style="display:flex; gap:1rem; margin-top:0.7rem; align-items:flex-start;">
  <div style="flex:1;">
    <div class="token-box" style="min-height:260px; font-size:0.74rem; line-height:1.55; color:#d83cff;">
      <span style="color:#ff1e68;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.</span>ey<br/>
      JzdWIiOiJpZGVudGlmaWVyLWlkIiwibmFtZSI6Ii<br/>
      kpvaG4gRG91Iiwi aWF0IjoxNTE2MjM5MDIyLCJw<br/>
      b2wiOiJwb2xpY3ktaWQifQ.<span style="color:#0aa7e8;">kaBr00iPT00hUF5c</span><br/>
      <span style="color:#0aa7e8;">fArMk2N4Teg8P2Ijx8AfMKQ3NN4</span>
    </div>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; gap:0.55rem;">
    <div class="code-card" style="padding-top:0.55rem;">
      <div class="section-label" style="margin-bottom:0.3rem;">Header: algorithm &amp; token type</div>
      <pre>{
  "alg": "HS256",
  "typ": "JWT"
}</pre>
    </div>
    <div class="code-card" style="padding-top:0.55rem;">
      <div class="section-label" style="margin-bottom:0.3rem;">Payload: data</div>
      <pre>{
  "sub": "1234567890",
  "name": "User 1",
  "iat": 1516239022,
  "sub": "identifier-id",
  "pol": "policy-id"
}</pre>
    </div>
    <div class="code-card" style="padding-top:0.55rem;">
      <div class="section-label" style="margin-bottom:0.3rem;">Verify signature</div>
      <pre>HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  "tyk-shared-secret"
)</pre>
    </div>
  </div>
</div>

<!-- Notes: A JWT consists of three parts: Header – specifies the algorithm used for signing. Payload – contains claims, which are statements about the user, such as their ID or permissions. As we can see in the payload, the 'sub' and 'pol' claims contain the identifier for the client and the policy ID to enforce on the token. Signature – created using a secret key or private key, making the token tamper-proof. In this example, we are using a HMAC shared secret, and the secret should match the value configured on the API definition in the Tyk Dashboard. -->

---
layout: default
---

# OAuth 2.0

<ul class="bullet-tight" style="font-size:0.96rem; line-height:1.45; margin-top:0.8rem;">
  <li>OAuth 2.0 is an open, industry-standard protocol for authorization.</li>
  <li>It enables secure delegated access to APIs without sharing user credentials.</li>
  <li>Based on RFC 6749, it supports third-party apps acting:</li>
  <ul>
    <li>on behalf of a user (Resource Owner)</li>
    <li>on their own behalf (for example backend services)</li>
  </ul>
  <li>Instead of passwords, OAuth relies on Access Tokens for API access.</li>
  <li>Common use cases include integrations with Google, Microsoft, or Facebook APIs and secure third-party access to enterprise APIs.</li>
</ul>

<!-- Notes: In this slide, we're introducing OAuth 2.0—one of the most widely used frameworks for API authorization. At its core, OAuth 2.0 allows applications to access user data without exposing sensitive information like passwords. This is achieved using access tokens that represent the user's authorization. These tokens are issued by an Authorization Server once the user has authenticated and granted permission. The real power of OAuth is in delegation. For example, your app can access a user's calendar or contacts with their consent—but without ever seeing their credentials. As defined in RFC 6749, OAuth works for both user-based access and machine-to-machine communication. -->

---
layout: default
---

# OAuth 2.0

<div style="display:flex; flex-direction:column; gap:1rem; margin-top:1.2rem;">
  <div style="display:flex; align-items:center; justify-content:center; gap:0.7rem; flex-wrap:wrap;">
    <div class="flow-pill">Client</div>
    <div style="color:#8b85bf; font-size:1.4rem;">→</div>
    <div class="flow-pill">User (Resource Owner)</div>
    <div style="color:#8b85bf; font-size:1.4rem;">→</div>
    <div class="flow-pill">Authorization Server</div>
    <div style="color:#8b85bf; font-size:1.4rem;">→</div>
    <div class="flow-pill">Access Token</div>
    <div style="color:#8b85bf; font-size:1.4rem;">→</div>
    <div class="flow-pill">Resource Server</div>
  </div>
  <p style="text-align:center; font-size:0.98rem; color:#4f4f73; max-width:760px; margin:0 auto;">
    Client requests permission from the user, the user authenticates with the authorization server, the server issues an access token, and the token is then used to access the resource server.
  </p>
</div>

<!-- Notes: In this slide, we're introducing OAuth 2.0—one of the most widely used frameworks for API authorization. At its core, OAuth 2.0 allows applications to access user data without exposing sensitive information like passwords. This is achieved using access tokens that represent the user's authorization. These tokens are issued by an Authorization Server once the user has authenticated and granted permission. The real power of OAuth is in delegation. For example, your app can access a user's calendar or contacts with their consent—but without ever seeing their credentials. As defined in RFC 6749, OAuth works for both user-based access and machine-to-machine communication. -->

---
layout: default
---

# OAuth 2.0

<table class="term-table" style="margin-top:0.7rem;">
  <thead>
    <tr><th>Term</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td class="term">Protected Resource</td><td>The API or service that needs authorization (e.g., a user's data)</td></tr>
    <tr><td class="term">Resource Owner</td><td>The user or system owning the Protected Resource</td></tr>
    <tr><td class="term">Client</td><td>App or system requesting access to the resource</td></tr>
    <tr><td class="term">Access Token</td><td>Temporary key proving access permission, passed in API calls</td></tr>
    <tr><td class="term">Authorization Server</td><td>Issues tokens after authenticating and authorizing the Client</td></tr>
    <tr><td class="term">Client Application</td><td>The app registered with the Authorization Server to request access</td></tr>
    <tr><td class="term">Resource Server</td><td>The API backend that hosts the data; it checks the token</td></tr>
    <tr><td class="term">Identity Server</td><td>Manages user authentication (can be the same as Authorization Server)</td></tr>
    <tr><td class="term">Scope</td><td>Defines what the Client can access (e.g., "read", "write")</td></tr>
    <tr><td class="term">Grant Type</td><td>The OAuth flow used (e.g., Authorization Code, Client Credentials)</td></tr>
  </tbody>
</table>

<!-- Notes: Now that we’ve covered the high-level concept, let’s define the core building blocks of OAuth 2.0. Think of the Protected Resource as your API—the thing we want to control access to. The Resource Owner is typically the end user. The Client is the app trying to access the API on behalf of that user. When the user grants permission, the Authorization Server issues an Access Token, which the Client presents to the Resource Server. The Scope parameter allows the user or admin to limit what the Client can access—like read-only or full access. And finally, different Grant Types support different scenarios—interactive login, background jobs, or legacy systems. Understanding these terms is key before diving into the actual implementation with Tyk. -->

---
layout: default
---

# OAuth 2.0

<p style="font-weight:700; margin-bottom:0.7rem;">Understanding Access Tokens &amp; Client Registration</p>

<div style="display:flex; gap:1.4rem; align-items:flex-start;">
  <div style="flex:1;">
    <p style="font-weight:700; margin-bottom:0.35rem;">Access Tokens</p>
    <ul class="bullet-tight" style="font-size:0.92rem; line-height:1.4;">
      <li>Represent the authorization granted by the Resource Owner to the Client.</li>
      <li>Typically opaque strings or JWTs, possibly containing identity, scopes, and expiry.</li>
      <li>Sent with each API request to authenticate the client.</li>
      <li>Usually have an expiry time to limit access duration.</li>
      <li>Can be refreshed using a Refresh Token if supported.</li>
    </ul>
  </div>
  <div style="flex:1;">
    <p style="font-weight:700; margin-bottom:0.35rem;">Client Application Registration</p>
    <ul class="bullet-tight" style="font-size:0.92rem; line-height:1.4;">
      <li>Client ID — public identifier for the app.</li>
      <li>Client Secret — confidential key shared with the server.</li>
      <li>Redirect URI — where the user is sent after login.</li>
      <li>Client authenticates using ID and Secret during token request.</li>
      <li>Authorization Server validates and issues an Access Token.</li>
    </ul>
  </div>
</div>

<!-- Notes: In this slide, we look deeper at the role of access tokens and how client applications are authenticated in an OAuth 2.0 flow. First, access tokens are used to represent delegated access to resources. They're passed with API requests and can be simple opaque strings or structured JWTs containing user data, scopes, and expiry details. Importantly, these tokens typically expire for security reasons, and long-term access can be handled via a refresh token. On the client side, before a token can be issued, the client must register with the Authorization Server. This means providing a Client ID, a Client Secret, and a Redirect URI. The redirect URI is important—it tells the server where to send the user after authorization. Once registered, the client can use its credentials to request an access token. The server verifies the credentials and, if valid, responds with a token that the client can use to access the resource server securely. -->

---
layout: default
---

# OAuth 2.0

<p style="font-weight:700; margin-bottom:0.55rem;">Tyk can act as an OAuth 2.0 Authorization Server</p>

<ul class="bullet-tight" style="font-size:0.96rem; line-height:1.45;">
  <li>Tyk handles:
    <ul>
      <li>token generation and management</li>
      <li>access control for client apps</li>
    </ul>
  </li>
  <li>Key Features:</li>
  <ul>
    <li><strong>Fine-Grained Access Control</strong> — use policies, versioning, and API IDs to restrict access.</li>
    <li><strong>Usage Analytics</strong> — track and analyze usage by Client ID.</li>
    <li><strong>Multi-API Access</strong> — one OAuth token can access multiple APIs.</li>
  </ul>
</ul>

<p style="font-size:0.9rem; color:#4e4e74; margin-top:0.9rem;">Example: issue a token via API A, then access API B via Auth Token using shared policies.</p>

<!-- Notes: Tyk supports OAuth 2.0 by functioning as a full authorization server. This means it can handle the generation, validation, and lifecycle of tokens that clients use to access your protected APIs. There are several key advantages when using Tyk in this role. First, you get fine-grained access control — so you can limit access not just by endpoint, but by API version or a specific named API. Second, you get full visibility into how your APIs are used thanks to Tyk’s built-in analytics. These can be grouped by Client ID, giving you insights into who is calling what and how often. Finally, Tyk allows a single OAuth token to be used across multiple APIs. For example, you could issue a token through one API configured for OAuth and allow that token to be recognized by others using the Auth Token method — all managed through shared policies. This makes Tyk standards-compliant, flexible, and efficient for real-world OAuth deployments. -->

---
layout: default
---

# OAuth 2.0

<p style="font-weight:700; margin-bottom:0.65rem;">Tyk supports these OAuth 2.0 grant types:</p>

<ol style="font-size:0.94rem; line-height:1.45; padding-left:1.25rem;">
  <li style="margin-bottom:0.55rem;"><strong>Authorization Code Grant</strong>
    <ul>
      <li>User is redirected to identity server.</li>
      <li>Requires user approval before access token is issued.</li>
    </ul>
  </li>
  <li style="margin-bottom:0.55rem;"><strong>Client Credentials Grant</strong>
    <ul>
      <li>For machine-to-machine authentication.</li>
      <li>Uses client ID + client secret.</li>
    </ul>
  </li>
  <li><strong>Resource Owner Password Grant</strong> (legacy use only)
    <ul>
      <li>Client uses the user’s own credentials to authenticate.</li>
      <li><strong>Not recommended — considered insecure.</strong></li>
      <li>Provided for legacy compatibility only.</li>
    </ul>
  </li>
</ol>

<!-- Notes: We’ll walk through the OAuth 2.0 grant types that Tyk supports when it’s used as an authorization server. First, we have the Authorization Code Grant. This is the most common and secure flow for user-based access. In this flow, the user is redirected to a login page hosted by the identity provider. After the user authenticates and approves the access, an authorization code is issued, which the client can exchange for an access token. Next is the Client Credentials Grant. This is used in machine-to-machine communication where no user is involved. Finally, Tyk also supports the Resource Owner Password Grant, where the client application collects the user’s credentials and exchanges them directly for an access token. However, this flow is discouraged and considered insecure, and Tyk supports it mainly for backward compatibility with legacy systems. -->

---
layout: default
---

# OAuth 2.0

<div style="display:flex; gap:1.5rem; align-items:flex-start; margin-top:0.9rem;">
  <div style="flex:1;">
    <p style="font-weight:700; margin-bottom:0.35rem;">Manage Client Access Policies</p>
    <ul class="bullet-tight" style="font-size:0.92rem; line-height:1.4;">
      <li>Access tokens issued by Tyk are standard session objects.</li>
      <li>They can be bound to security policies at token creation time.</li>
      <li>Policies can define:
        <ul>
          <li>rate limits</li>
          <li>quotas</li>
          <li>access rights</li>
        </ul>
      </li>
      <li>Policies applied to a Client App affect all tokens issued for it.</li>
    </ul>
  </div>
  <div style="flex:1;">
    <p style="font-weight:700; margin-bottom:0.35rem;">Client App Registration</p>
    <ul class="bullet-tight" style="font-size:0.92rem; line-height:1.4;">
      <li>All grant types start by registering a Client App in the Tyk Dashboard.</li>
      <li>Registration generates:
        <ul>
          <li>Client ID</li>
          <li>Client Secret</li>
        </ul>
      </li>
      <li>These credentials are required in future token requests.</li>
    </ul>
  </div>
</div>

<!-- Notes: This slide covers two important concepts: how we manage client access and how we register client applications in Tyk. First, when an access token is issued by the Tyk Authorization Server, it's treated just like any other Tyk session object. This means we can assign it a security policy. These policies allow us to enforce rate limits, quotas, and control API access levels — critical for managing client behavior and ensuring system stability. Second, before a client can request tokens using any OAuth grant type, it must first be registered via the Tyk Dashboard. This process creates a Client App, generating a Client ID and Secret, which are used to authenticate the client during token exchange. This central registration mechanism allows you to standardize and secure access control across your API ecosystem. -->
