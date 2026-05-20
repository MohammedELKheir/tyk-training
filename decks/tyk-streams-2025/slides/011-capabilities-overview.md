---
id: tyk-streams-2025/011-capabilities-overview
deck_id: tyk-streams-2025
order: 11
slug: capabilities-overview
title: "Capabilities Overview"
summary: "Tyk as an API Producer Gateway (Client → Stream) - Goal: accept browser input and publish into Kafka - Browser sends POST /chat to Tyk Gateway - A stream-enabled API definition pro"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/012-capabilities-overview-2]
customer_visible: true
notes_visibility: customer-safe
---
---

# Example Scenario Overview

- Tyk Streams: End-to-End Async Messaging via HTTP → Kafka → Browser
- Accept HTTP POST requests from a browser
- Convert them into Kafka messages
- Consume Kafka responses
- Push results back to the browser using SSE or WebSockets
- Use case: user types “Tell me a joke” and gets a real-time response

---

# Tyk as an API Producer Gateway (Client → Stream)

- Goal: accept browser input and publish into Kafka
- Browser sends POST /chat to Tyk Gateway
- A stream-enabled API definition processes the payload
- Tyk publishes the message to a Kafka topic such as chat
- The Joker Service consumes from that topic
- Value: protocol bridging, policy enforcement, and decoupling
