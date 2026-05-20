---
id: foundation-apis-in-tyk-3-api-deployment/006-tyk-operator
deck_id: foundation-apis-in-tyk-3-api-deployment
order: 6
slug: tyk-operator
title: "Tyk Operator"
summary: "Tyk Operator Best For: Kubernetes-native environments Treat APIs & Policies as K8s Custom Resources Continuous reconciliation with Git Built on Tyk Sync & GitOps principles Usage:"
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
