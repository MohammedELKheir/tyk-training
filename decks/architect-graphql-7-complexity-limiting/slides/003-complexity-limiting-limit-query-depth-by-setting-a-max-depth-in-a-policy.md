---
id: architect-graphql-7-complexity-limiting/003-complexity-limiting-limit-query-depth-by-setting-a-max-depth-in-a-policy
deck_id: architect-graphql-7-complexity-limiting
order: 3
slug: complexity-limiting-limit-query-depth-by-setting-a-max-depth-in-a-policy
title: "Complexity Limiting Limit query depth by setting a max depth in: • A Policy • An"
summary: "Individual Key Query Depth = 2 { continents { name } } Query Depth = 3 { continents { countries { name } } } When Depth Limit is Exceeded: Tyk will block the query and respond with"
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
