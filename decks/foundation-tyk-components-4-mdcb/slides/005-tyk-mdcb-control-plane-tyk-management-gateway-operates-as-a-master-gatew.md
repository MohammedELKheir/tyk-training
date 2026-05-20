---
id: foundation-tyk-components-4-mdcb/005-tyk-mdcb-control-plane-tyk-management-gateway-operates-as-a-master-gatew
deck_id: foundation-tyk-components-4-mdcb
order: 5
slug: tyk-mdcb-control-plane-tyk-management-gateway-operates-as-a-master-gatew
title: "Tyk MDCB: Control Plane • Tyk Management Gateway ◦ Operates as a master gateway"
summary: "– does not service traffic and therefore must be isolated ◦ Creates and stores API keys in Redis • MDCB ◦ Manages connections and data flow between the Control Plane and worker gat"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-4-mdcb/006-tyk-mdcb-data-plane-worker-gateway-s-handling-api-requests-synchronizes]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:10px; top:8px; font-size:3.28rem; line-height:1; font-weight:800; letter-spacing:-0.04em; color:#5e12db;">Tyk MDCB: Control Plane</h1>

  <div style="position:absolute; left:8px; top:160px; width:430px; font-size:0.96rem; line-height:1.12; color:#111;">
    <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:16px;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.04rem;">Tyk Management Gateway</div>
        <div style="margin-left:26px; margin-top:5px; max-width:345px;">◦&nbsp;&nbsp;Operates as a master gateway – does not service traffic and therefore must be isolated</div>
        <div style="margin-left:26px; margin-top:5px; max-width:340px;">◦&nbsp;&nbsp;Creates and stores API keys in Redis</div>
      </div>
    </div>
    <div style="display:flex; gap:16px; align-items:flex-start;">
      <div style="font-size:1.9rem; line-height:1;">•</div>
      <div>
        <div style="font-size:1.04rem;">MDCB</div>
        <div style="margin-left:26px; margin-top:5px; max-width:350px;">◦&nbsp;&nbsp;Manages connections and data flow between the <b>Control Plane</b> and worker gateways in the <b>Data Plane</b></div>
      </div>
    </div>
  </div>

  <div style="position:absolute; left:430px; top:134px; width:446px; height:338px; border:2px solid #747474; border-radius:44px; background:#ececec;"></div>
  <img :src="'/icons/dashboard-icon.png'" style="position:absolute; left:494px; top:198px; width:68px; height:68px;" />
  <img :src="'/icons/database-icon.png'" style="position:absolute; left:654px; top:194px; width:78px; height:94px;" />
  <img :src="'/icons/pump-icon.png'" style="position:absolute; left:628px; top:304px; width:66px; height:86px;" />
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:494px; top:364px; width:68px; height:104px;" />
  <img :src="'/icons/redis-icon.png'" style="position:absolute; left:640px; top:374px; width:70px; height:64px;" />
  <img :src="'/icons/mdcb-icon.png'" style="position:absolute; left:766px; top:304px; width:78px; height:78px;" />

  <div style="position:absolute; left:484px; top:156px; width:96px; text-align:center; font-size:0.86rem; line-height:1.08; color:#111;">Tyk Central<br />Dashboard</div>
  <div style="position:absolute; left:652px; top:168px; width:86px; text-align:center; font-size:0.86rem; color:#111;">Database</div>
  <div style="position:absolute; left:596px; top:330px; width:84px; text-align:center; font-size:0.86rem; color:#111;">Tyk Pump</div>
  <div style="position:absolute; left:464px; top:436px; width:126px; text-align:center; font-size:0.86rem; line-height:1.05; color:#111;">Tyk Management<br />Gateway</div>
  <div style="position:absolute; left:642px; top:438px; width:64px; text-align:center; font-size:0.86rem; color:#111;">Redis</div>
  <div style="position:absolute; left:748px; top:340px; width:110px; text-align:center; font-size:0.86rem; line-height:1.05; color:#111;">Multi Data Centre<br />Bridge</div>

  <svg viewBox="0 0 980 552" width="980" height="552" style="position:absolute; left:0; top:0; overflow:visible;">
    <defs>
      <marker id="arrow-gray-s5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#666" />
      </marker>
    </defs>
    <line x1="562" y1="232" x2="646" y2="232" stroke="#666" stroke-width="2.2" />
    <line x1="700" y1="232" x2="760" y2="232" stroke="#666" stroke-width="2.2" marker-end="url(#arrow-gray-s5)" />
    <line x1="528" y1="266" x2="528" y2="362" stroke="#666" stroke-width="2.2" />
    <line x1="662" y1="288" x2="662" y2="304" stroke="#666" stroke-width="2.2" />
    <line x1="662" y1="390" x2="662" y2="374" stroke="#666" stroke-width="2.2" />
    <line x1="562" y1="406" x2="638" y2="406" stroke="#666" stroke-width="2.2" />
    <line x1="710" y1="406" x2="766" y2="406" stroke="#666" stroke-width="2.2" />
    <line x1="804" y1="400" x2="804" y2="382" stroke="#666" stroke-width="2.2" marker-end="url(#arrow-gray-s5)" />
    <line x1="764" y1="344" x2="694" y2="344" stroke="#666" stroke-width="2.2" />
    <line x1="648" y1="344" x2="648" y2="304" stroke="#666" stroke-width="2.2" />
  </svg>
</div>
