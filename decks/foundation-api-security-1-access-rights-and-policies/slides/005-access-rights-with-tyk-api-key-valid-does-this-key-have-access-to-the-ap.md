---
id: foundation-api-security-1-access-rights-and-policies/005-access-rights-with-tyk-api-key-valid-does-this-key-have-access-to-the-ap
deck_id: foundation-api-security-1-access-rights-and-policies
order: 5
slug: access-rights-with-tyk-api-key-valid-does-this-key-have-access-to-the-ap
title: "Access Rights with Tyk • API Key valid? • Does this key have access to the API?"
summary: "Access Rights with Tyk • API Key valid? • Does this key have access to the API?"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-1-access-rights-and-policies/006-define-access-rights-access-rights-are-configured-in-both-api-key-and-po]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="font-size:3rem; line-height:1.02; font-weight:800; color:#5b10d9; margin:0.1rem 0 0 0.12rem; border:0;">Access Rights with Tyk</h1>
  <img src="./public/icons/api-gear.png" style="position:absolute; left:0.25rem; top:3.75rem; width:1.68in;" />
  <div style="position:absolute; left:2.08rem; top:5.25rem; width:1.05in; height:0.03in; background:#6aa84f;"></div>
  <div style="position:absolute; left:1.8rem; top:5.14rem; width:0; height:0; border-top:0.11in solid transparent; border-bottom:0.11in solid transparent; border-right:0.22in solid #6aa84f;"></div>
  <img src="./public/icons/gateway-filter.png" style="position:absolute; left:3.7rem; top:3.55rem; width:1.95in;" />
  <div style="position:absolute; left:6.15rem; top:5.35rem; width:0.95in; height:0.03in; background:#666666;"></div>
  <div style="position:absolute; left:5.9rem; top:5.23rem; width:0; height:0; border-top:0.11in solid transparent; border-bottom:0.11in solid transparent; border-right:0.22in solid #666666;"></div>
  <div style="position:absolute; left:7.55rem; top:2.1rem; display:grid; grid-template-columns:1in 1in 1in; grid-template-rows:1in 1in 1in; column-gap:0.03in; row-gap:0.02in; width:2.7in;">
    <div style="grid-column:2; grid-row:1;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:2;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:2; grid-row:2;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
    <div style="grid-column:3; grid-row:2;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:2; grid-row:3;"><img src="./public/icons/user-purple.png" style="width:0.82in;" /></div>
    <div style="grid-column:1; grid-row:3;"><img src="./public/icons/user-light.png" style="width:0.82in;" /></div>
  </div>
  <div style="position:absolute; left:2.85rem; top:7rem; color:#666666; font-size:0.8rem; line-height:1.22;">
    <div style="display:flex; align-items:flex-start; gap:0.45rem;"><span style="font-size:1.15rem; line-height:1;">•</span><span>API Key valid?</span></div>
    <div style="display:flex; align-items:flex-start; gap:0.45rem;"><span style="font-size:1.15rem; line-height:1;">•</span><span>Does this key have access to the API?</span></div>
  </div>
  <img src="./public/icons/tyk-badge.png" style="position:absolute; right:-1.95rem; bottom:-1.5rem; width:6.15rem;" />
</div>

<!-- Notes: Tyk sits in front of your APIs and enforces access control. For each incoming request, it checks:

For the key validity and whether that key is able to access the API

If both are true, the request is passed through. If not, it is denied. -->
