---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: What is Rate Limiting"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(135deg, #7b36f4 0%, #8c33f6 44%, #bf19ff 100%); margin:-1.8rem -3.2rem; padding:0 3rem 0.75rem; overflow:hidden;">
  <h1 style="font-size:3.38rem; line-height:1.03; font-weight:800; color:white; margin:-0.9rem 0 0 0; border:0; max-width:708px;">API Security with Tyk:<br>What is Rate Limiting</h1>
  <p style="font-size:0.98rem; line-height:1.35; color:white; opacity:0.98; margin:0.9rem 0 0 0;">Understanding how Rate Limiting works</p>
  <div style="position:absolute; right:-1.74rem; bottom:-1.34rem; width:112px; height:76px; background:#000; border-top-left-radius:36px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="position:relative; width:74px; height:28px; display:flex; align-items:center; justify-content:flex-end; font-size:1.02rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
      <div style="position:absolute; left:0; top:6px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:7px;"></div>
      <span style="letter-spacing:-0.03em;">Tyk</span>
    </div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#525783;">
  <h1 style="margin:0; color:#5A18D6; font-size:3.54rem; line-height:1.02; font-weight:800; letter-spacing:-0.03em;">What is Rate Limiting?</h1>

  <div style="margin-top:1.92rem; margin-left:0.18rem; width:868px; color:#525783; font-size:0.98rem; line-height:1.56;">
    <p style="position:relative; margin:0 0 1.22rem 0; padding-left:1.28rem;"><span style="position:absolute; left:0; top:0.04rem; font-size:1.26rem; line-height:1;">•</span>Rate limiting controls how many requests a user/system can make in a given timeframe.</p>
    <p style="position:relative; margin:0 0 1.22rem 0; padding-left:1.28rem;"><span style="position:absolute; left:0; top:0.04rem; font-size:1.26rem; line-height:1;">•</span>Prevent API abuse and maintain performance</p>
    <p style="position:relative; margin:0; padding-left:1.28rem;"><span style="position:absolute; left:0; top:0.04rem; font-size:1.26rem; line-height:1;">•</span>Client can make x number of requests per y number of seconds</p>
  </div>

  <TykFooter />
</div>

<!-- Notes: Let's start with the basics — what is rate limiting?

Rate limiting is a way to control how many requests a user or system can make to an API within a specific timeframe.

Why do we need this? Because without any limits, someone — either intentionally or accidentally — could overload our system by sending thousands of requests in a short amount of time.

So, by applying rate limits, we can protect our backend services, prevent abuse, and ensure that all users get a fair and consistent experience.

For example, you can say: “This user can make 100 requests every 60 seconds.” Once they hit that limit, any additional requests will be blocked — usually with an HTTP 429 status code, which means Too Many Requests.

It's kind of like traffic lights for your API — allowing the right flow of requests while preventing a traffic jam. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <img src="./public/icons/icecart.png" alt="Ice cream cart" style="position:absolute; left:6px; top:175px; width:143px; height:143px; object-fit:contain;" />
  <img src="./public/icons/person.png" alt="Customer" style="position:absolute; left:341px; top:187px; width:132px; height:132px; object-fit:contain;" />

  <div style="position:absolute; left:206px; top:246px; width:0; height:0; border-top:15px solid transparent; border-bottom:15px solid transparent; border-right:36px solid #000;"></div>
  <div style="position:absolute; left:242px; top:258px; width:95px; height:12px; background:#000;"></div>

  <div style="position:absolute; left:17px; top:328px; width:194px; color:#111; font-size:1.03rem; line-height:1.2; letter-spacing:-0.01em; text-align:center;">2 Scoops&nbsp;&nbsp; per minute</div>

  <TykFooter />
</div>

<!-- Notes: So heres a simple analogy,

Imagine you're at a popular ice cream shop on a hot summer day. The server behind the counter can only scoop ice cream for a certain number of customers per minute. -->

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

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <img src="./public/icons/sign.png" alt="Policy sign" style="position:absolute; left:-18px; top:-8px; width:198px; height:198px; object-fit:contain;" />
  <div style="position:absolute; left:31px; top:81px; width:112px; text-align:center; color:#111; font-size:0.64rem; line-height:1.18; letter-spacing:-0.01em;">2 Scoops per minute<br>Please come again<br>later</div>

  <img src="./public/icons/icecart.png" alt="Ice cream cart" style="position:absolute; left:6px; top:175px; width:143px; height:143px; object-fit:contain;" />

  <div style="position:absolute; left:206px; top:246px; width:0; height:0; border-top:15px solid transparent; border-bottom:15px solid transparent; border-right:36px solid #000;"></div>
  <div style="position:absolute; left:242px; top:258px; width:95px; height:12px; background:#000;"></div>

  <div style="position:absolute; left:17px; top:328px; width:194px; color:#111; font-size:1.03rem; line-height:1.2; letter-spacing:-0.01em; text-align:center;">2 Scoops&nbsp;&nbsp; per minute</div>

  <div style="position:absolute; left:341px; top:187px; width:490px; height:132px; overflow:visible;">
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:0; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:72px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:143px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:216px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:286px; top:0; width:132px; height:132px; object-fit:contain;" />
    <img src="./public/icons/person.png" alt="Customers" style="position:absolute; left:357px; top:0; width:132px; height:132px; object-fit:contain;" />
  </div>

  <TykFooter />
</div>

<!-- Notes: The ice cream shop got an idea and adds a policy that says, "Each customer can only order two scoops in a minute." This way, the server can handle the demand, and everyone gets to enjoy their treat! -->

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

---
layout: default
---

<div style="position:relative; width:100%; height:100%; color:#525783;">
  <h1 style="margin:0; color:#5A18D6; font-size:3.62rem; line-height:1; font-weight:800; letter-spacing:-0.03em;">Why it’s important?</h1>

  <div style="margin-top:1.95rem; margin-left:0.18rem; width:888px; color:#525783; font-size:0.97rem; line-height:1.54; letter-spacing:-0.01em;">
    <p style="margin:0 0 1.55rem 0;">Help mitigate API abuse and maintain performance</p>
    <p style="margin:0 0 1.55rem 0;">Rate limiting may be used as an <span style="font-weight:800; color:#4f537d;">extra line of defense</span> around attempted denial of service attacks.</p>
    <p style="margin:0;">For instance, if you have load-tested your current system and established a performance threshold that you would not want to exceed to ensure system availability and/or performance then you may want to set a global rate limit as a defense to ensure it hasn’t exceeded.</p>
  </div>

  <TykFooter />
</div>

<!-- Notes: Now that we know what rate limiting is, let's talk about why it matters.

First, it helps mitigate API abuse and maintain performance. Without rate limiting, a single user — or worse, a bad actor — could flood your system with requests, causing slowdowns or even outages for everyone else.

Rate limiting acts like an extra line of defense, especially in situations like DDoS attacks, where attackers try to overwhelm your API by sending massive amounts of traffic.

A good practice is to load-test your system first so you know its safe operating threshold. Once you know that, you can configure a global rate limit in Tyk to ensure the API never exceeds that limit, helping you protect availability and performance even under stress. -->
