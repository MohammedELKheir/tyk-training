---
id: graphql-2025/012-securing-a-graphql-api-via-operator
deck_id: graphql-2025
order: 12
slug: securing-a-graphql-api-via-operator
title: "Securing a GraphQL API via Operator"
summary: "Use the example auth-sections.txt Add section into graphql-example.yaml Bonus: Run the command to apply the manifest query { countries { code name emoji } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/013-graphql-proxy-only]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Securing a GraphQL API via Operator</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Use the example auth-sections.txt
Add section into graphql-example.yaml
Bonus: Run the command to apply the manifest
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
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
