---
id: foundational-onboarding/053-pump-database-redis-pump-pump-database-database-dashboard
deck_id: foundational-onboarding
order: 53
slug: pump-database-redis-pump-pump-database-database-dashboard
title: "Pump -> Database --> Redis Pump --> Pump Database --> Database Dashboard"
summary: "Pump -> Database --> Redis Pump --> Pump Database --> Database Dashboard"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/054-handling-analytics]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


<div style="display:flex; justify-content:center; margin-top:2rem;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <!-- Top row: Redis -> Pump -> Database -->
    <div style="display:flex; align-items:center;">
      <!-- Redis -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="font-size:14px; color:#333;">Redis</div>
        <img src="./images/icons/redis-icon.png" style="width:80px; height:80px;" />
      </div>
      <!-- Arrow Redis -> Pump -->
      <div style="display:flex; align-items:center; margin-bottom:44px;">
        <div style="width:40px; height:3px; background:#555;"></div>
        <div style="width:0; height:0; border-top:6px solid transparent; border-bottom:6px solid transparent; border-left:10px solid #555;"></div>
      </div>
      <!-- Pump -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="font-size:14px; color:#333;">Pump</div>
        <img src="./images/icons/pump-icon.png" style="width:80px; height:80px;" />
      </div>
      <!-- Arrow Pump -> Database -->
      <div style="display:flex; align-items:center; margin-bottom:44px;">
        <div style="width:40px; height:3px; background:#555;"></div>
        <div style="width:0; height:0; border-top:6px solid transparent; border-bottom:6px solid transparent; border-left:10px solid #555;"></div>
      </div>
      <!-- Database -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="font-size:14px; color:#333;">Database</div>
        <img src="./images/icons/database-icon.png" style="width:80px; height:80px;" />
      </div>
    </div>
    <!-- Vertical connector from Database down to Dashboard -->
    <div style="display:flex; justify-content:flex-end; width:100%;">
      <div style="display:flex; flex-direction:column; align-items:center; margin-right:0;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:3px; height:25px; background:#555;"></div>
          <div style="width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:10px solid #555;"></div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center;">
          <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
          <div style="font-size:14px; color:#333;">Dashboard</div>
        </div>
      </div>
    </div>
  </div>
</div>
