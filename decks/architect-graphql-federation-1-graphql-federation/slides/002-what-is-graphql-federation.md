---
id: architect-graphql-federation-1-graphql-federation/002-what-is-graphql-federation
deck_id: architect-graphql-federation-1-graphql-federation
order: 2
slug: what-is-graphql-federation
title: "What is GraphQL Federation"
summary: "GraphQL Federation solves the complexity of scaling GraphQL in large enterprises. Allows you to break down monolithic GraphQL services into multiple backend services. Tyk (v4.0+) s"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/003-graphql-federation-architecture]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">What is GraphQL Federation</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem;">
  <li>GraphQL Federation solves the complexity of scaling GraphQL in large enterprises.</li>
  <li>Allows you to break down monolithic GraphQL services into multiple backend services.</li>
  <li>Tyk (v4.0+) supports federation to expose multiple services as a single, unified graph.</li>
  <li>Simplifies maintenance and encourages service ownership.</li>
</ul>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well—it becomes hard to manage, and teams step on each other's toes. GraphQL Federation addresses this by enabling multiple services to define parts of the graph independently. With Tyk's federation support, you can stitch these services into a unified API surface—making it easier for teams to work independently while offering a seamless experience to API consumers. -->
