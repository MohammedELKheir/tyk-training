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
title: "How Circuit Breakers Work"
background: 'linear-gradient(135deg, #8438FA 0%, #7B2CF6 38%, #BB11FF 100%)'
---

<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; overflow:hidden;">
  <h1 style="font-size:3.9rem; line-height:1.1; font-weight:800; color:#FFFFFF; text-align:center; margin:0; border:0; max-width:720px;">
    How Circuit<br/>Breakers Work
  </h1>

  <div style="position:absolute; right:-42px; bottom:-32px; width:102px; height:86px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:flex-start; justify-content:flex-start; gap:7px; padding:14px 0 0 14px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-radius:3px; flex:0 0 auto;"></div>
    <div style="font-size:1.75rem; font-weight:700; color:#FFFFFF; line-height:1; letter-spacing:-0.02em;">Tyk</div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; min-height:100%; padding-right:74px;">
  <h1 style="font-size:3.05rem; line-height:0.98; font-weight:800; color:#5B10D5; margin:0 0 0.1rem 0; border:0; max-width:760px;">How the circuit breaker<br/>works</h1>

  <h2 style="font-size:1.45rem; font-weight:800; color:#060622; margin:0 0 0.35rem 0;">How It Works in Tyk</h2>
  <ul style="margin:0 0 1.1rem 1.2rem; padding-left:1.3rem; font-size:1.02rem; line-height:1.42; color:#060622; max-width:760px; list-style-type:disc;">
    <li>Monitors upstream responses for HTTP status 500+.</li>
    <li>Rate-based: Uses a rolling 10s sample window.</li>
    <li>Failure threshold = failure rate × minimum sample size.</li>
  </ul>

  <div style="font-size:1.42rem; font-weight:800; color:#060622; margin:0 0 0.15rem 0;">Example:</div>
  <ul style="margin:0 0 1.1rem 1.2rem; padding-left:1.3rem; font-size:1.02rem; line-height:1.42; color:#060622; max-width:760px; list-style-type:disc;">
    <li>Minimum sample size: 100</li>
    <li>Failure rate: 0.5 (50%)</li>
    <li style="list-style-type:none; margin-left:0.4rem;">-> Breaker trips if ≥50 failures in last 10s</li>
  </ul>

  <div style="font-size:1.42rem; font-weight:800; color:#060622; margin:0 0 0.15rem 0;">Post-Trip Behavior</div>
  <ul style="margin:0 0 0 1.2rem; padding-left:1.3rem; font-size:1.02rem; line-height:1.42; color:#060622; max-width:780px; list-style-type:disc;">
    <li>Breaker opens → returns HTTP 503 to clients.</li>
    <li>Remains open during cooldown period.</li>
    <li>After cooldown, breaker closes and resumes traffic.</li>
  </ul>

  <div style="position:absolute; right:-38px; bottom:-28px; width:108px; height:92px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:flex-start; justify-content:flex-start; gap:7px; padding:14px 0 0 14px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-radius:3px; flex:0 0 auto;"></div>
    <div style="font-size:1.75rem; font-weight:700; color:#FFFFFF; line-height:1; letter-spacing:-0.02em;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk's circuit breaker works much like an electrical circuit breaker—only instead of monitoring electrical current, it watches HTTP responses.
When your API upstream starts to fail, Tyk's middleware detects these failures and can "trip" the circuit. Similar to how an electrical breaker trips on overcurrent, Tyk's circuit breaker monitors HTTP status codes and trips when too many 5xx errors are returned.
It's not just a raw count—it's rate-based. Tyk looks at a rolling 10-second sample window, and will only trip the circuit if the number of failed requests exceeds a configurable failure rate and a minimum number of samples is met.
For instance, if you've set the minimum sample size to 100 and the failure rate to 50%, the breaker will trip only when 100 requests have been observed in the last 10 seconds, and at least 50 of those failed.
Once tripped, Tyk stops sending requests to the upstream for a defined cooldown period. Instead, it immediately returns a 503 – Service Unavailable response to the client. After the cooldown, the breaker resets and starts routing traffic again. -->

---
layout: default
---

<div style="position:relative; width:100%; min-height:100%; padding-right:74px;">
  <h1 style="font-size:3.1rem; line-height:1.02; font-weight:800; color:#5B10D5; margin:0 0 1.45rem 0; border:0; max-width:760px;">Half Open State</h1>

  <div style="font-size:1.08rem; line-height:1.55; color:#060622; margin-bottom:1.35rem; max-width:770px;">
    <div>Upstream may recover before the cooldown ends.</div>
    <div>Full cooldown → unnecessary downtime for clients.</div>
  </div>

  <div style="font-size:1.42rem; font-weight:800; color:#060622; margin:0 0 0.15rem 0;">Solution: Half-Open Mode</div>
  <ul style="margin:0 0 1.6rem 1.2rem; padding-left:1.3rem; font-size:1.08rem; line-height:1.55; color:#060622; max-width:760px; list-style-type:disc;">
    <li>Tyk enters half-open state after tripping.</li>
    <li>Client traffic still blocked, but...</li>
    <li>Tyk periodically probes the upstream.</li>
  </ul>

  <div style="font-size:1.42rem; font-weight:800; color:#060622; margin:0 0 0.15rem 0;">If Probes Succeed:</div>
  <ul style="margin:0 0 0 1.2rem; padding-left:1.3rem; font-size:1.08rem; line-height:1.55; color:#060622; max-width:780px; list-style-type:disc;">
    <li>Path considered restored.</li>
    <li>Circuit is automatically closed.</li>
    <li>API traffic resumes before cooldown expires.</li>
  </ul>

  <div style="position:absolute; right:-38px; bottom:-28px; width:108px; height:92px; background:#07071E; border-top-left-radius:34px; display:flex; align-items:flex-start; justify-content:flex-start; gap:7px; padding:14px 0 0 14px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-radius:3px; flex:0 0 auto;"></div>
    <div style="font-size:1.75rem; font-weight:700; color:#FFFFFF; line-height:1; letter-spacing:-0.02em;">Tyk</div>
  </div>
</div>

<!-- Notes: Sometimes, upstream services recover faster than the configured cooldown period. Without intervention, the circuit breaker would stay open the entire time—blocking client traffic even though the backend is already healthy.
Tyk solves this with a half-open mode. When in this state, the Gateway continues to block incoming client traffic but starts to periodically send test requests to the upstream.
If the upstream service responds successfully, Tyk automatically resets the breaker, and normal traffic flow resumes. This shortens unnecessary downtime and helps maintain a more responsive experience for users.
Think of it like cautiously testing an electrical circuit—if the conditions look stable, we restore the connection early, without waiting for the full cooldown period to finish. -->
