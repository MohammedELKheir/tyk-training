---
id: foundation-apis-in-tyk-4-onboarding-an-api/006-monitoring-and-observability
deck_id: foundation-apis-in-tyk-4-onboarding-an-api
order: 6
slug: monitoring-and-observability
title: "Monitoring and Observability"
summary: "Tyk provides analytics out of the box using the Dashboard GUI You can track: Number of requests Status codes Latency Errors For deeper visibility, you can integrate with tools like"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-4-onboarding-an-api/007-running-a-smoke-test]
customer_visible: true
notes_visibility: customer-safe
---
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
