---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Streams"
---
<style>
.slidev-page { font-size: 1.04rem; }
h1, h2, h3 { color: #5E2CCF; }
pre { font-size: 0.84rem !important; line-height: 1.35 !important; }
code { font-family: "SFMono-Regular", ui-monospace, Menlo, Monaco, Consolas, monospace; }
ul li, ol li { margin: 0.35rem 0; }
</style>

<div style="position:relative; width:100%; height:100%; min-height:520px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; background:linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%); color:white; border-radius:18px;">
  <div style="font-size:1rem; font-weight:700; opacity:0.95; margin-bottom:0.6rem;">Module 1</div>
  <div style="font-size:3rem; font-weight:800; line-height:1.1;">Tyk Streams</div>
  <div style="margin-top:1.2rem; font-size:1.1rem; max-width:700px; opacity:0.95;">Managing Event-Driven APIs with Tyk</div>
  <img src="./images/tyk-logo.png" style="position:absolute; bottom:1.2rem; right:1.4rem; width:5.5rem; opacity:0.88;" />
</div>

---

<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:space-between; gap:2rem; padding:1rem 0; position:relative;">
  <div style="flex:1.1; display:flex; flex-direction:column; justify-content:center; height:100%; min-height:500px; background:linear-gradient(135deg, #7F38FA 0%, #B311FF 100%); border-radius:24px; color:white; padding:2.5rem;">
    <div style="font-size:2.8rem; font-weight:700; line-height:1.1;">Agenda</div>
    <div style="margin-top:1rem; font-size:1rem; opacity:0.9;">Foundational</div>
  </div>
  <div style="flex:1.4; display:flex; flex-direction:column; gap:1.1rem;">
    <div style="display:flex; gap:1rem; align-items:flex-start;"><div style="min-width:2.4rem; height:2.4rem; border-radius:999px; background:#F3EAFF; color:#7F38FA; font-weight:700; display:flex; align-items:center; justify-content:center;">01</div><div><div style="font-size:1.25rem; font-weight:700; color:#5E2CCF;">Introduction</div><div style="font-size:0.92rem; color:#555;">Understanding Streaming APIs and Why Tyk Streams</div></div></div>
    <div style="display:flex; gap:1rem; align-items:flex-start;"><div style="min-width:2.4rem; height:2.4rem; border-radius:999px; background:#F3EAFF; color:#7F38FA; font-weight:700; display:flex; align-items:center; justify-content:center;">02</div><div><div style="font-size:1.25rem; font-weight:700; color:#5E2CCF;">Architecture</div><div style="font-size:0.92rem; color:#555;">Core Architecture and Flow</div></div></div>
    <div style="display:flex; gap:1rem; align-items:flex-start;"><div style="min-width:2.4rem; height:2.4rem; border-radius:999px; background:#F3EAFF; color:#7F38FA; font-weight:700; display:flex; align-items:center; justify-content:center;">03</div><div><div style="font-size:1.25rem; font-weight:700; color:#5E2CCF;">Hands-On</div><div style="font-size:0.92rem; color:#555;">Setting up streaming API on Tyk</div></div></div>
    <div style="display:flex; gap:1rem; align-items:flex-start;"><div style="min-width:2.4rem; height:2.4rem; border-radius:999px; background:#F3EAFF; color:#7F38FA; font-weight:700; display:flex; align-items:center; justify-content:center;">04</div><div><div style="font-size:1.25rem; font-weight:700; color:#5E2CCF;">Advanced Use Cases</div><div style="font-size:0.92rem; color:#555;">Beyond the core features</div></div></div>
  </div>
  <img src="./images/tyk-logo.png" style="position:absolute; bottom:1.2rem; right:1.4rem; width:5rem; opacity:0.88;" />
</div>

---

# What are Streaming APIs

- Real-time, continuous data exchange
- Server push vs client pull
- No repeated TLS handshakes or re-auth overhead
- Client keeps connection open
- Server maintains session state until closed
- Common patterns: SSE, WebSockets, Webhooks
- Enables low-latency, bidirectional communication
- Foundation for event-driven architectures

---

<div style="width:100%; min-height:540px; display:flex; gap:2rem; align-items:flex-start; justify-content:space-between; padding:0.4rem 0.2rem;">
  <div style="flex:1; display:flex; flex-direction:column; gap:1rem;">
    <div style="font-size:2.2rem; font-weight:800; color:#111; text-align:center; text-decoration:underline;">Traditional REST</div>
    <svg viewBox="0 0 420 180" style="width:100%; height:180px; overflow:visible;">
      <rect x="20" y="56" rx="18" ry="18" width="120" height="58" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="80" y="90" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Client</text>
      <rect x="280" y="56" rx="18" ry="18" width="120" height="58" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="340" y="90" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Server</text>
      <defs>
        <marker id="rest-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ef6a6a" /></marker>
        <marker id="rest-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5f8fd8" /></marker>
      </defs>
      <line x1="140" y1="76" x2="276" y2="76" stroke="#ef6a6a" stroke-width="3" marker-end="url(#rest-red)" />
      <line x1="280" y1="98" x2="144" y2="98" stroke="#5f8fd8" stroke-width="3" marker-end="url(#rest-blue)" />
      <text x="210" y="28" text-anchor="middle" style="font-size:16px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">HTTP Request</text>
      <text x="210" y="47" text-anchor="middle" style="font-size:14px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">(GET, POST, PUT, DELETE)</text>
      <text x="210" y="150" text-anchor="middle" style="font-size:16px; fill:#5f8fd8; font-family:Virgil, 'Comic Sans MS', cursive;">HTTP Response</text>
      <text x="210" y="168" text-anchor="middle" style="font-size:14px; fill:#5f8fd8; font-family:Virgil, 'Comic Sans MS', cursive;">(JSON, XML, etc.)</text>
    </svg>
    <div style="font-size:1rem; color:#111; line-height:1.45;">
      <ul style="padding-left:1.2rem; margin:0; display:flex; flex-direction:column; gap:0.85rem;">
        <li><strong>Client-Server:</strong> The client initiates communication by sending an HTTP request to the server.</li>
        <li><strong>Request-Response:</strong> Server processes request and sends a HTTP response back to the client</li>
        <li><strong>Stateless:</strong> Each request from the client to the server must contain all the information needed to understand the request, as the server does not store any client context between requests.</li>
        <li><strong>On-demand:</strong> Data is retrieved or manipulated only when explicitly requested by the client.</li>
      </ul>
    </div>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; gap:1rem;">
    <div style="font-size:2.2rem; font-weight:800; color:#111; text-align:center; text-decoration:underline;">Streaming API</div>
    <svg viewBox="0 0 420 180" style="width:100%; height:180px; overflow:visible;">
      <rect x="40" y="56" rx="18" ry="18" width="120" height="58" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="100" y="90" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Client</text>
      <rect x="260" y="56" rx="18" ry="18" width="120" height="58" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="320" y="90" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Server</text>
      <defs>
        <marker id="stream-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ef6a6a" /></marker>
        <marker id="stream-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5f8fd8" /></marker>
      </defs>
      <line x1="158" y1="76" x2="258" y2="76" stroke="#ef6a6a" stroke-width="3" marker-end="url(#stream-red)" />
      <line x1="262" y1="88" x2="162" y2="88" stroke="#ef6a6a" stroke-width="3" marker-end="url(#stream-red)" />
      <path d="M320 114 L320 154 L100 154 L100 116" fill="none" stroke="#5f8fd8" stroke-width="3" marker-end="url(#stream-blue)" />
      <text x="210" y="28" text-anchor="middle" style="font-size:15px; fill:#ef6a6a; font-family:Virgil, 'Comic Sans MS', cursive;">Subscription/Connection request</text>
      <text x="338" y="132" text-anchor="start" style="font-size:15px; fill:#5f8fd8; font-family:Virgil, 'Comic Sans MS', cursive;">Push Events</text>
      <text x="210" y="176" text-anchor="middle" style="font-size:15px; fill:#5f8fd8; font-family:Virgil, 'Comic Sans MS', cursive;">Real-time data stream</text>
    </svg>
    <div style="font-size:1rem; color:#111; line-height:1.45;">
      <ul style="padding-left:1.2rem; margin:0; display:flex; flex-direction:column; gap:0.85rem;">
        <li><strong>Client-Server:</strong> The client establishes a persistent connection with the server.</li>
        <li><strong>Subscription/Connection:</strong> The client typically subscribes to a specific data stream or event topic.</li>
        <li><strong>Push-based:</strong> The server pushes real-time data or events to the client as they occur</li>
        <li><strong>Event-driven:</strong> Data delivered in a continuous stream of events, suitable for applications requiring immediate updates.</li>
        <li><strong>Stateful (often):</strong> Streaming APIs often maintain a stateful connection to manage the data stream and subscriptions.</li>
      </ul>
    </div>
  </div>
</div>

---

<div style="width:100%; min-height:540px; display:flex; flex-direction:column; gap:1rem; padding:0.2rem 0.4rem;">
  <div style="font-size:3rem; font-weight:800; color:#5E2CCF; line-height:0.95; max-width:520px;">Event-Driven Architecture<br />Explained</div>
  <div style="display:flex; justify-content:center; margin-top:0.2rem;">
    <div style="width:720px; background:#eef3f6; border-radius:8px; padding:1rem 1.2rem 0.8rem; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.04);">
      <div style="text-align:center; font-size:1.3rem; font-weight:700; color:#274155; margin-bottom:0.7rem;">Event-Driven Architecture</div>
      <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
        <div style="width:150px; background:white; border-radius:10px; padding:1rem 0.7rem 0.7rem; text-align:center; box-shadow:0 1px 2px rgba(0,0,0,0.08);">
          <div style="border:2px solid #9fb7c6; border-radius:14px; padding:0.25rem; margin:0 auto 0.2rem; width:68px;">
            <div style="height:10px; border:2px solid #9fb7c6; border-radius:999px; margin:4px 0;"></div>
            <div style="height:10px; border:2px solid #9fb7c6; border-radius:999px; margin:4px 0;"></div>
            <div style="height:10px; border:2px solid #9fb7c6; border-radius:999px; margin:4px 0;"></div>
          </div>
          <div style="border:2px solid #9fb7c6; border-radius:14px; padding:0.25rem; margin:1rem auto 0.2rem; width:68px;">
            <div style="height:10px; border:2px solid #9fb7c6; border-radius:999px; margin:4px 0;"></div>
            <div style="height:10px; border:2px solid #9fb7c6; border-radius:999px; margin:4px 0;"></div>
            <div style="height:10px; border:2px solid #9fb7c6; border-radius:999px; margin:4px 0;"></div>
          </div>
          <div style="margin-top:0.55rem; font-size:1.05rem; color:#274155;">Producers</div>
        </div>
        <svg viewBox="0 0 420 180" style="flex:1; height:180px; overflow:visible;">
          <defs>
            <marker id="eda-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#7bb8c6" /></marker>
          </defs>
          <line x1="30" y1="55" x2="130" y2="90" stroke="#7bb8c6" stroke-width="2.4" marker-end="url(#eda-arrow)" />
          <line x1="30" y1="125" x2="130" y2="90" stroke="#7bb8c6" stroke-width="2.4" marker-end="url(#eda-arrow)" />
          <circle cx="212" cy="90" r="54" fill="#fff" stroke="#dbe5ea" stroke-width="2" />
          <g transform="translate(176,54)">
            <text x="36" y="-6" text-anchor="middle" style="font-size:12px; fill:#3c7183;">Channels</text>
            <rect x="0" y="16" width="26" height="26" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
            <rect x="28" y="16" width="26" height="26" fill="none" stroke="#9fb7c6" stroke-width="2.2" />
            <rect x="0" y="44" width="26" height="26" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
            <rect x="28" y="44" width="26" height="26" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
            <path d="M26 29 c7 0 7 -13 14 -13" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
            <path d="M13 42 c0 7 -13 7 -13 14" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
            <path d="M40 42 c0 7 13 7 13 14" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
            <path d="M26 57 c7 0 7 13 14 13" fill="none" stroke="#4dc0e8" stroke-width="2.2" />
          </g>
          <text x="212" y="164" text-anchor="middle" style="font-size:14px; fill:#274155; font-weight:600;">Broker</text>
          <line x1="294" y1="90" x2="390" y2="55" stroke="#7bb8c6" stroke-width="2.4" marker-end="url(#eda-arrow)" />
          <line x1="294" y1="90" x2="390" y2="125" stroke="#7bb8c6" stroke-width="2.4" marker-end="url(#eda-arrow)" />
        </svg>
        <div style="width:150px; background:white; border-radius:10px; padding:0.8rem 0.7rem 0.7rem; text-align:center; box-shadow:0 1px 2px rgba(0,0,0,0.08);">
          <div style="height:56px; border:2px solid #9fb7c6; border-radius:10px; margin-bottom:0.7rem; position:relative;"><div style="position:absolute; left:12px; top:16px; width:18px; height:18px; border:2px solid #9fb7c6; border-radius:50%;"></div><div style="position:absolute; left:40px; top:10px; width:34px; height:24px; border:2px solid #4dc0e8; border-radius:8px;"></div><div style="position:absolute; right:12px; top:12px; width:18px; height:28px; border:2px solid #9fb7c6; border-radius:6px;"></div></div>
          <div style="height:56px; border:2px solid #9fb7c6; border-radius:10px; margin-bottom:0.7rem; position:relative;"><div style="position:absolute; left:12px; top:16px; width:18px; height:18px; border:2px solid #9fb7c6; border-radius:50%;"></div><div style="position:absolute; right:18px; top:15px; width:26px; height:16px; border-left:3px solid #4dc0e8; border-bottom:3px solid #4dc0e8; transform:rotate(-45deg);"></div></div>
          <div style="height:56px; border:2px solid #9fb7c6; border-radius:10px; position:relative;"><div style="position:absolute; left:12px; top:16px; width:18px; height:18px; border:2px solid #9fb7c6; border-radius:50%;"></div><div style="position:absolute; left:40px; top:10px; width:34px; height:24px; border:2px solid #4dc0e8; border-radius:8px;"></div><div style="position:absolute; right:12px; top:12px; width:18px; height:28px; border:2px solid #9fb7c6; border-radius:6px;"></div></div>
          <div style="margin-top:0.55rem; font-size:1.05rem; color:#274155;">Consumers</div>
        </div>
      </div>
    </div>
  </div>
  <ul style="font-size:1.1rem; line-height:1.4; color:#111; padding-left:2rem; margin:0.35rem 0 0; display:flex; flex-direction:column; gap:0.35rem;">
    <li>Producers emit events, consumers react</li>
    <li>Asynchronous, decoupled microservices</li>
    <li>Common brokers: Kafka, MQTT, AMQP</li>
    <li>Improves scalability and resilience</li>
    <li>Uses own protocol - Kafka binary protocol, AMQP 0.9.1/1.0 etc</li>
  </ul>
</div>

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

---

# Capabilities Overview

- Developer Portal integration via portal_webhook
- Push events to portal-registered webhooks
- Monetize streaming APIs with subscription-oriented delivery patterns
- Automate webhook credential retrieval
- Integrate event flows with external partner systems
- Analytics flow through existing recorder and Pump exporters
- Export to Postgres, Prometheus, Datadog, or Elastic
- Track throughput, latency, connection counts, and errors

---

<div style="padding:0.1rem 0.4rem; min-height:540px; display:flex; flex-direction:column; gap:0.9rem;">
  <div style="font-size:3.25rem; font-weight:800; color:#5E2CCF; line-height:1.02;">Architecture &amp; Flow</div>
  <div style="font-size:1.08rem; line-height:1.35; color:#111; display:flex; flex-direction:column; gap:1rem; max-width:860px;">
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Components: Middleware → Manager → Instance → Analytics</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li><strong>Middleware:</strong> entry point, validates path &amp; auth</li>
        <li><strong>Manager:</strong> builds or reuses Bento stream instances</li>
        <li><strong>Instance:</strong> executes Input → Processor → Output pipeline</li>
        <li><strong>Analytics:</strong> records per-event metrics for Pump</li>
      </ul>
    </div>
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Stream Manager Caches Stream Configurations</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li>Caches by configuration hash for reuse</li>
        <li>Garbage collects idle stream instances</li>
        <li>Tracks active subscriptions (SSE/WS)</li>
      </ul>
    </div>
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Registers Default Paths (depending on connectors)</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li><code>/post</code> → HTTP ingestion endpoint</li>
        <li><code>/post/ws</code> → WebSocket ingestion</li>
        <li><code>/get/stream</code> → SSE/WebSocket delivery</li>
        <li>Automatically wires paths to the right stream</li>
      </ul>
    </div>
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Collects Metrics for Pump</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li>Captures event counts, connection duration, failures</li>
        <li>Exports via Pump to Postgres, Prometheus, Datadog, Elastic</li>
        <li>Same analytics pipeline as REST/GraphQL APIs</li>
      </ul>
    </div>
  </div>
</div>

---

<div style="width:100%; min-height:540px; display:flex; gap:1.4rem; align-items:flex-start; padding:0.2rem 0.4rem;">
  <div style="flex:1.25; display:flex; flex-direction:column; gap:0.8rem;">
    <div style="font-size:3.25rem; font-weight:800; color:#5E2CCF; line-height:1.02;">Request Lifecycle</div>
    <ol style="margin:0.4rem 0 0; padding-left:2rem; font-size:1.3rem; line-height:1.5; color:#111; display:flex; flex-direction:column; gap:0.35rem;">
      <li>Client sends HTTP POST / GET</li>
      <li>Middleware validates &amp;<br />authenticates</li>
      <li>Routed to Bento handler</li>
      <li>Processed through input/output<br />connectors</li>
      <li>Analytics logged</li>
    </ol>
  </div>
  <div style="flex:1; display:flex; justify-content:center; align-items:flex-start; padding-top:0.4rem;">
    <svg viewBox="0 0 430 560" style="width:100%; max-width:430px; height:520px; overflow:visible;">
      <defs>
        <marker id="lifecycle-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#111" /></marker>
      </defs>
      <text x="215" y="30" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Client</text>
      <text x="215" y="58" text-anchor="middle" style="font-size:24px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">POST / GET</text>
      <line x1="215" y1="72" x2="215" y2="122" stroke="#111" stroke-width="3" marker-end="url(#lifecycle-arrow)" />
      <rect x="40" y="124" rx="18" ry="18" width="350" height="76" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="215" y="162" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">2. Middleware</text>
      <text x="215" y="188" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">Auth/Rate limit/Middleware</text>
      <line x1="215" y1="200" x2="215" y2="254" stroke="#111" stroke-width="3" marker-end="url(#lifecycle-arrow)" />
      <rect x="40" y="258" rx="18" ry="18" width="350" height="62" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="215" y="296" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">3. Bento stream handler</text>
      <line x1="215" y1="320" x2="215" y2="370" stroke="#111" stroke-width="3" marker-end="url(#lifecycle-arrow)" />
      <rect x="40" y="372" rx="18" ry="18" width="350" height="64" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="215" y="410" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">3. Input → Processor → Output Connectors</text>
      <line x1="215" y1="436" x2="215" y2="488" stroke="#111" stroke-width="3" marker-end="url(#lifecycle-arrow)" />
      <rect x="40" y="490" rx="18" ry="18" width="350" height="64" fill="#fff" stroke="#111" stroke-width="2.5" />
      <text x="215" y="528" text-anchor="middle" style="font-size:18px; fill:#111; font-family:Virgil, 'Comic Sans MS', cursive;">4. Analytics Recorder → Pump Exporters</text>
    </svg>
  </div>
</div>

---

<div style="position:relative; width:100%; height:100%; min-height:520px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; background:linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%); color:white; border-radius:18px;"><div style="font-size:3rem; font-weight:800; line-height:1.1;">Hands-On Workshop</div><div style="margin-top:1.2rem; font-size:1.1rem; max-width:700px; opacity:0.95;">Setting up and proxying a streaming API on Tyk</div><img src="./images/tyk-logo.png" style="position:absolute; bottom:1.2rem; right:1.4rem; width:5.5rem; opacity:0.88;" /></div>

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

---

# Step 1: Clone Demo Repository
```bash
git clone https://github.com/TykTechnologies/tyk-demo
cd tyk-demo
```

## Step 2: Enable Tyk Streams
```bash
# .env
DASHBOARD_LICENCE=<your-dashboard-license>
GATEWAY_IMAGE_REPO=tyk-gateway-ee
TYK_DB_STREAMING_ENABLED=true
TYK_GW_STREAMING_ENABLED=true
```

---

# Step 3: Start the Stack
## Gateway + Dashboard + Kafka
```bash
./up.sh
```

- Script starts Tyk Gateway (EE)
- Brings up Tyk Dashboard
- Starts Kafka plus required dependencies
- Prints credentials at completion

---

# Step 4: Create Producer Stream API
```bash
curl -H "Authorization: <your-api-key>"              -H "Content-Type: application/vnd.tyk.streams.oas"              http://localhost:3000/api/apis/streams              -d @producer.json
```

- Create `producer.json`
- This API receives `POST /chat`
- Tyk publishes incoming messages into Kafka

---

# Step 5: Create Consumer Stream API
```bash
curl -H "Authorization: <your-api-key>"              -H "Content-Type: application/vnd.tyk.streams.oas"              http://localhost:3000/api/apis/streams              -d @consumer.json
```

- Create `consumer.json`
- Subscribe to Kafka topic `discussion`
- Deliver messages to clients using SSE

---

# Step 6: Start the Joker Service
```bash
chmod +x joker-service.sh
./joker-service.sh
```

- Listens to Kafka `chat` topic
- Generates jokes
- Publishes responses to `discussion`

---

# Step 7: Test — Listen for SSE Events
```bash
# Terminal 1
curl -N http://tyk-gateway.localhost:8080/jippity-discuss/sse
```

## Step 8: Test — Send Requests to Tyk Stream Producer
```bash
# Terminal 2
curl -X POST           http://tyk-gateway.localhost:8080/jippity-chat/chat           -H "Content-Type: text/plain"           -d "Tell me a joke."
```

---

# Demo Summary

- HTTP → Kafka → HTTP/SSE achieved
- Fully decoupled architecture
- Browser needs only HTTP
- Backend needs only Kafka
- Tyk Streams acts as the universal bridge
- The same pattern generalises to chat systems, event streaming APIs, real-time dashboards, and AI inference pipelines
