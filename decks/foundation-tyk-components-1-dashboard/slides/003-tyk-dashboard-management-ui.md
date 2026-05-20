---
id: foundation-tyk-components-1-dashboard/003-tyk-dashboard-management-ui
deck_id: foundation-tyk-components-1-dashboard
order: 3
slug: tyk-dashboard-management-ui
title: "Tyk Dashboard: Management UI"
summary: "Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-1-dashboard/004-tyk-dashboard-analytics]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="content-shell">
  <h1 class="deck-title">Tyk Dashboard:<br/>Management UI</h1>

  <div class="diagram-stage" style="margin-top:0.5rem;">
    <TykDashboardDiagram
      :width="868"
      :height="324"
      :nodes="[
        { id: 'admin', icon: '/icons/admin-user-icon.png', x: 103, y: 102, w: 72, h: 72, label: 'Admin / Dev\nWeb User', labelWidth: 122 },
        { id: 'dashboard', icon: '/icons/dashboard-icon.png', x: 390, y: 100, w: 74, h: 74, label: 'Tyk Dashboard', labelWidth: 122 },
        { id: 'gateway', icon: '/icons/gateway-icon.png', x: 653, y: 98, w: 80, h: 80, label: 'Tyk Gateway', labelWidth: 126 }
      ]"
      :edges="[
        { x1: 185, y1: 139, x2: 382, y2: 139 },
        { x1: 472, y1: 139, x2: 645, y2: 139 }
      ]"
      :annotations="[
        { text: 'CRUD Operations\nusing the UI', x: 250, y: 238, width: 158 },
        { text: 'Pushes configuration\n(API defs, policies, keys)', x: 535, y: 236, width: 196 }
      ]"
    />
  </div>

  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

<!-- Notes: Here’s a quick look at how the Tyk Dashboard handles configuration.
Whether you’re using the Dashboard UI or the Dashboard API, the actions you take—like creating an API, updating a policy, or managing users—are all stored in the underlying database.
The Dashboard acts as a control plane, and the database becomes the source of truth for your Tyk configuration.
This setup allows for automation through the API, while still giving users the flexibility to manage everything visually through the UI. -->
