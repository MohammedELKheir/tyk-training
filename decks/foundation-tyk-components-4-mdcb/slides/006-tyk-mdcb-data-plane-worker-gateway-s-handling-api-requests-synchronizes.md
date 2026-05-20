---
id: foundation-tyk-components-4-mdcb/006-tyk-mdcb-data-plane-worker-gateway-s-handling-api-requests-synchronizes
deck_id: foundation-tyk-components-4-mdcb
order: 6
slug: tyk-mdcb-data-plane-worker-gateway-s-handling-api-requests-synchronizes
title: "Tyk MDCB: Data Plane • Worker Gateway(s) ◦ Handling API requests ◦ Synchronizes"
summary: "with Control Plane ◦ Grouped by Group ID ◦ Operates Autonomously • Local Redis instance ◦ Worker Gateway functionality ◦ Shared by all Worker Gateway(s) • Tyk Pump ◦ Localised anal"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-4-mdcb/007-tyk-mdcb-data-plane-control-plane-data-plane-worker-gateway-s-local-redi]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:10px; top:8px; font-size:3.28rem; line-height:1; font-weight:800; letter-spacing:-0.04em; color:#5e12db;">Tyk MDCB: Data Plane</h1>

  <div style="position:absolute; left:10px; top:160px; width:430px; font-size:0.96rem; line-height:1.12; color:#111;">
    <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:12px;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.04rem;">Worker Gateway(s)</div>
        <div style="margin-left:26px; margin-top:5px;">◦&nbsp;&nbsp;Handling API requests</div>
        <div style="margin-left:26px; margin-top:3px;">◦&nbsp;&nbsp;Synchronizes with Control Plane</div>
        <div style="margin-left:26px; margin-top:3px;">◦&nbsp;&nbsp;Grouped by Group ID</div>
        <div style="margin-left:26px; margin-top:3px;">◦&nbsp;&nbsp;Operates Autonomously</div>
      </div>
    </div>
    <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:12px;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.04rem;">Local Redis instance</div>
        <div style="margin-left:26px; margin-top:5px;">◦&nbsp;&nbsp;Worker Gateway functionality</div>
        <div style="margin-left:26px; margin-top:3px;">◦&nbsp;&nbsp;Shared by all Worker Gateway(s)</div>
      </div>
    </div>
    <div style="display:flex; gap:16px; align-items:flex-start;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.04rem;">Tyk Pump</div>
        <div style="margin-left:26px; margin-top:5px;">◦&nbsp;&nbsp;Localised analytics backend</div>
        <div style="margin-left:26px; margin-top:3px;">◦&nbsp;&nbsp;Or Sent to MDCB as “Hybrid Pump”</div>
      </div>
    </div>
  </div>

  <div style="position:absolute; left:438px; top:148px; width:370px; height:304px; background:#f8ca93; border:2px solid #727272; border-radius:40px;"></div>
  <div style="position:absolute; left:462px; top:174px; font-size:1rem; font-weight:700; color:#111;">Data Plane</div>
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:534px; top:218px; width:108px; height:132px;" />
  <img :src="'/icons/redis-icon.png'" style="position:absolute; left:688px; top:220px; width:76px; height:70px;" />
  <img :src="'/icons/database-icon.png'" style="position:absolute; left:542px; top:364px; width:72px; height:88px;" />
  <img :src="'/icons/pump-icon.png'" style="position:absolute; left:694px; top:362px; width:68px; height:88px;" />
  <div style="position:absolute; left:508px; top:198px; width:154px; text-align:center; font-size:0.9rem; color:#111;">Worker Gateway(s)</div>
  <div style="position:absolute; left:684px; top:198px; width:88px; text-align:center; font-size:0.9rem; color:#111;">Local Redis</div>
  <div style="position:absolute; left:528px; top:462px; width:100px; text-align:center; font-size:0.9rem; color:#111;">Local Database</div>
  <div style="position:absolute; left:682px; top:460px; width:90px; text-align:center; font-size:0.9rem; color:#111;">Tyk Pump</div>

  <svg viewBox="0 0 980 552" width="980" height="552" style="position:absolute; left:0; top:0; overflow:visible;">
    <defs>
      <marker id="arrow-gray-s6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#666" />
      </marker>
    </defs>
    <line x1="642" y1="294" x2="682" y2="294" stroke="#666" stroke-width="2.2" marker-end="url(#arrow-gray-s6)" />
    <line x1="726" y1="290" x2="726" y2="354" stroke="#666" stroke-width="2.2" marker-end="url(#arrow-gray-s6)" />
    <line x1="688" y1="404" x2="616" y2="404" stroke="#666" stroke-width="2.2" marker-end="url(#arrow-gray-s6)" />
  </svg>
</div>
