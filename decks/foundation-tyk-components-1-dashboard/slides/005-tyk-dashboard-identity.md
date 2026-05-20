---
id: foundation-tyk-components-1-dashboard/005-tyk-dashboard-identity
deck_id: foundation-tyk-components-1-dashboard
order: 5
slug: tyk-dashboard-identity
title: "Tyk Dashboard: Identity"
summary: "Tyk"
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

<div class="content-shell">
  <h1 class="deck-title">Tyk Dashboard: Identity</h1>

  <div class="diagram-stage" style="margin-top:0.9rem;">
    <TykDashboardDiagram
      :width="640"
      :height="286"
      :nodes="[
        { id: 'admin', icon: '/icons/super-user-icon.png', x: 74, y: 116, w: 68, h: 68, label: 'Admin / Super\nUser', labelWidth: 124 },
        { id: 'dashboard', icon: '/icons/dashboard-icon.png', x: 254, y: 114, w: 72, h: 72, label: 'Tyk Dashboard', labelWidth: 122 },
        { id: 'roles', icon: '/icons/roles-icon.png', x: 470, y: 40, w: 76, h: 76, label: 'Assign roles', labelWidth: 120 },
        { id: 'permissions', icon: '/icons/super-user-icon.png', x: 474, y: 180, w: 72, h: 72, label: 'Dashboard Users\nPermissions', labelWidth: 136 }
      ]"
      :edges="[
        { x1: 148, y1: 150, x2: 246, y2: 150 },
        { x1: 334, y1: 150, x2: 464, y2: 84 },
        { x1: 334, y1: 150, x2: 464, y2: 214 }
      ]"
    />
  </div>

  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

<!-- Notes: In this diagram, you can see how an admin uses the Dashboard to manage user access.
The Dashboard supports two main approaches: role-based access control and fine-grained individual permissions.
With roles, you can assign predefined sets of permissions to users based on their responsibilities—like giving developers access to API configuration while restricting policy management.
Alternatively, you can assign individual permissions directly to a user if you need more precise control.
This flexible system helps ensure that users only have access to the features they need, which is especially useful in larger teams or regulated environments. -->
