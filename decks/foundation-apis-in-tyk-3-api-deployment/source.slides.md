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
title: "API Deployment"
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <h1 style="font-size:3rem; font-weight:800; color:white; margin:0; border:0; line-height:1.05; letter-spacing:0;">API Deployment</h1>
  <p style="margin:1.35rem 0 0 0; max-width:640px; color:white; font-size:1.28rem; line-height:1.45; font-weight:400; opacity:0.98;">
    At Tyk, we offer multiple deployment methods to match the maturity and scale of your API projects — from simple experiments to full-scale GitOps.
  </p>
  <img src="./public/icons/tyk-badge-transparent.png" style="position:fixed; right:-1.95rem; bottom:-1.5rem; width:6.25rem; z-index:20;" />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#0B102B;">
  <h1 style="margin:0; color:#5C12D8; font-size:3.2rem; font-weight:800; line-height:1; letter-spacing:-0.02em;">File-Based Configurations</h1>
  <div style="margin-top:2.35rem; margin-left:0.25rem; width:80%; font-size:1.25rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin-bottom:0.55rem; padding-left:0.45rem;">File-based Configurations</li>
      <li style="margin-bottom:2.1rem; padding-left:0.45rem;">Best For: Open Source users and initial testing
        <ul style="margin-top:0.2rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Configure APIs using JSON specs</li>
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Load configs into /apps folder</li>
          <li style="padding-left:0.45rem;">Great for quick iterations</li>
        </ul>
      </li>
      <li style="padding-left:0.45rem;">Usage:
        <ul style="margin-top:0.22rem; padding-left:2.0rem; list-style-type:circle; max-width:9.4in;">
          <li style="padding-left:0.45rem; max-width:510px;">Testing gateway &amp; API configs in Open Source setups</li>
        </ul>
      </li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge-transparent.png" style="position:fixed; right:-1.95rem; bottom:-1.5rem; width:6.15rem; z-index:20;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify:
Authentication, like API Keys or JWTs, to secure your API
Rate-limiting and quotas to protect your backend services from being overwhelmed
The Target URL, where Tyk should forward requests after it processes them
Support for Versions, so you can manage multiple versions of the same API simultaneously
And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk:
Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema
And Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#0B102B;">
  <h1 style="margin:0; color:#5C12D8; font-size:3.2rem; font-weight:800; line-height:1; letter-spacing:-0.02em;">Dashboard UI</h1>
  <div style="margin-top:2.35rem; margin-left:0.25rem; width:80%; font-size:1.25rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin-bottom:0.55rem; padding-left:0.45rem;">Dashboard UI</li>
      <li style="margin-bottom:2.1rem; padding-left:0.45rem;">Best For: PoC, Trials, and manual learning
        <ul style="margin-top:0.2rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Intuitive web GUI</li>
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Instant feedback from changes</li>
          <li style="padding-left:0.45rem;">Easily import and edit APIs</li>
        </ul>
      </li>
      <li style="padding-left:0.45rem;">Usage:
        <ul style="margin-top:0.22rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="padding-left:0.45rem;">PoC, hands-on exploration, and testing</li>
        </ul>
      </li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge-transparent.png" style="position:fixed; right:-1.95rem; bottom:-1.5rem; width:6.15rem; z-index:20;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify:
Authentication, like API Keys or JWTs, to secure your API
Rate-limiting and quotas to protect your backend services from being overwhelmed
The Target URL, where Tyk should forward requests after it processes them
Support for Versions, so you can manage multiple versions of the same API simultaneously
And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk:
Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema
And Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#0B102B;">
  <h1 style="margin:0; color:#5C12D8; font-size:3.2rem; font-weight:800; line-height:1; letter-spacing:-0.02em;">Dashboard or Gateway<br />API</h1>
  <div style="margin-top:2.35rem; margin-left:0.25rem; width:82%; font-size:1.23rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin-bottom:0.55rem; padding-left:0.45rem;">Dashboard or Gateway API</li>
      <li style="margin-bottom:2.1rem; padding-left:0.45rem;">Best For: Programmatic access &amp; automation
        <ul style="margin-top:0.2rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Use REST APIs to manage APIs, Policies, Keys, etc.</li>
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Enables scripting and partial automation</li>
          <li style="padding-left:0.45rem;">Imperative (not declarative) style</li>
        </ul>
      </li>
      <li style="padding-left:0.45rem;">Usage:
        <ul style="margin-top:0.22rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="padding-left:0.45rem; max-width:8.8in;">Teams needing API-level control and scripting</li>
        </ul>
      </li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge-transparent.png" style="position:fixed; right:-1.95rem; bottom:-1.5rem; width:6.15rem; z-index:20;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify:
Authentication, like API Keys or JWTs, to secure your API
Rate-limiting and quotas to protect your backend services from being overwhelmed
The Target URL, where Tyk should forward requests after it processes them
Support for Versions, so you can manage multiple versions of the same API simultaneously
And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk:
Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema
And Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#0B102B;">
  <h1 style="margin:0; color:#5C12D8; font-size:3.2rem; font-weight:800; line-height:1; letter-spacing:-0.02em;">Tyk Sync</h1>
  <div style="margin-top:2.35rem; margin-left:0.25rem; width:80%; font-size:1.25rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin-bottom:0.55rem; padding-left:0.45rem;">Tyk Sync</li>
      <li style="margin-bottom:2.1rem; padding-left:0.45rem;">Best For: GitOps-style automation
        <ul style="margin-top:0.2rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Declarative config in transportable format</li>
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Store API definitions in Git</li>
          <li style="padding-left:0.45rem;">Enables CI/CD for APIs</li>
        </ul>
      </li>
      <li style="padding-left:0.45rem;">Usage:
        <ul style="margin-top:0.22rem; padding-left:2.0rem; list-style-type:circle; max-width:9.4in;">
          <li style="padding-left:0.45rem;">Automated, version-controlled API deployments</li>
        </ul>
      </li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge-transparent.png" style="position:fixed; right:-1.95rem; bottom:-1.5rem; width:6.15rem; z-index:20;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify:
Authentication, like API Keys or JWTs, to secure your API
Rate-limiting and quotas to protect your backend services from being overwhelmed
The Target URL, where Tyk should forward requests after it processes them
Support for Versions, so you can manage multiple versions of the same API simultaneously
And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk:
Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema
And Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#0B102B;">
  <h1 style="margin:0; color:#5C12D8; font-size:3.2rem; font-weight:800; line-height:1; letter-spacing:-0.02em;">Tyk Operator</h1>
  <div style="margin-top:2.35rem; margin-left:0.25rem; width:84%; font-size:1.25rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin-bottom:0.55rem; padding-left:0.45rem;">Tyk Operator</li>
      <li style="margin-bottom:2.1rem; padding-left:0.45rem;">Best For: Kubernetes-native environments
        <ul style="margin-top:0.2rem; padding-left:2.0rem; list-style-type:circle;">
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Treat APIs &amp; Policies as K8s Custom Resources</li>
          <li style="margin-bottom:0.2rem; padding-left:0.45rem;">Continuous reconciliation with Git</li>
          <li style="padding-left:0.45rem;">Built on Tyk Sync &amp; GitOps principles</li>
        </ul>
      </li>
      <li style="padding-left:0.45rem;">Usage:
        <ul style="margin-top:0.22rem; padding-left:2.0rem; list-style-type:circle; max-width:7.25in;">
          <li style="padding-left:0.45rem; max-width:470px;">Kubernetes users who want declarative, drift-resistant API management</li>
        </ul>
      </li>
    </ul>
  </div>
  <img src="./public/icons/tyk-badge-transparent.png" style="position:fixed; right:-1.95rem; bottom:-1.5rem; width:6.15rem; z-index:20;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify:
Authentication, like API Keys or JWTs, to secure your API
Rate-limiting and quotas to protect your backend services from being overwhelmed
The Target URL, where Tyk should forward requests after it processes them
Support for Versions, so you can manage multiple versions of the same API simultaneously
And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk:
Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema
And Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->
