---
id: foundation-apis-in-tyk-1-classic-api/002-tyk-classic-api-definition
deck_id: foundation-apis-in-tyk-1-classic-api
order: 2
slug: tyk-classic-api-definition
title: "Tyk-Classic API Definition"
summary: "Defined using JSON structure Fully customizable API config file managed via Dashboard or API Contains all gateway-level logic, such as Authentication Rate-limiting Target URL Versi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-1-classic-api/003-necessary-fields]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="color:#5900CB; font-size:2.35rem; font-weight:800; margin:0 0 1.15rem 0; line-height:1.03;">Tyk-Classic API Definition</h1>

<div style="display:flex; gap:1.4rem; align-items:flex-start; margin-top:0.3rem;">
  <div style="flex:1.68; color:#111228; font-size:1rem; line-height:1.4;">
    <ul style="margin:0; padding-left:1.25rem;">
      <li style="margin-bottom:0.52rem;">
        <span>Defined using JSON structure</span>
        <ul style="margin-top:0.12rem; padding-left:1.35rem; list-style-type:circle;">
          <li>Fully customizable API config file managed via Dashboard or API</li>
        </ul>
      </li>
      <li style="margin-bottom:0.52rem;">
        <span>Contains all gateway-level logic, such as</span>
        <ul style="margin-top:0.12rem; padding-left:1.35rem; list-style-type:circle;">
          <li>Authentication</li>
          <li>Rate-limiting</li>
          <li>Target URL</li>
          <li>Versions</li>
          <li>Middleware</li>
        </ul>
      </li>
      <li>
        <span>Editable via</span>
        <ul style="margin-top:0.12rem; padding-left:1.35rem; list-style-type:circle;">
          <li>Tyk Dashboard UI (API Designer)</li>
          <li>Tyk Admin API</li>
          <li>Tyk Classic API Definition file (.json)</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="flex:0.6; display:flex; align-items:center; justify-content:center; min-height:330px; padding-top:0.2rem;">
    <img src="./images/icons/api-gear.png" style="width:208px; max-width:100%; object-fit:contain;" />
  </div>
</div>

<div style="position:absolute; bottom:0; right:0; width:92px; height:64px; background:#000; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center;">
  <img src="./images/icons/tyk-logo.png" style="width:58px; object-fit:contain;" />
</div>

<!-- Notes: “Let’s talk about how Tyk manages and stores your API configurations."
"At the core of Tyk’s API management is something called an API Definition. This is essentially a JSON object that describes everything Tyk needs to know about your API. Each API you expose through Tyk has its own API Definition, and this is what the Tyk Gateway reads to manage how traffic flows."
"Inside an API Definition, we encapsulate the management rules for that API. It includes the settings and middlewares that define how incoming requests are handled, authenticated, and forwarded."
"For example, you can specify: Authentication, like API Keys or JWTs, to secure your API; Rate-limiting and quotas to protect your backend services from being overwhelmed; The Target URL, where Tyk should forward requests after it processes them; Support for Versions, so you can manage multiple versions of the same API simultaneously; And Middleware, which lets you apply transformations, enforce business logic, or add custom behaviors on requests and responses."
"Now, there are two types of API Definitions available in Tyk: Tyk Classic API Definitions, which are highly flexible and use Tyk’s traditional JSON schema; and Tyk OAS API Definitions, which are based on the OpenAPI Specification, providing a standardized, industry-recognized way of defining and managing APIs."
"Regardless of the type you choose, the API Definition is the single source of truth that governs how Tyk handles your APIs." -->
