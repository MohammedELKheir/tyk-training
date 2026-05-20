---
id: graphql-2025/090-udg-countries-enriched-overview
deck_id: graphql-2025
order: 90
slug: udg-countries-enriched-overview
title: "UDG Countries Enriched — Overview"
summary: "The \"UDG Countries Enriched\" API is a Universal Data Graph (UDG) example that combines data from two sources into a single GraphQL endpoint. It exposes a unified GraphQL API that m"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/091-udg-countries-enriched-overview-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# UDG Countries Enriched — Overview

The "UDG Countries Enriched" API is a Universal Data Graph (UDG) example that combines data from two sources into a single GraphQL endpoint.
It exposes a unified GraphQL API that merges:
GraphQL Countries API (internal Tyk API) — provides code and name
REST Countries API (external service) — provides population

<!-- Notes: "Let me introduce you to the UDG Countries Enriched API. This is a practical example of Tyk's Universal Data Graph, or UDG, in action.
What makes this interesting is that it demonstrates how you can take data from multiple, completely different sources and expose them as a single, unified GraphQL endpoint.
In this case, we're combining two data sources: first, an internal GraphQL Countries API that's already running in Tyk, which provides us with country codes and names. And second, an external REST API service that provides population data.
The magic happens when Tyk's UDG engine automatically orchestrates calls to both of these services, merges the responses, and presents everything to the client as if it came from a single API. This is the power of data federation - you get a unified interface without having to modify your existing services." -->
