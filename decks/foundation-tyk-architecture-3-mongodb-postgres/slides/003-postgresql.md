---
id: foundation-tyk-architecture-3-mongodb-postgres/003-postgresql
deck_id: foundation-tyk-architecture-3-mongodb-postgres
order: 3
slug: postgresql
title: "PostgreSQL"
summary: "• Combination of streaming replication, Patroni & Etcd for automated failover • HAProxy for load balancing: ○ Continuous Synchronization by streaming write-ahead logs (WAL) from pr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-3-mongodb-postgres/004-mongodb]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---
<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="font-size:2.28rem; font-weight:800; color:#5900CB; margin:0 0 0.85rem 0; letter-spacing:-0.02em;">PostgreSQL</h1>
  <div style="display:flex; gap:1.5rem; align-items:flex-start;">
    <div style="flex:1.14; padding-top:0.04rem;">
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.22rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.96rem; line-height:1.22; color:#000;">Combination of streaming replication, Patroni &amp; Etcd for automated failover</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.08rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.96rem; line-height:1.22; color:#000;">HAProxy for load balancing:</div>
      </div>
      <div style="padding-left:2.05rem;">
        <div style="display:flex; align-items:flex-start; gap:0.58rem; margin:0 0 0.12rem 0;">
          <div style="font-size:1.05rem; line-height:1; color:#000; margin-top:0.14rem;">○</div>
          <div style="font-size:0.86rem; line-height:1.24; color:#000;">Continuous Synchronization by streaming write-ahead logs (WAL) from primary to standby nodes</div>
        </div>
        <div style="display:flex; align-items:flex-start; gap:0.58rem; margin:0 0 0.06rem 0;">
          <div style="font-size:1.05rem; line-height:1; color:#000; margin-top:0.14rem;">○</div>
          <div style="font-size:0.9rem; line-height:1.2; color:#000;">HAProxy</div>
        </div>
        <div style="padding-left:1.65rem;">
          <div style="display:flex; align-items:flex-start; gap:0.42rem; margin:0 0 0.06rem 0;">
            <div style="font-size:0.82rem; line-height:1; color:#000; margin-top:0.24rem;">■</div>
            <div style="font-size:0.83rem; line-height:1.22; color:#000;">Monitors health of servers via Patroni (Primary &amp; Standby)</div>
          </div>
          <div style="display:flex; align-items:flex-start; gap:0.42rem; margin:0 0 0.12rem 0;">
            <div style="font-size:0.82rem; line-height:1; color:#000; margin-top:0.24rem;">■</div>
            <div style="font-size:0.83rem; line-height:1.22; color:#000;">Distributes incoming database connections</div>
          </div>
        </div>
        <div style="display:flex; align-items:flex-start; gap:0.58rem; margin:0 0 0.06rem 0;">
          <div style="font-size:1.05rem; line-height:1; color:#000; margin-top:0.14rem;">○</div>
          <div style="font-size:0.9rem; line-height:1.2; color:#000;">Etcd acts as a distributed key-value store for configuration management</div>
        </div>
        <div style="display:flex; align-items:flex-start; gap:0.58rem; margin:0 0 0.06rem 0;">
          <div style="font-size:1.05rem; line-height:1; color:#000; margin-top:0.14rem;">○</div>
          <div style="font-size:0.9rem; line-height:1.2; color:#000;">Patroni</div>
        </div>
        <div style="padding-left:1.65rem;">
          <div style="display:flex; align-items:flex-start; gap:0.42rem; margin:0 0 0.06rem 0;">
            <div style="font-size:0.82rem; line-height:1; color:#000; margin-top:0.24rem;">■</div>
            <div style="font-size:0.83rem; line-height:1.22; color:#000;">Manages failover and PostgreSQL cluster management, monitors health of servers &amp; checking status &amp; connectivity</div>
          </div>
          <div style="display:flex; align-items:flex-start; gap:0.42rem; margin:0;">
            <div style="font-size:0.82rem; line-height:1; color:#000; margin-top:0.24rem;">■</div>
            <div style="font-size:0.83rem; line-height:1.22; color:#000;">Orchestrates standby promotion if there are issues detected on primary server</div>
          </div>
        </div>
      </div>
    </div>
    <div style="flex:0.97; display:flex; align-items:center; justify-content:center; padding-top:0.24rem;">
      <img src="./public/screenshots/postgresql-ha-architecture.png" style="width:100%; max-width:392px;" />
    </div>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:111px; height:72px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:0 16px 12px 0; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:64px; display:block;" />
  </div>
</div>
<!-- Notes: To ensure high availability in a PostgreSQL setup, we can use a combination of streaming replication, Patroni, Etcd, and HAProxy. Note that you may have a different way of achieving this and this is solely for informational purposes. Streaming replication enables continuous synchronization between the primary and standby PostgreSQL nodes by streaming the write-ahead logs. Patroni manages the PostgreSQL cluster, handling failovers, and monitoring the health and connectivity of both primary and standby nodes. Etcd acts as a distributed key-value store and maintains the cluster state. HAProxy plays the role of a load balancer monitoring server health via Patroni. -->
