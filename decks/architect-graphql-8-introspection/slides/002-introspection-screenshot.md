---
id: architect-graphql-8-introspection/002-introspection-screenshot
deck_id: architect-graphql-8-introspection
order: 2
slug: introspection-screenshot
title: "Introspection (Screenshot)"
summary: "Introspection"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-8-introspection/003-introspection-production]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection

<div style="display:flex; align-items:flex-start; justify-content:flex-start; margin-top:0.5rem; margin-left:5.55rem;">
  <img src="./public/screenshots/introspection-ui.png" style="width:25.3rem; max-width:none; border-radius:8px; box-shadow:none;" />
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: Introspection is a built-in feature of any GraphQL server. It enables clients to query the server about its schema — which types exist, what fields they have, and what kind of operations are allowed.
When we create a GraphQL API using Tyk Dashboard, Tyk sends an introspection query to the upstream GraphQL service. This is what populates the Schema tab in the UI.
One important caveat: introspection always reflects the upstream source. So if you modify the schema in Tyk — say, by limiting fields or renaming types — those changes won't appear in the introspection results. That's why it's important to keep your upstream and Tyk-side schemas in sync to avoid confusion during debugging or client integration.
If you want to learn more about how introspection works at a protocol level, the GraphQL Foundation's official spec is a great resource. -->
