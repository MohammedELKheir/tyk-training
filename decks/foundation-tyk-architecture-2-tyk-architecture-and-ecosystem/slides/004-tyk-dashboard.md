---
id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/004-tyk-dashboard
deck_id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem
order: 4
slug: tyk-dashboard
title: "Tyk Dashboard"
summary: "Web-based Admin UI Create, update, and organize your APIs visually Define access policies Controls who can access and with what credentials Manage users and teams Set roles & permi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/005-database]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.85rem 0;">Tyk Dashboard</h1>
  <div style="display:flex; gap:1.05rem; align-items:flex-start;">
    <div style="flex:1.2; padding-left:0.35rem;">
      <ul class="tight-bullets" style="font-size:0.92rem; line-height:1.14; max-width:360px;">
        <li>
          Web-based Admin UI
          <ul>
            <li>Create, update, and organize your APIs visually</li>
          </ul>
        </li>
        <li>
          Define access policies
          <ul>
            <li>Controls who can access and with what credentials</li>
          </ul>
        </li>
        <li>
          Manage users and teams
          <ul>
            <li>Set roles &amp; permissions</li>
          </ul>
        </li>
        <li>
          View real-time analytics
          <ul>
            <li>See traffic, errors, usage trends, and performance</li>
          </ul>
        </li>
        <li>
          Push configuration to Gateway
          <ul>
            <li>Changes in the dashboard are synced automatically with Tyk Gateway</li>
          </ul>
        </li>
        <li>Supports Single Sign On (SSO)</li>
      </ul>
    </div>
    <div style="flex:1.12; display:flex; justify-content:flex-start; padding-top:2.45rem; padding-left:0.85rem; transform:scale(1.14); transform-origin:top left;">
      <TykArchitectureDiagram
        :width="332"
        :height="204"
        :nodes="[
          { id: 'redis', x: 28, y: 18, topLabel: 'Redis', label: '', icon: '/icons/redis-icon.png', iconWidth: 48, iconHeight: 48 },
          { id: 'gateway', x: 24, y: 108, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 58, iconHeight: 58 },
          { id: 'dashboard', x: 204, y: 106, topLabel: '', label: 'Dashboard', icon: '/icons/dashboard-icon.png', iconWidth: 56, iconHeight: 56 }
        ]"
        :edges="[
          { x1: 52, y1: 82, x2: 52, y2: 106 },
          { x1: 82, y1: 138, x2: 202, y2: 138 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: The Tyk Dashboard is a web-based admin interface that gives you full control over your API ecosystem—without needing to touch raw JSON or configuration files. It allows you to create, update, and organize your APIs visually. You can define endpoints, set authentication methods, and apply rate limits—all from an intuitive UI. Through the Dashboard, you can also define access policies. These policies let you control who can access your APIs, how often, and what credentials they must use—such as API keys, JWTs, or OAuth tokens. The Dashboard includes powerful user and team management features. You can assign roles and permissions, ensuring that only authorized users can make changes or access specific parts of the system. In addition, the Dashboard provides real-time analytics. You can monitor traffic volume, error rates, latency, and usage trends, helping you stay on top of performance and troubleshoot issues quickly. When you make configuration changes—like updating an API definition or a policy—the Dashboard automatically syncs those changes to the Tyk Gateway. This keeps your control plane and data plane aligned. It also supports Single Sign-On, making enterprise access management easier and more secure. -->
