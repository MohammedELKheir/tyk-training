---
id: architect-graphql-2-hands-on-1-onboarding-a-graphql-api/002-onboarding-a-graphql-api-like-a-rest-api-you-can-onboard-via-the-dashboa
deck_id: architect-graphql-2-hands-on-1-onboarding-a-graphql-api
order: 2
slug: onboarding-a-graphql-api-like-a-rest-api-you-can-onboard-via-the-dashboa
title: "Onboarding a GraphQL API Like a REST API, you can onboard via the Dashboard UI,"
summary: "Dashboard API or Gateway API for OSS Steps: Go to System Management → APIs Click Add New API Fill out Base Configuration: Name, Type = GraphQL Target URL (e.g. https://countries.tr"
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

<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Onboarding a GraphQL API</h1>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.4; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <p style="margin-top:0;">Like a REST API, you can onboard via the Dashboard UI, Dashboard API or Gateway API for OSS</p>
    <p style="font-weight:bold; margin-top:0.8rem;">Steps:</p>
    <ol style="padding-left:1.2rem; margin-top:0.3rem;">
      <li>Go to System Management → APIs</li>
      <li>Click Add New API</li>
      <li>Fill out Base Configuration:
        <ul style="padding-left:1rem; margin-top:0.2rem;">
          <li>Name, Type = GraphQL</li>
          <li>Target URL (e.g. https://countries.trevorblades.com/)</li>
        </ul>
      </li>
      <li>Click Configure API</li>
      <li>Choose Authentication Mode (e.g. Auth Token)</li>
      <li>Click SAVE – Your GraphQL API is now active and secured.</li>
      <li>Go to 'Playgrounds'</li>
      <li>Send the following query:</li>
    </ol>
  </div>

  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:14px 18px; align-self:flex-start;">
    <p style="color:#8438FA; font-size:0.75rem; font-weight:600; margin:0 0 6px 0;">GraphQL Query</p>
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">query {
  countries {
    code
    name
    emoji
  }
}</pre>
  </div>
</div>

<!-- Notes: query {
  countries {
    code
    name
    emoji
  }
} -->
