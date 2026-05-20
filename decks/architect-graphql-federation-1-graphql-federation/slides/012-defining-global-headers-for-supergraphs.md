---
id: architect-graphql-federation-1-graphql-federation/012-defining-global-headers-for-supergraphs
deck_id: architect-graphql-federation-1-graphql-federation
order: 12
slug: defining-global-headers-for-supergraphs
title: "Defining Global Headers for Supergraphs"
summary: "Open supergraph API in Dashboard Go to Subgraphs tab → Global Headers Add header name and value Click Update, then Update API to save changes Headers are forwarded to all relevant"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/013-defining-global-headers-for-supergraphs-continued]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:2.08rem; line-height:1.03; font-weight:700; margin-bottom:0.45rem; max-width:660px;">Defining Global Headers for Supergraphs</h2>

<ul style="font-size:0.95rem; line-height:1.42; color:#03031C; padding-left:1.15rem; margin:0 0 0.65rem 0; max-width:520px;">
  <li>Open supergraph API in Dashboard</li>
  <li>Go to Subgraphs tab → Global Headers</li>
  <li>Add header name and value</li>
  <li>Click Update, then Update API to save changes</li>
  <li>Headers are forwarded to all relevant subgraphs</li>
</ul>

<div style="display:flex; justify-content:center; margin-top:0.05rem;">
  <img src="./public/screenshots/headers-210-headers-1.png" style="width:870px; max-width:870px; max-height:270px; border-radius:6px; border:1px solid #ddd;" />
</div>

<!-- Notes: Global headers can be added on the supergraph level to pass consistent information like auth tokens to all subgraphs. This is useful for authentication or tracing headers that must be included in every subgraph request. Headers can be added, updated, or deleted anytime via the Dashboard. -->
