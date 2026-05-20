---
id: foundation-apis-in-tyk-introduction-to-api-definitions/002-tyk-api-definition
deck_id: foundation-apis-in-tyk-introduction-to-api-definitions
order: 2
slug: tyk-api-definition
title: "Tyk API Definition"
summary: "Tyk stores API configurations as JSON objects called API Definitions Each API is an API definition in Tyk Encapsulates the management rules for an API Settings and middlewares that"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
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
