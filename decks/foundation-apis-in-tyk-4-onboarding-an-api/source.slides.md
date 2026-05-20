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
title: "Onboarding APIs into Tyk"
background: 'linear-gradient(135deg, #7b27f5 0%, #8d2ff6 45%, #c217ff 100%)'
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; padding:0 4rem;">
  <h1 style="font-size:3rem; line-height:1.05; font-weight:800; color:white; margin:0; border:0;">Onboarding APIs into Tyk</h1>
  <p style="margin:1.25rem auto 0 auto; max-width:530px; font-size:0.88rem; line-height:1.65; color:rgba(255,255,255,0.92);">
    Onboarding an API into Tyk means making Tyk aware of your API so it can manage, protect, and monitor it. This flow is designed to help developers ensure their APIs are production-ready and meet organizational requirements.
  </p>
  <img src="./images/icons/tyk-logo.png" style="position:absolute; right:0.75rem; bottom:0.55rem; width:4.25rem;" />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.45rem; font-weight:800; line-height:1.02; border:0;">Define your API</h1>

  <div style="margin-top:2.15rem; width:68%; font-size:0.96rem; line-height:1.7; color:#111;">
    <p style="margin:0 0 1rem 0;">Start by telling Tyk about your API.</p>
    <p style="margin:0 0 0.55rem 0;">You specify:</p>
    <ul style="margin:0 0 1rem 1.3rem; padding:0; line-height:1.7;">
      <li>The listen path (what path Tyk should expose)</li>
      <li>The target URL (where requests are forwarded)</li>
      <li>Whether the API uses HTTP or HTTPS</li>
    </ul>
    <p style="margin:0;">This is the foundation, Tyk needs to know where to send traffic and what to call it.</p>
  </div>

  <img src="./images/icons/tyk-logo.png" style="position:absolute; right:0.82rem; bottom:0.58rem; width:4.25rem;" />
</div>

<!-- Notes: "Tyk supports the OpenAPI Specification, or OAS, which is the industry standard for defining APIs."
"If you’re already using OAS to design and document your APIs, you can import those definitions directly into Tyk."
"This offers significant time savings and reduces complexity because you don’t need to redefine your APIs from scratch." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.45rem; font-weight:800; line-height:1.02; border:0;">Secure the API</h1>

  <div style="margin-top:1.7rem; width:68%; font-size:0.96rem; line-height:1.7; color:#111;">
    <p style="margin:0 0 1rem 0;">Once registered, the next concern is access control.</p>
    <p style="margin:0 0 0.55rem 0;">Tyk supports various authentication mechanisms:</p>
    <ul style="margin:0 0 1rem 1.3rem; padding:0; line-height:1.7;">
      <li>API Keys (most basic)</li>
      <li>OAuth 2.0 or JWT (token-based access)</li>
      <li>mTLS (certificate-based)</li>
    </ul>
    <p style="margin:0;">This ensures only authorized clients can use your API. It is optional but recommended.</p>
  </div>
</div>

<!-- Notes: "This diagram shows the structure of a Tyk OAS API Definition, which is made up of two key parts."
"First, you have the standard OAS section. This is typically created in your code editor or design tool. It describes your API: the endpoints, methods, request/response models, and documentation—everything you’d expect in an OpenAPI Spec."
"Then, when you import this into Tyk, we automatically add a x-tyk-api-gateway section."
"This section contains Tyk-specific configurations—things like authentication, rate limiting, policies, plugins, and all the controls that Tyk applies to manage and secure your API traffic."
"So, in short: you design your API as usual in OAS, and Tyk adds the gateway-specific logic to bring it to life inside the Tyk platform."
“You can export an imported OAS definition for a full Tyk OAS definition or you can start from a template” -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.32rem; font-weight:800; line-height:1.02; max-width:640px; border:0;">Access Control Rules Using<br />Policies</h1>

  <div style="margin-top:0.3rem; width:72%; font-size:0.92rem; line-height:1.68; color:#111;">
    <p style="margin:0 0 0.75rem 0;">Tyk uses policies to control how your API is used:</p>
    <ul style="margin:0 0 0.9rem 1.3rem; padding:0; line-height:1.7;">
      <li>Rate limiting (requests per minute/hour/day)</li>
      <li>Quotas (total requests allowed)</li>
      <li>Access permissions (what endpoints and methods are allowed)</li>
    </ul>
    <p style="margin:0 0 0.9rem 0;">Policies are reusable and can be assigned to different users or applications. It is optional but recommended.</p>
    <p style="margin:0;">For JWT authentication, policies are mandatory to apply access control rules to the API request.</p>
  </div>
</div>

<!-- Notes: "This diagram shows the structure of a Tyk OAS API Definition, which is made up of two key parts."
"First, you have the standard OAS section. This is typically created in your code editor or design tool. It describes your API: the endpoints, methods, request/response models, and documentation—everything you’d expect in an OpenAPI Spec."
"Then, when you import this into Tyk, we automatically add a x-tyk-api-gateway section."
"This section contains Tyk-specific configurations—things like authentication, rate limiting, policies, plugins, and all the controls that Tyk applies to manage and secure your API traffic."
"So, in short: you design your API as usual in OAS, and Tyk adds the gateway-specific logic to bring it to life inside the Tyk platform."
“You can export an imported OAS definition for a full Tyk OAS definition or you can start from a template” -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.42rem; font-weight:800; line-height:1.02; max-width:700px; border:0;">Customize API Behavior with<br />Middleware</h1>

  <div style="margin-top:1.35rem; width:70%; font-size:0.94rem; line-height:1.68; color:#111;">
    <p style="margin:0 0 0.7rem 0;">Tyk has a wide variety of Out Of The Box plugins for extending API behavior:</p>
    <ul style="margin:0 0 1rem 1.3rem; padding:0; line-height:1.7;">
      <li>Add custom headers</li>
      <li>Modify request/response payloads</li>
      <li>Validate input data</li>
      <li>Block/transform requests</li>
    </ul>
    <p style="margin:0;">This gives you flexibility without changing backend services.</p>
  </div>
</div>

<!-- Notes: "This diagram shows the structure of a Tyk OAS API Definition, which is made up of two key parts."
"First, you have the standard OAS section. This is typically created in your code editor or design tool. It describes your API: the endpoints, methods, request/response models, and documentation—everything you’d expect in an OpenAPI Spec."
"Then, when you import this into Tyk, we automatically add a x-tyk-api-gateway section."
"This section contains Tyk-specific configurations—things like authentication, rate limiting, policies, plugins, and all the controls that Tyk applies to manage and secure your API traffic."
"So, in short: you design your API as usual in OAS, and Tyk adds the gateway-specific logic to bring it to life inside the Tyk platform."
“You can export an imported OAS definition for a full Tyk OAS definition or you can start from a template” -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.45rem; font-weight:800; line-height:1.02; border:0;">Monitoring and Observability</h1>

  <div style="margin-top:1.38rem; width:71%; font-size:0.93rem; line-height:1.68; color:#111;">
    <p style="margin:0 0 0.8rem 0;">Tyk provides analytics out of the box using the Dashboard GUI</p>
    <p style="margin:0 0 0.45rem 0;">You can track:</p>
    <ul style="margin:0 0 0.95rem 1.3rem; padding:0; line-height:1.68;">
      <li>Number of requests</li>
      <li>Status codes</li>
      <li>Latency</li>
      <li>Errors</li>
    </ul>
    <p style="margin:0;">For deeper visibility, you can integrate with tools like Prometheus, Grafana, or OpenTelemetry.</p>
  </div>
</div>

<!-- Notes: "This diagram shows the structure of a Tyk OAS API Definition, which is made up of two key parts."
"First, you have the standard OAS section. This is typically created in your code editor or design tool. It describes your API: the endpoints, methods, request/response models, and documentation—everything you’d expect in an OpenAPI Spec."
"Then, when you import this into Tyk, we automatically add a x-tyk-api-gateway section."
"This section contains Tyk-specific configurations—things like authentication, rate limiting, policies, plugins, and all the controls that Tyk applies to manage and secure your API traffic."
"So, in short: you design your API as usual in OAS, and Tyk adds the gateway-specific logic to bring it to life inside the Tyk platform."
“You can export an imported OAS definition for a full Tyk OAS definition or you can start from a template” -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.45rem; font-weight:800; line-height:1.02; border:0;">Running a smoke test</h1>

  <div style="margin-top:1.38rem; width:70%; font-size:0.93rem; line-height:1.68; color:#111;">
    <p style="margin:0 0 0.85rem 0;">Before going live, test your API from within the Tyk Dashboard or using tools like Postman.</p>
    <ul style="margin:0 0 1rem 1.3rem; padding:0; line-height:1.68;">
      <li>The routing works correctly</li>
      <li>Security is enforced</li>
      <li>Rate limiting behaves as expected</li>
    </ul>
    <p style="margin:0;">You’ve successfully created, secured, and deployed your first API</p>
  </div>
</div>

<!-- Notes: "This diagram shows the structure of a Tyk OAS API Definition, which is made up of two key parts."
"First, you have the standard OAS section. This is typically created in your code editor or design tool. It describes your API: the endpoints, methods, request/response models, and documentation—everything you’d expect in an OpenAPI Spec."
"Then, when you import this into Tyk, we automatically add a x-tyk-api-gateway section."
"This section contains Tyk-specific configurations—things like authentication, rate limiting, policies, plugins, and all the controls that Tyk applies to manage and secure your API traffic."
"So, in short: you design your API as usual in OAS, and Tyk adds the gateway-specific logic to bring it to life inside the Tyk platform."
“You can export an imported OAS definition for a full Tyk OAS definition or you can start from a template” -->
