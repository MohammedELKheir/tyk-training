---
id: architect-graphql-7-complexity-limiting/001-complexity-limiting-graphql-complexity-limiting-even-with-a-simple-schem
deck_id: architect-graphql-7-complexity-limiting
order: 1
slug: complexity-limiting-graphql-complexity-limiting-even-with-a-simple-schem
title: "Complexity Limiting GraphQL Complexity Limiting Even with a simple schema, deepl"
summary: "y nested or resource-heavy operations can overload your upstream services. type Query { continents: [Continent!]! } type Continent { name: String! countries: [Country!]! } type Cou"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-7-complexity-limiting/002-complexity-limiting-deeply-nested-query-example-this-query-is-valid-but]
customer_visible: true
notes_visibility: customer-safe
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
