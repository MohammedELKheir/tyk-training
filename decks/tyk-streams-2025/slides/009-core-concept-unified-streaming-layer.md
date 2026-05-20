---
id: tyk-streams-2025/009-core-concept-unified-streaming-layer
deck_id: tyk-streams-2025
order: 9
slug: core-concept-unified-streaming-layer
title: "Core Concept: Unified Streaming Layer"
summary: "Request Lifecycle Client sends HTTP POST / GET Middleware validates & authenticates Routed to Bento handler Processed through input/output connectors Analytics logged Client POST /"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/010-core-concept-unified-streaming-layer-2]
customer_visible: true
notes_visibility: customer-safe
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
