---
id: foundation-apis-in-tyk-4-onboarding-an-api/003-secure-the-api
deck_id: foundation-apis-in-tyk-4-onboarding-an-api
order: 3
slug: secure-the-api
title: "Secure the API"
summary: "Once registered, the next concern is access control. Tyk supports various authentication mechanisms: API Keys (most basic) OAuth 2.0 or JWT (token-based access) mTLS (certificate-b"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-4-onboarding-an-api/004-access-control-rules-using-policies]
customer_visible: true
notes_visibility: customer-safe
---
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
