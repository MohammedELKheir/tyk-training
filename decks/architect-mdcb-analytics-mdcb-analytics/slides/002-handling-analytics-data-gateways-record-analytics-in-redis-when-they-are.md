---
id: architect-mdcb-analytics-mdcb-analytics/002-handling-analytics-data-gateways-record-analytics-in-redis-when-they-are
deck_id: architect-mdcb-analytics-mdcb-analytics
order: 2
slug: handling-analytics-data-gateways-record-analytics-in-redis-when-they-are
title: "Handling analytics data Gateways record analytics in Redis when they are process"
summary: "ing API traffic Pump processes analytics data, and moves it to the target data stores: MongoDB/PostgreSQL is the default data store for the Dashboard Single data centre deployments"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-mdcb-analytics-mdcb-analytics/003-mdcb-deployments-have-four-approaches-for-handling-analytics-mdcb-direct]
customer_visible: true
notes_visibility: customer-safe
---
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
