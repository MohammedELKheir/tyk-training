---
theme: tyk
layout: none
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Product Components: Pump"
---

<div style="position:relative; width:100%; min-height:552px; color:white; overflow:hidden; background:linear-gradient(135deg, #7c3cff 0%, #9137ff 40%, #bb11ff 100%); display:flex; align-items:center; justify-content:center;">
  <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; transform:translateY(-2px);">
    <h1 style="margin:0; text-align:center; font-size:3.2rem; line-height:1.06; font-weight:800; letter-spacing:-0.03em; color:white;">Tyk Product<br />Components: Pump</h1>
    <p style="margin:1.1rem 0 0; font-size:0.78rem; color:white; opacity:0.96; text-align:center;">Exploring the role of each component in the Tyk Ecosystem</p>
  </div>
  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; width:86px; height:42px; background:#050505; border-top-left-radius:18px; display:flex; align-items:center; justify-content:center; gap:5px; padding-left:10px; padding-right:8px; box-sizing:border-box;">
    <div style="width:8px; height:8px; background:#19e6c1; border-radius:2px 0 2px 2px;"></div>
    <div style="font-size:1.26rem; line-height:1; font-weight:700; color:white; letter-spacing:-0.04em; font-family:Inter, ui-sans-serif, system-ui, sans-serif;">Tyk</div>
  </div>
</div>

---
layout: none
---

<div style="position:relative; width:100%; height:100%; padding:2.25rem 4.9rem 1.3rem 4.8rem; color:#111; overflow:hidden; background:white;">
  <h1 style="margin:0 0 1rem; color:#6513db; font-size:2.65rem; line-height:1.03; font-weight:800; letter-spacing:-0.04em;">Tyk Pump Overview</h1>

  <div style="font-size:0.82rem; line-height:1.16; color:#111; max-width:610px;">
    <ul style="margin:0; padding-left:1.25rem; list-style-type:disc;">
      <li style="margin-bottom:0.85rem; padding-left:0.18rem;">
        <span>Extracts analytics from Tyk Gateway via Redis</span>
        <ul style="margin:0.1rem 0 0; padding-left:1.45rem; list-style-type:circle;">
          <li>Reads request/response logs, latencies, errors, etc.</li>
        </ul>
      </li>
      <li style="margin-bottom:0.85rem; padding-left:0.18rem;">
        <span>Exports to external databases</span>
        <ul style="margin:0.1rem 0 0; padding-left:1.45rem; list-style-type:circle;">
          <li>PostgreSQL, MongoDB, Prometheus, ElasticSearch, InfluxDB, and more</li>
        </ul>
      </li>
      <li style="margin-bottom:0.85rem; padding-left:0.18rem;">
        <span>Enables rich analytics and dashboards</span>
        <ul style="margin:0.1rem 0 0; padding-left:1.45rem; list-style-type:circle;">
          <li>View API usage and visualizations on the Tyk Dashboard</li>
          <li>Visualize API usage with tools like Grafana or Kibana</li>
        </ul>
      </li>
      <li style="margin-bottom:0.85rem; padding-left:0.18rem;">
        <span>Runs as a lightweight background service</span>
        <ul style="margin:0.1rem 0 0; padding-left:1.45rem; list-style-type:circle;">
          <li>Doesn’t slow down the Gateway</li>
        </ul>
      </li>
      <li style="padding-left:0.18rem;">
        <span>Flexible &amp; pluggable</span>
        <ul style="margin:0.1rem 0 0; padding-left:1.45rem; list-style-type:circle;">
          <li>Choose one or multiple outputs</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; width:86px; height:42px; background:#050505; border-top-left-radius:18px; display:flex; align-items:center; justify-content:center; gap:5px; padding-left:10px; padding-right:8px; box-sizing:border-box;">
    <div style="width:8px; height:8px; background:#19e6c1; border-radius:2px 0 2px 2px;"></div>
    <div style="font-size:1.26rem; line-height:1; font-weight:700; color:white; letter-spacing:-0.04em; font-family:Inter, ui-sans-serif, system-ui, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk Pump is a lightweight component that handles the export of analytics data from the Tyk Gateway via Redis.
It extracts request and response logs from Redis—along with data like latency, errors, and traffic volume—without impacting Gateway performance.
Once the data is collected, Tyk Pump exports it to external databases for storage and visualization. Supported outputs include PostgreSQL, MongoDB, Prometheus, ElasticSearch, InfluxDB, and more.
This allows you to view analytics and visualizations on the Tyk Dashboard and also use tools like Grafana or Kibana, giving you full visibility into how your APIs are performing.
Tyk Pump is flexible and pluggable, meaning you can configure it to export to one or multiple destinations depending on your observability stack.
And because it runs independently of the Gateway, it ensures your analytics pipeline doesn’t interfere with traffic processing. -->

---
layout: none
---

<div style="position:relative; width:100%; height:100%; padding:2.25rem 4.4rem 1.2rem; color:#111; overflow:hidden; background:white;">
  <h1 style="margin:0 0 0.25rem; color:#6513db; font-size:2.55rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em;">Tyk Pump: Default Data Sink</h1>
  <div style="margin-top:0.1rem; display:flex; justify-content:center;">
    <div style="width:690px; height:250px; overflow:hidden;">
      <div style="width:1000px; transform:scale(0.67); transform-origin:top left;">
        <TykPumpFlow />
      </div>
    </div>
  </div>
  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; width:86px; height:42px; background:#050505; border-top-left-radius:18px; display:flex; align-items:center; justify-content:center; gap:5px; padding-left:10px; padding-right:8px; box-sizing:border-box;">
    <div style="width:8px; height:8px; background:#19e6c1; border-radius:2px 0 2px 2px;"></div>
    <div style="font-size:1.26rem; line-height:1; font-weight:700; color:white; letter-spacing:-0.04em; font-family:Inter, ui-sans-serif, system-ui, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: By default, Tyk Pump will push analytics to either PostgreSQL or MongoDB. Since the Tyk Dashboard uses Postgres or MongoDB, this allows the Tyk Dashboard to display API usage reports and visualizations. -->

---
layout: none
---

<div style="position:relative; width:100%; height:100%; padding:2.2rem 4.4rem 1.2rem; color:#111; overflow:hidden; background:white;">
  <h1 style="margin:0 0 -0.05rem; max-width:620px; color:#6513db; font-size:2.55rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em;">Tyk Pump: Third party Data<br />Sink</h1>
  <div style="margin-top:-0.2rem; display:flex; justify-content:center;">
    <div style="width:690px; height:250px; overflow:hidden;">
      <div style="width:1000px; transform:scale(0.67); transform-origin:top left;">
        <TykPumpFlow
          :third-party="true"
          :sinks="[
            { label: 'DataDog', icon: '/icons/datadog-icon.png', x: 786, y: 34, width: 92, height: 92 },
            { label: 'Database', icon: '/icons/database-icon.png', x: 798, y: 196, width: 102, height: 102 },
            { label: 'ElasticSearch', icon: '/icons/elasticsearch-icon.png', x: 788, y: 326, width: 92, height: 92 }
          ]"
        />
      </div>
    </div>
  </div>
  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; width:86px; height:42px; background:#050505; border-top-left-radius:18px; display:flex; align-items:center; justify-content:center; gap:5px; padding-left:10px; padding-right:8px; box-sizing:border-box;">
    <div style="width:8px; height:8px; background:#19e6c1; border-radius:2px 0 2px 2px;"></div>
    <div style="font-size:1.26rem; line-height:1; font-weight:700; color:white; letter-spacing:-0.04em; font-family:Inter, ui-sans-serif, system-ui, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk Pump also allows you to push analytics data from Redis to multiple data sinks. Here in the diagram, we have configured Pump to push analytics data into 3 different data sinks - DataDog, ElasticSearch and a DB that the Dashboard uses. This allows different teams or different features of each of those data sinks to meet the different analytics use cases you may have -->
