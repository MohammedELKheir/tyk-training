---
id: tyk-streams-2025/004-traditional-rest
deck_id: tyk-streams-2025
order: 4
slug: traditional-rest
title: "Traditional REST"
summary: "Event-Driven Architecture Explained Event-Driven Architecture Producers Channels Broker Consumers Producers emit events, consumers react Asynchronous, decoupled microservices Commo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/005-event-driven-architecture-explained]
customer_visible: true
notes_visibility: customer-safe
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
