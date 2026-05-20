---
id: architect-circuit-breakers-2-how-circuit-breakers-work/003-half-open-state
deck_id: architect-circuit-breakers-2-how-circuit-breakers-work
order: 3
slug: half-open-state
title: "Half Open State"
summary: "Upstream may recover before the cooldown ends. Full cooldown → unnecessary downtime for clients. Solution: Half-Open Mode Tyk enters half-open state after tripping. Client traffic"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:100%; padding-right:74px;">
  <h1 style="font-size:3.1rem; line-height:1.02; font-weight:800; color:#5B10D5; margin:0 0 1.45rem 0; border:0; max-width:760px;">Half Open State</h1>

  <div style="font-size:1.08rem; line-height:1.55; color:#060622; margin-bottom:1.35rem; max-width:770px;">
    <div>Upstream may recover before the cooldown ends.</div>
    <div>Full cooldown → unnecessary downtime for clients.</div>
  </div>

  <div style="font-size:1.42rem; font-weight:800; color:#060622; margin:0 0 0.15rem 0;">Solution: Half-Open Mode</div>
  <ul style="margin:0 0 1.6rem 1.2rem; padding-left:1.3rem; font-size:1.08rem; line-height:1.55; color:#060622; max-width:760px; list-style-type:disc;">
    <li>Tyk enters half-open state after tripping.</li>
    <li>Client traffic still blocked, but...</li>
    <li>Tyk periodically probes the upstream.</li>
  </ul>

  <div style="font-size:1.42rem; font-weight:800; color:#060622; margin:0 0 0.15rem 0;">If Probes Succeed:</div>
  <ul style="margin:0 0 0 1.2rem; padding-left:1.3rem; font-size:1.08rem; line-height:1.55; color:#060622; max-width:780px; list-style-type:disc;">
    <li>Path considered restored.</li>
    <li>Circuit is automatically closed.</li>
    <li>API traffic resumes before cooldown expires.</li>
  </ul>

  <div style="position:absolute; right:-38px; bottom:-28px; width:108px; height:92px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:flex-start; justify-content:flex-start; gap:7px; padding:14px 0 0 14px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-radius:3px; flex:0 0 auto;"></div>
    <div style="font-size:1.75rem; font-weight:700; color:#FFFFFF; line-height:1; letter-spacing:-0.02em;">Tyk</div>
  </div>
</div>

<!-- Notes: Sometimes, upstream services recover faster than the configured cooldown period. Without intervention, the circuit breaker would stay open the entire time—blocking client traffic even though the backend is already healthy.
Tyk solves this with a half-open mode. When in this state, the Gateway continues to block incoming client traffic but starts to periodically send test requests to the upstream.
If the upstream service responds successfully, Tyk automatically resets the breaker, and normal traffic flow resumes. This shortens unnecessary downtime and helps maintain a more responsive experience for users.
Think of it like cautiously testing an electrical circuit—if the conditions look stable, we restore the connection early, without waiting for the full cooldown period to finish. -->
