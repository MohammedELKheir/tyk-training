---
id: architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas/002-configuring-circuit-breakers-in-tyk-oas-definitions
deck_id: architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas
order: 2
slug: configuring-circuit-breakers-in-tyk-oas-definitions
title: "Configuring Circuit Breakers in Tyk OAS Definitions"
summary: "Leverages OpenAPI Operation IDs Tyk attaches the circuit breaker to specific operationIds declared in your OpenAPI document. These are linked to method + path, e.g., GET /status/20"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-circuit-breakers-6-configuring-circuit-breakers-on-tyk-oas/003-circuit-breaker-parameters]
customer_visible: true
notes_visibility: customer-safe
---
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
