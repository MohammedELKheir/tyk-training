---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Complexity Limiting"
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <div style="position:absolute; left:77px; top:31px; width:245px; color:#5B16D0; font-size:2.34rem; font-weight:900; line-height:0.9; letter-spacing:-0.045em;">Complexity<br/>Limiting</div>
  <div style="position:absolute; left:77px; top:118px; width:410px; font-size:0.98rem; line-height:1.14; color:#11122F;">
    <div style="font-weight:800; margin-bottom:1.05rem;">GraphQL Complexity Limiting</div>
    <div style="width:372px; font-weight:400; line-height:1.38;">Even with a simple schema, deeply nested or resource-heavy operations can overload your upstream services.</div>
  </div>
  <div style="position:absolute; left:502px; top:131px; width:438px; font-size:0.88rem; line-height:1.46; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#1A1A1A;">type Query {<br/>&nbsp;&nbsp;continents: [Continent!]!<br/>}<br/><br/>type Continent {<br/>&nbsp;&nbsp;name: String!<br/>&nbsp;&nbsp;countries: [Country!]!<br/>}<br/><br/>type Country {<br/>&nbsp;&nbsp;name: String!<br/>&nbsp;&nbsp;continent: Continent!<br/>}</div>
  <div style="position:absolute; right:-1px; bottom:-1px; width:92px; height:67px; background:#000; border-top-left-radius:24px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 11px 12px 12px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:7px; border-bottom-left-radius:10px; border-bottom-right-radius:3px; margin-right:5px; margin-bottom:2px;"></div>
    <div style="font-size:0.88rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: "GraphQL is incredibly powerful and flexible, allowing clients to request exactly the data they need. However, this flexibility comes with a risk — even with a simple schema, clients can craft deeply nested queries or request large amounts of data in a single operation. Such complex or resource-heavy queries can put significant strain on your upstream services, leading to slow response times, increased server load, and potentially downtime. To prevent this, GraphQL complexity limiting is a vital safeguard. It helps us define thresholds for query depth and resource usage, effectively protecting our backend from expensive or malicious queries. By enforcing complexity limits, we ensure our API remains responsive and stable for all users, while still giving clients the flexibility they need. In the next section, we’ll explore how Tyk Universal Data Graph lets you set and enforce these complexity limits easily." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <div style="position:absolute; left:77px; top:31px; width:245px; color:#5B16D0; font-size:2.34rem; font-weight:900; line-height:0.9; letter-spacing:-0.045em;">Complexity<br/>Limiting</div>
  <div style="position:absolute; left:77px; top:118px; width:850px; font-size:1rem; line-height:1.12; font-weight:800; color:#11122F;">Deeply Nested Query Example</div>
  <img src="./public/screenshots/deeply-nested-query.png" style="position:absolute; left:88px; top:142px; width:200px; height:300px; object-fit:contain;" />
  <div style="position:absolute; left:347px; top:155px; width:430px; font-size:0.98rem; line-height:1.2; color:#111;">This query is valid, but heavily recursive and can stress your backend.</div>
  <div style="position:absolute; right:-1px; bottom:-1px; width:92px; height:67px; background:#000; border-top-left-radius:24px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 11px 12px 12px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:7px; border-bottom-left-radius:10px; border-bottom-right-radius:3px; margin-right:5px; margin-bottom:2px;"></div>
    <div style="font-size:0.88rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden;">
  <div style="position:absolute; left:77px; top:31px; width:245px; color:#5B16D0; font-size:2.34rem; font-weight:900; line-height:0.9; letter-spacing:-0.045em;">Complexity<br/>Limiting</div>
  <div style="position:absolute; left:91px; top:96px; width:798px; font-size:0.98rem; line-height:1.22; color:#111;">
    <div style="margin-bottom:0.55rem;">Limit query depth by setting a max depth in:</div>
    <div style="display:flex; align-items:flex-start; margin-left:0.2rem; margin-bottom:0.14rem;"><span style="font-size:1.45rem; line-height:1; margin-right:0.8rem;">•</span><span>A Policy</span></div>
    <div style="display:flex; align-items:flex-start; margin-left:0.2rem;"><span style="font-size:1.45rem; line-height:1; margin-right:0.8rem;">•</span><span>An Individual Key</span></div>
  </div>
  <div style="position:absolute; left:78px; top:223px; width:220px; font-size:0.94rem; line-height:1.48; color:#151515;">
    <div style="font-family:Arial, Helvetica, sans-serif; font-size:0.98rem; margin-bottom:0.95rem;">Query Depth = 2</div>
    <div style="font-size:0.9rem; line-height:1.55; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#1A1A1A;">{<br/>&nbsp;&nbsp;continents {<br/>&nbsp;&nbsp;&nbsp;&nbsp;name<br/>&nbsp;&nbsp;}<br/>}</div>
  </div>
  <div style="position:absolute; left:311px; top:223px; width:250px; font-size:0.94rem; line-height:1.48; color:#151515;">
    <div style="font-family:Arial, Helvetica, sans-serif; font-size:0.98rem; margin-bottom:0.95rem;">Query Depth = 3</div>
    <div style="font-size:0.9rem; line-height:1.55; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#1A1A1A;">{<br/>&nbsp;&nbsp;continents {<br/>&nbsp;&nbsp;&nbsp;&nbsp;countries {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>}</div>
  </div>
  <div style="position:absolute; left:621px; top:132px; width:267px; color:#121533;">
    <div style="font-size:1.03rem; line-height:1.25; font-weight:800; margin-bottom:1.45rem;">When Depth Limit is<br/>Exceeded:</div>
    <div style="font-size:1.03rem; line-height:1.25; font-weight:800; margin-bottom:1.45rem;">Tyk will block the query<br/>and respond with:</div>
    <div style="font-size:0.83rem; line-height:1.5; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#1A1A1A;">{<br/>&nbsp;&nbsp;&quot;error&quot;: &quot;depth limit<br/>&nbsp;&nbsp;exceeded&quot;<br/>}</div>
  </div>
  <div style="position:absolute; right:-1px; bottom:-1px; width:92px; height:67px; background:#000; border-top-left-radius:24px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 11px 12px 12px; box-sizing:border-box; overflow:hidden;">
    <div style="width:14px; height:14px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:7px; border-bottom-left-radius:10px; border-bottom-right-radius:3px; margin-right:5px; margin-bottom:2px;"></div>
    <div style="font-size:0.88rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: To protect your GraphQL API from overly complex or expensive queries, you can limit the query depth. This helps prevent performance issues and potential abuse. You can set a maximum query depth in two places: At the Policy level, which applies to all keys associated with that policy. Or at the individual API Key level, for more granular control. Setting these limits ensures your API stays performant and secure by restricting how deeply clients can nest their queries. -->
