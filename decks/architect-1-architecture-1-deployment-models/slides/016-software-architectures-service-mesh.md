---
id: architect-1-architecture-1-deployment-models/016-software-architectures-service-mesh
deck_id: architect-1-architecture-1-deployment-models
order: 16
slug: software-architectures-service-mesh
title: "Software Architectures: Service Mesh"
summary: "Services are paired with Sidecar Gateways Deployed within the same container Controlled by 3rd party tooling, such as Istio Ingress Gateway controlled by Tyk Benefits for Service M"
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

<h1 style="font-size:2rem; font-weight:800; color:#0b1020; margin-bottom:0.9rem;">Software Architectures: Service Mesh</h1>

<div style="display:flex; gap:1.3rem; align-items:flex-start; margin-top:0.3rem;">
  <div style="flex:1.28; font-size:0.98rem; color:#111827; line-height:1.66;">
    <ul style="padding-left:1.25rem; margin:0; list-style:disc;">
      <li><strong>Services are paired with Sidecar Gateways</strong>
        <ul style="padding-left:1.2rem; margin-top:0.2rem;">
          <li>Deployed within the same container</li>
          <li>Controlled by 3rd party tooling, such as Istio</li>
        </ul>
      </li>
      <li><strong>Ingress Gateway controlled by Tyk</strong></li>
      <li><strong>Benefits for Service Mesh architectures:</strong>
        <ul style="padding-left:1.2rem; margin-top:0.2rem;">
          <li>Automation of traffic flows</li>
          <li>Centralised policy enforcement and monitoring</li>
        </ul>
      </li>
    </ul>
  </div>
  <div style="flex:0.9; display:flex; justify-content:center; align-items:flex-start; padding-top:0.1rem;">
    <img src="./public/screenshots/slide-016-Google-Shape;346;p29.png" style="max-width:100%; max-height:355px; object-fit:contain;" />
  </div>
</div>

<!-- Notes: Service mesh is a variant of the microservices approach. It adds additional Gateways, called Sidecar Gateways, which are paired with Services.
This approach is often deployed with container orchestration and service mesh tooling, such as Kubernetes and Istio, with each Sidecar Gateway and Service pair deployed into the same container.
Tyk’s part of this architecture is as the Ingress Gateway, controlling access into the service mesh from external API Clients.
The benefit of a service mesh architecture is that it automates how traffic flows over the network. The Sidecar Gateways handle all the routing and authentication between services, so this information does not need to be included in the Service’s logic, making them simpler. The tooling around the service mesh also gives centralised policy enforcement and monitoring services, which are especially useful when dealing with large quantities of services. -->
