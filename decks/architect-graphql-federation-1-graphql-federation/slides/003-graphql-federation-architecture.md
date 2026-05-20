---
id: architect-graphql-federation-1-graphql-federation/003-graphql-federation-architecture
deck_id: architect-graphql-federation-1-graphql-federation
order: 3
slug: graphql-federation-architecture
title: "GraphQL Federation Architecture"
summary: "GraphQL Federation Architecture"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/004-subgraphs-and-supergraphs]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="display:flex; justify-content:center; align-items:center; height:100%; padding-top:0.3rem;">
  <img src="./public/screenshots/graphql-federation-architecture.png" style="width:900px; max-width:900px; max-height:540px; border-radius:8px;" />
</div>

<!-- Notes: What you're looking at is the architecture enabled by GraphQL Federation in Tyk. In the center, we have the Supergraph, which represents the unified GraphQL schema exposed to consumers. It acts as a single endpoint but is actually composed of several Subgraphs—each one backed by a different backend service or domain team. All these subgraphs are stitched together within the Tyk Gateway. This is key: Tyk is not just routing requests. It acts as the control layer that applies essential API management features like Authentication, Authorization, Rate Limiting, Monitoring & Tracing. At the bottom, you see arrows going to mobile apps, web clients, and other consumers. From their perspective, it's just one GraphQL API. But behind the scenes, it's a cleanly separated and scalable architecture. This setup empowers teams to own and deploy their own subgraphs independently, while Tyk stitches everything together securely and reliably. -->
