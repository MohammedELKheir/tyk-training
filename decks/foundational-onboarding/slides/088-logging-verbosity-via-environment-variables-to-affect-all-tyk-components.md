---
id: foundational-onboarding/088-logging-verbosity-via-environment-variables-to-affect-all-tyk-components
deck_id: foundational-onboarding
order: 88
slug: logging-verbosity-via-environment-variables-to-affect-all-tyk-components
title: "Logging Verbosity Via environment variables to affect all Tyk components TYK_LOG"
summary: "LEVEL debug warn Error For Gateway only tyk.conf \"log_level\": \"info\""
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/089-3rd-party-log-tools-sentry-logstash-graylog-syslog-out-of-the-box-integr]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.2rem;">Logging Verbosity</h2>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold; margin-bottom:0.5rem;">Via environment variables to affect all Tyk components</p>
<ul style="color:#03031C; font-size:0.85rem; margin-bottom:1.2rem; padding-left:1.2rem;">
  <li><code>TYK_LOGLEVEL</code>
    <ul style="padding-left:1.2rem; margin-top:4px;">
      <li><code>debug</code></li>
      <li><code>warn</code></li>
      <li><code>Error</code></li>
    </ul>
  </li>
</ul>

<p style="color:#03031C; font-size:0.95rem; font-weight:bold; margin-bottom:0.5rem;">For Gateway only</p>
<ul style="color:#03031C; font-size:0.85rem; padding-left:1.2rem;">
  <li><code>tyk.conf</code></li>
  <li><code>"log_level": "info"</code></li>
</ul>
