---
id: architect-graphql-8-introspection/001-introspection
deck_id: architect-graphql-8-introspection
order: 1
slug: introspection
title: "Introspection"
summary: "GraphQL introspection allows clients to query a server for its schema. Useful for tools like GraphQL Playground and Tyk Dashboard to understand available types and operations. Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-8-introspection/002-introspection-screenshot]
customer_visible: true
notes_visibility: customer-safe
---
# Introspection

<div style="margin-top:0.72rem; margin-left:0.48rem; max-width:675px;">
  <ul style="margin:0; padding-left:1.72rem; color:#111827; font-size:1.02rem; line-height:1.56;">
    <li style="margin-bottom:1rem;">GraphQL introspection allows clients to query a server for its schema.</li>
    <li style="margin-bottom:1rem;">Useful for tools like GraphQL Playground and Tyk Dashboard to understand available types and operations.</li>
    <li style="margin-bottom:1rem;">Tyk uses introspection to fetch the upstream schema and render it in the UI when setting up a GraphQL proxy.</li>
    <li><strong>Important:</strong> Introspection reflects the upstream schema only, not Tyk's schema transformations.</li>
  </ul>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: Introspection is a built-in feature of any GraphQL server. It enables clients to query the server about its schema — which types exist, what fields they have, and what kind of operations are allowed.
When we create a GraphQL API using Tyk Dashboard, Tyk sends an introspection query to the upstream GraphQL service. This is what populates the Schema tab in the UI.
One important caveat: introspection always reflects the upstream source. So if you modify the schema in Tyk — say, by limiting fields or renaming types — those changes won't appear in the introspection results. That's why it's important to keep your upstream and Tyk-side schemas in sync to avoid confusion during debugging or client integration.
If you want to learn more about how introspection works at a protocol level, the GraphQL Foundation's official spec is a great resource. -->
