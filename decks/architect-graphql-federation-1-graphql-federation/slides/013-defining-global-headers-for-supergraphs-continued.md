---
id: architect-graphql-federation-1-graphql-federation/013-defining-global-headers-for-supergraphs-continued
deck_id: architect-graphql-federation-1-graphql-federation
order: 13
slug: defining-global-headers-for-supergraphs-continued
title: "Defining Global Headers for Supergraphs (continued)"
summary: "Defining Global Headers for Supergraphs Open supergraph API in Dashboard Go to Subgraphs tab → Global Headers Add header name and value Click Update, then Update API to save change"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/014-entities-defining-the-base-entity]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Defining Global Headers for Supergraphs</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Open supergraph API in Dashboard</li>
  <li>Go to Subgraphs tab → Global Headers</li>
  <li>Add header name and value</li>
  <li>Click Update, then Update API to save changes</li>
  <li>Headers are forwarded to all relevant subgraphs</li>
</ul>

<div style="display:flex; justify-content:center;">
  <img src="./public/screenshots/headers2-219-headers-2.png" style="max-width:830px; max-height:250px; border-radius:6px; border:1px solid #ddd;" />
</div>

<!-- Notes: Global headers can be added on the supergraph level to pass consistent information like auth tokens to all subgraphs. This is useful for authentication or tracing headers that must be included in every subgraph request. Headers can be added, updated, or deleted anytime via the Dashboard. -->
