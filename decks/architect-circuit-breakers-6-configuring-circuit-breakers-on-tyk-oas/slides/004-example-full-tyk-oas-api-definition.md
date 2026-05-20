---
id: architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas/004-example-full-tyk-oas-api-definition
deck_id: architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas
order: 4
slug: example-full-tyk-oas-api-definition
title: "Example – Full Tyk OAS API Definition"
summary: "{ \"paths\" : { \"/status/200\" : { \"get\" : { \"operationId\" : \"status/200get\" } } }, \"x-tyk-api-gateway\" : { \"middleware\" : { \"operations\" : { \"status/200get\" : { \"circuitBreaker\" : {"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas/005-demo-configuring-circuit-breaker-on-tyk-dashboard]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Example – Full Tyk OAS API Definition</h2>

<div style="background:#1a1a2e; border-radius:8px; padding:16px 20px; max-width:620px;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.55; white-space:pre; overflow:hidden;">{
  <span style="color:#FFC107;">"paths"</span>: {
    <span style="color:#FFC107;">"/status/200"</span>: {
      <span style="color:#FFC107;">"get"</span>: {
        <span style="color:#FFC107;">"operationId"</span>: <span style="color:#4CAF50;">"status/200get"</span>
      }
    }
  },
  <span style="color:#FFC107;">"x-tyk-api-gateway"</span>: {
    <span style="color:#FFC107;">"middleware"</span>: {
      <span style="color:#FFC107;">"operations"</span>: {
        <span style="color:#FFC107;">"status/200get"</span>: {
          <span style="color:#FFC107;">"circuitBreaker"</span>: {
            <span style="color:#FFC107;">"enabled"</span>: <span style="color:#4CAF50;">true</span>,
            <span style="color:#FFC107;">"threshold"</span>: <span style="color:#4CAF50;">0.5</span>,
            <span style="color:#FFC107;">"sampleSize"</span>: <span style="color:#4CAF50;">10</span>,
            <span style="color:#FFC107;">"coolDownPeriod"</span>: <span style="color:#4CAF50;">60</span>,
            <span style="color:#FFC107;">"halfOpenStateEnabled"</span>: <span style="color:#4CAF50;">true</span>
          }
        }
      }
    }
  }
}</pre>
</div>

<!-- Notes: Let's break down the configuration fields:
threshold is your error rate trigger, sampleSize sets how many requests must happen before checking.
Once tripped, the breaker stays open for the coolDownPeriod.
Enabling halfOpenStateEnabled makes Tyk periodically check if the upstream is back without waiting the full cooldown. -->
