---
id: foundational-onboarding/026-policies-data-structure
deck_id: foundational-onboarding
order: 26
slug: policies-data-structure
title: "**Policies - Data Structure**"
summary: "Quota and rate limiting data Access control (API ID / Path Version) Lock out policy holders Meta data and analytics { \"rate\" : 100 , \"per\" : 60 , \"quota_max\" : 10000 , \"quota_remai"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/027-rate-limiting]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# **Policies - Data Structure**

<div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
<div style="flex:1.2; display:flex; flex-direction:column; justify-content:center; gap:0.3rem; padding-right:0.5rem;">
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Quota and rate limiting data</p>
</div>
<div style="display:flex; align-items:center;">
<div style="flex:1; height:1px; background:#2196F3;"></div>
</div>
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Access control (API ID / Path Version)</p>
</div>
<div style="display:flex; align-items:center;">
<div style="flex:1; height:1px; background:#2196F3;"></div>
</div>
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Lock out policy holders</p>
</div>
<div style="display:flex; align-items:center;">
<div style="flex:1; height:1px; background:#2196F3;"></div>
</div>
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Meta data and analytics</p>
</div>
</div>
<div style="flex:2; background:#1a1a2e; border-radius:8px; padding:10px 14px;">
<pre style="color:#e0e0e0; font-size:0.5rem; margin:0; font-family:monospace; line-height:1.45; white-space:pre; overflow:hidden;">{
  <span style="color:#FFC107;">"rate"</span>: <span style="color:#FF9800;">100</span>,
  <span style="color:#FFC107;">"per"</span>: <span style="color:#FF9800;">60</span>,
  <span style="color:#FFC107;">"quota_max"</span>: <span style="color:#FF9800;">10000</span>,
  <span style="color:#FFC107;">"quota_remaining"</span>: <span style="color:#FF9800;">9500</span>,
  <span style="color:#FFC107;">"access_rights"</span>: {
    <span style="color:#FFC107;">"api-id"</span>: {
      <span style="color:#FFC107;">"api_id"</span>: <span style="color:#4CAF50;">"my-api"</span>,
      <span style="color:#FFC107;">"allowed_urls"</span>: [],
      <span style="color:#FFC107;">"versions"</span>: [<span style="color:#4CAF50;">"Default"</span>]
    }
  },
  <span style="color:#FFC107;">"active"</span>: <span style="color:#FF9800;">true</span>,
  <span style="color:#FFC107;">"date_created"</span>: <span style="color:#4CAF50;">"2024-01-15T10:00:00Z"</span>,
  <span style="color:#FFC107;">"is_inactive"</span>: <span style="color:#FF9800;">false</span>,
  <span style="color:#FFC107;">"key_expires_in"</span>: <span style="color:#FF9800;">0</span>,
  <span style="color:#FFC107;">"name"</span>: <span style="color:#4CAF50;">"Standard Policy"</span>,
  <span style="color:#FFC107;">"tags"</span>: [<span style="color:#4CAF50;">"standard"</span>]
}</pre>
</div>
</div>
