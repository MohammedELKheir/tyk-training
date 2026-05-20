---
id: graphql-2025/009-onboarding-a-graphql-api
deck_id: graphql-2025
order: 9
slug: onboarding-a-graphql-api
title: "Onboarding a GraphQL API"
summary: "Like a REST API, you can onboard via the Dashboard UI, Dashboard API or Gateway API for OSS Steps: Go to System Management → APIs Click Add New API Fill out Base Configuration: Nam"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/010-onboarding-a-graphql-api-via-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Onboarding a GraphQL API</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem; align-items:flex-start;">
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Like a REST API, you can onboard via the Dashboard UI, Dashboard API or Gateway API for OSS
Steps:
Go to System Management → APIs
Click Add New API
Fill out Base Configuration:
Name, Type = GraphQL
Target URL (e.g. https://countries.trevorblades.com/)
Click Configure API
Choose Authentication Mode (e.g. Auth Token)
Click SAVE – Your GraphQL API is now active and secured.
Go to ‘Playgrounds’
Send the following query:</pre>
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">query {
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
