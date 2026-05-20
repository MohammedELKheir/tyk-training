---
id: architect-1-architecture-1-deployment-models/013-software-architectures-monolith
deck_id: architect-1-architecture-1-deployment-models
order: 13
slug: software-architectures-monolith
title: "Software Architectures: Monolith"
summary: "Monoliths are self-contained systems API Gateway enables communication between consumers and monolithic applications Transformation of protocols and data Integration with legacy ap"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-1-architecture-1-deployment-models/014-software-architectures-service-oriented-architecture]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#0b1020; margin-bottom:0.9rem;">Software Architectures: Monolith</h1>

<div style="display:flex; gap:1.6rem; align-items:flex-start; margin-top:0.4rem;">
  <div style="flex:1.25; font-size:1.12rem; color:#111827; line-height:1.9;">
    <ul style="padding-left:1.25rem; margin:0; list-style:disc;">
      <li><strong>Monoliths are self-contained systems</strong></li>
      <li><strong>API Gateway enables communication between consumers and monolithic applications</strong></li>
      <li><strong>Transformation of protocols and data</strong></li>
      <li><strong>Integration with legacy applications</strong></li>
    </ul>
  </div>
  <div style="flex:0.82; display:flex; justify-content:center; align-items:flex-start; padding-top:0.25rem;">
    <img src="./public/screenshots/slide-013-Google-Shape;325;p26.png" style="max-width:100%; max-height:360px; object-fit:contain;" />
  </div>
</div>

<!-- Notes: Monoliths contain all of their functionality within a single, self-contained application.
Since monoliths are single applications, they typically do not have any requirements for intra-service communication. However, they may need to communicate with other monoliths or, more commonly, have external systems communicate with them. In these scenarios, the API Gateway can provide the typical API Gateway functionality of authentication and authorisation.
In addition to this, for older monolithic applications which do not support modern protocols or data formats, the Gateway can provide protocol and data transformation to make it easier to access and work with them.
The Gateway can also utilise custom middleware to provide a means of integrating with legacy applications, which would have otherwise operated within a silo. -->
