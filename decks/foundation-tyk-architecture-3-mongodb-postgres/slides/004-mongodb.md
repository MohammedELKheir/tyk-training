---
id: foundation-tyk-architecture-3-mongodb-postgres/004-mongodb
deck_id: foundation-tyk-architecture-3-mongodb-postgres
order: 4
slug: mongodb
title: "MongoDB"
summary: "MongoDB uses Replica Sets for high availability: • Requires a minimum of three separate hosts for high availability • All members of Replica Set must be able to communicate with ea"
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
<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="font-size:2.28rem; font-weight:800; color:#5900CB; margin:0 0 0.9rem 0; letter-spacing:-0.02em;">MongoDB</h1>
  <div style="display:flex; gap:1.48rem; align-items:flex-start;">
    <div style="flex:1.1; padding-top:0.06rem;">
      <div style="font-size:0.98rem; line-height:1.24; color:#000; margin:0 0 0.45rem 0;">MongoDB uses Replica Sets for high availability:</div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">Requires a minimum of three separate hosts for high availability</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">All members of Replica Set must be able to communicate with each other</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">Election occurs if Primary becomes inaccessible</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">Members can have different priorities, to determine the new Primary</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">A majority of Replica Set members are required for an election</div>
      </div>
    </div>
    <div style="flex:0.98; display:flex; align-items:center; justify-content:center; padding-top:0.2rem;">
      <img src="./public/screenshots/mongodb-replica-set.png" style="width:100%; max-width:414px;" />
    </div>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:111px; height:72px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:0 16px 12px 0; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:64px; display:block;" />
  </div>
</div>
<!-- Notes: MongoDB uses what it calls Replica Sets to enable high availability deployments. These deployments must consist of at least three hosts in order to be highly available. All members of the Replica Set must be able to communicate with each other to maintain a heartbeat. If the Primary member becomes inaccessible, then a new primary is elected from the remaining members. Members can be given a priority to determine which member is elected the new Primary. A majority of members are required to hold an election. -->
