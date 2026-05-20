---
id: architect-1-architecture-1-deployment-models/015-software-architectures-microservices
deck_id: architect-1-architecture-1-deployment-models
order: 15
slug: software-architectures-microservices
title: "Software Architectures: Microservices"
summary: "Architecturally similar to SOA, but services are decomposed to a smaller scope Higher interconnectivity between systems Benefits for Microservice architectures: Distributed tracing"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-1-architecture-1-deployment-models/016-software-architectures-service-mesh]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#0b1020; margin-bottom:0.9rem;">Software Architectures: Microservices</h1>

<div style="display:flex; gap:1.3rem; align-items:flex-start; margin-top:0.35rem;">
  <div style="flex:1.3; font-size:0.98rem; color:#111827; line-height:1.62;">
    <ul style="padding-left:1.25rem; margin:0; list-style:disc;">
      <li><strong>Architecturally similar to SOA, but services are decomposed to a smaller scope</strong></li>
      <li><strong>Higher interconnectivity between systems</strong></li>
      <li><strong>Benefits for Microservice architectures:</strong>
        <ul style="padding-left:1.2rem; margin-top:0.2rem;">
          <li>Distributed tracing</li>
          <li>Centralised logging</li>
          <li>Centralised analytics</li>
          <li>Access control</li>
        </ul>
      </li>
    </ul>
  </div>
  <div style="flex:0.9; display:flex; justify-content:center; align-items:flex-start; padding-top:0.15rem;">
    <img src="./public/screenshots/slide-015-Google-Shape;339;p28.png" style="max-width:100%; max-height:355px; object-fit:contain;" />
  </div>
</div>

<!-- Notes: Microservices are a variant of the SOA approach, but the services have a smaller scope, with lightweight protocols and data formats. A single application may contain tens, hundreds or thousands of individual services.
This results in higher interconnectivity between systems and reliance on the network.
The increased number of systems and connections can present problems, which the API Gateway can solve:
Tracing of traffic between services
Centralised application logging
Centralised usage analytics
Access control between services -->
