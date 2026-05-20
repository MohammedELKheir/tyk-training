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
title: "GraphQL Introduction"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%);">
  <div style="transform:translate(1.5rem, -0.2rem); display:flex; flex-direction:column; align-items:center;">
    <p style="color:#21E9BA; font-size:1.15rem; font-family:Georgia, 'Times New Roman', serif; margin:0 0 0.65rem 0;">Module 1</p>
    <h1 style="color:white; font-size:4.5rem; font-weight:800; line-height:1; margin:0;">GraphQL</h1>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:9.2rem; height:5.8rem; background:#000; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.8rem;" />
  </div>
</div>

---
layout: default
---

# GraphQL

<div style="margin-top:1rem;">

**Definition (GraphQL Foundation):**

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It describes your data, lets clients request exactly what they need, and evolves safely over time.

**Key Benefits:**

- Reduced network traffic – no over-fetching or under-fetching
- Flexible & language-agnostic – works with any backend
- Simplified data fetching – one request, structured response
- Easy to maintain – schema-based evolution
- Strong typing – catch errors early
- Great dev experience – ideal for mobile apps, public APIs, and microservices

</div>

<!-- Notes: GraphQL is a modern way to work with APIs. It lets clients define exactly what data they need, which means we're no longer over-fetching or under-fetching like we often do with REST.
One of the biggest advantages is the ability to make a single request for complex, nested data — instead of stitching together multiple REST calls. This leads to cleaner, more efficient frontends, especially in mobile and data-rich applications.
Flexibility is another win — GraphQL is backend-agnostic, and works across languages and data sources.
Strong typing and introspection allow developers to confidently build and explore APIs. Combined with the ability to evolve schemas without breaking clients, GraphQL is not just powerful — it's sustainable for growing teams and complex systems. -->

---
layout: default
---

# GraphQL

<div style="display:flex; gap:1.5rem; margin-top:1rem;">
  <div style="flex:1;">
    <p style="color:#2CA597; font-weight:bold; font-size:1rem; margin-bottom:0.5rem;">The GraphQL Advantage:</p>
    <p style="font-weight:600; margin-bottom:0.3rem;">Traditional REST API Call</p>
    <p style="font-size:0.9rem; margin-bottom:0.3rem;">To load user info + their posts:</p>
    <pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.65rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.5rem;">GET /user/123
GET /user/123/posts</pre>
    <ul style="font-size:0.9rem; color:#333; padding-left:1rem; margin:0;">
      <li>Multiple round-trips</li>
      <li>Over-fetching / under-fetching</li>
    </ul>
  </div>

  <div style="flex:1;">
    <p style="color:#8438FA; font-weight:bold; font-size:1rem; margin-bottom:0.5rem;">GraphQL</p>
    <pre v-pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.6rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.5rem;">query {
  user(id: "123") {
    name
    posts {
      title
      publishedAt
    }
  }
}</pre>
    <ul style="font-size:0.9rem; color:#333; padding-left:1rem; margin:0;">
      <li>One request</li>
      <li>Only the data needed</li>
      <li>Structured JSON response</li>
    </ul>
  </div>
</div>

<!-- Notes: Let's start by understanding how GraphQL differs from REST.
In REST, getting related data often means making multiple requests — one for user info, another for posts, etc. This causes over-fetching, especially for mobile devices with limited bandwidth.
With GraphQL, you can ask for exactly what you need in one request — here, both user details and their posts — and get back only that data.
This eliminates redundant calls and makes the API feel snappier and more efficient.

One of GraphQL's biggest advantages is its flexibility for different frontends.
A mobile app can request just a user's name, while an admin dashboard might want full details — all using the same endpoint.
This means backend developers don't need to build different versions of the same endpoint — the frontend drives the shape of the response.
That's why GraphQL is so popular in mobile and microservices environments. -->

---
layout: default
---

# GraphQL

<div style="display:flex; gap:1.5rem; margin-top:1rem;">
  <div style="flex:1;">
    <p style="font-size:0.95rem; margin-bottom:0.5rem;">GraphQL uses a type system to define your API.</p>
    <div v-html="`<pre style='color:#e0e0e0; font-size:0.55rem; font-family:monospace; line-height:1.5; white-space:pre; margin:0;background:#1a1a2e; border-radius:6px; padding:10px 14px;'>type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  title: String!\n  publishedAt: String!\n}</pre>`" />
  </div>

  <div style="flex:1;">
    <ul style="font-size:0.95rem; color:#333; padding-left:1rem; line-height:1.8; margin-top:0.5rem;">
      <li>String! means it's required</li>
      <li>Relationships (e.g. posts) are embedded</li>
      <li>Tools can auto-generate documentation</li>
      <li>Clients get predictable responses</li>
      <li>Catches errors at development time</li>
    </ul>
  </div>
</div>

<!-- Notes: GraphQL APIs are built around a schema — it's like a contract between the backend and frontend.
This schema is typed, meaning we define the structure of data: what a User is, what fields are required, and how it links to Post.
With this, you get things like auto-generated documentation, type-safe clients, and clear errors when queries go wrong.
It's especially helpful in larger teams where backend and frontend are developed in parallel. -->

---
layout: default
---

# GraphQL

<div style="margin-top:1rem;">

<p style="font-size:0.95rem; margin-bottom:0.8rem;">GraphQL is schema-based, so you can:</p>

<p style="font-weight:600; margin-bottom:0.3rem;">Add new fields:</p>
<pre v-pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.65rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.8rem;">type User {
  age: Int   # Added later
}</pre>

<p style="font-weight:600; margin-bottom:0.3rem;">Deprecate old fields:</p>
<pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.65rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.8rem;">email: String @deprecated(reason: "Use contactEmail")</pre>

<ul style="font-size:0.95rem; color:#333; padding-left:1rem; margin-top:0.5rem;">
  <li>No breaking changes</li>
  <li>Versionless API evolution</li>
  <li>Better long-term maintainability</li>
</ul>

</div>

<!-- Notes: GraphQL supports non-breaking evolution of your API.
If you need to add a field, you just add it to the schema — clients won't break because they only query what they need.
If you want to deprecate something, you can mark it in the schema — tools will even warn developers not to use it.
This reduces the need for strict versioning like in REST — making long-term maintenance much easier and safer. -->

---
layout: default
---

# GraphQL with Tyk

<div style="margin-top:1rem;">

<p style="font-weight:600; font-size:1.1rem; color:#2CA597; margin-bottom:0.5rem;">Native GraphQL Support</p>

<ul style="font-size:0.95rem; color:#333; padding-left:1rem; line-height:1.7;">
  <li>No middleware required</li>
  <li>Fully compliant with latest GraphQL specs:</li>
</ul>

<div style="margin-left:2rem; margin-bottom:0.8rem;">
  <ul style="font-size:0.9rem; color:#333; padding-left:1rem; line-height:1.7;">
    <li>Queries – Fetching data</li>
    <li>Mutations – Modifying data</li>
    <li>Subscriptions – Real-time updates</li>
  </ul>
</div>

<p style="font-weight:600; font-size:1.1rem; color:#2CA597; margin-bottom:0.5rem;">What You Can Do with Tyk GraphQL:</p>

<ul style="font-size:0.95rem; color:#333; padding-left:1rem; line-height:1.7;">
  <li>Securely expose existing GraphQL APIs</li>
  <li>Use Tyk's integrated engine to create a Universal Data Graph – combine multiple services into one unified GraphQL endpoint</li>
</ul>

</div>

<!-- Notes: Tyk has native support for GraphQL — meaning there's no need for extra middleware or third-party integrations.
Tyk is fully compliant with the official GraphQL specification, including support for queries, mutations, and subscriptions — so you can build real-time and transactional APIs seamlessly.
If you already have GraphQL APIs, you can expose and secure them using Tyk.
And if you're working with a mix of REST, gRPC, or other services, you can use Tyk's Universal Data Graph to stitch those together into one unified GraphQL API — a powerful way to modernize and simplify your API layer.
We also have a short intro video available if you want to see this in action. -->
