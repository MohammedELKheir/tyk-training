---
id: foundation-tyk-components-1-dashboard/004-tyk-dashboard-analytics
deck_id: foundation-tyk-components-1-dashboard
order: 4
slug: tyk-dashboard-analytics
title: "Tyk Dashboard: Analytics"
summary: "Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-1-dashboard/005-tyk-dashboard-identity]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="content-shell">
  <h1 class="deck-title">Tyk Dashboard: Analytics</h1>

  <div class="diagram-stage" style="margin-top:0.65rem;">
    <TykDashboardDiagram
      :width="868"
      :height="324"
      :nodes="[
        { id: 'admin', icon: '/icons/admin-user-icon.png', x: 34, y: 184, w: 60, h: 60, label: 'Admin / Dev\nWeb User', labelWidth: 112 },
        { id: 'dashboard', icon: '/icons/dashboard-icon.png', x: 169, y: 182, w: 62, h: 62, label: 'Tyk Dashboard', labelWidth: 116 },
        { id: 'gateway', icon: '/icons/gateway-icon.png', x: 322, y: 178, w: 76, h: 76, label: 'Tyk Gateway', labelWidth: 120 },
        { id: 'redis', icon: '/icons/redis-icon.png', x: 490, y: 184, w: 66, h: 66, label: 'Redis', labelWidth: 96 },
        { id: 'pump', icon: '/icons/pump-icon.png', x: 626, y: 182, w: 58, h: 58, label: 'Tyk Pump', labelWidth: 108 },
        { id: 'database', icon: '/icons/database-icon.png', x: 754, y: 176, w: 78, h: 78, label: 'Database', labelWidth: 110 },
        { id: 'analytics', icon: '/icons/analytics-icon.png', x: 398, y: 16, w: 78, h: 78, label: 'API Traffic\nAnalytics', labelWidth: 126, labelOffsetY: 2 }
      ]"
      :edges="[
        { x1: 98, y1: 216, x2: 161, y2: 216 },
        { x1: 237, y1: 216, x2: 314, y2: 216 },
        { x1: 404, y1: 216, x2: 482, y2: 216 },
        { x1: 562, y1: 216, x2: 620, y2: 216 },
        { x1: 690, y1: 216, x2: 748, y2: 216 },
        { x1: 436, y1: 102, x2: 224, y2: 182 },
        { x1: 436, y1: 102, x2: 790, y2: 176 }
      ]"
      :annotations="[
        { text: 'Traffic analytics sent\nto Database', x: 608, y: 268, width: 170 }
      ]"
    />
  </div>

  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

<!-- Notes: The Dashboard also provides visibility into your API traffic through built-in analytics.
We’ll explore this in more detail later, but at a high level: the Tyk Gateway records API traffic data into Redis, and this data is then processed and persisted into the database.
From there, the Dashboard can generate visualizations and display analytical insights, such as request volume, error rates, and performance trends—helping you monitor and understand how your APIs are being used. -->
