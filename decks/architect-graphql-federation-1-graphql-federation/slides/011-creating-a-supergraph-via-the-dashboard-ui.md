---
id: architect-graphql-federation-1-graphql-federation/011-creating-a-supergraph-via-the-dashboard-ui
deck_id: architect-graphql-federation-1-graphql-federation
order: 11
slug: creating-a-supergraph-via-the-dashboard-ui
title: "Creating a Supergraph via the Dashboard UI"
summary: "Go to APIs > Add New API > Federation > Supergraph In Details, select subgraphs to include Configure supergraph settings like any other API Save → supergraph is available in the AP"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/012-defining-global-headers-for-supergraphs]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Creating a Supergraph via the Dashboard UI</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Go to APIs > Add New API > Federation > Supergraph</li>
  <li>In Details, select subgraphs to include</li>
  <li>Configure supergraph settings like any other API</li>
  <li>Save → supergraph is available in the API list</li>
</ul>

<div style="display:flex; gap:1rem; justify-content:center;">
  <img src="./public/screenshots/supergraph-200-supergraph-1.png" style="max-width:360px; max-height:300px; border-radius:6px; border:1px solid #ddd;" />
  <img src="./public/screenshots/supergraph-201-supergraph-1.png" style="max-width:500px; max-height:190px; border-radius:6px; border:1px solid #ddd;" />
</div>

<!-- Notes: To combine subgraphs, create a supergraph in the Dashboard under Federation. Select which subgraphs you want to federate into the supergraph. Configure it with policies, throttling, and any other gateway features. When saved, your supergraph acts as a single unified API for your consumers. -->
