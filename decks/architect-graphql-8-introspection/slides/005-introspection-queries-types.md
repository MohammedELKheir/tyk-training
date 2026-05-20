---
id: architect-graphql-8-introspection/005-introspection-queries-types
deck_id: architect-graphql-8-introspection
order: 5
slug: introspection-queries-types
title: "Introspection Queries (Types)"
summary: "Introspection Queries Schema Overview Query Retrieves a summary of all types, queries, and mutations in the schema, including their names, kinds, and descriptions. Single Type Deta"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection Queries

<div style="margin-top:0.12rem; margin-left:0.08rem; max-width:812px; color:#111827;">
  <ul style="margin:0; padding-left:1.56rem; font-size:0.9rem; line-height:1.36;">
    <li style="margin-bottom:1rem;"><strong>Schema Overview Query</strong>
      <ul style="margin:0.2rem 0 0 1.12rem; padding-left:1.12rem; list-style-type:circle; line-height:1.33;">
        <li>Retrieves a summary of all types, queries, and mutations in the schema, including their names, kinds, and descriptions.</li>
      </ul>
    </li>
    <li style="margin-bottom:1rem;"><strong>Single Type Details Query</strong>
      <ul style="margin:0.2rem 0 0 1.12rem; padding-left:1.12rem; list-style-type:circle; line-height:1.33;">
        <li>Fetches detailed information about a specific type, such as its fields, arguments, interfaces, enum values, and descriptions.</li>
      </ul>
    </li>
    <li style="margin-bottom:1rem;"><strong>Field Arguments Query</strong>
      <ul style="margin:0.2rem 0 0 1.12rem; padding-left:1.12rem; list-style-type:circle; line-height:1.33;">
        <li>Focuses on the arguments of a specific field, detailing their names, types, and default values.</li>
      </ul>
    </li>
    <li style="margin-bottom:1rem;"><strong>Enum Values Query</strong>
      <ul style="margin:0.2rem 0 0 1.12rem; padding-left:1.12rem; list-style-type:circle; line-height:1.33;">
        <li>Retrieves the possible values for an enum type, including descriptions and deprecation status.</li>
      </ul>
    </li>
    <li><strong>Interface and Union Types Query</strong>
      <ul style="margin:0.2rem 0 0 1.12rem; padding-left:1.12rem; list-style-type:circle; line-height:1.33;">
        <li>Provides information on the possible types that implement an interface or belong to a union.</li>
      </ul>
    </li>
  </ul>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: GraphQL introspection allows you to explore the schema dynamically by sending different types of queries.
The Schema Overview Query gives a broad picture of everything the API offers, useful for initial exploration.
Single Type Details Query zooms into one type to understand its structure and relationships, essential for detailed API consumption.
Field Arguments Query helps when you want to know what inputs a particular field accepts, aiding in precise query construction.
Enum Values Query is handy when working with fields that have a fixed set of possible values, ensuring you use valid inputs.
Finally, Interface and Union Types Query helps understand polymorphic types, clarifying what concrete types to expect.
Knowing these query types helps you debug, document, and build better GraphQL clients and tools. -->
