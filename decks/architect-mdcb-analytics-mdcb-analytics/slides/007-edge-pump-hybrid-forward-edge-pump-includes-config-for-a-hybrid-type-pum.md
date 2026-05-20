---
id: architect-mdcb-analytics-mdcb-analytics/007-edge-pump-hybrid-forward-edge-pump-includes-config-for-a-hybrid-type-pum
deck_id: architect-mdcb-analytics-mdcb-analytics
order: 7
slug: edge-pump-hybrid-forward-edge-pump-includes-config-for-a-hybrid-type-pum
title: "Edge Pump Hybrid Forward Edge Pump includes config for a hybrid type pump Hybrid"
summary: "pump can be configured to send only aggregated analytics: Set meta.aggregated to true in hybrid pump configuration Allows non-aggregated analytics to be processed locally with aggr"
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
