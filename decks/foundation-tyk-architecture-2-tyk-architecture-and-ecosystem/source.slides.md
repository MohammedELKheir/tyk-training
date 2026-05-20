---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Architecture & Ecosystem"
mdc: true
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #7e35f8 0%, #8d32ff 45%, #c20fff 100%); margin:-1.85rem; padding:0 4rem;">
  <h1 style="font-size:3.08rem; line-height:1.14; font-weight:800; color:white; margin:-0.15rem 0 0 0; border:none;">Tyk Architecture &amp;<br/>Ecosystem</h1>
  <p style="margin-top:1.45rem; font-size:1rem; line-height:1.38; max-width:610px; color:rgba(255,255,255,0.92);">Understanding the main Tyk components, their functions and its dependencies</p>
  <div style="position:fixed; right:-1.9rem; bottom:-1.45rem; width:96px; height:60px; background:#050505; border-radius:22px 0 0 0; display:flex; align-items:center; justify-content:center; z-index:30;">
    <img :src="'/icons/tyk-logo.png'" alt="Tyk logo" style="width:44px; height:auto;" />
  </div>
</div>

---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.95rem 0;">Tyk Gateway</h1>
  <div style="display:flex; gap:1.2rem; align-items:flex-start;">
    <div style="flex:1.5; padding-left:0.35rem;">
      <ul class="tight-bullets" style="font-size:1.06rem; line-height:1.24; max-width:470px;">
        <li>Real Time Traffic Enforcement</li>
        <li>Handles all inbound API traffic</li>
        <li>Authentication &amp; Authorization</li>
        <li>Rate Limiting and Quotas</li>
        <li>Enforces Policies</li>
        <li>Observability</li>
      </ul>
    </div>
    <div style="flex:1; display:flex; justify-content:flex-start; padding-top:1rem; padding-left:0.6rem;">
      <TykArchitectureDiagram
        :width="168"
        :height="286"
        :nodes="[
          { id: 'gateway', x: 50, y: 78, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 60, iconHeight: 60 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: Let's talk about how the Tyk Gateway enforces control and governance over your API traffic in real time. The Tyk Gateway is the core component that handles all inbound API traffic. Every request coming into your system first passes through the Gateway, making it the front line for traffic control. One of its primary responsibilities is Authentication and Authorization. Tyk verifies that incoming requests are from legitimate clients and ensures those clients have the right permissions to access the resources they're asking for. Next, it applies Rate Limiting and Quotas to protect your backend systems. This means you can control how many requests a client can make within a certain time period, helping to prevent abuse or overload. It also enforces policies in real time—these policies might define access levels, transformations, or usage plans—ensuring that every request complies with the rules you’ve set. And finally, the Gateway provides Observability out of the box. It captures rich telemetry and analytics data so you can monitor performance, spot issues, and understand how your APIs are being used. -->

---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.9rem 0;">Tyk &amp; Redis</h1>
  <div style="display:flex; gap:1.2rem; align-items:flex-start;">
    <div style="flex:1.55; padding-left:0.35rem;">
      <ul class="tight-bullets" style="font-size:1rem; line-height:1.2; max-width:500px;">
        <li>
          Fast in-memory performance
          <ul>
            <li>Enables real-time request validation</li>
            <li>Minimise latency for high-throughput APIs</li>
          </ul>
        </li>
        <li>
          Stores:
          <ul>
            <li>Rate limit counters</li>
            <li>Session tokens</li>
            <li>API key states</li>
          </ul>
        </li>
        <li>
          Shared State across gateways
          <ul>
            <li>Synchronizes usage data across nodes</li>
          </ul>
        </li>
        <li>
          Pub/Sub Broker
          <ul>
            <li>Cluster-wide notifications</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="flex:0.98; display:flex; justify-content:flex-start; padding-top:0.7rem; padding-left:0.55rem;">
      <TykArchitectureDiagram
        :width="170"
        :height="294"
        :nodes="[
          { id: 'redis', x: 53, y: 24, topLabel: 'Redis', label: '', icon: '/icons/redis-icon.png', iconWidth: 52, iconHeight: 52, bottomLabelGap: '0px' },
          { id: 'gateway', x: 50, y: 152, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 60, iconHeight: 60 }
        ]"
        :edges="[
          { x1: 85, y1: 98, x2: 85, y2: 146, color: '#8f8f96', width: 2 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: Redis is a core component in the Tyk stack, powering real-time request validation through its fast, in-memory performance. It’s designed to minimize latency, making it ideal for high-throughput APIs where speed is critical. Redis stores important runtime data such as rate limit counters, session tokens, and API key states. This allows the Tyk Gateway to make decisions quickly—like whether a request is within quota or if an API key is valid—without hitting the database. In multi-node environments, Redis also ensures shared state across all gateways. It synchronizes usage data, so no matter which gateway handles the request, it sees the same usage picture. On top of that, Redis acts as a Pub/Sub broker to deliver cluster-wide notifications. This helps with cache purging, policy updates, and other real-time coordination between nodes. In short, Redis enables Tyk to deliver both high performance and consistent behavior across your entire API infrastructure. -->

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
