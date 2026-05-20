---
id: foundation-tyk-components-4-mdcb/004-tyk-mdcb-control-plane-tyk-central-dashboard-control-plane-to-manage-con
deck_id: foundation-tyk-components-4-mdcb
order: 4
slug: tyk-mdcb-control-plane-tyk-central-dashboard-control-plane-to-manage-con
title: "Tyk MDCB: Control Plane • Tyk Central Dashboard ◦ Control plane to manage config"
summary: "uration ◦ Visualize analytics • Database ◦ Store analytics and configurations e.g. API definitions and policies • Redis ◦ Stores copies of all tokens across all zones and DC’s ◦ Us"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-4-mdcb/005-tyk-mdcb-control-plane-tyk-management-gateway-operates-as-a-master-gatew]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:10px; top:8px; font-size:3.28rem; line-height:1; font-weight:800; letter-spacing:-0.04em; color:#5e12db;">Tyk MDCB: Control Plane</h1>

  <div style="position:absolute; left:10px; top:150px; width:458px; font-size:0.97rem; line-height:1.08; color:#111;">
    <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:12px;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.02rem;">Tyk Central Dashboard</div>
        <div style="margin-left:26px; margin-top:5px;">◦&nbsp;&nbsp;Control plane to manage configuration</div>
        <div style="margin-left:26px; margin-top:3px;">◦&nbsp;&nbsp;Visualize analytics</div>
      </div>
    </div>
    <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:12px;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.02rem;">Database</div>
        <div style="margin-left:26px; margin-top:5px; max-width:360px;">◦&nbsp;&nbsp;Store analytics and configurations e.g.<br />API definitions and policies</div>
      </div>
    </div>
    <div style="display:flex; gap:16px; align-items:flex-start;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.02rem;">Redis</div>
        <div style="margin-left:26px; margin-top:5px; max-width:352px;">◦&nbsp;&nbsp;Stores copies of all tokens across all zones and DC’s</div>
        <div style="margin-left:26px; margin-top:3px; max-width:352px;">◦&nbsp;&nbsp;Used as pub/sub to emit signals on changes e.g. policy updates</div>
      </div>
    </div>
  </div>

  <div style="position:absolute; left:518px; top:136px; width:356px; height:282px; border:2px solid #747474; border-radius:40px; background:#ececec;"></div>
  <img :src="'/icons/dashboard-icon.png'" style="position:absolute; left:598px; top:244px; width:66px; height:66px;" />
  <img :src="'/icons/database-icon.png'" style="position:absolute; left:752px; top:188px; width:74px; height:90px;" />
  <img :src="'/icons/redis-icon.png'" style="position:absolute; left:752px; top:298px; width:76px; height:70px;" />
  <div style="position:absolute; left:584px; top:202px; width:96px; text-align:center; font-size:0.88rem; line-height:1.12; color:#111;">Tyk Central<br />Dashboard</div>
  <div style="position:absolute; left:746px; top:152px; width:88px; text-align:center; font-size:0.88rem; color:#111;">Database</div>
  <div style="position:absolute; left:766px; top:378px; width:50px; text-align:center; font-size:0.88rem; color:#111;">Redis</div>

  <svg viewBox="0 0 980 552" width="980" height="552" style="position:absolute; left:0; top:0; overflow:visible;">
    <line x1="666" y1="278" x2="742" y2="230" stroke="#666" stroke-width="2.3" />
    <line x1="666" y1="280" x2="742" y2="330" stroke="#666" stroke-width="2.3" />
  </svg>

  <div style="position:absolute; right:0; bottom:0; width:92px; height:52px; background:#070707; border-top-left-radius:24px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:6px;">
    <img :src="'/icons/tyk-logo.png'" style="width:15px; height:15px;" />
    <div style="font-size:1.25rem; font-weight:800; color:white; line-height:1;">Tyk</div>
  </div>
</div>
