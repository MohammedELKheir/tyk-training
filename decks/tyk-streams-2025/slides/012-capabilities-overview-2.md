---
id: tyk-streams-2025/012-capabilities-overview-2
deck_id: tyk-streams-2025
order: 12
slug: capabilities-overview-2
title: "Capabilities Overview"
summary: "Prerequisites - Docker to run the Tyk stack locally - Git to clone the demo repository - A Dashboard license for Streams API creation - curl and jq for testing SSE and POST flows"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/013-architecture-and-flow]
customer_visible: true
notes_visibility: customer-safe
---
---

# Tyk as an API Consumer Gateway (Stream → Client)

- Goal: deliver async Kafka responses to the browser
- Joker Service publishes a joke to Kafka topic discussion
- Tyk Streams Consumer subscribes to discussion
- Tyk pushes events to the client using SSE or WebSockets
- The client sees the response instantly
- Value: Kafka → SSE bridging while each side stays native to its own protocol

---

# Prerequisites

- Docker to run the Tyk stack locally
- Git to clone the demo repository
- A Dashboard license for Streams API creation
- curl and jq for testing SSE and POST flows
