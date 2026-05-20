---
id: foundation-apis-in-tyk-4-onboarding-an-api/004-access-control-rules-using-policies
deck_id: foundation-apis-in-tyk-4-onboarding-an-api
order: 4
slug: access-control-rules-using-policies
title: "Access Control Rules Using Policies"
summary: "Tyk uses policies to control how your API is used: Rate limiting (requests per minute/hour/day) Quotas (total requests allowed) Access permissions (what endpoints and methods are a"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-4-onboarding-an-api/005-customize-api-behavior-with-middleware]
customer_visible: true
notes_visibility: customer-safe
---
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
