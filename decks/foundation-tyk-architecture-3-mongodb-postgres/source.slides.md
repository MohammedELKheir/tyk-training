---
theme: tyk
layout: cover
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Database: MongoDB & PostgreSQL"
---
<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:100%; text-align:center; color:white; overflow:hidden;">
  <div style="transform:translateY(-0.35rem);">
    <h1 style="font-size:3.35rem; font-weight:800; line-height:0.98; color:white; margin:0; letter-spacing:-0.02em;">Tyk Database:<br/>MongoDB &amp;<br/>PostgreSQL</h1>
    <p style="font-size:0.98rem; line-height:1.4; opacity:0.96; margin:0.95rem auto 0 auto; max-width:720px; color:white;">Understanding the role of Tyk's primary databases and how they support performance and high availability</p>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:111px; height:72px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:0 16px 12px 0; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:64px; display:block;" />
  </div>
</div>

---
layout: default
---
<div style="position:relative; width:100%; height:100%;">
  <div style="display:flex; gap:2rem; align-items:flex-start; margin-top:0.4rem;">
    <div style="flex:1.02;">
      <h1 style="font-size:2rem; font-weight:700; color:#5900CB; margin:0 0 1rem 0;">Tyk &amp; Databases</h1>
      <p style="font-size:1.02rem; font-weight:700; color:#2CA597; margin:0 0 0.35rem 0;">Long-Term Data</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ API definitions/Policies</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ Analytics/Usage Statistics</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ Dashboard User and Access Management</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 1rem 0;">▪ Audit Logs</p>
      <p style="font-size:1.02rem; font-weight:700; color:#2CA597; margin:0 0 0.35rem 0;">Supported Databases</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0 0 0.18rem 0;">▪ PostgreSQL</p>
      <p style="font-size:0.92rem; line-height:1.62; color:#03031C; margin:0;">▪ MongoDB</p>
    </div>
    <div style="flex:1.2; display:flex; justify-content:center; padding-top:0.8rem;">
      <div style="position:relative; width:408px; height:316px; background:#efefef; border:1.2px solid #787878; border-radius:18px; overflow:hidden;">
        <div style="position:absolute; left:66px; top:18px; width:80px; text-align:center; font-size:13px; color:#222;">Redis</div>
        <img src="./public/icons/redis-icon-pptx.png" style="position:absolute; left:74px; top:38px; width:60px; height:60px; object-fit:contain;" />
        <div style="position:absolute; right:58px; top:18px; width:92px; text-align:center; font-size:13px; color:#222;">Database</div>
        <img src="./public/icons/database-icon-pptx.png" style="position:absolute; right:76px; top:36px; width:58px; height:58px; object-fit:contain;" />
        <div style="position:absolute; left:104px; top:102px; width:2px; height:66px; background:#6a6a6a;"></div>
        <div style="position:absolute; right:104px; top:102px; width:2px; height:66px; background:#6a6a6a;"></div>
        <img src="./public/icons/gateway-icon-pptx.png" style="position:absolute; left:86px; top:160px; width:40px; height:68px; object-fit:contain;" />
        <div style="position:absolute; left:56px; top:226px; width:100px; text-align:center; font-size:13px; color:#222;">Gateway</div>
        <img src="./public/icons/dashboard-icon-pptx.png" style="position:absolute; right:76px; top:168px; width:58px; height:58px; object-fit:contain;" />
        <div style="position:absolute; right:36px; top:226px; width:136px; text-align:center; font-size:13px; color:#222;">Dashboard</div>
        <div style="position:absolute; left:126px; top:196px; width:136px; height:2px; background:#6a6a6a;"></div>
        <div style="position:absolute; left:258px; top:192px; width:0; height:0; border-top:5px solid transparent; border-bottom:5px solid transparent; border-left:10px solid #6a6a6a;"></div>
      </div>
    </div>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:111px; height:72px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:0 16px 12px 0; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:64px; display:block;" />
  </div>
</div>
<!-- Notes: Tyk Dashboard requires a database to store and manage various types of data that are essential for its operation and the enhanced features it provides. The database stores API configurations, policies, and user settings. The database is used to store detailed analytics data collected from the Gateway. Information about users, roles, and permissions is stored in the database. The database maintains audit logs of changes made through the Dashboard. Dashboard data store. Used by the Dashboard for data storage. For production environments it is recommended to run MongoDB in a highly available manner. API configurations: stores API configurations, analytics, Dashboard configurations, dashboard users, portal developers, portal configuration, policies, organisations. -->

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

---
layout: default
---
<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="font-size:2.28rem; font-weight:800; color:#5900CB; margin:0 0 0.9rem 0; letter-spacing:-0.02em;">MongoDB</h1>
  <div style="display:flex; gap:1.48rem; align-items:flex-start;">
    <div style="flex:1.1; padding-top:0.06rem;">
      <div style="font-size:0.98rem; line-height:1.24; color:#000; margin:0 0 0.45rem 0;">MongoDB uses Replica Sets for high availability:</div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">Requires a minimum of three separate hosts for high availability</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">All members of Replica Set must be able to communicate with each other</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">Election occurs if Primary becomes inaccessible</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0 0 0.13rem 0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">Members can have different priorities, to determine the new Primary</div>
      </div>
      <div style="display:flex; align-items:flex-start; gap:0.7rem; margin:0;">
        <div style="font-size:1.55rem; line-height:1; color:#000; margin-top:0.06rem;">•</div>
        <div style="font-size:0.92rem; line-height:1.24; color:#000;">A majority of Replica Set members are required for an election</div>
      </div>
    </div>
    <div style="flex:0.98; display:flex; align-items:center; justify-content:center; padding-top:0.2rem;">
      <img src="./public/screenshots/mongodb-replica-set.png" style="width:100%; max-width:414px;" />
    </div>
  </div>
  <div style="position:absolute; right:0; bottom:0; width:111px; height:72px; background:#000; border-top-left-radius:30px; display:flex; align-items:flex-end; justify-content:flex-end; padding:0 16px 12px 0; box-sizing:border-box;">
    <img src="./public/icons/tyk-logo.png" style="width:64px; display:block;" />
  </div>
</div>
<!-- Notes: MongoDB uses what it calls Replica Sets to enable high availability deployments. These deployments must consist of at least three hosts in order to be highly available. All members of the Replica Set must be able to communicate with each other to maintain a heartbeat. If the Primary member becomes inaccessible, then a new primary is elected from the remaining members. Members can be given a priority to determine which member is elected the new Primary. A majority of members are required to hold an election. -->