---
id: foundation-apis-in-tyk-4-onboarding-an-api/002-define-your-api
deck_id: foundation-apis-in-tyk-4-onboarding-an-api
order: 2
slug: define-your-api
title: "Define your API"
summary: "Start by telling Tyk about your API. You specify: The listen path (what path Tyk should expose) The target URL (where requests are forwarded) Whether the API uses HTTP or HTTPS Thi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-4-onboarding-an-api/003-secure-the-api]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-left:0.9rem; padding-top:0.35rem; color:#111;">
  <h1 style="margin:0; color:#5b16d9; font-size:2.45rem; font-weight:800; line-height:1.02; border:0;">Define your API</h1>

  <div style="margin-top:2.15rem; width:68%; font-size:0.96rem; line-height:1.7; color:#111;">
    <p style="margin:0 0 1rem 0;">Start by telling Tyk about your API.</p>
    <p style="margin:0 0 0.55rem 0;">You specify:</p>
    <ul style="margin:0 0 1rem 1.3rem; padding:0; line-height:1.7;">
      <li>The listen path (what path Tyk should expose)</li>
      <li>The target URL (where requests are forwarded)</li>
      <li>Whether the API uses HTTP or HTTPS</li>
    </ul>
    <p style="margin:0;">This is the foundation, Tyk needs to know where to send traffic and what to call it.</p>
  </div>

  <img src="./images/icons/tyk-logo.png" style="position:absolute; right:0.82rem; bottom:0.58rem; width:4.25rem;" />
</div>

<!-- Notes: "Tyk supports the OpenAPI Specification, or OAS, which is the industry standard for defining APIs."
"If you’re already using OAS to design and document your APIs, you can import those definitions directly into Tyk."
"This offers significant time savings and reduces complexity because you don’t need to redefine your APIs from scratch." -->
