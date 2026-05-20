---
id: graphql-2025/049-key-concepts-datasources
deck_id: graphql-2025
order: 49
slug: key-concepts-datasources
title: "Key Concepts - DataSources"
summary: "Resolvers vs. DataSources Resolvers: Functions that return data for a field (typical in GraphQL) DataSources: Config-driven way to fetch data for fields No code required — just con"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/050-key-concepts-arguments]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Concepts - DataSources

Resolvers vs. DataSources
Resolvers: Functions that return data for a field (typical in GraphQL)
DataSources: Config-driven way to fetch data for fields
No code required — just configuration
🔗 Types of DataSources in Tyk
Internal:
REST/SOAP APIs already managed in Tyk
➜ Use middleware to validate and transform data
External:
APIs not (yet) managed in Tyk
➜ Easily included in your data graph
➜ Can transition to internal when needed

<!-- Notes: In traditional GraphQL, you often write resolvers — small functions that handle fetching data for each field in your schema. These need to be implemented manually and tied to specific types and fields.
Tyk’s Universal Data Graph replaces resolvers with a more streamlined approach: DataSources. These are config-based, meaning you don’t have to write code — you just tell the engine where and how to get the data.
There are two kinds of DataSources:
Internal: These are your existing Tyk-managed APIs, like REST or SOAP. You can apply Tyk’s built-in middleware — for example, for auth, transformation, or rate limiting.

External: These are APIs you haven’t added to Tyk yet. UDG allows you to include them in your graph right away. Later, if you want to bring them into Tyk to use middleware or analytics, that transition is easy.

This flexibility gives you a low-code way to build powerful, secure, and scalable GraphQL endpoints. -->
