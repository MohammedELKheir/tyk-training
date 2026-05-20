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
title: "Dynamic Variables"
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:52px; top:124px; width:860px; font-size:1.1rem; line-height:1.78; color:#03031C;">
    <p style="margin:0 0 1rem 0; font-weight:600;">You can pass dynamic variables to your persisted GraphQL queries.</p>
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin:0 0 0.4rem 0; padding-left:0.7rem;">Supported sources:
        <ul style="margin:0.3rem 0 0 0; padding-left:1.9rem; list-style-type:circle;">
          <li style="margin:0 0 0.25rem 0; padding-left:0.5rem;">Request headers</li>
          <li style="margin:0; padding-left:0.5rem;">URL path parameters</li>
        </ul>
      </li>
      <li style="margin:0.35rem 0; padding-left:0.7rem;">Use Tyk context variables to reference them.</li>
      <li style="margin:0.35rem 0 0 0; padding-left:0.7rem;">Ideal for flexible query inputs without hardcoding values.</li>
    </ul>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk's persisted query middleware isn't limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk's request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:56px; top:120px; width:610px;">
    <p style="font-size:0.95rem; font-weight:600; color:#03031C; margin:0 0 8px 0;">Example: Extract countryCode from request header code</p>
    <pre style="margin:0; font-size:0.7rem; line-height:1.8; font-family:'Courier New', Courier, monospace; color:#111; background:transparent; white-space:pre;">{
  "method": "GET",
  "path": "/getCountryByCode",
  "operation": "query ($countryCode: ID!) {\n
country(code: $countryCode) {\n        code\n
name\n   }\n}",
  "variables": {
    "countryCode": "$tyk_context.headers_Code"
  }
}</pre>
  </div>

  <div style="position:absolute; right:54px; top:160px; width:260px; color:#03031C;">
    <p style="font-size:0.95rem; font-weight:700; color:#03031C; margin:0 0 14px 0;">Request Header:</p>
    <p style="font-size:0.86rem; color:#03031C; margin:0; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">code: UK</p>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Here, we're using a header called code as the value for the GraphQL variable countryCode.
This way, your consumers can send different values in the header, and Tyk will inject them into the query.
It's especially useful when your consumers can't modify the URL but can control headers. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:56px; top:120px; width:610px;">
    <p style="font-size:0.95rem; font-weight:600; color:#03031C; margin:0 0 8px 0;">Response:</p>
    <pre style="margin:0; font-size:0.98rem; line-height:1.82; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#111; background:transparent; white-space:pre;">{
  "data": {
    "country": {
      "code": "UK",
      "name": "United Kingdom"
    }
  }
}</pre>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk's persisted query middleware isn't limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk's request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:56px; top:120px; width:610px;">
    <p style="font-size:0.95rem; font-weight:600; color:#03031C; margin:0 0 8px 0;">Example: Extract countryCode from the URL</p>
    <pre style="margin:0; font-size:0.7rem; line-height:1.8; font-family:'Courier New', Courier, monospace; color:#111; background:transparent; white-space:pre;">{
  "method": "GET",
  "path": "/getCountryByCode/{countryCode}",
  "operation": "query ($countryCode: ID!) {\n
country(code: $countryCode) {\n        code\n
name\n   }\n}",
  "variables": {
    "countryCode": "$path.countryCode"
  }
}</pre>
  </div>

  <div style="position:absolute; right:54px; top:160px; width:260px; color:#03031C;">
    <p style="font-size:0.95rem; font-weight:700; color:#03031C; margin:0 0 14px 0;">Request URL:</p>
    <p style="font-size:0.86rem; color:#03031C; margin:0; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">/getCountryByCode/NG</p>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: In this case, we're using a path parameter from the URL itself to extract the variable value.
Tyk will automatically parse the value after /getCountryByCode/ and inject it into the GraphQL query.
This is great for clean, REST-style API paths while still harnessing GraphQL behind the scenes. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:56px; top:120px; width:610px;">
    <p style="font-size:0.95rem; font-weight:600; color:#03031C; margin:0 0 8px 0;">Response:</p>
    <pre style="margin:0; font-size:0.98rem; line-height:1.82; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; color:#111; background:transparent; white-space:pre;">{
  "data": {
    "country": {
      "code": "NG",
      "name": "Nigeria"
    }
  }
}</pre>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk's persisted query middleware isn't limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk's request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->
