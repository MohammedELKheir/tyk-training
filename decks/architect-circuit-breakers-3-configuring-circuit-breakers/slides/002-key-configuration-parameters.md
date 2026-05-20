---
id: architect-circuit-breakers-3-configuring-circuit-breakers/002-key-configuration-parameters
deck_id: architect-circuit-breakers-3-configuring-circuit-breakers
order: 2
slug: key-configuration-parameters
title: "Key Configuration Parameters"
summary: "Sample Size • Number of requests in the rolling window • e.g. 100 requests per 10 seconds Error Rate Threshold • Proportion of failures to trip the breaker • e.g. 15/100 = 0.15 (15"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:980px; height:551px; margin:-3rem -4rem; background:#FFFFFF; overflow:hidden; font-family:Inter, sans-serif;"><div style="position:absolute; left:82px; top:52px; width:430px; color:#5900CB; font-size:2.95rem; line-height:0.98; font-weight:800; letter-spacing:-0.035em;">Key Configuration<br/>Parameters</div><div style="position:absolute; left:52px; top:199px; width:405px; color:#03031C; font-size:1.05rem; line-height:1.25;"><div style="font-weight:800; font-size:1.07rem; margin-bottom:8px;">Sample Size</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:8px;">• Number of requests in the rolling window</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:46px;">• e.g. 100 requests per 10 seconds</div><div style="font-weight:800; font-size:1.07rem; margin-bottom:8px;">Error Rate Threshold</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:8px;">• Proportion of failures to trip the breaker</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:46px;">• e.g. 15/100 = 0.15 (15% failure rate)</div><div style="font-weight:800; font-size:1.07rem; margin-bottom:8px;">Cooldown Period</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:8px;">• Time (in seconds) the breaker stays open</div><div style="padding-left:24px; text-indent:-16px;">• During this time, requests are blocked</div></div><div style="position:absolute; left:542px; top:203px; width:352px; color:#03031C; font-size:0.98rem; line-height:1.34;"><div style="font-weight:800; font-size:0.98rem; color:#7B43FF; margin-bottom:10px;">Optional: Half-Open State</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:10px;">• Can be enabled/disabled based on<br/>system needs</div><div style="padding-left:24px; text-indent:-16px; margin-bottom:52px;">• Allows early recovery probing of<br/>upstream</div><div style="font-weight:800; font-size:0.98rem; color:#7B43FF; margin-bottom:10px;">Special Case: Service Discovery</div><div style="padding-left:24px; text-indent:-16px;">• When circuit trips, Tyk refreshes the<br/>Gateway list via Service Discovery<br/>module</div></div><div style="position:absolute; right:-1px; bottom:-1px; width:95px; height:74px; background:#07071E; border-top-left-radius:28px; overflow:hidden;"><img src="./public/icons/tyk-logo.png" style="position:absolute; right:14px; bottom:11px; width:45px; height:auto;" /></div></div>

<!-- Notes: Configuring a circuit breaker in Tyk is intentionally simple—just three parameters control the behavior. First is the sample size, which is the number of requests evaluated within each rolling 10-second window. For example, setting this to 100 means the circuit breaker will analyze the most recent 100 requests. Second is the error rate threshold. This defines what percentage of those requests must fail in order to trip the breaker. For instance, if you want the breaker to trip after 15 failed requests out of 100, you’d set the threshold to 0.15. The third is the cooldown period. Once the breaker trips, it will stay open for this amount of time before it resets—unless the optional half-open mode is enabled. Half-open mode lets Tyk periodically check the upstream before the cooldown ends, and if it’s healthy again, traffic resumes early. You can turn this mode off if your architecture can’t tolerate retry probes. And one more thing—if you’re using Service Discovery, Tyk will also attempt to refresh the upstream gateway list every time a breaker trips, giving it a chance to reroute to healthy instances. -->
