---
id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/007-tyk-pro
deck_id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem
order: 7
slug: tyk-pro
title: "Tyk Pro"
summary: "Tyk Pro"
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

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.95rem 0;">Tyk Pro</h1>
  <div style="display:flex; justify-content:flex-start; padding-top:1.75rem; padding-left:7rem; transform:scale(1.08); transform-origin:top left;">
    <TykArchitectureDiagram
      :width="474"
      :height="240"
      :nodes="[
        { id: 'redis', x: 34, y: 18, topLabel: 'Redis', label: '', icon: '/icons/redis-icon.png', iconWidth: 54, iconHeight: 54 },
        { id: 'pump', x: 182, y: 18, topLabel: 'Pump', label: '', icon: '/icons/pump-icon.png', iconWidth: 58, iconHeight: 58 },
        { id: 'database', x: 344, y: 16, topLabel: 'Database', label: '', icon: '/icons/database-icon.png', iconWidth: 64, iconHeight: 64 },
        { id: 'gateway', x: 34, y: 126, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 62, iconHeight: 62 },
        { id: 'dashboard', x: 344, y: 126, topLabel: '', label: 'Dashboard', icon: '/icons/dashboard-icon.png', iconWidth: 62, iconHeight: 62 }
      ]"
      :edges="[
        { x1: 61, y1: 92, x2: 61, y2: 124 },
        { x1: 96, y1: 157, x2: 342, y2: 157 },
        { x1: 375, y1: 91, x2: 375, y2: 124 },
        { x1: 94, y1: 47, x2: 182, y2: 47 },
        { x1: 240, y1: 47, x2: 342, y2: 47 }
      ]"
    />
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: That sums up the main components that are part of the Tyk stack. The Tyk stack is the full API management platform that runs on a single data center to meeting all your end to end API management needs. In a later course, we will cover how from this Tyk Pro deployment in a single data center can be expanded to a multi-data center deployment. Let’s take a quick look at it. -->
