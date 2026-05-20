---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "MDCB Analytics"
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:#ffffff; color:#03031C;">
  <div style="position:absolute; inset:0; display:flex;">
    <div style="position:relative; width:60%; height:100%; background:linear-gradient(135deg, #6e2dff 0%, #8f42ff 100%); overflow:hidden;">
      <div style="position:absolute; left:82px; top:68px; display:flex; align-items:center; gap:8px; color:white; font-weight:800; font-size:1.8rem; letter-spacing:-0.03em;">
        <div style="width:16px; height:16px; background:#20edba; border-top-left-radius:4px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:4px;"></div>
        <div>Tyk</div>
      </div>
      <div style="position:absolute; left:82px; top:174px; color:white; font-weight:800; line-height:0.94; font-size:4.15rem; letter-spacing:-0.05em;">
        <div>MDCB</div>
        <div style="margin-top:12px;">Analytics</div>
      </div>
    </div>
    <div style="position:relative; width:40%; height:100%; overflow:hidden; background:linear-gradient(180deg, #18d0bb 0%, #10c5ad 100%);">
      <div style="position:absolute; left:0; top:0; width:56%; height:49%; background:linear-gradient(180deg, #24d4c3 0%, #1ecfb6 100%);"></div>
      <div style="position:absolute; left:28%; top:0; width:28%; height:43%; background:#ffdf2e; border-bottom-left-radius:120px;"></div>
      <div style="position:absolute; right:0; top:0; width:44%; height:28%; background:linear-gradient(180deg, #ec18ce 0%, #d815d8 100%);"></div>
      <div style="position:absolute; left:56%; top:0; width:44%; height:43%; background:linear-gradient(135deg, #6b24e7 0%, #8d2dff 100%); border-bottom-left-radius:160px;"></div>
      <div style="position:absolute; left:56%; top:28%; width:24%; height:15%; background:linear-gradient(180deg, rgba(107,36,231,0.4) 0%, rgba(107,36,231,0.05) 100%); border-bottom-left-radius:120px;"></div>
      <div style="position:absolute; left:0; top:43%; width:54%; height:57%; background:linear-gradient(180deg, #ee18ca 0%, #d917db 100%);"></div>
      <div style="position:absolute; left:28%; bottom:0; width:40%; height:22%; background:linear-gradient(135deg, #eb17ca 0%, #cc17e0 100%); border-top-right-radius:140px;"></div>
      <div style="position:absolute; left:28%; bottom:0; width:28%; height:19%; background:linear-gradient(180deg, #24d4c3 0%, #1dcfb3 100%);"></div>
      <div style="position:absolute; right:0; bottom:0; width:44%; height:25%; background:linear-gradient(180deg, #27d5c3 0%, #1bc8b1 100%);"></div>
      <div style="position:absolute; right:0; bottom:16%; width:31%; height:17%; background:#ffdf2e; border-top-left-radius:90px;"></div>
      <div style="position:absolute; left:-10px; top:44.5%; width:60px; height:60px; background:#20d1bb; border-top-right-radius:60px;"></div>
      <div style="position:absolute; left:0; top:47%; width:48px; height:48px; background:#7d2dff; clip-path: inset(0 0 50% 50%);"></div>
      <div style="position:absolute; left:0; top:47%; width:48px; height:48px; background:#ffdf2e; border-bottom-right-radius:48px; clip-path: inset(50% 0 0 50%);"></div>
    </div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#050526; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:66px; top:42px; font-size:3.15rem; line-height:1.02; font-weight:800; color:#7c35ff; letter-spacing:-0.03em;">Handling analytics data</h1>
  <div style="position:absolute; left:66px; top:166px; width:830px; font-size:1.18rem; line-height:1.6; color:#050526;">
    <p style="margin:0 0 1.45rem 0;">Gateways record analytics in Redis when they are processing API traffic</p>
    <p style="margin:0 0 0.35rem 0;">Pump processes analytics data, and moves it to the target data stores:</p>
    <ul style="margin:0 0 1.55rem 0; padding-left:2rem; list-style-type:disc;">
      <li style="padding-left:0.6rem;">MongoDB/PostgreSQL is the default data store for the Dashboard</li>
    </ul>
    <p style="margin:0 0 0.35rem 0;">Single data centre deployments use this approach:</p>
    <ul style="margin:0; padding-left:2rem; list-style-type:disc;">
      <li style="padding-left:0.6rem;">Additional data stores can be targeted</li>
    </ul>
  </div>
  <TykCornerBadge />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#050526; overflow:hidden;">
  <MdcbSidebar :active="1" />
  <div style="position:absolute; left:258px; top:98px; width:590px; color:#050526;">
    <h1 style="margin:0 0 1.95rem 0; font-size:2.48rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; color:#07072a;">MDCB deployments have four approaches for handling analytics:</h1>
    <div style="display:flex; flex-direction:column; gap:1.35rem; font-size:0.92rem; line-height:1.14;">
      <div style="display:flex; align-items:flex-start; gap:2rem;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>MDCB Direct</div></div>
      <div style="display:flex; align-items:flex-start; gap:2rem;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Control Plane Pump</div></div>
      <div style="display:flex; align-items:flex-start; gap:2rem;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Edge Pump</div></div>
      <div style="display:flex; align-items:flex-start; gap:2rem;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Edge Pump with Hybrid Forward</div></div>
    </div>
  </div>
  <TykCornerBadge />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#050526; overflow:hidden;">
  <MdcbSidebar :active="2" />
  <img :src="'/icons/slide-004-diagram.png'" style="position:absolute; right:12px; top:10px; width:352px; height:510px; object-fit:contain;" />
  <div style="position:absolute; left:234px; top:12px; width:348px; color:#050526;">
    <h1 style="margin:0 0 1.45rem 0; font-size:2.85rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; color:#07072a;">MDCB Direct</h1>
    <div style="display:flex; flex-direction:column; gap:1.55rem; font-size:0.96rem; line-height:1.48;">
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Original approach for handling MDCB analytics</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Does not use Pump component</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Gateway sends analytics data directly to MDCB, which processes and sends to Analytics Storage (MongoDB)</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Simple, but lacks support for range of target data stores</div></div>
    </div>
  </div>
  <TykCornerBadge />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#050526; overflow:hidden;">
  <MdcbSidebar :active="3" />
  <img :src="'/icons/slide-005-diagram.png'" style="position:absolute; right:12px; top:10px; width:352px; height:510px; object-fit:contain;" />
  <div style="position:absolute; left:234px; top:12px; width:348px; color:#050526;">
    <h1 style="margin:0 0 1.45rem 0; font-size:2.8rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; color:#07072a;">CP Pump</h1>
    <div style="display:flex; flex-direction:column; gap:1.5rem; font-size:0.95rem; line-height:1.38;">
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Reinstates the Pump into analytics workflow, improving storage options</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>MDCB writes data to Redis<br />Pump processes analytics data</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Sends all analytics across internet</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Set <span style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">forward_analytics_to_pump</span><br />to <span style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">true</span> in MDCB configuration file</div></div>
    </div>
  </div>
  <TykCornerBadge />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#050526; overflow:hidden;">
  <MdcbSidebar :active="4" />
  <img :src="'/icons/slide-006-diagram.png'" style="position:absolute; right:12px; top:10px; width:352px; height:510px; object-fit:contain;" />
  <div style="position:absolute; left:234px; top:12px; width:348px; color:#050526;">
    <h1 style="margin:0 0 1.45rem 0; font-size:2.8rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; color:#07072a;">Edge Pump</h1>
    <div style="display:flex; flex-direction:column; gap:1.6rem; font-size:0.93rem; line-height:1.36;">
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Localises analytics processing in Edge data centres:<div style="margin-top:1rem; padding-left:2.2rem;"><div style="display:flex; gap:1rem; align-items:flex-start; margin-bottom:0.55rem;"><div style="width:22px; height:22px; background:#27dfc0; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Avoids transferring data to Control Plane data centre</div></div><div style="display:flex; gap:1rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#27dfc0; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Reporting not possible from Dashboard</div></div></div></div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Operates in same way to single data centre deployment:<div style="margin-top:1rem; padding-left:2.2rem;"><div style="display:flex; gap:1rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#27dfc0; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Set analytics_config.type to empty string</div></div></div></div></div>
    </div>
  </div>
  <TykCornerBadge />
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#050526; overflow:hidden;">
  <MdcbSidebar :active="5" />
  <img :src="'/icons/slide-007-diagram.png'" style="position:absolute; right:12px; top:10px; width:352px; height:510px; object-fit:contain;" />
  <div style="position:absolute; left:234px; top:12px; width:354px; color:#050526;">
    <h1 style="margin:0 0 1.05rem 0; font-size:2.42rem; line-height:0.98; font-weight:800; letter-spacing:-0.04em; color:#07072a;">Edge Pump<br />Hybrid Forward</h1>
    <div style="display:flex; flex-direction:column; gap:1.28rem; font-size:0.92rem; line-height:1.3;">
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Edge Pump includes config for a hybrid type pump</div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Hybrid pump can be configured to send only aggregated analytics:<div style="margin-top:0.7rem; padding-left:2.2rem;"><div style="display:flex; gap:1rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#27dfc0; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:4px;"></div><div>Set meta.aggregated to true<br />in hybrid pump configuration</div></div></div></div></div>
      <div style="display:flex; gap:1.5rem; align-items:flex-start;"><div style="width:22px; height:22px; background:#7b38ff; border-top-left-radius:6px; border-top-right-radius:9px; border-bottom-right-radius:6px; border-bottom-left-radius:6px; flex:0 0 22px; margin-top:6px;"></div><div>Allows non-aggregated analytics to be processed locally with aggregate analytics sent to Control Plane for Dashboard reports</div></div>
    </div>
  </div>
  <TykCornerBadge />
</div>
