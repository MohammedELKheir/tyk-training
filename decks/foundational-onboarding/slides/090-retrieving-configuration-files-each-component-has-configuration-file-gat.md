---
id: foundational-onboarding/090-retrieving-configuration-files-each-component-has-configuration-file-gat
deck_id: foundational-onboarding
order: 90
slug: retrieving-configuration-files-each-component-has-configuration-file-gat
title: "Retrieving Configuration Files Each component has configuration file Gateway - t"
summary: "yk.conf Dashboard - tyk_analytics.conf Pump - pump.conf MDCB - tyk_sink.conf Tyk Identity Broker - tib.conf Configuration files are found in /opt/{service-name} E.g /opt/tyk-dashbo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/091-hands-on-workshop-retrieving-logs-and-configuration-files-setting-loggin]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.2rem;">Retrieving Configuration Files</h2>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold; margin-bottom:0.5rem;">Each component has configuration file</p>
<ul style="color:#03031C; font-size:0.85rem; margin-bottom:1.2rem; padding-left:1.2rem;">
  <li>Gateway - <code>tyk.conf</code></li>
  <li>Dashboard - <code>tyk_analytics.conf</code></li>
  <li>Pump - <code>pump.conf</code></li>
  <li>MDCB - <code>tyk_sink.conf</code></li>
  <li>Tyk Identity Broker - <code>tib.conf</code></li>
</ul>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold; margin-bottom:0.5rem;">Configuration files are found in <code>/opt/{service-name}</code></p>
<ul style="color:#03031C; font-size:0.85rem; margin-bottom:1.2rem; padding-left:1.2rem;">
  <li>E.g <code>/opt/tyk-dashboard</code></li>
</ul>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold;">Configurations can be set via Environment Variables</p>
