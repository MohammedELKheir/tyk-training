---
theme: tyk
layout: cover
background: 'linear-gradient(135deg, #6a2df4 0%, #8d30ff 55%, #c218ff 100%)'
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Product Components: MDCB (Multi Data Centre Bridge)"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; height:100%; padding:0 96px; color:white;">
  <h1 style="font-size:3.48rem; line-height:1.04; font-weight:800; margin:0; color:white; letter-spacing:-0.04em; border:0; max-width:860px;">Tyk Product Components:<br />MDCB (Multi Data Centre<br />Bridge)</h1>
  <p style="margin:28px 0 0 0; font-size:1.08rem; line-height:1.4; color:rgba(255,255,255,0.92);">Exploring the role of each component in the Tyk Ecosystem</p>
  <div style="position:absolute; right:0; bottom:0; width:92px; height:52px; background:#070707; border-top-left-radius:24px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:6px;">
    <img :src="'/icons/tyk-logo.png'" style="width:15px; height:15px;" />
    <div style="font-size:1.25rem; font-weight:800; color:white; line-height:1;">Tyk</div>
  </div>
</div>

---
layout: default
---

# Tyk MDCB Overview

- Centralized control for distributed gateways
  - Manage geographically separated gateways from one Dashboard

- Supports multi-region and hybrid deployments
  - Ideal for global systems or compliance-restricted zones

- Worker Gateways polls MDCB periodically
  - API definitions, policies, certificates and keys are synced across regions

- Pushes analytics to Database (If MDCB is used for analytics)
  - Keeps visibility across the entire system

<div style="position:absolute; right:0; bottom:0; width:92px; height:52px; background:#070707; border-top-left-radius:24px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:6px;">
  <img :src="'/icons/tyk-logo.png'" style="width:15px; height:15px;" />
  <div style="font-size:1.25rem; font-weight:800; color:white; line-height:1;">Tyk</div>
</div>

<!-- Notes: Tyk’s Multi Data Center Bridge, or MDCB, provides centralized control for managing distributed Tyk Gateways.
It’s designed for scenarios where you have gateways deployed across multiple regions, or in a hybrid setup—for example, some on-premises and some in the cloud.
MDCB enables you to manage all these geographically separated gateways from a single Tyk Dashboard, making operations much simpler at scale.
Each worker gateway polls MDCB periodically to sync critical information—this includes API definitions, access policies, certificates, and keys.
This ensures consistency across regions, without requiring each gateway to connect directly to the central database.
If MDCB is also configured to handle analytics, it can push traffic and usage data back to the central database, so you maintain end-to-end visibility across all regions.
This makes MDCB ideal for global systems or compliance-restricted environments, where direct database access from every region may not be possible or allowed. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <h1 style="position:absolute; left:6px; top:6px; margin:0; font-size:3.32rem; line-height:0.98; font-weight:800; letter-spacing:-0.05em; color:#5e12db;">Tyk MDCB: How does it<br />work?</h1>

  <div style="position:absolute; left:54px; top:142px; width:760px; height:332px; border:2px solid #676767; border-radius:56px; background:#ececec;"></div>

  <div style="position:absolute; left:132px; top:224px; width:312px; height:142px; background:#f8ca93; border:2px solid #6e6e6e; border-radius:28px;"></div>
  <div style="position:absolute; left:148px; top:240px; font-size:0.98rem; font-weight:700; color:#111;">Control Plane</div>
  <img :src="'/icons/dashboard-icon.png'" style="position:absolute; left:204px; top:268px; width:72px; height:72px;" />
  <img :src="'/icons/mdcb-icon.png'" style="position:absolute; left:308px; top:264px; width:90px; height:90px;" />
  <div style="position:absolute; left:198px; top:358px; width:92px; text-align:center; font-size:0.9rem; line-height:1.1; color:#111;">Tyk Central<br />Dashboard</div>
  <div style="position:absolute; left:322px; top:366px; width:70px; text-align:center; font-size:0.9rem; color:#111;">Tyk MDCB</div>

  <div style="position:absolute; left:534px; top:166px; width:204px; height:128px; background:#f8ca93; border:2px solid #6e6e6e; border-radius:28px;"></div>
  <div style="position:absolute; left:548px; top:182px; font-size:0.98rem; font-weight:700; color:#111;">Data plane</div>
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:606px; top:210px; width:72px; height:114px;" />
  <div style="position:absolute; left:592px; top:330px; width:100px; text-align:center; font-size:0.9rem; color:#111;">Tyk Gateway</div>

  <div style="position:absolute; left:534px; top:318px; width:204px; height:128px; background:#fde694; border:2px solid #6e6e6e; border-radius:28px;"></div>
  <div style="position:absolute; left:548px; top:334px; font-size:0.98rem; font-weight:700; color:#111;">Data Plane</div>
  <img :src="'/icons/gateway-icon.png'" style="position:absolute; left:606px; top:362px; width:72px; height:114px;" />
  <div style="position:absolute; left:592px; top:482px; width:100px; text-align:center; font-size:0.9rem; color:#111;">Tyk Gateway</div>

  <svg viewBox="0 0 980 552" width="980" height="552" style="position:absolute; left:0; top:0; overflow:visible;">
    <defs>
      <marker id="arrow-gray-s3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#666" />
      </marker>
    </defs>
    <line x1="444" y1="294" x2="534" y2="206" stroke="#666" stroke-width="2.4" marker-end="url(#arrow-gray-s3)" />
    <line x1="444" y1="297" x2="534" y2="396" stroke="#666" stroke-width="2.4" marker-end="url(#arrow-gray-s3)" />
  </svg>

  <div style="position:absolute; right:0; bottom:0; width:92px; height:52px; background:#070707; border-top-left-radius:24px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:6px;">
    <img :src="'/icons/tyk-logo.png'" style="width:15px; height:15px;" />
    <div style="font-size:1.25rem; font-weight:800; color:white; line-height:1;">Tyk</div>
  </div>
</div>

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
