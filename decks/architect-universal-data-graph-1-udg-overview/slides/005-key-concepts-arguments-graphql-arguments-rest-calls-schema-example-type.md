---
id: architect-universal-data-graph-1-udg-overview/005-key-concepts-arguments-graphql-arguments-rest-calls-schema-example-type
deck_id: architect-universal-data-graph-1-udg-overview
order: 5
slug: key-concepts-arguments-graphql-arguments-rest-calls-schema-example-type
title: "Key Concepts - Arguments GraphQL Arguments → REST Calls Schema example: type Que"
summary: "ry {\\n user(id: Int!): User\\n}\\n\\ntype User {\\n id: Int!\\n name: String\\n} `\" /> Goal: Map the id argument in a GraphQL query to the correct REST API path"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/006-key-concepts-arguments-injecting-arguments-into-rest-paths-templating-re]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - Arguments</h1>
  <p style="margin:0 0 0.25rem 0; font-size:0.95rem; font-weight:800;">GraphQL Arguments → REST Calls</p>
  <p style="margin:0 0 0.25rem 0; font-size:0.82rem; font-weight:700;">Schema example:</p>
  <div v-html="`<pre style='margin:0; background:transparent; color:#171932; font-size:0.84rem; line-height:1.45; font-family:SFMono-Regular, Menlo, Monaco, Consolas, monospace; white-space:pre;'>type Query {\n    user(id: Int!): User\n}\n\ntype User {\n    id: Int!\n    name: String\n}</pre>`" />
  <p style="margin:0.55rem 0 0 0; font-size:0.78rem;">Goal: Map the <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">id</span> argument in a GraphQL query to the correct REST API path</p>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Let’s revisit a common use case: querying a user by ID.
In GraphQL, we define a field like user(id: Int!) that returns a User object.
The question is — how do we take that id argument and pass it into our REST API URL?
This is where Tyk’s Universal Data Graph (UDG) becomes powerful. It allows you to inject GraphQL arguments directly into the REST call using simple templating. -->
