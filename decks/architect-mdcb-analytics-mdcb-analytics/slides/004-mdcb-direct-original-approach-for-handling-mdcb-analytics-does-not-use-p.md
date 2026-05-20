---
id: architect-mdcb-analytics-mdcb-analytics/004-mdcb-direct-original-approach-for-handling-mdcb-analytics-does-not-use-p
deck_id: architect-mdcb-analytics-mdcb-analytics
order: 4
slug: mdcb-direct-original-approach-for-handling-mdcb-analytics-does-not-use-p
title: "MDCB Direct Original approach for handling MDCB analytics Does not use Pump comp"
summary: "onent Gateway sends analytics data directly to MDCB, which processes and sends to Analytics Storage (MongoDB) Simple, but lacks support for range of target data stores"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-mdcb-analytics-mdcb-analytics/005-cp-pump-reinstates-the-pump-into-analytics-workflow-improving-storage-op]
customer_visible: true
notes_visibility: customer-safe
---
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
