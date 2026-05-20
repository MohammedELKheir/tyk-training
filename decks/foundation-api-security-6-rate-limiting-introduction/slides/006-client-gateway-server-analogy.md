---
id: foundation-api-security-6-rate-limiting-introduction/006-client-gateway-server-analogy
deck_id: foundation-api-security-6-rate-limiting-introduction
order: 6
slug: client-gateway-server-analogy
title: "Client Gateway Server analogy"
summary: "2 Scoops per minute Client Gateway Server"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-6-rate-limiting-introduction/007-why-it-s-important]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <img src="./public/icons/customer-top.png" alt="Customer request" style="position:absolute; left:188px; top:159px; width:84px; height:84px; object-fit:contain;" />
  <img src="./public/icons/policy-sign.png" alt="Rate limit sign" style="position:absolute; left:401px; top:132px; width:128px; height:128px; object-fit:contain;" />
  <div style="position:absolute; left:426px; top:191px; width:78px; color:#111; font-size:0.84rem; line-height:1; letter-spacing:-0.01em; text-align:center;">2 Scoops per<br>minute</div>
  <img src="./public/icons/server-top.png" alt="Protected service" style="position:absolute; left:648px; top:160px; width:84px; height:84px; object-fit:contain;" />

  <img src="./public/icons/client.png" alt="Client" style="position:absolute; left:200px; top:280px; width:78px; height:78px; object-fit:contain;" />
  <img src="./public/icons/gateway.png" alt="Gateway" style="position:absolute; left:425px; top:280px; width:78px; height:78px; object-fit:contain;" />
  <img src="./public/icons/server.png" alt="Server" style="position:absolute; left:651px; top:280px; width:78px; height:78px; object-fit:contain;" />

  <div style="position:absolute; left:278px; top:313px; width:116px; height:12px; background:#000;"></div>
  <div style="position:absolute; left:394px; top:301px; width:0; height:0; border-top:18px solid transparent; border-bottom:18px solid transparent; border-left:34px solid #000;"></div>
  <div style="position:absolute; left:504px; top:313px; width:116px; height:12px; background:#000;"></div>
  <div style="position:absolute; left:620px; top:301px; width:0; height:0; border-top:18px solid transparent; border-bottom:18px solid transparent; border-left:34px solid #000;"></div>

  <div style="position:absolute; left:217px; top:366px; width:56px; color:#111; font-size:1rem; line-height:1.15; text-align:center;">Client</div>
  <div style="position:absolute; left:426px; top:366px; width:78px; color:#111; font-size:1rem; line-height:1.15; text-align:center;">Gateway</div>
  <div style="position:absolute; left:663px; top:366px; width:56px; color:#111; font-size:1rem; line-height:1.15; text-align:center;">Server</div>

  <TykFooter />
</div>

<!-- Notes: Rate limits in the digital world work similarly. They control the number of requests (like customers) that can access an API (the ice cream server) within a specific time frame. This helps prevent the system from getting overwhelmed and ensures that everyone gets their share of ice cream (or data) without causing delays or crashes.

The Gateway enforces the policy that a client can only make 2 requests per minute before forwarding traffic to the server. -->
