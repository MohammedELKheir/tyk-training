---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Universal Data Graph"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:100%; color:white; background:linear-gradient(135deg, #8438FA 0%, #7B2FF2 42%, #B012FF 100%); overflow:hidden;">
  <p style="margin:0 0 0.9rem 0; color:#32E0C4; font-size:0.8rem; font-family:Georgia, 'Times New Roman', serif;">Module 3</p>
  <h1 style="margin:0; color:white; font-size:2.95rem; line-height:1.08; font-weight:800; text-align:center;">Universal Data<br />Graph</h1>
  <div style="position:absolute; right:0; bottom:0; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding:0 7.7rem 0 0;">
  <h1 style="margin:0 0 0.5rem 0; color:#5B11D9; font-size:3.5rem; line-height:0.98; font-weight:900;">What is the Universal Data Graph<br />(UDG)?</h1>
  <ul style="margin:0.6rem 0 0 1.1rem; padding-left:1.2rem; color:#10122c; font-size:1rem; line-height:1.75; max-width:860px;">
    <li>Combine multiple APIs into one universal GraphQL interface</li>
    <li>Query multiple APIs with a single request</li>
    <li>No need to build your own GraphQL server — just configure your existing REST APIs</li>
    <li>Becomes the central integration point for internal and external APIs</li>
    <li>Inherits all Tyk capabilities: security, middleware, and governance</li>
  </ul>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: The Universal Data Graph, or UDG, is a powerful feature in Tyk that allows you to consolidate multiple APIs—whether REST or GraphQL—into a single GraphQL interface.

What’s unique here is that you don’t need to spin up or maintain a GraphQL server of your own. Instead, UDG lets you map and configure your existing REST APIs directly through Tyk.

This means that Tyk becomes the hub for all your API integration needs—both internal microservices and external APIs—under one query layer.

Even better, because this is built on Tyk, your Graph inherits all the benefits: authentication, rate limiting, monitoring, and extensible middleware, making it not only powerful but also secure and scalable by design. -->

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

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - Arguments</h1>
  <p style="margin:0 0 0.22rem 0; font-size:0.95rem; font-weight:800;">Injecting Arguments into REST Paths</p>
  <p style="margin:0 0 0.08rem 0; font-size:0.82rem; font-weight:700;">Templating REST URLs</p>
  <p style="margin:0 0 0.08rem 0; font-size:0.78rem;">In the “Configure Data Source” tab:</p>
  <p style="margin:0 0 0.08rem 0; font-size:0.78rem;">Use this template in the path field:</p>
  <pre v-pre style="margin:0 0 0.55rem 0; background:transparent; color:#171932; font-size:0.84rem; line-height:1.38; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">https://example.com/user/{{ .arguments.id }}</pre>
  <p style="margin:0 0 0.08rem 0; font-size:0.75rem;">Type <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">{</span> to access a dropdown of available fields and arguments.</p>
  <p style="margin:0; font-size:0.75rem;">Tip: You can dynamically inject any GraphQL argument or field this way.</p>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: When configuring your DataSource, Tyk provides a flexible way to map GraphQL arguments into your REST call.
In this case, to hit an endpoint like /user/123, you use templating like this: https://example.com/user/{{ .arguments.id }}
As you type the curly brace {, Tyk shows a dropdown with all the arguments and fields you can use — it’s very intuitive.
This setup allows your UDG to resolve data dynamically and efficiently, making it easier to integrate with your existing APIs without writing extra code. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:2rem;">
  <h1 style="margin:0 0 0.7rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - Arguments</h1>
  <div style="display:flex; justify-content:flex-start;">
    <img src="./public/screenshots/slide-007-configure-data-source.png" style="width:872px; border:1px solid #d6d8e8;" />
  </div>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

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

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:2.78rem; line-height:1.04; font-weight:900;">Key Concepts - Reusing response fields</h1>
  <p style="margin:0 0 0.22rem 0; font-size:0.95rem; font-weight:800;">Chaining Data Across APIs</p>
  <p style="margin:0 0 0.42rem 0; font-size:0.78rem;">You can use data from one API response to call another API.</p>
  <p style="margin:0 0 0.12rem 0; font-size:0.78rem; font-weight:700;">Example APIs:</p>
  <ul style="margin:0 0 0 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.5;">
    <li>People List: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">https://people-api.dev/people</span></li>
    <li>Person Details: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">https://people-api.dev/people/{person_id}</span></li>
    <li>Driver Licenses: <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">https://driver-license-api.dev/driver-licenses/{driver_license_id}</span></li>
  </ul>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: With Universal Data Graph, you can chain API responses using fields from one API to query another. In this example, we start with the People API, which gives us a driverLicenseID. That field becomes the key to fetch full driver license details from a separate API. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0; color:#5B11D9; font-size:3rem; line-height:0.98; font-weight:900;">Key Concepts - Defining Data Source<br />URLs</h1>
  <div style="display:flex; gap:1.6rem; align-items:flex-start; margin-top:0.2rem;">
    <div style="width:500px;">
      <p style="margin:0 0 0.08rem 0; font-size:0.95rem; font-weight:800;">Static and Dynamic URL Templates</p>
      <ul style="margin:0 0 0.12rem 1rem; padding-left:1rem; font-size:0.78rem;">
        <li><span style="font-size:0.88rem; font-weight:800;">Query.people</span></li>
      </ul>
      <p style="margin:0 0 0.05rem 0; font-size:0.78rem;">Static URL for retrieving the list of people:</p>
      <pre v-pre style="margin:0 0 0.5rem 0; background:transparent; color:#171932; font-size:0.76rem; line-height:1.35; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre-wrap;">https://people-api.dev/people</pre>
      <ul style="margin:0 0 0.12rem 1rem; padding-left:1rem; font-size:0.78rem;">
        <li><span style="font-size:0.88rem; font-weight:800;">Query.person</span></li>
      </ul>
      <p style="margin:0 0 0.05rem 0; font-size:0.78rem;">Uses the <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">id</span> argument dynamically in the URL:</p>
      <pre v-pre style="margin:0 0 0.5rem 0; background:transparent; color:#171932; font-size:0.71rem; line-height:1.32; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre-wrap;">https://people-api.dev/people/{{.arguments.id}}</pre>
      <ul style="margin:0 0 0.12rem 1rem; padding-left:1rem; font-size:0.78rem;">
        <li><span style="font-size:0.88rem; font-weight:800;">Person.driverLicense</span></li>
      </ul>
      <p style="margin:0 0 0.05rem 0; font-size:0.78rem;">Uses data from the parent object via <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">.object</span> placeholder:</p>
      <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.66rem; line-height:1.28; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre-wrap;">https://driver-license-api.dev/driver-licenses/{{.object.driverLicenseID}}</pre>
    </div>
    <div style="width:280px; border:3px solid #121533; padding:0.9rem 1rem 0.8rem 1rem; margin-top:0.85rem;">
      <p style="margin:0 0 0.2rem 0; font-size:0.98rem; font-weight:900;">Reminder:</p>
      <ul style="margin:0 0 0 0.9rem; padding-left:1rem; font-size:0.78rem; line-height:1.35;">
        <li>Use <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">.object</span> to reference fields from the parent object.</li>
        <li>Use <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">.arguments</span> to reference query arguments.</li>
      </ul>
    </div>
  </div>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Now that we’ve defined our schema, the next step is to connect each field to the appropriate data source using URLs.
For simple fields like people, you can use a static URL. But when arguments are involved — like the id in person(id: Int!) — you use the .arguments placeholder to inject the argument into the URL.
For nested objects like driverLicense, we want to use a field (driverLicenseID) from the parent object (Person). This is where .object.driverLicenseID comes in — it tells Tyk to use a property from the parent object when forming the request URL. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0; color:#5B11D9; font-size:3rem; line-height:0.98; font-weight:900;">Key Concepts - Defining Data Source<br />URLs</h1>
  <p style="margin:0.2rem 0 0.1rem 0; font-size:0.95rem; font-weight:800;">GraphQL Query:</p>
  <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.88rem; line-height:1.56; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  people {
    id
    name
    age
    driverLicense {
      id
      issuedBy
      validUntil
    }
  }
}</pre>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Now that we’ve defined our schema, the next step is to connect each field to the appropriate data source using URLs.
For simple fields like people, you can use a static URL. But when arguments are involved — like the id in person(id: Int!) — you use the .arguments placeholder to inject the argument into the URL.
For nested objects like driverLicense, we want to use a field (driverLicenseID) from the parent object (Person). This is where .object.driverLicenseID comes in — it tells Tyk to use a property from the parent object when forming the request URL. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <p style="margin:0; font-size:0.92rem; font-weight:800;">Response Example:</p>
  <pre v-pre style="margin:0.05rem 0 0 0; background:transparent; color:#171932; font-size:0.72rem; line-height:1.38; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "data": {
    "people": [
      {
        "id": 1,
        "name": "User 1",
        "age": 40,
        "driverLicense": {
          "id": "DL1234",
          "issuedBy": "United Kingdom",
          "validUntil": "2040-01-01"
        }
      },
      {
        "id": 2,
        "name": "User 2",
        "age": 30,
        "driverLicense": {
          "id": "DL5555",
          "issuedBy": "United Kingdom",
          "validUntil": "2035-01-01"
        }
      }
    ]
  }
}</pre>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: This is the final result of our setup.
Using only a single GraphQL query, Tyk's Universal Data Graph engine makes multiple backend calls — first to the People API, then to the Driver License API — and stitches the data together automatically.
The end user sees a clean, unified response, while the complexity of backend integrations is abstracted away. This is the core power of UDG: connecting distributed APIs into a single queryable graph. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">UDG Header Management</h1>
  <p style="margin:0 0 0.2rem 0; font-size:0.95rem; font-weight:800;">Two levels of header control:</p>
  <p style="margin:0.02rem 0; font-size:0.94rem; font-weight:800;">Global Headers</p>
  <ul style="margin:0.06rem 0 0.6rem 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.45;">
    <li>Defined in <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">graphql.engine.global_headers</span></li>
    <li>Sent to all data sources</li>
    <li>Can include request context variables</li>
  </ul>
  <p style="margin:0.1rem 0 0 0; font-size:0.94rem; font-weight:800;">Data Source Headers</p>
  <ul style="margin:0.06rem 0 0.55rem 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.45;">
    <li>Defined in <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">graphql.engine.data_sources[].config.headers</span></li>
    <li>Specific to individual data sources</li>
    <li>Also supports context variables like JWT claims</li>
  </ul>
  <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.66rem; line-height:1.3; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "global_headers": [
    { "key": "global-header", "value": "example-value" },
    { "key": "request-id", "value": "$tyk_context.request_id" }
  ]
}</pre>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: With Tyk v5.2, you now have fine-grained control over HTTP headers for both the overall UDG and specific data sources.
Global headers are useful when you want to apply something like a request ID or an org-wide auth token across all upstream APIs.
These headers can include request context variables — for example, $tyk_context.request_id — so you can inject runtime values into the request.
We define these inside the global_headers section of the API definition. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">UDG Header Management</h1>
  <p style="margin:0 0 0.2rem 0; font-size:0.95rem; font-weight:800;">Data Source Headers and Context Variables</p>
  <p style="margin:0 0 0.18rem 0; font-size:0.78rem; font-weight:700;">Example - Data Source Header Config:</p>
  <pre v-pre style="margin:0 0 0.7rem 0; background:transparent; color:#171932; font-size:0.72rem; line-height:1.36; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">{
  "headers": {
    "data-source-header": "data-source-header-value",
    "datasource1-jwt-claim": "$tyk_context.jwt_claims_datasource1"
  }
}</pre>
  <p style="margin:0 0 0.12rem 0; font-size:0.8rem; font-weight:700;">Key Notes:</p>
  <ul style="margin:0 0 0 1rem; padding-left:1rem; font-size:0.78rem; line-height:1.5;">
    <li>Defined per data source</li>
    <li>Ideal for individual API authentication needs</li>
    <li>Can also access JWT claims and request context values</li>
  </ul>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Data source headers work similarly but are scoped more narrowly — they apply only to the specific data source you define them under.
This is especially useful when you're dealing with multiple APIs that require different credentials, JWT claims, or custom headers.
Just like global headers, these can use context variables like JWT claims — so you can pass identity or tenant info dynamically. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">UDG Header Management</h1>
  <p style="margin:0 0 0.16rem 0; font-size:0.95rem; font-weight:800;">Header Precedence Rules</p>
  <p style="margin:0 0 0.55rem 0; font-size:0.78rem;">When header keys overlap, Tyk applies priority:</p>
  <div style="margin-left:1.1rem; width:700px; border:3px solid #11142d; border-radius:2rem; overflow:hidden;">
    <table style="width:100%; border-collapse:collapse; font-size:0.78rem; color:#11142d;">
      <thead>
        <tr>
          <th style="padding:0.85rem 1rem; text-align:left; font-weight:900; border-right:2px solid #7B2FF2; border-bottom:2px solid #11142d; width:34%;">Header name</th>
          <th style="padding:0.85rem 1rem; text-align:left; font-weight:900; border-right:2px solid #7B2FF2; border-bottom:2px solid #11142d; width:40%;">Header value</th>
          <th style="padding:0.85rem 1rem; text-align:left; font-weight:900; border-bottom:2px solid #11142d; width:26%;">Defined on level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">example-header</td>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">data-source-value</td>
          <td style="padding:0.95rem 1rem; border-bottom:2px solid #7B2FF2;">data source</td>
        </tr>
        <tr>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">datasource1</td>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">$tyk_context.jwt_claims_datasource1</td>
          <td style="padding:0.95rem 1rem; border-bottom:2px solid #7B2FF2;">data source</td>
        </tr>
        <tr>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2;">request-id</td>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2;">$tyk_context.request_id</td>
          <td style="padding:0.95rem 1rem;">global</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="margin:0.92rem 0 0 0; font-size:0.76rem;">Data Source header overrides Global header if both define the same key.</p>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Now, if you define the same header at both the global and data source levels, the data source version takes precedence.
This gives you flexibility — you can set broad headers by default, but override them where needed for specific upstream APIs.
In this example, example-header is defined at both levels, but the data source’s value wins.
This rule helps prevent conflicts and gives you precise control over how each API call is formed. -->
