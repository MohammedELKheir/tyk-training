---
id: foundation-tyk-components-3-pump/003-tyk-pump-default-data-sink-tyk
deck_id: foundation-tyk-components-3-pump
order: 3
slug: tyk-pump-default-data-sink-tyk
title: "Tyk Pump: Default Data Sink Tyk"
summary: "Tyk Pump: Default Data Sink Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-3-pump/004-tyk-pump-third-party-data-sink-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: none
---

<div style="position:relative; width:100%; height:100%; padding:2.25rem 4.4rem 1.2rem; color:#111; overflow:hidden; background:white;">
  <h1 style="margin:0 0 0.25rem; color:#6513db; font-size:2.55rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em;">Tyk Pump: Default Data Sink</h1>
  <div style="margin-top:0.1rem; display:flex; justify-content:center;">
    <div style="width:690px; height:250px; overflow:hidden;">
      <div style="width:1000px; transform:scale(0.67); transform-origin:top left;">
        <TykPumpFlow />
      </div>
    </div>
  </div>
  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; width:86px; height:42px; background:#050505; border-top-left-radius:18px; display:flex; align-items:center; justify-content:center; gap:5px; padding-left:10px; padding-right:8px; box-sizing:border-box;">
    <div style="width:8px; height:8px; background:#19e6c1; border-radius:2px 0 2px 2px;"></div>
    <div style="font-size:1.26rem; line-height:1; font-weight:700; color:white; letter-spacing:-0.04em; font-family:Inter, ui-sans-serif, system-ui, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: By default, Tyk Pump will push analytics to either PostgreSQL or MongoDB. Since the Tyk Dashboard uses Postgres or MongoDB, this allows the Tyk Dashboard to display API usage reports and visualizations. -->
