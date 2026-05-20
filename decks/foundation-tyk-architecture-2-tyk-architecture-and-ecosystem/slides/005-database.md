---
id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/005-database
deck_id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem
order: 5
slug: database
title: "Database"
summary: "Dashboard data store Configuration Storage Analytics and Reporting User and Access Management Audit Logs"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/006-tyk-pump]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.88rem 0;">Database</h1>
  <div style="display:flex; gap:1.05rem; align-items:flex-start;">
    <div style="flex:0.95; padding-left:0.35rem; padding-top:1.05rem;">
      <ul class="tight-bullets" style="font-size:1.02rem; line-height:1.16; max-width:270px;">
        <li>
          Dashboard data store
          <ul>
            <li>Configuration Storage</li>
            <li>Analytics and Reporting</li>
            <li>User and Access Management</li>
            <li>Audit Logs</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="flex:1.35; display:flex; justify-content:flex-start; padding-top:2.25rem; padding-left:0.75rem; transform:scale(1.12); transform-origin:top left;">
      <TykArchitectureDiagram
        :width="396"
        :height="214"
        :nodes="[
          { id: 'redis', x: 28, y: 14, topLabel: 'Redis', label: '', icon: '/icons/redis-icon.png', iconWidth: 50, iconHeight: 50 },
          { id: 'database', x: 272, y: 14, topLabel: 'Database', label: '', icon: '/icons/database-icon.png', iconWidth: 58, iconHeight: 58 },
          { id: 'gateway', x: 28, y: 112, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 58, iconHeight: 58 },
          { id: 'dashboard', x: 270, y: 112, topLabel: '', label: 'Dashboard', icon: '/icons/dashboard-icon.png', iconWidth: 58, iconHeight: 58 }
        ]"
        :edges="[
          { x1: 54, y1: 84, x2: 54, y2: 110 },
          { x1: 86, y1: 142, x2: 268, y2: 142 },
          { x1: 299, y1: 84, x2: 299, y2: 110 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: Tyk Dashboard requires a database to store and manage various types of data that are essential for its operation and the enhanced features it provides. The database stores API configurations, policies, and user settings. This allows the Dashboard to persistently manage and apply configurations across restarts and updates. The database is used to store detailed analytics data collected from the Gateway. This data includes API usage statistics, performance metrics, and traffic logs, which the Dashboard processes to generate reports and insights. Information about users, roles, and permissions is stored in the database. This supports the Dashboard's role-based access control and team collaboration features. The database maintains audit logs of changes made through the Dashboard, providing a history of configuration changes and user actions for compliance and troubleshooting purposes. Dashboard data store. Used by the Dashboard for data storage. For production environments it is recommended to use PostgreSQL. -->
