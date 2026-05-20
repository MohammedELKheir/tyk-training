---
id: architect-universal-data-graph-2-data-sources/002-connect-data-sources-unified-data-graph-udg-datasource-overview-datasour
deck_id: architect-universal-data-graph-2-data-sources
order: 2
slug: connect-data-sources-unified-data-graph-udg-datasource-overview-datasour
title: "Connect Data Sources Unified Data Graph (UDG) – Datasource Overview Datasources"
summary: "power your UDG and its schema Can be attached to any field in the UDG schema Support nested configuration Quick Start vs Full Control You can add datasources directly to UDG withou"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/003-graphql-datasource-overview-makes-graphql-queries-to-upstream-graphql-se]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">Connect Data Sources</h1>

  <div style="position:absolute; left:43px; top:109px; width:782px; font-size:0.93rem; line-height:1.45; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.55rem;">Unified Data Graph (UDG) – Datasource Overview</div>

    <div style="font-weight:700; margin:0.45rem 0 0.18rem 0;">Datasources power your UDG and its schema</div>
    <ul style="margin:0 0 0.38rem 0; padding-left:1.4rem;">
      <li>Can be attached to any field in the UDG schema</li>
      <li>Support nested configuration</li>
    </ul>

    <div style="font-weight:700; margin:0.5rem 0 0.18rem 0;">Quick Start vs Full Control</div>
    <ul style="margin:0 0 0.38rem 0; padding-left:1.4rem;">
      <li>You can add datasources directly to UDG without registering them as APIs in Tyk</li>
      <li>For advanced features (rate limits, quotas, transformations), import the API into Tyk first</li>
    </ul>

    <div style="font-weight:700; margin:0.5rem 0 0.18rem 0;">Supported Datasource Types:</div>
    <ul style="margin:0; padding-left:1.4rem;">
      <li>REST</li>
      <li>GraphQL</li>
      <li>SOAP (via REST Datasource)</li>
      <li>Kafka</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: Unified Data Graph in Tyk relies on datasources — these are your backend systems that provide the actual data.
You can attach a datasource to any field in the UDG schema, and even nest them, enabling complex data compositions.
While you can add datasources quickly for testing or prototyping without creating a full Tyk API, this limits your access to key API management features.
For things like quotas, transformations, and security policies, it’s best to register the API first and then connect it as a datasource.
Tyk supports multiple datasource types, including REST, GraphQL, SOAP through REST wrappers, and Kafka. -->
