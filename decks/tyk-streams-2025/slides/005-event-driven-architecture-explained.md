---
id: tyk-streams-2025/005-event-driven-architecture-explained
deck_id: tyk-streams-2025
order: 5
slug: event-driven-architecture-explained
title: "Event-Driven Architecture Explained"
summary: "Tyk and Streaming APIs HTTP/REST SSE/Websockets Tyk Gateway Auth/Ratelimiting/Analytics SSE proxy/Websocket proxy Tyk Streams (Kafka, MQTT, AMQP) Kafka/MQTT/AMQP API Server"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/006-tyk-and-streaming-apis]
customer_visible: true
notes_visibility: customer-safe
---
---

# Tyk and Streaming APIs

- Server-Sent Events (SSE): native support for server push over HTTP
- API management controls: authentication, rate limits, analytics
- Ideal for notifications, live feeds, and one-way updates
- WebSockets: persistent, bidirectional channels managed by Tyk
- Full-duplex communication for chat, collaboration, and dashboards
- Governance: the same policies apply as for REST APIs
- Brokers: built-in connectors for Kafka, MQTT, and AMQP
- Protocol mediation: bridge HTTP/WS/SSE with brokered systems

---

<div style="width:100%; min-height:540px; display:flex; flex-direction:column; align-items:center; gap:1.4rem; padding-top:0.4rem;">
  <div style="font-size:3.15rem; font-weight:800; color:#5E2CCF; line-height:1.05; text-align:center;">Tyk and Streaming APIs</div>
  <svg viewBox="0 0 760 360" style="width:100%; max-width:780px; height:360px; overflow:visible;">
    <defs>
      <marker id="streaming-down" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#111" /></marker>
    </defs>
    <rect x="130" y="28" rx="16" ry="16" width="180" height="54" fill="#fff" stroke="#111" stroke-width="2.5" />
    <text x="220" y="61" text-anchor="middle" style="font-size:20px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">HTTP/REST</text>
    <rect x="450" y="28" rx="16" ry="16" width="200" height="54" fill="#fff" stroke="#111" stroke-width="2.5" />
    <text x="550" y="61" text-anchor="middle" style="font-size:20px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">SSE/Websockets</text>
    <line x1="220" y1="82" x2="220" y2="186" stroke="#111" stroke-width="3" marker-end="url(#streaming-down)" />
    <line x1="550" y1="82" x2="550" y2="186" stroke="#111" stroke-width="3" marker-end="url(#streaming-down)" />
    <rect x="70" y="188" rx="26" ry="26" width="620" height="126" fill="#fff" stroke="#111" stroke-width="2.8" />
    <text x="380" y="228" text-anchor="middle" style="font-size:24px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Tyk Gateway</text>
    <text x="380" y="262" text-anchor="middle" style="font-size:20px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Auth/Ratelimiting/Analytics</text>
    <text x="380" y="290" text-anchor="middle" style="font-size:20px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">SSE proxy/Websocket proxy</text>
    <text x="380" y="318" text-anchor="middle" style="font-size:20px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Tyk Streams (Kafka, MQTT, AMQP)</text>
    <line x1="230" y1="314" x2="230" y2="352" stroke="#111" stroke-width="3" marker-end="url(#streaming-down)" />
    <line x1="570" y1="314" x2="570" y2="352" stroke="#111" stroke-width="3" marker-end="url(#streaming-down)" />
    <rect x="64" y="354" rx="16" ry="16" width="240" height="56" fill="#fff" stroke="#111" stroke-width="2.5" />
    <text x="184" y="388" text-anchor="middle" style="font-size:19px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Kafka/MQTT/AMQP</text>
    <rect x="438" y="354" rx="16" ry="16" width="240" height="56" fill="#fff" stroke="#111" stroke-width="2.5" />
    <text x="558" y="388" text-anchor="middle" style="font-size:19px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">API Server</text>
  </svg>
</div>
