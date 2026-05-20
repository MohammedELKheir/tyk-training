---
id: foundation-tyk-components-3-pump/002-tyk-pump-overview-extracts-analytics-from-tyk-gateway-via-redis-reads-re
deck_id: foundation-tyk-components-3-pump
order: 2
slug: tyk-pump-overview-extracts-analytics-from-tyk-gateway-via-redis-reads-re
title: "Tyk Pump Overview Extracts analytics from Tyk Gateway via Redis Reads request/re"
summary: "sponse logs, latencies, errors, etc. Exports to external databases PostgreSQL, MongoDB, Prometheus, ElasticSearch, InfluxDB, and more Enables rich analytics and dashboards View API"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-3-pump/003-tyk-pump-default-data-sink-tyk]
customer_visible: true
notes_visibility: customer-safe
---
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
