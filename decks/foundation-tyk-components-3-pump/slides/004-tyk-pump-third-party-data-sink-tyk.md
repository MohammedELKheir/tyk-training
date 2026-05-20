---
id: foundation-tyk-components-3-pump/004-tyk-pump-third-party-data-sink-tyk
deck_id: foundation-tyk-components-3-pump
order: 4
slug: tyk-pump-third-party-data-sink-tyk
title: "Tyk Pump: Third party Data Sink Tyk"
summary: "Tyk Pump: Third party Data Sink Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: none
---

<div style="position:relative; width:100%; height:100%; padding:2.2rem 4.4rem 1.2rem; color:#111; overflow:hidden; background:white;">
  <h1 style="margin:0 0 -0.05rem; max-width:620px; color:#6513db; font-size:2.55rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em;">Tyk Pump: Third party Data<br />Sink</h1>
  <div style="margin-top:-0.2rem; display:flex; justify-content:center;">
    <div style="width:690px; height:250px; overflow:hidden;">
      <div style="width:1000px; transform:scale(0.67); transform-origin:top left;">
        <TykPumpFlow
          :third-party="true"
          :sinks="[
            { label: 'DataDog', icon: '/icons/datadog-icon.png', x: 786, y: 34, width: 92, height: 92 },
            { label: 'Database', icon: '/icons/database-icon.png', x: 798, y: 196, width: 102, height: 102 },
            { label: 'ElasticSearch', icon: '/icons/elasticsearch-icon.png', x: 788, y: 326, width: 92, height: 92 }
          ]"
        />
      </div>
    </div>
  </div>
  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; width:86px; height:42px; background:#050505; border-top-left-radius:18px; display:flex; align-items:center; justify-content:center; gap:5px; padding-left:10px; padding-right:8px; box-sizing:border-box;">
    <div style="width:8px; height:8px; background:#19e6c1; border-radius:2px 0 2px 2px;"></div>
    <div style="font-size:1.26rem; line-height:1; font-weight:700; color:white; letter-spacing:-0.04em; font-family:Inter, ui-sans-serif, system-ui, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk Pump also allows you to push analytics data from Redis to multiple data sinks. Here in the diagram, we have configured Pump to push analytics data into 3 different data sinks - DataDog, ElasticSearch and a DB that the Dashboard uses. This allows different teams or different features of each of those data sinks to meet the different analytics use cases you may have -->
