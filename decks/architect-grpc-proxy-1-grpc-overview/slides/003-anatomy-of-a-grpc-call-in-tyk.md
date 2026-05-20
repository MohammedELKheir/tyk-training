---
id: architect-grpc-proxy-1-grpc-overview/003-anatomy-of-a-grpc-call-in-tyk
deck_id: architect-grpc-proxy-1-grpc-overview
order: 3
slug: anatomy-of-a-grpc-call-in-tyk
title: "Anatomy of a gRPC Call in Tyk"
summary: "• gRPC Call Format: ◦ /google.pubsub.v2.PublisherService/CreateTopic • Always uses HTTP POST • Metadata → HTTP headers • Policies and rewrites apply at method-level granularity Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-1-grpc-overview/004-prerequisites-for-grpc-proxying]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: none
---

<div style="position:absolute; inset:0; background:white; overflow:hidden;">
  <h1 class="tyk-title" style="position:absolute; left:43px; top:24px; margin:0; font-size:38px;">Anatomy of a gRPC Call in Tyk</h1>

  <div style="position:absolute; left:58px; top:124px; width:736px; color:#12162a; font-size:18px; line-height:1.22;">
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>gRPC Call Format:</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:5px; margin-left:46px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span class="tyk-code-inline" style="font-size:0.97em;">/google.pubsub.v2.PublisherService/CreateTopic</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Always uses <span class="tyk-code-inline" style="font-size:0.97em;">HTTP POST</span></span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Metadata → <span class="tyk-code-inline" style="font-size:0.97em;">HTTP headers</span></span></div>
    <div style="display:flex; align-items:flex-start;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Policies and rewrites apply at method-level granularity</span></div>
  </div>

  <div class="tyk-footer-badge" style="right:8px; bottom:7px;"><div class="accent"></div><div class="wordmark">Tyk</div></div>
</div>

<!-- Notes: Let’s break down how gRPC requests are structured.
 Here's an example: /google.pubsub.v2.PublisherService/CreateTopic.
 That’s the full method path, and Tyk can match on it directly.
 All gRPC calls use the POST method, and metadata is passed as HTTP headers. This means everything in the gRPC request—method, service, headers—maps cleanly to the way Tyk operates. -->
