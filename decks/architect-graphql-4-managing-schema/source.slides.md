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
title: "Managing Schema"
---

<div style="position:relative; width:980px; height:551px; background:#ffffff; overflow:hidden; color:#03031C; font-family:Arial, Helvetica, sans-serif;">
  <h1 style="position:absolute; left:84px; top:40px; margin:0; font-size:58px; line-height:1; font-weight:800; letter-spacing:-1px; color:#5A16D6;">Managing Schema</h1>

  <div style="position:absolute; left:86px; top:128px; width:805px;">
    <p style="margin:0 0 14px 0; font-size:17px; line-height:1.2; font-weight:800; color:#111111;">Keeping Your Schema in Sync:</p>
    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.28; font-weight:500; color:#111111;">Schema updates may be needed when your upstream GraphQL service changes.</p>
    <p style="margin:0; font-size:16px; line-height:1.28; font-weight:500; color:#111111;">The Tyk Dashboard displays the last sync timestamp for your API schema.</p>
  </div>

  <div style="position:absolute; left:72px; top:236px; width:866px;">
    <img src="./public/screenshots/dashboard-schema-sync.png" style="display:block; width:100%; height:auto;" />
  </div>

  <div style="position:absolute; left:86px; top:373px; width:828px;">
    <p style="margin:0 0 6px 0; font-size:17px; line-height:1.2; font-weight:800; color:#111111;">Syncing the Schema:</p>
    <p style="margin:0 0 5px 0; font-size:16px; line-height:1.2; font-weight:500; color:#111111;">Click "Get latest version" to fetch the schema via introspection query.</p>
    <p style="margin:0; font-size:16px; line-height:1.2; font-weight:500; color:#111111;">Then, click "Update" (top right) to apply the new schema.</p>
  </div>

  <div style="position:absolute; left:86px; top:453px; width:832px;">
    <p style="margin:0 0 6px 0; font-size:17px; line-height:1.2; font-weight:800; color:#111111;">Upstream Authentication (if protected):</p>
    <p style="margin:0 0 5px 0; font-size:16px; line-height:1.2; font-weight:500; color:#111111;">Navigate to: API &gt; Advanced Options &gt; Upstream Auth Headers</p>
    <p style="margin:0; font-size:16px; line-height:1.2; font-weight:500; color:#111111;">Add your Authorization Header (e.g., bearer token or basic auth).</p>
  </div>

  <div style="position:absolute; right:-18px; bottom:-14px; width:128px; height:94px; background:#000000; border-top-left-radius:34px; overflow:hidden;">
    <img src="./public/icons/tyk-logo.png" style="position:absolute; left:37px; top:34px; width:58px; height:auto;" />
  </div>
</div>

<!-- Notes: Once your GraphQL Proxy Only API is set up, it’s important to keep the schema in sync with your upstream service. Over time, your upstream GraphQL service may evolve — maybe new queries are added, fields are removed, or types are renamed. Tyk doesn’t automatically update the schema on your behalf — you’ll need to manually re-sync it to reflect those changes. To help with this, the Tyk Dashboard displays the last sync timestamp for the schema. This makes it easy to tell if it’s been a while since the last update. Go to your API in the Tyk Dashboard. Click “Get latest version” — this will run a fresh introspection query against your upstream. Once the schema loads, click “Update” in the top-right corner to apply the new schema to your Tyk API. And just like that, your API is now working with the latest schema from your backend. Now, if your upstream service is protected — for example, it requires an authorization token — you need to make sure Tyk can authenticate before fetching the schema. To do this: Navigate to your API in the Dashboard. Go to Advanced Options > Upstream Auth Headers. Add your Authorization header — for example, a Bearer token or Basic Auth credentials. Tyk will then include this header whenever it runs an introspection query or forwards requests to the upstream — ensuring everything continues to work securely. -->