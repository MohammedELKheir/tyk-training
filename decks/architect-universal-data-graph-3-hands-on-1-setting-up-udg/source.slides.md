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
title: "Hands-On 1: Setting Up UDG"
---

<div style="position:relative; width:100%; height:100%; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#8438fa; overflow:hidden; display:flex; flex-direction:column; align-items:center; justify-content:center;">
  <div style="position:absolute; inset:0; background:radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0) 70%);"></div>
  <div style="position:relative; top:-54px; display:flex; flex-direction:column; align-items:center;">
    <TykCoverMark />
    <h1 style="margin:60px 0 0 0; color:#fff; font-size:3.3rem; line-height:1.03; font-weight:800; font-family:Inter, Arial, Helvetica, sans-serif;">Hands-On Workshop</h1>
    <p style="margin:24px 0 0 0; color:#21e9ba; font-size:1.14rem; line-height:1.1; font-weight:700; font-family:'Open Sans', Inter, Arial, Helvetica, sans-serif;">Setting Up UDG</p>
  </div>
  <TykFooterBadge />
</div>

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; font-size:3.6rem; line-height:1.05; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Prerequisites</h1>

  <div style="position:absolute; left:44px; top:156px; width:700px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 28px 0; font-size:1.12rem; line-height:1.4; font-weight:800;">Ensure the following are ready:</p>
    <ul style="margin:0; padding-left:1.7rem; font-size:1.03rem; line-height:1.85; list-style-type:disc;">
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Tyk Dashboard access</li>
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Node.js v13+</li>
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Docker Desktop or a local dev environment</li>
      <li style="padding-left:0.8rem;">Git</li>
    </ul>
  </div>

  <TykFooterBadge />
</div>

<!-- Notes: To wrap up, REST DataSources provide a powerful way to integrate legacy REST APIs into your modern GraphQL layer. You can attach them to any field, choose external or internal APIs, and even use OpenAPI specs to automate the setup. This enhances development agility while leveraging existing infrastructure. -->

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; font-size:3.55rem; line-height:1.03; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Clone and Run Example REST APIs</h1>

  <div style="position:absolute; left:44px; top:156px; width:840px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 16px 0; font-size:1.13rem; line-height:1.4; font-weight:800;">We’ll first set up the example services locally.</p>
    <pre v-pre style="margin:0; font-size:0.94rem; line-height:1.85; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent; white-space:pre;">git clone https://github.com/example-org/example-rest-api-for-udg.git
cd example-rest-api-for-udg
npm install
npm run build
npm start</pre>
    <p style="margin:36px 0 12px 0; font-size:1.13rem; line-height:1.4; font-weight:800;">You should see:</p>
    <pre v-pre style="margin:0; font-size:0.94rem; line-height:1.75; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent; white-space:pre;">Users Service Running on http://localhost:4000
Review service running on http://localhost:4001</pre>
  </div>

  <TykFooterBadge />
</div>

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; font-size:3.25rem; line-height:1.03; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Create a UDG API in Tyk Dashboard</h1>

  <div style="position:absolute; left:44px; top:156px; width:720px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <ul style="margin:0; padding-left:1.7rem; font-size:1.03rem; line-height:1.8; list-style-type:disc;">
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Go to Tyk Dashboard → APIs</li>
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Click “Add New API”</li>
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Select UDG (Universal Data Graph) as the API type</li>
      <li style="padding-left:0.8rem; margin-bottom:0.18rem;">Name it something like user-reviews-demo</li>
      <li style="padding-left:0.8rem;">Set Authentication to “Keyless” for testing</li>
    </ul>
  </div>

  <TykFooterBadge />
</div>

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; font-size:3.45rem; line-height:1.03; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Define Your GraphQL Schema</h1>

  <div style="position:absolute; left:44px; top:156px; width:700px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 8px 0; font-size:1.13rem; line-height:1.4; font-weight:800;">In the Schema tab, replace the default schema with:</p>
    <div style="margin:0; font-size:0.95rem; line-height:1.45; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent;">
      <div>type Mutation {</div>
      <div style="padding-left:28px;">default: String</div>
      <div>}</div>
      <div style="height:18px;"></div>
      <div>type Query {</div>
      <div style="padding-left:28px;">user(id: String): User</div>
      <div>}</div>
      <div style="height:18px;"></div>
      <div>type Review {</div>
      <div style="padding-left:28px;">id: String</div>
      <div style="padding-left:28px;">text: String</div>
      <div style="padding-left:28px;">userId: String</div>
      <div style="padding-left:28px;">user: User</div>
      <div>}</div>
      <div style="height:18px;"></div>
      <div>type User {</div>
      <div style="padding-left:28px;">id: String</div>
      <div style="padding-left:28px;">username: String</div>
      <div style="padding-left:28px;">reviews: [Review]</div>
      <div>}</div>
    </div>
  </div>

  <TykFooterBadge />
</div>

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; width:900px; font-size:2.9rem; line-height:1.06; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Connect the user Query to the Users REST API</h1>

  <div style="position:absolute; left:44px; top:156px; width:760px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <ul style="margin:0; padding-left:1.7rem; font-size:1rem; line-height:1.63; list-style-type:disc;">
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">In the Schema tab, select the field <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">user</span> under Query</li>
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">Choose Data Source Type → REST</li>
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">Choose Use External Data Source</li>
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">Fill in:</li>
    </ul>
    <div style="margin:8px 0 0 28px; font-size:0.98rem; line-height:1.58;">
      <div><span style="font-weight:700;">Datasource Name:</span> <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">getUserById</span></div>
      <div><span style="font-weight:700;">HTTP Method:</span> GET</div>
      <div><span style="font-weight:700;">URL:</span> <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">http://localhost:4000/users/&#123;&#123;.args.id&#125;&#125;</span></div>
      <div>(This uses GraphQL args as a dynamic path param)</div>
      <div>(Optional) Add headers if needed</div>
      <div>Save &amp; Update API</div>
    </div>
  </div>

  <TykFooterBadge />
</div>

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; width:930px; font-size:2.75rem; line-height:1.04; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Test the API in GraphQL Playground</h1>

  <div style="position:absolute; left:44px; top:156px; width:418px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 10px 0; font-size:1.12rem; line-height:1.42; font-weight:800;">Navigate to the Playground tab in Tyk Dashboard and run:</p>
    <pre v-pre style="margin:0; font-size:0.92rem; line-height:1.7; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent; white-space:pre;">query getUser {
  user(id: "1") {
    username
    id
    reviews {
      text
    }
  }
}</pre>
  </div>

  <div style="position:absolute; left:518px; top:162px; width:380px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 10px 0; font-size:1.12rem; line-height:1.42; font-weight:800;">Expected Response:</p>
    <pre v-pre style="margin:0; font-size:0.9rem; line-height:1.72; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent; white-space:pre;">{
  "data": {
    "user": {
      "username": "User 1",
      "id": "1",
      "reviews": null
    }
  }
}</pre>
    <p style="margin:34px 0 0 0; font-size:0.95rem; line-height:1.6; font-weight:500;">At this point, reviews is null because it&apos;s not yet connected. You’ll need to attach another REST data source for the <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">reviews</span> field next.</p>
  </div>

  <TykFooterBadge />
</div>

---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; font-size:3.45rem; line-height:1.05; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Challenge</h1>

  <div style="position:absolute; left:44px; top:160px; width:620px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <ul style="margin:0; padding-left:1.7rem; font-size:1.03rem; line-height:1.95; list-style-type:disc;">
      <li style="padding-left:0.8rem; margin-bottom:0.3rem;">Try to resolve <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">reviews</span> field on type <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">Users</span></li>
      <li style="padding-left:0.8rem;">Try to resolve <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">users</span> field on type <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">Reviews</span></li>
    </ul>
  </div>

  <TykFooterBadge />
</div>
