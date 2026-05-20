---
id: architect-circuit-breakers-5-circuit-breaker-events/002-circuit-breaker-events-2
deck_id: architect-circuit-breakers-5-circuit-breaker-events
order: 2
slug: circuit-breaker-events-2
title: "Circuit Breaker Events"
summary: "Event Type When It Triggers Webhook Field BreakerTripped When breaker moves from Closed → Open due to failure threshold CircuitEvent = 0 BreakerReset When breaker moves from Open →"
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

<div style="position:relative; width:100%; height:100%; margin:-0.2rem -0.2rem 0 -0.2rem; color:#0C1025; font-family:Inter, sans-serif;">
  <h1 style="margin:0 0 0 54px; font-size:3.78rem; line-height:1.03; font-weight:800; color:#5900CB; letter-spacing:-0.02em; border:0;">
    Circuit Breaker Events
  </h1>

  <table style="border-collapse:collapse; table-layout:fixed; width:820px; margin:20px 0 0 70px; font-size:0.93rem; line-height:1.15; color:#111111;">
    <colgroup>
      <col style="width:34%;" />
      <col style="width:34%;" />
      <col style="width:32%;" />
    </colgroup>
    <thead>
      <tr>
        <th style="border:1.5px solid #A8A8A8; text-align:center; padding:16px 10px; font-size:1rem; font-weight:700;">Event Type</th>
        <th style="border:1.5px solid #A8A8A8; text-align:center; padding:16px 10px; font-size:1rem; font-weight:700;">When It Triggers</th>
        <th style="border:1.5px solid #A8A8A8; text-align:center; padding:16px 10px; font-size:1rem; font-weight:700;">Webhook Field</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1.5px solid #A8A8A8; padding:14px 12px; vertical-align:top; font-family:'Roboto Mono', 'Fira Code', monospace; font-size:0.92rem; color:#7B42FF;">BreakerTripped</td>
        <td style="border:1.5px solid #A8A8A8; padding:13px 12px; vertical-align:top;">
          When breaker moves from <strong>Closed → Open</strong> due to failure threshold
        </td>
        <td style="border:1.5px solid #A8A8A8; padding:14px 12px; vertical-align:top; font-family:'Roboto Mono', 'Fira Code', monospace; font-size:0.92rem; color:#7B42FF;">CircuitEvent = 0</td>
      </tr>
      <tr>
        <td style="border:1.5px solid #A8A8A8; padding:14px 12px; vertical-align:top; font-family:'Roboto Mono', 'Fira Code', monospace; font-size:0.92rem; color:#7B42FF;">BreakerReset</td>
        <td style="border:1.5px solid #A8A8A8; padding:12px 12px 10px 12px; vertical-align:top;">
          <div>When breaker moves from <strong>Open → Closed</strong>, either:</div>
          <div style="margin-top:6px;">• After cooldown</div>
          <div style="margin-top:2px;">• Or via half-open probe success</div>
        </td>
        <td style="border:1.5px solid #A8A8A8; padding:14px 12px; vertical-align:top; font-family:'Roboto Mono', 'Fira Code', monospace; font-size:0.92rem; color:#7B42FF;">CircuitEvent = 1</td>
      </tr>
      <tr>
        <td style="border:1.5px solid #A8A8A8; padding:14px 12px; vertical-align:top; font-family:'Roboto Mono', 'Fira Code', monospace; font-size:0.92rem; color:#7B42FF;">BreakerTriggered</td>
        <td style="border:1.5px solid #A8A8A8; padding:13px 12px; vertical-align:top;">
          Generic event on <strong>any state change</strong> (tripped or reset)
        </td>
        <td style="border:1.5px solid #A8A8A8; padding:14px 12px; vertical-align:top;">
          Use <span style="font-family:'Roboto Mono', 'Fira Code', monospace; color:#8438FA;">Status</span> field
        </td>
      </tr>
    </tbody>
  </table>

  <div style="margin:12px 0 0 82px; width:760px; color:#111530;">
    <div style="font-size:1rem; font-weight:800; margin-bottom:1px;">Use Cases</div>
    <ul style="margin:0; padding-left:28px; font-size:0.9rem; line-height:1.28;">
      <li style="margin:0;">Integrate with alerting systems (e.g., Slack, PagerDuty, Opsgenie)</li>
      <li style="margin-top:1px;">Log circuit state changes for diagnostics and uptime audits</li>
      <li style="margin-top:1px;">Automate fallback behavior in other services</li>
    </ul>
  </div>

  <div style="position:absolute; right:-2px; bottom:-2px; width:106px; height:78px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; padding-top:12px; padding-left:12px; box-sizing:border-box; overflow:hidden;">
    <img :src="'/icons/0c9c1f959afe.png'" style="width:54px; height:auto; display:block;" />
  </div>
</div>

<!-- Notes: While Tyk’s circuit breaker automatically manages traffic flow to protect your systems, it’s just as important to know when a problem has occurred and when it’s safe to resume traffic. That’s where Tyk’s event system comes in. You can hook into these events to send alerts, trigger log entries, or even activate external automation workflows. There are three key events: BreakerTripped is sent when the breaker opens due to too many upstream failures. BreakerReset is fired when the breaker closes, either after a cooldown or when half-open probing succeeds. BreakerTriggered is a generic catch-all for any state change, and it includes a CircuitEvent field where 0 means tripped and 1 means reset. These hooks are especially useful for integrating with incident management tools like PagerDuty or even Slack alerts, so your team can act quickly on any service degradation. -->
