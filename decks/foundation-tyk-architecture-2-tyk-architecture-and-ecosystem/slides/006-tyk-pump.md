---
id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/006-tyk-pump
deck_id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem
order: 6
slug: tyk-pump
title: "Tyk Pump"
summary: "Pumps analytics data to database Data Aggregation Data Transformation Data Export Flexibility"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/007-tyk-pro]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.88rem 0;">Tyk Pump</h1>
  <div style="display:flex; gap:1.05rem; align-items:flex-start;">
    <div style="flex:0.95; padding-left:0.35rem; padding-top:0.4rem;">
      <ul class="tight-bullets" style="font-size:1.01rem; line-height:1.14; max-width:272px;">
        <li>
          Pumps analytics data to database
          <ul>
            <li>Data Aggregation</li>
            <li>Data Transformation</li>
            <li>Data Export</li>
            <li>Flexibility</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="flex:1.42; display:flex; justify-content:flex-start; padding-top:2.2rem; padding-left:0.65rem; transform:scale(1.1); transform-origin:top left;">
      <TykArchitectureDiagram
        :width="430"
        :height="214"
        :nodes="[
          { id: 'redis', x: 28, y: 14, topLabel: 'Redis', label: '', icon: '/icons/redis-icon.png', iconWidth: 50, iconHeight: 50 },
          { id: 'pump', x: 160, y: 14, topLabel: 'Pump', label: '', icon: '/icons/pump-icon.png', iconWidth: 54, iconHeight: 54 },
          { id: 'database', x: 304, y: 14, topLabel: 'Database', label: '', icon: '/icons/database-icon.png', iconWidth: 58, iconHeight: 58 },
          { id: 'gateway', x: 28, y: 112, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 58, iconHeight: 58 },
          { id: 'dashboard', x: 306, y: 112, topLabel: '', label: 'Dashboard', icon: '/icons/dashboard-icon.png', iconWidth: 58, iconHeight: 58 }
        ]"
        :edges="[
          { x1: 54, y1: 84, x2: 54, y2: 110 },
          { x1: 86, y1: 142, x2: 304, y2: 142 },
          { x1: 335, y1: 84, x2: 335, y2: 110 },
          { x1: 84, y1: 41, x2: 160, y2: 41 },
          { x1: 214, y1: 41, x2: 304, y2: 41 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: Tyk Pump is a component of the Tyk API Management platform designed to handle the extraction, transformation, and loading (ETL) of analytics data from the Tyk Gateway into various storage backends. Tyk Pump collects raw analytics data from the Tyk Gateway, which includes API usage statistics, performance metrics, and traffic logs. It processes and transforms this data into a format suitable for storage and analysis, ensuring that it is structured and optimized for querying. Tyk Pump exports the transformed data to various storage backends, such as databases (e.g., MongoDB, PostgreSQL), data warehouses, or analytics platforms. This allows for long-term storage and detailed analysis. Tyk Pump supports multiple output targets, allowing organizations to choose the most suitable storage solution for their analytics needs. -->
