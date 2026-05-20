---
id: architect-universal-data-graph-1-udg-overview/008-key-concepts-field-mappings-field-mappings-when-are-they-needed-automati
deck_id: architect-universal-data-graph-1-udg-overview
order: 8
slug: key-concepts-field-mappings-field-mappings-when-are-they-needed-automati
title: "Key Concepts - Field Mappings Field Mappings – When Are They Needed Automatic Fi"
summary: "eld Mapping When the GraphQL schema mirrors the REST API response, no manual field mapping is required. Example REST response: { \"id\": 1, \"name\": \"Martin Buhr\" } Matching GraphQL s"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/009-key-concepts-field-mappings-field-mappings-handling-different-field-name]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - Field Mappings</h1>
  <p style="margin:0 0 0.25rem 0; font-size:0.95rem; font-weight:800;">Field Mappings – When Are They Needed</p>
  <p style="margin:0 0 0.15rem 0; font-size:0.82rem; font-weight:700;">Automatic Field Mapping</p>
  <ul style="margin:0 0 0.38rem 1rem; padding-left:1rem; font-size:0.78rem;">
    <li>When the GraphQL schema mirrors the REST API response, no manual field mapping is required.</li>
  </ul>
  <div style="display:flex; gap:3rem; align-items:flex-start; margin-top:0.2rem;">
    <div style="width:290px;">
      <p style="margin:0 0 0.12rem 0; font-size:0.9rem; font-weight:800;">Example REST response:</p>
      <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.79rem; line-height:1.55; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "id": 1,
  "name": "Martin Buhr"
}</pre>
    </div>
    <div style="width:330px; margin-top:0.05rem;">
      <p style="margin:0 0 0.08rem 0; font-size:0.9rem; font-weight:800;">Matching GraphQL schema:</p>
      <div v-html="`<pre style='margin:0; background:transparent; color:#171932; font-size:0.74rem; line-height:1.45; font-family:SFMono-Regular, Menlo, Monaco, Consolas, monospace; white-space:pre;'>type Query {\n    user(id: Int!): User\n}\n\ntype User {\n    id: Int!\n    name: String\n}</pre>`" />
    </div>
  </div>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: In Universal Data Graph, field mappings are automatic if your GraphQL schema matches the structure of your REST API’s JSON response.
This is the ideal scenario. As shown here, if the API returns id and name, and those fields are present in your GraphQL schema, no extra configuration is required — UDG will resolve them automatically. -->
