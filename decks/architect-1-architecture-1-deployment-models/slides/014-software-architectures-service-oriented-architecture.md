---
id: architect-1-architecture-1-deployment-models/014-software-architectures-service-oriented-architecture
deck_id: architect-1-architecture-1-deployment-models
order: 14
slug: software-architectures-service-oriented-architecture
title: "Software Architectures: Service Oriented Architecture"
summary: "Services are discrete units of functionality Centralised Gateway manages all traffic between consumers and services Gateway implements common controls, such as authentication, auth"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-1-architecture-1-deployment-models/015-software-architectures-microservices]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#0b1020; margin-bottom:0.9rem;">Software Architectures: Service Oriented Architecture</h1>

<div style="display:flex; gap:1.4rem; align-items:flex-start; margin-top:0.4rem;">
  <div style="flex:1.33; font-size:1.05rem; color:#111827; line-height:1.82;">
    <ul style="padding-left:1.25rem; margin:0; list-style:disc;">
      <li><strong>Services are discrete units of functionality</strong></li>
      <li><strong>Centralised Gateway manages all traffic between consumers and services</strong></li>
      <li><strong>Gateway implements common controls, such as authentication, authorisation, rate limiting and quotas</strong></li>
      <li><strong>Service Discovery used to locate services</strong></li>
    </ul>
  </div>
  <div style="flex:0.82; display:flex; justify-content:center; align-items:flex-start; padding-top:0.2rem;">
    <img src="./public/screenshots/slide-014-Google-Shape;332;p27.png" style="max-width:100%; max-height:360px; object-fit:contain;" />
  </div>
</div>

<!-- Notes: The next step from monoliths are service oriented architectures (or SOA). This technique breaks applications into separate services, which perform discrete units of functionality. These units are designed to be accessed remotely, creating interconnected systems and services which are dependant on each other.
In this scenario the Gateway manages traffic between both consumers and the services themselves.
Since SOA promotes an increased number of applications communicating over the network, there is greater benefit in implementing common functionality at the API Gateway level, such as authentication, authorisation, rate limiting and quotas.
The Gateway can use Service Discovery to automatically adapt to changes in the services to which it is proxying. -->
