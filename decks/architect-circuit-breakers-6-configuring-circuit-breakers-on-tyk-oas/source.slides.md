---
theme: tyk
layout: cover
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Configuring Circuit Breaker on Tyk OAS API"
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <h1 style="font-size:2.6rem; font-weight:800; color:white; margin:0; border:0;">Configuring Circuit Breaker on Tyk OAS API</h1>
</div>

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Configuring Circuit Breakers in Tyk OAS Definitions</h2>

<div style="display:flex; gap:1rem;">
  <div style="flex:1.1; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <p style="font-weight:bold; margin:0 0 0.3rem 0; color:#03031C;">Leverages OpenAPI Operation IDs</p>
    <ul style="margin:0 0 0.8rem 0; padding-left:1.2rem;">
      <li>Tyk attaches the circuit breaker to specific operationIds declared in your OpenAPI document.</li>
      <li>These are linked to method + path, e.g., GET /status/200 → status/200get.</li>
    </ul>

    <p style="font-weight:bold; margin:0 0 0.3rem 0; color:#03031C;">Supports Wildcards</p>
    <ul style="margin:0 0 0.8rem 0; padding-left:1.2rem;">
      <li>OpenAPI paths like /status/{code} are treated as wildcards → matched as (.*)</li>
      <li>Easier to configure human-readable paths while applying policies broadly.</li>
    </ul>

    <p style="font-weight:bold; margin:0 0 0.3rem 0; color:#03031C;">Defined in x-tyk-api-gateway.middleware.operations</p>
  </div>

  <div style="flex:0.9; background:#1a1a2e; border-radius:8px; padding:12px 16px;">
    <pre style="color:#e0e0e0; font-size:0.52rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre; overflow:hidden;">"middleware": {
            "operations": {
                "status/200get": {
                    "circuitBreaker": {
                        "enabled": true,
                        "threshold": 0.5,
                        "sampleSize": 10,
                        "coolDownPeriod": 60,
                        "halfOpenStateEnabled": true
                    }
                }
            }
        }</pre>
  </div>
</div>

<!-- Notes: In Tyk's OAS-based APIs, we use the operationId to bind middleware like circuit breakers to specific endpoints.
You define the circuit breaker inside x-tyk-api-gateway.middleware.operations and point to the operationId.
Tyk supports path wildcards via OpenAPI patterns, but under the hood, they match using regex. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">Circuit Breaker Parameters</h2>

<table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
  <thead>
    <tr style="background:#f0f0f0;">
      <th style="padding:12px 16px; text-align:left; color:#5900CB; font-weight:bold; border-bottom:2px solid #ddd; width:35%;">Parameter</th>
      <th style="padding:12px 16px; text-align:left; color:#5900CB; font-weight:bold; border-bottom:2px solid #ddd;">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">enabled</td>
      <td style="padding:10px 16px; color:#03031C;">Turns the middleware on or off for this operation</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">threshold</td>
      <td style="padding:10px 16px; color:#03031C;">The error rate limit (0.0–1.0) that trips the breaker</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">sampleSize</td>
      <td style="padding:10px 16px; color:#03031C;">Minimum # of requests in the 10s rolling window before breaker can trip</td>
    </tr>
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">coolDownPeriod</td>
      <td style="padding:10px 16px; color:#03031C;">How long (in seconds) the breaker remains open once tripped</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; color:#8438FA; font-weight:600;">halfOpenStateEnabled</td>
      <td style="padding:10px 16px; color:#03031C;">Enables probing mode to restore service before cooldown ends</td>
    </tr>
  </tbody>
</table>

<!-- Notes: Let's break down the configuration fields:
threshold is your error rate trigger, sampleSize sets how many requests must happen before checking.
Once tripped, the breaker stays open for the coolDownPeriod.
Enabling halfOpenStateEnabled makes Tyk periodically check if the upstream is back without waiting the full cooldown. -->

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

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:#21E9BA; margin:0;">Demo:</h1>
  <p style="font-size:1.3rem; color:white; font-weight:bold; text-align:center; max-width:600px; margin-top:0.8rem;">Configuring Circuit Breaker on Tyk Dashboard</p>
</div>
