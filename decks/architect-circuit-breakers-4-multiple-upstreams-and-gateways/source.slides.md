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
title: "Multiple Upstreams & Gateways"
background: 'linear-gradient(135deg, #8438FA 0%, #7F34F6 42%, #CB18FF 100%)'
---

<div style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; overflow:hidden; box-sizing:border-box;">
  <h1 style="font-size:3.34rem; line-height:1.05; font-weight:800; color:#FFFFFF; text-align:center; margin:0; letter-spacing:-0.03em; border:0; text-shadow:none; width:700px; transform:translate(-20px, 0px);">
    Multiple Upstreams<br/>&amp; Gateways
  </h1>

  <div style="position:absolute; right:-14px; bottom:-24px; width:102px; height:86px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:flex-start; justify-content:flex-start; gap:7px; padding:14px 0 0 14px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-radius:3px; flex:0 0 auto;"></div>
    <div style="font-size:1.75rem; font-weight:700; color:#FFFFFF; line-height:1; letter-spacing:-0.02em;">Tyk</div>
  </div>
</div>

---
layout: fullscreen
background: '#FFFFFF'
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:#FFFFFF; color:#0A0F2D; padding:18px 0 0 0; font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="position:absolute; left:66px; top:36px; width:660px; color:#5B07D8; font-size:3.5rem; line-height:0.95; font-weight:800; letter-spacing:-0.045em;">
    Multiple Upstreams &amp;<br/>Gateways
  </div>

  <div style="position:absolute; left:56px; top:150px; width:830px;">
    <div style="font-size:1.13rem; font-weight:800; color:#0A0F2D; margin-bottom:8px;">
      Multiple Upstream Hosts
    </div>
    <div style="display:flex; flex-direction:column; gap:6px; font-size:0.99rem; line-height:1.33; color:#0A0F2D; max-width:830px;">
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>Circuit breaker applies at the API endpoint level, not per host.</span></div>
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>Sample + failure counts are aggregated across all upstreams.</span></div>
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>Breaker trips if threshold is breached, even if only some hosts are failing.</span></div>
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>In half-open mode, breaker resets if a healthy host responds.</span></div>
    </div>
  </div>

  <div style="position:absolute; left:56px; top:330px; width:830px;">
    <div style="font-size:1.13rem; font-weight:800; color:#0A0F2D; margin-bottom:8px;">
      Multiple Tyk Gateways
    </div>
    <div style="display:flex; flex-direction:column; gap:6px; font-size:0.99rem; line-height:1.33; color:#0A0F2D; max-width:830px;">
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>Circuit breakers run independently on each Gateway node.</span></div>
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>No shared state between Gateways (no centralized tracking).</span></div>
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>Ensures high availability and low latency.</span></div>
      <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.2rem; line-height:1; margin-top:3px;">•</span><span>In load-balanced setups:</span></div>
      <div style="margin-left:41px; display:flex; flex-direction:column; gap:4px; font-size:0.97rem; line-height:1.3;">
        <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.1rem; line-height:1; margin-top:3px;">○</span><span>One Gateway might trip early.</span></div>
        <div style="display:flex; align-items:flex-start; gap:14px;"><span style="font-size:1.1rem; line-height:1; margin-top:3px;">○</span><span>Others may continue sending traffic until they trip too.</span></div>
      </div>
    </div>
  </div>

  <div style="position:absolute; right:-14px; bottom:-20px; width:102px; height:86px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:flex-start; justify-content:flex-start; gap:7px; padding:14px 0 0 14px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-radius:3px; flex:0 0 auto;"></div>
    <div style="font-size:1.75rem; font-weight:700; color:#FFFFFF; line-height:1; letter-spacing:-0.02em;">Tyk</div>
  </div>
</div>

<!-- Notes: When using circuit breakers with multiple upstream hosts, it's important to understand that Tyk aggregates all failures at the endpoint level—not per host. So if even one of your hosts is failing and contributes enough 5xx responses to exceed the failure threshold, the circuit breaker will trip.
Now, this also means that during half-open mode, any healthy upstream can cause the breaker to reset if it replies to Tyk’s test request—restoring service sooner. But watch out for BreakerTripped events, as they’re a useful signal that at least one backend might still be unhealthy.
For multi-Gateway environments, each Tyk Gateway maintains its own circuit breaker state. There is no centralized pool of stats or breaker coordination. This is by design—to preserve speed, isolation, and resilience.
In a load-balanced setup, this means that one Gateway might trip its breaker first and start returning 503s, but other Gateways could still be routing traffic to the upstream until they trip their own breakers. -->
