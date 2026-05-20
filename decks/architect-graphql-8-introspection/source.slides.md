---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Introspection"
---

# Introspection

<div style="margin-top:0.72rem; margin-left:0.48rem; max-width:675px;">
  <ul style="margin:0; padding-left:1.72rem; color:#111827; font-size:1.02rem; line-height:1.56;">
    <li style="margin-bottom:1rem;">GraphQL introspection allows clients to query a server for its schema.</li>
    <li style="margin-bottom:1rem;">Useful for tools like GraphQL Playground and Tyk Dashboard to understand available types and operations.</li>
    <li style="margin-bottom:1rem;">Tyk uses introspection to fetch the upstream schema and render it in the UI when setting up a GraphQL proxy.</li>
    <li><strong>Important:</strong> Introspection reflects the upstream schema only, not Tyk's schema transformations.</li>
  </ul>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: Introspection is a built-in feature of any GraphQL server. It enables clients to query the server about its schema — which types exist, what fields they have, and what kind of operations are allowed.
When we create a GraphQL API using Tyk Dashboard, Tyk sends an introspection query to the upstream GraphQL service. This is what populates the Schema tab in the UI.
One important caveat: introspection always reflects the upstream source. So if you modify the schema in Tyk — say, by limiting fields or renaming types — those changes won't appear in the introspection results. That's why it's important to keep your upstream and Tyk-side schemas in sync to avoid confusion during debugging or client integration.
If you want to learn more about how introspection works at a protocol level, the GraphQL Foundation's official spec is a great resource. -->

---
layout: default
---

# Introspection

<div style="display:flex; align-items:flex-start; justify-content:flex-start; margin-top:0.5rem; margin-left:5.55rem;">
  <img src="./public/screenshots/introspection-ui.png" style="width:25.3rem; max-width:none; border-radius:8px; box-shadow:none;" />
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: Introspection is a built-in feature of any GraphQL server. It enables clients to query the server about its schema — which types exist, what fields they have, and what kind of operations are allowed.
When we create a GraphQL API using Tyk Dashboard, Tyk sends an introspection query to the upstream GraphQL service. This is what populates the Schema tab in the UI.
One important caveat: introspection always reflects the upstream source. So if you modify the schema in Tyk — say, by limiting fields or renaming types — those changes won't appear in the introspection results. That's why it's important to keep your upstream and Tyk-side schemas in sync to avoid confusion during debugging or client integration.
If you want to learn more about how introspection works at a protocol level, the GraphQL Foundation's official spec is a great resource. -->

---
layout: default
---

# Introspection

<div style="margin-top:0.42rem; margin-left:0.65rem; max-width:740px; color:#111827;">
  <p style="margin:0 0 1.3rem 0; font-size:1.01rem; line-height:1.32;">GraphQL Introspection in Production</p>
  <ul style="margin:0; padding-left:1.72rem; font-size:0.99rem; line-height:1.5;">
    <li style="margin-bottom:0.8rem;">Introspection is useful for development and debugging.</li>
    <li style="margin-bottom:0.7rem;">In production, introspection can:</li>
  </ul>
  <ul style="margin:0 0 0.92rem 2.2rem; padding-left:1.3rem; list-style-type:circle; font-size:0.97rem; line-height:1.47;">
    <li style="margin-bottom:0.55rem;">Reveal sensitive schema and implementation details.</li>
    <li>Allow attackers to discover and map out your API.</li>
  </ul>
  <ul style="margin:0; padding-left:1.72rem; font-size:0.99rem; line-height:1.5;">
    <li style="margin-bottom:0.35rem;">If Authentication Mode is Open (Keyless):</li>
  </ul>
  <ul style="margin:0 0 0.92rem 2.2rem; padding-left:1.3rem; list-style-type:circle; font-size:0.97rem; line-height:1.47;">
    <li>Introspection is always enabled and cannot be disabled.</li>
  </ul>
  <ul style="margin:0; padding-left:1.72rem; font-size:0.99rem; line-height:1.5;">
    <li style="margin-bottom:0.35rem;">You can disable introspection per key or via security policy using:</li>
  </ul>
  <ul style="margin:0 0 0 2.2rem; padding-left:1.3rem; list-style-type:circle; font-size:0.97rem; line-height:1.47;">
    <li style="margin-bottom:0.4rem;">Tyk Dashboard</li>
    <li>Tyk Gateway API</li>
  </ul>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: GraphQL introspection is designed as a discovery and diagnostic feature to help developers during the development process. It allows tools and developers to query the API for its schema, including types, fields, and relationships.
However, enabling introspection in production can expose your API's structure, making it easier for attackers to understand and exploit potential vulnerabilities. For example, they could discover hidden mutations or sensitive fields that were not meant to be public.
A critical consideration is that if your API is configured with Open (Keyless) authentication, Tyk enables introspection by default, and this setting cannot be changed. This presents a security risk, especially for publicly accessible APIs.
Tyk allows you to control introspection more securely by disabling it on a per-key or per-policy basis. This configuration can be done through the Tyk Dashboard or programmatically through the Tyk Gateway API.
The recommendation is to disable introspection in production environments, and only enable it in development or controlled internal settings. -->

---
layout: default
---

# Introspection Queries

<div style="display:flex; gap:1.35rem; margin-top:0.58rem;">
  <div style="flex:0 0 44%; padding-left:0.18rem; padding-top:1.52rem;">
    <ul style="margin:0; padding-left:1.52rem; color:#111827; font-size:1rem; line-height:1.78;">
      <li style="margin-bottom:0.9rem;">Any GraphQL API can be explored using introspection queries.</li>
      <li style="margin-bottom:0.9rem;">Introspection queries reveal detailed schema information.</li>
      <li>Example: Introspecting all types in the schema.</li>
    </ul>
  </div>
  <div style="flex:0 0 35%; display:flex; justify-content:center; padding-top:0.72rem;">
    <div style="width:100%; display:flex; justify-content:center;">
      <pre style="color:#6a6a6a; font-size:0.78rem; font-weight:400; margin:0; font-family:'SFMono-Regular',Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; line-height:1.3; letter-spacing:0; white-space:pre; overflow:hidden; background:transparent;">query {
  __schema {
    types {
      name
      description
      kind
    }
    queryType {
      fields {
        name
        description
      }
    }
  }
}</pre>
    </div>
  </div>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: Any GraphQL API can be explored using introspection queries.
These special queries allow clients to discover detailed information about the schema — including types, fields, and relationships — without prior knowledge.
For example, you can run an introspection query that lists all types in the schema.
This capability is powerful for tools like API explorers or clients that need to dynamically understand the API structure. -->

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
