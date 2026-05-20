---
id: foundational-onboarding/087-retrieving-logs-retrieve-logs-depending-on-your-os-tyk-usually-stores-lo
deck_id: foundational-onboarding
order: 87
slug: retrieving-logs-retrieve-logs-depending-on-your-os-tyk-usually-stores-lo
title: "Retrieving logs Retrieve logs depending on your OS Tyk usually stores logs in /v"
summary: "ar/log or /var/log/upstart Container logs for Docker Pod logs on Kubernetes Tyk will output logs to stderr or stdout You can push logs to a different system based on those output"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/088-logging-verbosity-via-environment-variables-to-affect-all-tyk-components]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.2rem;">Retrieving logs</h2>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold; margin-bottom:0.5rem;">Retrieve logs depending on your OS</p>
<ul style="color:#03031C; font-size:0.85rem; margin-bottom:1.2rem; padding-left:1.2rem;">
  <li>Tyk usually stores logs in <code>/var/log</code> or <code>/var/log/upstart</code></li>
  <li>Container logs for Docker</li>
  <li>Pod logs on Kubernetes</li>
</ul>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold; margin-bottom:0.5rem;">Tyk will output logs to <code>stderr</code> or <code>stdout</code></p>
<ul style="color:#03031C; font-size:0.85rem; padding-left:1.2rem;">
  <li>You can push logs to a different system based on those output</li>
</ul>
