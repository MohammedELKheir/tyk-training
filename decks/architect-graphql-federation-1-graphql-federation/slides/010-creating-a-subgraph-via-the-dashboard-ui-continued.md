---
id: architect-graphql-federation-1-graphql-federation/010-creating-a-subgraph-via-the-dashboard-ui-continued
deck_id: architect-graphql-federation-1-graphql-federation
order: 10
slug: creating-a-subgraph-via-the-dashboard-ui-continued
title: "Creating a Subgraph via the Dashboard UI (continued)"
summary: "Creating a Subgraph via the Dashboard UI Log in to Dashboard → APIs > Add New API > Federation > Subgraph Choose a name and provide an upstream URL If upstream is protected, select"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/011-creating-a-supergraph-via-the-dashboard-ui]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Creating a Subgraph via the Dashboard UI</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Log in to Dashboard → APIs > Add New API > Federation > Subgraph</li>
  <li>Choose a name and provide an upstream URL</li>
  <li>If upstream is protected, select "Upstream Protected" and provide auth details (Header or Certificate)</li>
</ul>

<div style="display:flex; gap:1rem; justify-content:center;">
  <img src="./public/screenshots/subgraph-step2-190-subgraph-2.png" style="max-width:320px; max-height:280px; border-radius:6px; border:1px solid #ddd;" />
  <img src="./public/screenshots/subgraph-step2-191-subgraph-2.png" style="max-width:430px; max-height:280px; border-radius:6px; border:1px solid #ddd;" />
</div>

<!-- Notes: To start creating a subgraph in Tyk, log into the Dashboard and navigate to APIs, then add a new API. Select Federation, then Subgraph. Give your subgraph a name and specify the upstream URL where your backend service is hosted. If the upstream URL requires authentication, make sure to enable protection and add either header-based or certificate credentials. -->
