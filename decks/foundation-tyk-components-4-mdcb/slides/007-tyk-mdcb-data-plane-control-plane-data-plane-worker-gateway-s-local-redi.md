---
id: foundation-tyk-components-4-mdcb/007-tyk-mdcb-data-plane-control-plane-data-plane-worker-gateway-s-local-redi
deck_id: foundation-tyk-components-4-mdcb
order: 7
slug: tyk-mdcb-data-plane-control-plane-data-plane-worker-gateway-s-local-redi
title: "Tyk MDCB: Data Plane Control Plane Data Plane Worker Gateway(s) Local Redis Data"
summary: "Plane Worker Gateway(s) Local Redis"
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

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:10px; top:8px; font-size:3.28rem; line-height:1; font-weight:800; letter-spacing:-0.04em; color:#5e12db;">Tyk MDCB: Data Plane</h1>

  <div style="position:absolute; left:40px; top:182px; width:304px; height:274px; background:#ececec; border:2px solid #747474; border-radius:40px;"></div>
  <div style="position:absolute; left:62px; top:202px; font-size:0.96rem; font-weight:700; color:#111;">Control Plane</div>
  <img :src="'/icons/dashboard-icon.png'" style="position:absolute; left:82px; top:238px; width:52px; height:52px;" />
  <img :src="'/icons/database-icon.png'" style="position:absolute; left:176px; top:234px; width:54px; height:66px;" />
  <img :src="'/icons/pump-icon.png'" style="position:absolute; left:166px; top:338px; width:50px; height:66px;" />
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:74px; top:388px; width:42px; height:68px;" />
  <img :src="'/icons/redis-icon.png'" style="position:absolute; left:172px; top:394px; width:54px; height:48px;" />
  <img :src="'/icons/mdcb-icon.png'" style="position:absolute; left:254px; top:340px; width:58px; height:58px;" />

  <div style="position:absolute; left:468px; top:142px; width:292px; height:140px; background:#f8ca93; border:2px solid #727272; border-radius:30px;"></div>
  <div style="position:absolute; left:480px; top:158px; font-size:0.92rem; font-weight:700; color:#111;">Data Plane</div>
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:536px; top:190px; width:80px; height:100px;" />
  <img :src="'/icons/redis-icon.png'" style="position:absolute; left:680px; top:196px; width:66px; height:58px;" />
  <div style="position:absolute; left:506px; top:294px; width:138px; text-align:center; font-size:0.86rem; color:#111;">Worker Gateway(s)</div>
  <div style="position:absolute; left:670px; top:294px; width:86px; text-align:center; font-size:0.86rem; color:#111;">Local Redis</div>

  <div style="position:absolute; left:468px; top:322px; width:292px; height:140px; background:#f8ca93; border:2px solid #727272; border-radius:30px;"></div>
  <div style="position:absolute; left:480px; top:338px; font-size:0.92rem; font-weight:700; color:#111;">Data Plane</div>
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:536px; top:370px; width:80px; height:100px;" />
  <img :src="'/icons/redis-icon.png'" style="position:absolute; left:680px; top:376px; width:66px; height:58px;" />
  <div style="position:absolute; left:506px; top:474px; width:138px; text-align:center; font-size:0.86rem; color:#111;">Worker Gateway(s)</div>
  <div style="position:absolute; left:670px; top:474px; width:86px; text-align:center; font-size:0.86rem; color:#111;">Local Redis</div>

  <svg viewBox="0 0 980 552" width="980" height="552" style="position:absolute; left:0; top:0; overflow:visible;">
    <defs>
      <marker id="arrow-gray-s7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#666" />
      </marker>
    </defs>
    <line x1="132" y1="264" x2="176" y2="264" stroke="#666" stroke-width="2" />
    <line x1="230" y1="264" x2="274" y2="264" stroke="#666" stroke-width="2" marker-end="url(#arrow-gray-s7)" />
    <line x1="194" y1="302" x2="194" y2="336" stroke="#666" stroke-width="2" />
    <line x1="196" y1="406" x2="196" y2="394" stroke="#666" stroke-width="2" />
    <line x1="116" y1="420" x2="170" y2="420" stroke="#666" stroke-width="2" />
    <line x1="226" y1="420" x2="274" y2="420" stroke="#666" stroke-width="2" />
    <line x1="314" y1="354" x2="458" y2="354" stroke="#666" stroke-width="2" />
    <line x1="458" y1="354" x2="458" y2="214" stroke="#666" stroke-width="2" marker-end="url(#arrow-gray-s7)" />
    <line x1="458" y1="354" x2="458" y2="390" stroke="#666" stroke-width="2" marker-end="url(#arrow-gray-s7)" />
  </svg>
</div>

<!-- Notes: Workflow Summary
Dashboard: Makes configuration changes
Control Plane Gateway: Receives changes and initiates synchronization
Master Redis: Receives hot reload signal from Master Gateway
MDCB: Receives hot reload message from Redis
Data Plane Gateway: Polls MDCB, triggers hot reload, all Gateways receive update

User makes a configuration change on an API or policy via the Dashboard
The Dashboard sends a hot reload message to master Redis
MDCB receives hot reload messages from the master Redis
MDCB maintains an "operation log" for each Data Plane (grouped by group_id)
Worker Gateways poll MDCB for updates
The first gateway to read the operation log processes it and triggers a local hot reload
All gateways in the Data Plane receive the update via their shared local Redis -->
