---
id: foundation-apis-in-tyk-4-onboarding-an-api/005-customize-api-behavior-with-middleware
deck_id: foundation-apis-in-tyk-4-onboarding-an-api
order: 5
slug: customize-api-behavior-with-middleware
title: "Customize API Behavior with Middleware"
summary: "Tyk has a wide variety of Out Of The Box plugins for extending API behavior: Add custom headers Modify request/response payloads Validate input data Block/transform requests This g"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-4-onboarding-an-api/006-monitoring-and-observability]
customer_visible: true
notes_visibility: customer-safe
---
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
