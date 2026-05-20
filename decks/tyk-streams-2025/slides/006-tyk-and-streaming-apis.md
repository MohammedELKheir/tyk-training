---
id: tyk-streams-2025/006-tyk-and-streaming-apis
deck_id: tyk-streams-2025
order: 6
slug: tyk-and-streaming-apis
title: "Tyk and Streaming APIs"
summary: "Core Concept: Unified Streaming Layer - Powered by the Bento stream processor embedded in the Gateway - Supports Bloblang transformations: map, filter, and enrich - Optional branch"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/007-tyk-and-streaming-apis-2]
customer_visible: true
notes_visibility: customer-safe
---
---

# Why Tyk Streams?

- Same Tyk security, rate limits, analytics, authentication, and policies
- Connect REST and Kafka seamlessly
- REST producers can publish events via HTTP POST
- Kafka, AMQP, and MQTT brokers handle downstream distribution
- No external broker configuration in the Gateway
- Unified lifecycle management: versioning, automation, and governance

---

# Core Concept: Unified Streaming Layer

- Powered by the Bento stream processor embedded in the Gateway
- Supports Bloblang transformations: map, filter, and enrich
- Optional branching, merging, rate control, and error handling
- Unsafe processors (file, subprocess) are disabled unless explicitly enabled
- High-throughput, memory-buffered streaming for async workloads
- Defined in x-tyk-streaming in OAS-based APIs only
- Declarative YAML/JSON configuration is GitOps-friendly
- Works with Dashboard UI and Tyk Sync automation
- Multiple named streams can live inside one API definition
