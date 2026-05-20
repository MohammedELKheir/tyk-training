---
id: foundation-tyk-architecture-3-mongodb-postgres/002-tyk-and-databases
deck_id: foundation-tyk-architecture-3-mongodb-postgres
order: 2
slug: tyk-and-databases
title: "Tyk & Databases"
summary: "Long-Term Data ▪ API definitions/Policies ▪ Analytics/Usage Statistics ▪ Dashboard User and Access Management ▪ Audit Logs Supported Databases ▪ PostgreSQL ▪ MongoDB Redis Database"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-3-mongodb-postgres/003-postgresql]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---
<div style="position:relative; width:100%; height:100%;">
  <div style="display:flex; gap:2rem; align-items:flex-start; margin-top:0.4rem;">
    <div style="flex:1.02;">
      <h1 style="font-size:2rem; font-weight:700; color:#5900CB; margin:0 0 1rem 0;">Tyk &amp; Databases</h1>
      <p style="font-size:1.02rem; font-weight:700; color:#2CA597; margin:0 0 0.35rem 0;">Long-Term Data</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ API definitions/Policies</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ Analytics/Usage Statistics</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ Dashboard User and Access Management</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 1rem 0;">▪ Audit Logs</p>
      <p style="font-size:1.02rem; font-weight:700; color:#2CA597; margin:0 0 0.35rem 0;">Supported Databases</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ PostgreSQL</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0;">▪ MongoDB</p>
    </div>
    <div style="flex:1.2; display:flex; justify-content:center; padding-top:0.8rem;">
      <div style="position:relative; width:408px; height:316px; background:#efefef; border:1.2px solid #787878; border-radius:18px; overflow:hidden;">
        <div style="position:absolute; left:66px; top:18px; width:80px; text-align:center; font-size:13px; color:#222;">Redis</div>
        <img src="./public/icons/redis-icon-pptx.png" style="position:absolute; left:74px; top:38px; width:60px; height:60px; object-fit:contain;" />
        <div style="position:absolute; right:58px; top:18px; width:92px; text-align:center; font-size:13px; color:#222;">Database</div>
        <img src="./public/icons/database-icon-pptx.png" style="position:absolute; right:76px; top:36px; width:58px; height:58px; object-fit:contain;" />
        <div style="position:absolute; left:104px; top:102px; width:2px; height:66px; background:#6a6a6a;"></div>
        <div style="position:absolute; right:104px; top:102px; width:2px; height:66px; background:#6a6a6a;"></div>
        <img src="./public/icons/gateway-icon-pptx.png" style="position:absolute; left:86px; top:160px; width:40px; height:68px; object-fit:contain;" />
        <div style="position:absolute; left:56px; top:226px; width:100px; text-align:center; font-size:13px; color:#222;">Gateway</div>
        <img src="./public/icons/dashboard-icon-pptx.png" style="position:absolute; right:76px; top:168px; width:58px; height:58px; object-fit:contain;" />
        <div style="position:absolute; right:36px; top:226px; width:136px; text-align:center; font-size:13px; color:#222;">Dashboard</div>
        <div style="position:absolute; left:126px; top:196px; width:136px; height:2px; background:#6a6a6a;"></div>
        <div style="position:absolute; left:258px; top:192px; width:0; height:0; border-top:5px solid transparent; border-bottom:5px solid transparent; border-left:10px solid #6a6a6a;"></div>
      </div>
    </div>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:111px; height:72px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:0 16px 12px 0; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:64px; display:block;" />
  </div>
</div>
<!-- Notes: Tyk Dashboard requires a database to store and manage various types of data that are essential for its operation and the enhanced features it provides. The database stores API configurations, policies, and user settings. The database is used to store detailed analytics data collected from the Gateway. Information about users, roles, and permissions is stored in the database. The database maintains audit logs of changes made through the Dashboard. Dashboard data store. Used by the Dashboard for data storage. For production environments it is recommended to run MongoDB in a highly available manner. API configurations: stores API configurations, analytics, Dashboard configurations, dashboard users, portal developers, portal configuration, policies, organisations. -->
