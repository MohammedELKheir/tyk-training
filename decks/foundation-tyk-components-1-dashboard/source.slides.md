---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Product Components: Dashboard"
layout: cover
background: 'linear-gradient(135deg, #8438FA 0%, #8b38f6 42%, #C014FF 100%)'
---

<div style="position:relative; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; color:white; padding:0 6rem;">
  <h1 style="margin:0; font-size:3.6rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; color:white; border:0;">Tyk Product<br/>Components:<br/>Dashboard</h1>
  <p style="margin:0.95rem 0 0 0; font-size:1rem; line-height:1.35; color:white; opacity:0.92; max-width:640px;">Exploring the role of each component in the Tyk Ecosystem</p>
  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

---
layout: default
---

<div class="content-shell">
  <h1 class="deck-title">Tyk Dashboard</h1>

  <ul class="dashboard-bullets">
    <li>
      Web-based Admin UI
      <ul>
        <li>Create, update, and organize your APIs visually</li>
      </ul>
    </li>
    <li>
      Define access policies
      <ul>
        <li>Control who can access which APIs, how often, and with what credentials</li>
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

  <div class="tyk-corner-logo"><span class="mark"></span><span>Tyk</span></div>
</div>

<!-- Notes: The Tyk Dashboard is a web-based admin interface that gives you full control over your API ecosystem—without needing to touch raw JSON or configuration files.
It allows you to create, update, and organize your APIs visually. You can define endpoints, set authentication methods, and apply rate limits—all from an intuitive UI.
Through the Dashboard, you can also define access policies. These policies let you control who can access your APIs, how often, and what credentials they must use—such as API keys, JWTs, or OAuth tokens.
The Dashboard includes powerful user and team management features. You can assign roles and permissions, ensuring that only authorized users can make changes or access specific parts of the system.
In addition, the Dashboard provides real-time analytics. You can monitor traffic volume, error rates, latency, and usage trends, helping you stay on top of performance and troubleshoot issues quickly.
When you make configuration changes—like updating an API definition or editing a policy—those changes are automatically synced with the Tyk Gateway. This keeps your Gateway configuration up to date without requiring a manual redeploy.
And finally, for enterprise environments, the Dashboard supports Single Sign-On (SSO) via SAML or OIDC, allowing you to integrate with your identity provider and streamline user access management.
In short, the Tyk Dashboard makes managing, securing, and monitoring your APIs straightforward—so you can focus on building, not babysitting infrastructure -->

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
