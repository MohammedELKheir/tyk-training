---
id: architect-universal-data-graph-1-udg-overview/004-key-concepts-datasources-resolvers-vs-datasources-resolvers-functions-th
deck_id: architect-universal-data-graph-1-udg-overview
order: 4
slug: key-concepts-datasources-resolvers-vs-datasources-resolvers-functions-th
title: "Key Concepts - DataSources Resolvers vs. DataSources Resolvers: Functions that r"
summary: "eturn data for a field (typical in GraphQL) DataSources: Config-driven way to fetch data for fields No code required — just configuration 🔗 Types of DataSources in Tyk Internal: RE"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/005-key-concepts-arguments-graphql-arguments-rest-calls-schema-example-type]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.7rem;">
  <h1 style="margin:0 0 0.6rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - DataSources</h1>
  <div style="color:#10122c; font-size:0.88rem; line-height:1.32; max-width:860px;">
    <p style="margin:0 0 0.45rem 0; font-weight:800;">Resolvers vs. DataSources</p>
    <ul style="margin:0 0 0.55rem 1rem; padding-left:1rem;">
      <li>Resolvers: Functions that return data for a field (typical in GraphQL)</li>
      <li>DataSources: Config-driven way to fetch data for fields</li>
      <li>No code required — just configuration</li>
    </ul>
    <p style="margin:0.4rem 0 0.2rem 0; font-weight:800;">🔗 Types of DataSources in Tyk</p>
    <p style="margin:0.18rem 0 0 0; font-weight:700;">Internal:</p>
    <ul style="margin:0.05rem 0 0.3rem 1rem; padding-left:1rem;">
      <li>REST/SOAP APIs already managed in Tyk</li>
      <li>➜ Use middleware to validate and transform data</li>
    </ul>
    <p style="margin:0.18rem 0 0 0; font-weight:700;">External:</p>
    <ul style="margin:0.05rem 0 0 1rem; padding-left:1rem;">
      <li>APIs not (yet) managed in Tyk</li>
      <li>➜ Easily included in your data graph</li>
      <li>➜ Can transition to internal when needed</li>
    </ul>
  </div>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: In traditional GraphQL, you often write resolvers — small functions that handle fetching data for each field in your schema. These need to be implemented manually and tied to specific types and fields.
Tyk’s Universal Data Graph replaces resolvers with a more streamlined approach: DataSources. These are config-based, meaning you don’t have to write code — you just tell the engine where and how to get the data.
There are two kinds of DataSources:
Internal: These are your existing Tyk-managed APIs, like REST or SOAP. You can apply Tyk’s built-in middleware — for example, for auth, transformation, or rate limiting.
External: These are APIs you haven’t added to Tyk yet. UDG allows you to include them in your graph right away. Later, if you want to bring them into Tyk to use middleware or analytics, that transition is easy.
This flexibility gives you a low-code way to build powerful, secure, and scalable GraphQL endpoints. -->
