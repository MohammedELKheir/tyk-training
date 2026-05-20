---
id: foundation-api-security-6-rate-limiting-introduction/004-rate-limiting-crowd-analogy
deck_id: foundation-api-security-6-rate-limiting-introduction
order: 4
slug: rate-limiting-crowd-analogy
title: "Rate limiting crowd analogy"
summary: "2 Scoops per minute 10 Scoops 10 Scoops 10 Scoops 10 Scoops 2 Scoops 7 Scoops 2 Scoops 7 Scoops 7 Scoops 5 Scoops 5 Scoops 5 Scoops 5 Scoops 2 Scoops"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-6-rate-limiting-introduction/005-rate-limiting-policy-analogy]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <img src="./public/icons/icecart.png" alt="Ice cream cart" style="position:absolute; left:6px; top:175px; width:143px; height:143px; object-fit:contain;" />

  <div style="position:absolute; left:206px; top:246px; width:0; height:0; border-top:15px solid transparent; border-bottom:15px solid transparent; border-right:36px solid #000;"></div>
  <div style="position:absolute; left:242px; top:258px; width:95px; height:12px; background:#000;"></div>

  <div style="position:absolute; left:17px; top:328px; width:194px; color:#111; font-size:1.03rem; line-height:1.2; letter-spacing:-0.01em; text-align:center;">2 Scoops&nbsp;&nbsp; per minute</div>

  <div style="position:absolute; left:341px; top:187px; width:580px; height:132px; overflow:visible;">
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:0; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:32px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:58px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:90px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:119px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:151px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:177px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:209px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:238px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:270px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:296px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:328px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:357px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:389px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:416px; top:0; width:132px; height:132px; object-fit:contain;" />
    <div style="position:absolute; left:36px; top:-33px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">10<br>Scoops</div>
    <div style="position:absolute; left:131px; top:-33px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">10<br>Scoops</div>
    <div style="position:absolute; left:226px; top:-33px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">10<br>Scoops</div>
    <div style="position:absolute; left:416px; top:-33px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">10<br>Scoops</div>
    <div style="position:absolute; left:68px; top:-39px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">2 Scoops</div>
    <div style="position:absolute; left:179px; top:-39px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">7 Scoops</div>
    <div style="position:absolute; left:270px; top:-39px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">2 Scoops</div>
    <div style="position:absolute; left:321px; top:-26px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">7 Scoops</div>
    <div style="position:absolute; left:372px; top:-33px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">7 Scoops</div>
    <div style="position:absolute; left:436px; top:-26px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">5 Scoops</div>
    <div style="position:absolute; left:88px; top:-26px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">5 Scoops</div>
    <div style="position:absolute; left:169px; top:-26px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">5 Scoops</div>
    <div style="position:absolute; left:349px; top:-19px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">5 Scoops</div>
    <div style="position:absolute; left:467px; top:-39px; width:58px; color:#111; font-size:0.97rem; line-height:1.05; text-align:center;">2 Scoops</div>
  </div>

  <TykFooter />
</div>

<!-- Notes: If too many customers show up at once and each order more than 2 scoops, the ice cream stand gets overwhelmed, and the line grows longer, causing everyone to wait for a very long time. -->
