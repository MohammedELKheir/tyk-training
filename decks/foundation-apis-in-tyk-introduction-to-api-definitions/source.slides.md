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
title: "APIs in Tyk"
background: 'linear-gradient(90deg, #7C3AED 0%, #A21CAF 100%)'
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; padding:0 3rem; transform:translateY(-8px);">
  <h1 style="font-size:3.2rem; font-weight:800; color:white; margin:-0.25rem 0 0 0; border:0; line-height:1.02; letter-spacing:-0.025em;">APIs in Tyk</h1>
  <p style="font-size:0.92rem; line-height:1.44; color:white; margin:1.35rem auto 0 auto; max-width:590px; font-weight:400;">
    An introduction to how APIs are represented, configured, and managed within the Tyk ecosystem — covering both Tyk-Classic (Native) and OpenAPI (OAS) formats.
  </p>
  <div style="position:absolute; right:0; bottom:0; width:106px; height:77px; background:#030303; border-top-left-radius:32px;"></div>
  <img src="./images/icons/tyk-logo.png" style="position:absolute; right:17px; bottom:15px; width:56px; height:auto;" />
</div>

---
layout: default
---

<div style="position:relative; height:100%; padding:0; transform:translateX(-28px) translateY(-6px);">
  <h1 style="font-size:2.65rem; line-height:1.03; font-weight:800; color:#5B10D8; margin:1.05rem 0 1.35rem 0.35rem; letter-spacing:-0.03em;">Tyk API Definition</h1>

  <div style="max-width:585px; margin-left:0.45rem; color:#0A0C2D; font-size:0.84rem; line-height:1.31;">
    <ul style="margin:0; padding-left:1.65rem; list-style-type:disc;">
      <li style="margin-bottom:0.24rem; padding-left:0.4rem;">
        Tyk stores API configurations as JSON objects called API Definitions
        <ul style="margin-top:0.1rem; padding-left:1.55rem; list-style-type:circle; font-size:0.92em;">
          <li>Each API is an API definition in Tyk</li>
        </ul>
      </li>
      <li style="margin-bottom:0.2rem; padding-left:0.4rem;">Encapsulates the management rules for an API</li>
      <li style="margin-bottom:0.2rem; padding-left:0.4rem;">
        Settings and middlewares that influence the way incoming requests are processed
        <ul style="margin-top:0.1rem; padding-left:1.55rem; list-style-type:circle; font-size:0.92em; line-height:1.28;">
          <li>Authentication</li>
          <li>Rate-limiting</li>
          <li>Target URL</li>
          <li>Versions</li>
          <li>Middleware</li>
        </ul>
      </li>
      <li style="padding-left:0.4rem;">
        2 types of API definitions in Tyk
        <ul style="margin-top:0.1rem; padding-left:1.55rem; list-style-type:circle; font-size:0.92em; line-height:1.28;">
          <li>Tyk OAS API definition</li>
          <li>Tyk Classic API definition</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="position:absolute; right:46px; bottom:18px; width:106px; height:77px; background:#030303; border-top-left-radius:32px;"></div>
  <img src="./images/icons/tyk-logo.png" style="position:absolute; right:63px; bottom:33px; width:56px; height:auto;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify: Authentication, like API Keys or JWTs, to secure your API; Rate-limiting and quotas to protect your backend services from being overwhelmed; The Target URL, where Tyk should forward requests after it processes them; Support for Versions, so you can manage multiple versions of the same API simultaneously; And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk: Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema. And Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->
