---
id: graphql-2025/027-introspection-2
deck_id: graphql-2025
order: 27
slug: introspection-2
title: "Introspection"
summary: "Introspection"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/028-introspection-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.5rem;">Introspection</h2>



<div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap;">
  <img src="./images/icons/slide-027-Google-Shape-303-p42.png" style="max-width:90%; max-height:380px; border-radius:4px; box-shadow:0 2px 8px rgba(0,0,0,0.15);" />
</div>

<!-- Notes: Introspection is a built-in feature of any GraphQL server. It enables clients to query the server about its schema — which types exist, what fields they have, and what kind of operations are allowed.
When we create a GraphQL API using Tyk Dashboard, Tyk sends an introspection query to the upstream GraphQL service. This is what populates the Schema tab in the UI.
One important caveat: introspection always reflects the upstream source. So if you modify the schema in Tyk — say, by limiting fields or renaming types — those changes won’t appear in the introspection results. That’s why it's important to keep your upstream and Tyk-side schemas in sync to avoid confusion during debugging or client integration.
If you want to learn more about how introspection works at a protocol level, the GraphQL Foundation’s official spec is a great resource. -->
