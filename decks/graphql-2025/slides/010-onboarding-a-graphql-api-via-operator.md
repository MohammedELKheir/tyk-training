---
id: graphql-2025/010-onboarding-a-graphql-api-via-operator
deck_id: graphql-2025
order: 10
slug: onboarding-a-graphql-api-via-operator
title: "Onboarding a GraphQL API via Operator"
summary: "Onboarding a GraphQL API via Operator is similar to a Classic API Definition: Run git clone https://github.com/example-org/graphql-operator-tutorial Run cd graphql-operator-tutoria"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/011-apiversion-kind-metadata-name-spec-name-use-keyless-protocol-active-prox]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Onboarding a GraphQL API via Operator</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem; align-items:flex-start;">
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Onboarding a GraphQL API via Operator is similar to a Classic API Definition:
Run git clone  https://github.com/example-org/graphql-operator-tutorial
Run cd graphql-operator-tutorial 
Run kubectl apply -f graphql-example.yaml -n tyk-cp 
Verify with kubectl get tykapis -n tyk-cp 
Go to ‘Playgrounds’ in the Tyk Dashboard
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
