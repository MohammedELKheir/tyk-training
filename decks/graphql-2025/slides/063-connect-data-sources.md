---
id: graphql-2025/063-connect-data-sources
deck_id: graphql-2025
order: 63
slug: connect-data-sources
title: "Connect Data Sources"
summary: "Unified Data Graph (UDG) – Datasource Overview Datasources power your UDG and its schema Can be attached to any field in the UDG schema Support nested configuration Quick Start vs"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/064-graphql-datasource-overview]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Connect Data Sources

Unified Data Graph (UDG) – Datasource Overview
Datasources power your UDG and its schema
Can be attached to any field in the UDG schema
Support nested configuration
Quick Start vs Full Control
You can add datasources directly to UDG without registering them as APIs in Tyk
For advanced features (rate limits, quotas, transformations), import the API into Tyk first
Supported Datasource Types:
REST
GraphQL
SOAP (via REST Datasource)
Kafka

<!-- Notes: Unified Data Graph in Tyk relies on datasources — these are your backend systems that provide the actual data.
You can attach a datasource to any field in the UDG schema, and even nest them, enabling complex data compositions.
While you can add datasources quickly for testing or prototyping without creating a full Tyk API, this limits your access to key API management features.
For things like quotas, rate limiting, and transformations, we strongly recommend importing the backend API into Tyk first.
Tyk supports REST and GraphQL directly, SOAP via REST wrappers, and even Kafka for event-driven data access. -->
