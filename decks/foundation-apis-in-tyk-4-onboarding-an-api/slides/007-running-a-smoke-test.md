---
id: foundation-apis-in-tyk-4-onboarding-an-api/007-running-a-smoke-test
deck_id: foundation-apis-in-tyk-4-onboarding-an-api
order: 7
slug: running-a-smoke-test
title: "Running a smoke test"
summary: "Before going live, test your API from within the Tyk Dashboard or using tools like Postman. The routing works correctly Security is enforced Rate limiting behaves as expected You’v"
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
