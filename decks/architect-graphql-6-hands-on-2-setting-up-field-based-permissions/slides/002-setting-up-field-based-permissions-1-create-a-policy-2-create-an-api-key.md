---
id: architect-graphql-6-hands-on-2-setting-up-field-based-permissions/002-setting-up-field-based-permissions-1-create-a-policy-2-create-an-api-key
deck_id: architect-graphql-6-hands-on-2-setting-up-field-based-permissions
order: 2
slug: setting-up-field-based-permissions-1-create-a-policy-2-create-an-api-key
title: "Setting Up Field Based Permissions 1. Create a policy 2. Create an API Key with"
summary: "policy 3. Set up blocklist on the Country Type field 4. Use the Playground and add the header as a json: { “Authorization”: “API-KEY” } 1. Make the query: query { countries { code"
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

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#0b0d26; font-family:Arial, Helvetica, sans-serif;">
  <div style="position:absolute; left:86px; top:38px; margin:0; font-size:42px; line-height:1.02; font-weight:800; letter-spacing:-0.03em; color:#5B10D8; white-space:nowrap;">Setting Up Field Based Permissions</div>

  <div style="position:absolute; left:98px; top:138px; width:536px; color:#0b0d26;">
    <div style="display:flex; align-items:flex-start; margin-bottom:17px;"><div style="width:34px; font-size:17px; line-height:1.2;">1.</div><div style="font-size:17px; line-height:1.2;">Create a policy</div></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:17px;"><div style="width:34px; font-size:17px; line-height:1.2;">2.</div><div style="font-size:17px; line-height:1.2;">Create an API Key with policy</div></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:17px;"><div style="width:34px; font-size:17px; line-height:1.2;">3.</div><div style="font-size:17px; line-height:1.2;">Set up blocklist on the <span style="font-family:'Courier New', Courier, monospace; font-size:1.02em;">Country</span> Type field</div></div>
    <div style="display:flex; align-items:flex-start;"><div style="width:34px; font-size:17px; line-height:1.2;">4.</div><div style="font-size:17px; line-height:1.2;">Use the Playground and add the header as a json:</div></div>
  </div>

  <pre style="position:absolute; left:170px; top:284px; margin:0; font-size:16px; line-height:1.56; color:#202020; background:transparent; font-family:'Courier New', Courier, monospace; white-space:pre;">{
  “Authorization”: “API-KEY”
}</pre>

  <div style="position:absolute; left:98px; top:430px; display:flex; align-items:flex-start; color:#0b0d26;"><div style="width:34px; font-size:17px; line-height:1.2;">1.</div><div style="font-size:17px; line-height:1.2;">Make the query:</div></div>

  <div style="position:absolute; left:608px; top:128px; width:362px; height:300px; border:1.4px solid #2a2a2a; box-sizing:border-box; background:white;">
    <pre style="margin:15px 21px; font-size:16px; line-height:1.88; color:#171717; font-family:'Courier New', Courier, monospace; white-space:pre;">query {
  countries {
    code
    name
    emoji
  }
}</pre>
  </div>

  <div style="position:absolute; right:-34px; bottom:-28px; width:138px; height:106px; background:#000000; border-top-left-radius:40px; overflow:hidden;">
    <div style="position:absolute; left:20px; bottom:18px; width:14px; height:14px; background:#22E5BE; border-top-left-radius:3px; border-top-right-radius:7px; border-bottom-right-radius:3px; border-bottom-left-radius:12px;"></div>
    <div style="position:absolute; left:39px; bottom:12px; color:white; font-size:34px; line-height:1; font-weight:800; letter-spacing:-0.08em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: query {
  countries {
    code
    name
    emoji
  }
} -->
