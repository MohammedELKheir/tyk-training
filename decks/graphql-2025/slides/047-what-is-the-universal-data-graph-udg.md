---
id: graphql-2025/047-what-is-the-universal-data-graph-udg
deck_id: graphql-2025
order: 47
slug: what-is-the-universal-data-graph-udg
title: "What is the Universal Data Graph (UDG)?"
summary: "Universal Data Graph (UDG) is Tyk's powerful GraphQL execution engine that allows you to create a unified GraphQL API by stitching together multiple data sources into a single, coh"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/048-currently-supported-datasources-rest-graphql-soap-through-the-rest-datas]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# What is the Universal Data Graph (UDG)?

Universal Data Graph (UDG) is Tyk's powerful GraphQL execution engine that allows you to create a unified GraphQL API by stitching together multiple data sources into a single, cohesive schema.
Core Concept:
Define a single GraphQL schema that represents your ideal API
Map schema fields to different backend data sources
Tyk's execution engine automatically resolves queries across all data sources
No need to modify existing backend services
Execution Mode:
UDG uses the executionEngine execution mode
Operates as a GraphQL gateway that orchestrates data fetching
Supports multiple data source types simultaneously

<!-- Notes: The Universal Data Graph, or UDG, is a powerful feature in Tyk that allows you to consolidate multiple APIs—whether REST or GraphQL—into a single GraphQL interface.

What’s unique here is that you don’t need to spin up or maintain a GraphQL server of your own. Instead, UDG lets you map and configure your existing REST APIs directly through Tyk.

This means that Tyk becomes the hub for all your API integration needs—both internal microservices and external APIs—under one query layer.

Even better, because this is built on Tyk, your Graph inherits all the benefits: authentication, rate limiting, monitoring, and extensible middleware, making it not only powerful but also secure and scalable by design. -->
