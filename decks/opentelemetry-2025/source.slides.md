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
title: "Tyk Onboarding: Introduction to OpenTelemetry"
---

<img src="./images/screenshots/slide-001-background.png" style="position:absolute; top:0; left:0; width:980px; height:551px; object-fit:cover;" />

<div style="position:absolute; top:28px; left:28px;">
  <img src="./images/icons/tyk-logo-white.png" style="width:63px; height:32px;" />
</div>

<div style="position:absolute; top:136px; left:74px; width:404px;">
  <h1 style="font-size:2.8rem; font-weight:800; color:white; margin:0; line-height:1.2;">Tyk Onboarding</h1>
</div>

<div style="position:absolute; bottom:60px; left:77px; width:455px;">
  <p style="font-size:1rem; color:rgba(255,255,255,0.9); margin:0;">Rahmat - Sr. Customer Solutions Architect</p>
</div>

---
layout: default
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <h1 style="color:white; font-size:2.5rem; font-weight:bold; margin:0;">Introduction to Open Telemetry</h1>
</div>

<img src="./images/icons/tyk-logo.png" style="position:absolute; bottom:1rem; right:1rem; width:3.5rem; opacity:0.6;" />

---
layout: default
---

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:1;">
    <img src="./images/icons/opentelemetry-logo.png" style="width:306px; height:107px; margin-bottom:0.8rem;" />
    <p style="font-size:0.95rem; line-height:1.7; color:#03031C;">
      Collection of tools to generate and export telemetry data (metrics, logs, and traces)
    </p>
    <p style="font-size:0.95rem; line-height:1.7; color:#03031C;">
      Supported by all major observability vendors and open source tools.
    </p>
    <p style="font-size:0.95rem; line-height:1.7; color:#03031C;">
      Second most popular open source project in the CNCF after Kubernetes with a very active community.
    </p>
  </div>
  <div style="flex:1; display:flex; flex-wrap:wrap; gap:8px; align-content:flex-start; padding-top:0.5rem;">
    <img src="./images/icons/slide-003-Google-Shape;89;p20.png" style="width:42px; height:46px;" />
    <img src="./images/icons/slide-003-Google-Shape;90;p20.png" style="width:104px; height:41px;" />
    <img src="./images/icons/slide-003-Google-Shape;91;p20.png" style="width:84px; height:23px;" />
    <img src="./images/icons/slide-003-Google-Shape;92;p20.png" style="width:116px; height:44px;" />
    <img src="./images/icons/slide-003-Google-Shape;93;p20.png" style="width:58px; height:38px;" />
    <img src="./images/icons/slide-003-Google-Shape;94;p20.png" style="width:109px; height:23px;" />
    <img src="./images/icons/slide-003-Google-Shape;95;p20.png" style="width:104px; height:63px;" />
    <img src="./images/icons/slide-003-Google-Shape;96;p20.png" style="width:70px; height:18px;" />
    <img src="./images/icons/slide-003-Google-Shape;99;p20.png" style="width:99px; height:37px;" />
    <img src="./images/icons/slide-003-Google-Shape;98;p20.png" style="width:80px; height:30px;" />
    <img src="./images/icons/slide-003-Google-Shape;97;p20.png" style="width:63px; height:36px;" />
    <img src="./images/icons/slide-003-Google-Shape;100;p20.png" style="width:42px; height:24px;" />
    <img src="./images/icons/slide-003-Google-Shape;101;p20.png" style="width:74px; height:15px;" />
    <img src="./images/icons/slide-003-Google-Shape;102;p20.png" style="width:74px; height:21px;" />
    <img src="./images/icons/slide-003-Google-Shape;103;p20.png" style="width:74px; height:23px;" />
    <img src="./images/icons/slide-003-Google-Shape;104;p20.png" style="width:80px; height:33px;" />
    <img src="./images/icons/slide-003-Google-Shape;105;p20.png" style="width:86px; height:22px;" />
    <img src="./images/icons/slide-003-Google-Shape;107;p20.png" style="width:103px; height:36px;" />
    <img src="./images/icons/slide-003-Google-Shape;108;p20.png" style="width:99px; height:47px;" />
    <img src="./images/icons/slide-003-Google-Shape;109;p20.png" style="width:83px; height:50px;" />
    <img src="./images/icons/slide-003-Google-Shape;110;p20.png" style="width:111px; height:32px;" />
    <img src="./images/icons/slide-003-Google-Shape;111;p20.png" style="width:103px; height:25px;" />
    <img src="./images/icons/slide-003-Google-Shape;112;p20.png" style="width:96px; height:45px;" />
    <img src="./images/icons/slide-003-Google-Shape;113;p20.png" style="width:92px; height:60px;" />
    <img src="./images/icons/slide-003-Google-Shape;114;p20.png" style="width:135px; height:33px;" />
    <img src="./images/icons/slide-003-Google-Shape;115;p20.png" style="width:135px; height:33px;" />
    <img src="./images/icons/slide-003-Google-Shape;116;p20.png" style="width:135px; height:27px;" />
  </div>
</div>

<!-- Notes: What is OpenTelemetry?
OpenTelemetry is an open-source collection of tools, APIs, and SDKs that enables developers and organizations to generate, collect, and export telemetry data such as metrics, logs, and traces.
Why OpenTelemetry?
Standardized Observability - provides a unified standard for telemetry data across platforms.
Comprehensive Telemetry - supports Metrics, Logs, and Traces.
Second Most Popular CNCF Project after Kubernetes with a very active community. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.5rem;">OpenTracing</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:2;">
    <img src="./images/screenshots/opentracing-flow-main.png" style="width:100%; max-width:612px;" />
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center;">
    <img src="./images/screenshots/opentracing-analytics.png" style="width:100%; max-width:289px;" />
    <p style="font-size:0.8rem; color:#333; margin-top:0.5rem;">Metrics and logs</p>
  </div>
</div>

<div style="display:flex; justify-content:center; margin-top:0.5rem;">
  <div style="text-align:center;">
    <img src="./images/screenshots/metrics-label.png" style="width:175px; height:42px;" />
    <img src="./images/screenshots/tracing-label.png" style="width:175px; height:34px; margin-top:0.3rem;" />
    <p style="font-size:0.8rem; color:#333; margin-top:0.3rem;">Distributed tracing</p>
  </div>
</div>

<img src="./images/icons/slide4-logo.png" style="position:absolute; bottom:1rem; right:1rem; width:3.5rem; opacity:0.6;" />

<!-- Notes: This diagram demonstrates how the Tyk API Gateway integrates with external analytics and observability tools to provide metrics, logs, and traces.
API Client sends requests to the Tyk Gateway.
Gateway stores analytics in Redis.
Pump collects data from Redis and exports to external systems.
Distributed Tracing via OpenTracing and New Relic.
Metrics and Logs via Prometheus, Datadog, ElasticSearch, Splunk. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.5rem;">OpenTelemetry</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:2;">
    <img src="./images/screenshots/otel-flow-main.png" style="width:100%; max-width:612px;" />
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center;">
    <img src="./images/screenshots/otel-analytics.png" style="width:100%; max-width:289px;" />
  </div>
</div>

<div style="display:flex; justify-content:center; align-items:center; margin-top:1rem;">
  <img src="./images/screenshots/otel-collector.png" style="width:119px; height:44px;" />
</div>

<p style="text-align:center; font-size:0.85rem; color:#03031C; margin-top:0.3rem;">Your observability back-end</p>

<img src="./images/icons/slide5-logo.png" style="position:absolute; bottom:1rem; right:1rem; width:3.5rem; opacity:0.6;" />

<!-- Notes: Flow of Data - API Client makes a request to Tyk Gateway.
Telemetry data generated: metrics, logs, and traces collected at this stage.
OpenTelemetry standardizes the export of telemetry data.
Redis: Temporary storage for analytics data.
Pump extracts data and sends to external analytics storage.
OpenTelemetry Collector sends data to observability backends like Prometheus, Elasticsearch, or Jaeger. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">OpenTracing &amp; OpenTelemetry</h2>

<div style="display:flex; gap:2rem;">
  <div style="flex:1;">
    <div style="border-left:4px solid #FFC107; padding-left:12px; margin-bottom:1rem;">
      <p style="font-weight:600; margin:0 0 0.3rem 0; color:#03031C;">OpenTracing</p>
      <ul style="font-size:0.9rem; line-height:1.7; padding-left:1rem; margin:0; color:#333;">
        <li>Vendor-neutral API</li>
        <li>Abstracts tracing implementations</li>
        <li>Jaeger, Zipkin or New Relic</li>
        <li>Focuses only on tracing</li>
        <li>Requires manual instrumentation</li>
      </ul>
    </div>
  </div>
  <div style="flex:1;">
    <div style="border-left:4px solid #8438FA; padding-left:12px;">
      <p style="font-weight:600; margin:0 0 0.3rem 0; color:#03031C;">OpenTelemetry</p>
      <ul style="font-size:0.9rem; line-height:1.7; padding-left:1rem; margin:0; color:#333;">
        <li>Successor to OpenTracing</li>
        <li>Data exported to backends like Datadog, Dynatrace or Elasticsearch</li>
        <li>Comprehensive Framework for collecting traces, metrics and logs</li>
        <li>Supported by CNCF</li>
        <li>Extends capability by collecting metrics and logs</li>
      </ul>
    </div>
  </div>
</div>

<!-- Notes: OpenTracing provides a vendor-neutral API for distributed tracing. It allows developers to abstract tracing implementations like Jaeger, Zipkin, or New Relic. Focuses solely on tracing. Its deprecated.
OpenTelemetry is the successor to OpenTracing. Provides a comprehensive framework for collecting traces, metrics, and logs. Backed by the Cloud Native Computing Foundation (CNCF). -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Traces and Spans</h2>

<div style="display:flex; justify-content:center;">
  <img src="./images/screenshots/traces-spans-diagram.png" style="width:100%; max-width:947px;" />
</div>

<!-- Notes: A trace represents the complete journey of a request as it flows through the system. It connects the end-to-end path from the moment the request enters the system to its final destination.
A span is the smallest unit of a trace. It represents a single operation. Each span captures: a specific operation, start and end times (latency), and metadata such as tags and attributes.
Example: A user makes an API request that travels through Load Balancer, Auth Service, Billing Service, Resource Service. Each service is represented as a span. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">Open Telemetry support in Tyk Gateway</h2>

<table style="width:100%; border-collapse:collapse; font-size:0.95rem;">
  <thead>
    <tr style="border-bottom:2px solid #8438FA;">
      <th style="padding:10px 16px; text-align:left; color:#8438FA; font-weight:bold; width:20%;">Property</th>
      <th style="padding:10px 16px; text-align:left; color:#8438FA; font-weight:bold;">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #ddd;">
      <td style="padding:12px 16px; font-weight:600; color:#03031C;">Version</td>
      <td style="padding:12px 16px; color:#333;">Tyk Gateway 5.2</td>
    </tr>
    <tr style="border-bottom:1px solid #ddd;">
      <td style="padding:12px 16px; font-weight:600; color:#03031C;">License</td>
      <td style="padding:12px 16px; color:#333;">No additional license needed, available for all OSS and commercial users</td>
    </tr>
    <tr style="border-bottom:1px solid #ddd;">
      <td style="padding:12px 16px; font-weight:600; color:#03031C;">Tyk Cloud</td>
      <td style="padding:12px 16px; color:#333;">Only available for self-hosted gateways (self-managed and hybrid gateways). Support for gateways hosted in Tyk Cloud comes with additional license.</td>
    </tr>
    <tr>
      <td style="padding:12px 16px; font-weight:600; color:#03031C;">Deprecation</td>
      <td style="padding:12px 16px; color:#333;">OpenTracing (older version of OTel) is deprecated</td>
    </tr>
  </tbody>
</table>

<!-- Notes: OpenTelemetry is now natively supported in the Tyk Gateway.
Version: Available starting from Tyk Gateway 5.2 onward.
License: No extra cost - available for all OSS and commercial users.
Tyk Cloud: Self-hosted gateways (self-managed and hybrid). Hosted gateways on Tyk Cloud come with additional license.
Deprecation: OpenTracing is deprecated. Teams should transition to OpenTelemetry. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Set up</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:1;">
    <img src="./images/screenshots/setup-api-def.png" style="width:100%; max-width:592px;" />
  </div>
  <div style="flex:1;">
    <img src="./images/screenshots/setup-config.png" style="width:100%; max-width:640px;" />
  </div>
</div>

<!-- Notes: To Enable OpenTelemetry in Tyk Gateway, enable it in the gateway configuration file.
OpenTelemetry is disabled by default. Set TYK_GW_OPENTELEMETRY_ENABLED to true.
Export spans using gRPC protocol to the OpenTelemetry Collector endpoint at localhost:4317.
TYK_GW_OPENTELEMETRY_EXPORTER specifies grpc by default.
TYK_GW_OPENTELEMETRY_ENDPOINT points to the OpenTelemetry Collector.
Enable detailed_tracing to true at API level for specific APIs. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.3rem;">Per default: 1 span per API call</h2>
<p style="font-size:0.95rem; color:#555; margin-bottom:1rem;">detailed_tracing to <code style="background:#f0f0f0; padding:2px 6px; border-radius:4px;">false</code></p>

<div style="display:flex; justify-content:center;">
  <img src="./images/screenshots/default-tracing.png" style="width:100%; max-width:947px;" />
</div>

<!-- Notes: By default, when detailed tracing is set to false, Tyk Gateway generates one parent span per API call.
With detailed_tracing disabled, Tyk generates 2 spans: 1 Parent Span capturing the total lifecycle, and 1 Child Span for upstream service response time.
Attributes include: API Name, API Path, API ID, Organization ID.
This configuration is ideal for lightweight observability where basic insights are sufficient. -->

---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.3rem;">Detailed tracing for troubleshooting</h2>
<p style="font-size:0.95rem; color:#555; margin-bottom:1rem;">detailed_tracing to <code style="background:#f0f0f0; padding:2px 6px; border-radius:4px;">true</code></p>

<div style="display:flex; justify-content:center;">
  <img src="./images/screenshots/detailed-tracing.png" style="width:100%; max-width:896px;" />
</div>

<!-- Notes: With detailed tracing enabled, multiple spans are created - each corresponding to a specific middleware or stage in the request lifecycle.
Middleware spans include: Authentication Middleware, Rate Limiting Middleware, Transformation Middleware, Upstream Communication.
Each span shows duration, sequence of execution, and the exact middleware that may introduce latency.
This provides granular visibility into Tyk's request handling for troubleshooting latency issues. -->
