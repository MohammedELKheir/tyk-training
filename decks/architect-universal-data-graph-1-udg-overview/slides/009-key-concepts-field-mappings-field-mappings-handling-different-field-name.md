---
id: architect-universal-data-graph-1-udg-overview/009-key-concepts-field-mappings-field-mappings-handling-different-field-name
deck_id: architect-universal-data-graph-1-udg-overview
order: 9
slug: key-concepts-field-mappings-field-mappings-handling-different-field-name
title: "Key Concepts - Field Mappings Field Mappings – Handling Different Field Names If"
summary: "the REST response uses a different field name, field mapping is required. Example REST response: { \"id\": 1, \"user_name\": \"Martin Buhr\" } GraphQL schema: { \"id\": 1, \"user_name\": \"Ma"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/010-key-concepts-reusing-response-fields-chaining-data-across-apis-you-can-u]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - Field Mappings</h1>
  <p style="margin:0 0 0.32rem 0; font-size:0.95rem; font-weight:800;">Field Mappings – Handling Different Field Names</p>
  <ul style="margin:0 0 0.35rem 1rem; padding-left:1rem; font-size:0.78rem;">
    <li>If the REST response uses a different field name, field mapping is required.</li>
  </ul>
  <div style="display:flex; gap:3rem; align-items:flex-start; margin-top:0.05rem;">
    <div style="width:290px;">
      <p style="margin:0 0 0.12rem 0; font-size:0.9rem; font-weight:800;">Example REST response:</p>
      <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.79rem; line-height:1.55; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "id": 1,
  "user_name": "Martin Buhr"
}</pre>
    </div>
    <div style="width:290px; margin-top:0.03rem;">
      <p style="margin:0 0 0.08rem 0; font-size:0.9rem; font-weight:800;">GraphQL schema:</p>
      <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.79rem; line-height:1.55; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "id": 1,
  "user_name": "Martin Buhr"
}</pre>
    </div>
  </div>
  <p style="margin:0.7rem 0 0.08rem 0; font-size:0.8rem;">In this case, manual mapping is needed:</p>
  <ul style="margin:0 0 0 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.45;">
    <li>Uncheck "Disable field mapping"</li>
    <li>Set <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">name</span> field path to <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">user_name</span></li>
    <li>Nested fields can use dot notation: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">user.full_name</span></li>
  </ul>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: When the field names don’t match, UDG cannot automatically resolve the response. In this example, the API returns user_name, but your schema defines the field as name. To fix this, enable field mapping manually and point the name field to user_name. For nested JSON fields, use dot notation like user.full_name. -->
