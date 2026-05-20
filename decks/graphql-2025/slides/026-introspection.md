---
id: graphql-2025/026-introspection
deck_id: graphql-2025
order: 26
slug: introspection
title: "Introspection"
summary: "GraphQL introspection allows clients to query a server for its schema. Useful for tools like GraphQL Playground and Tyk Dashboard to understand available types and operations. Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/027-introspection-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection

GraphQL introspection allows clients to query a server for its schema.
Useful for tools like GraphQL Playground and Tyk Dashboard to understand available types and operations.
Tyk uses introspection to fetch the upstream schema and render it in the UI when setting up a GraphQL proxy.
🔍 Important: Introspection reflects the upstream schema only, not Tyk's schema transformations.

<!-- Notes: Introspection is a built-in feature of any GraphQL server. It enables clients to query the server about its schema — which types exist, what fields they have, and what kind of operations are allowed.
When we create a GraphQL API using Tyk Dashboard, Tyk sends an introspection query to the upstream GraphQL service. This is what populates the Schema tab in the UI.
One important caveat: introspection always reflects the upstream source. So if you modify the schema in Tyk — say, by limiting fields or renaming types — those changes won’t appear in the introspection results. That’s why it's important to keep your upstream and Tyk-side schemas in sync to avoid confusion during debugging or client integration.
If you want to learn more about how introspection works at a protocol level, the GraphQL Foundation’s official spec is a great resource. -->
