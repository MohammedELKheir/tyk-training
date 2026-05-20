---
id: architect-graphql-federation-1-graphql-federation/009-creating-a-subgraph-via-the-dashboard-ui
deck_id: architect-graphql-federation-1-graphql-federation
order: 9
slug: creating-a-subgraph-via-the-dashboard-ui
title: "Creating a Subgraph via the Dashboard UI"
summary: "Log in to Dashboard → APIs > Add New API > Federation > Subgraph Choose a name and provide an upstream URL If upstream is protected, select \"Upstream Protected\" and provide auth de"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/010-creating-a-subgraph-via-the-dashboard-ui-continued]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:2.08rem; line-height:1.03; font-weight:700; margin-bottom:0.45rem; max-width:640px;">Creating a Subgraph via the Dashboard UI</h2>

<ul style="font-size:0.95rem; line-height:1.45; color:#03031C; padding-left:1.15rem; margin:0 0 0.7rem 0; max-width:860px;">
  <li>Log in to Dashboard → APIs &gt; Add New API &gt; Federation &gt; Subgraph</li>
  <li>Choose a name and provide an upstream URL</li>
  <li>If upstream is protected, select "Upstream Protected" and provide auth details (Header or Certificate)</li>
</ul>

<div style="display:flex; gap:1.15rem; justify-content:center; align-items:flex-start; margin-top:0.1rem;">
  <img src="./public/screenshots/subgraph-step1-180-subgraph-1.png" style="width:340px; max-width:340px; max-height:290px; border-radius:6px; border:1px solid #ddd;" />
  <img src="./public/screenshots/subgraph-step1-181-subgraph-1.png" style="width:452px; max-width:452px; max-height:290px; border-radius:6px; border:1px solid #ddd;" />
</div>

<!-- Notes: To start creating a subgraph in Tyk, log into the Dashboard and navigate to APIs, then add a new API. Select Federation, then Subgraph. Give your subgraph a name and specify the upstream URL where your backend service is hosted. If the upstream URL requires authentication, make sure to enable protection and add either header-based or certificate credentials. -->
