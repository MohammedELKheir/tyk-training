---
id: tyk-streams-2025/007-tyk-and-streaming-apis-2
deck_id: tyk-streams-2025
order: 7
slug: tyk-and-streaming-apis-2
title: "Tyk and Streaming APIs"
summary: "Capabilities Overview - Protocol mediation across HTTP, Kafka, SSE, MQTT, and AMQP - Bridge synchronous REST traffic with asynchronous broker systems - Accept via HTTP/WebSocket, p"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/008-why-tyk-streams]
customer_visible: true
notes_visibility: customer-safe
---
---

# Core Concept: Unified Streaming Layer

- Inputs → Processors → Outputs
- Inputs accept events from HTTP, WebSocket, Kafka, MQTT, or AMQP
- Processors transform, filter, enrich, validate, and normalize messages
- Outputs publish to Kafka/MQTT/AMQP or expose streams via SSE/WebSocket
- Webhooks and portal_webhook allow direct delivery to external systems
- Fan-out to multiple outputs in parallel from the same stream pipeline

---

# Capabilities Overview

- Protocol mediation across HTTP, Kafka, SSE, MQTT, and AMQP
- Bridge synchronous REST traffic with asynchronous broker systems
- Accept via HTTP/WebSocket, publish to Kafka/MQTT/AMQP
- Consume broker events and stream them to WebSocket/SSE clients
- Reuse existing middleware for AuthN, JWT, OAuth 2.0, mTLS, quotas, and policies
- Apply RBAC, org separation, tagging, and ACLs to stream endpoints
- Use Bloblang/Bento to map, reshape, enrich, branch, and correct events inline
