---
id: architect-universal-data-graph-1-udg-overview/003-currently-supported-datasources-rest-graphql-soap-through-the-rest-datas
deck_id: architect-universal-data-graph-1-udg-overview
order: 3
slug: currently-supported-datasources-rest-graphql-soap-through-the-rest-datas
title: "Currently supported DataSources: REST GraphQL SOAP (through the REST datasource)"
summary: "Kafka"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/004-key-concepts-datasources-resolvers-vs-datasources-resolvers-functions-th]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px;">
  <div style="display:flex; flex-direction:column; align-items:center; margin-top:0.2rem;">
    <img src="./public/reference/slide-003-udg-diagram.png" style="width:770px; margin-top:0.1rem;" />
  </div>
  <div style="margin-top:0.2rem; max-width:420px; margin-left:0.8rem;">
    <p style="margin:0; color:#121533; font-size:0.82rem; font-weight:700;">Currently supported DataSources:</p>
    <ul style="margin:0.25rem 0 0 0.85rem; padding-left:0.9rem; color:#121533; font-size:0.74rem; line-height:1.24;">
      <li>REST</li>
      <li>GraphQL</li>
      <li>SOAP (through the REST datasource)</li>
      <li>Kafka</li>
    </ul>
  </div>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: An extension orphan is an unresolved extension causing federation failure.
This happens if you extend a type that isn’t defined in exactly one subgraph.
Make sure every type extension has a clear base type in only one subgraph to avoid errors.
For example, the type named Person does not need to be defined in Subgraph 1, but it must be defined in exactly one subgraph (see Shared Types: extension of shared types is not possible, so extending a type that is defined in multiple subgraphs will produce an error). -->
