---
id: tyk-streams-2025/003-what-are-streaming-apis
deck_id: tyk-streams-2025
order: 3
slug: what-are-streaming-apis
title: "What are Streaming APIs"
summary: "Traditional REST Client Server HTTP Request (GET, POST, PUT, DELETE) HTTP Response (JSON, XML, etc.) Client-Server: The client initiates communication by sending an HTTP request to"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/004-traditional-rest]
customer_visible: true
notes_visibility: customer-safe
---
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
