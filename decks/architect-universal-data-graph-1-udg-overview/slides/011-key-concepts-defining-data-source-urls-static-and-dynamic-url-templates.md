---
id: architect-universal-data-graph-1-udg-overview/011-key-concepts-defining-data-source-urls-static-and-dynamic-url-templates
deck_id: architect-universal-data-graph-1-udg-overview
order: 11
slug: key-concepts-defining-data-source-urls-static-and-dynamic-url-templates
title: "Key Concepts - Defining Data Source URLs Static and Dynamic URL Templates Query."
summary: "people Static URL for retrieving the list of people: https://people-api.dev/people Query.person Uses the id argument dynamically in the URL: https://people-api.dev/people/{{.argume"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/012-key-concepts-defining-data-source-urls-graphql-query-people-id-name-age]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0; color:#5B11D9; font-size:3rem; line-height:0.98; font-weight:900;">Key Concepts - Defining Data Source<br />URLs</h1>
  <div style="display:flex; gap:1.6rem; align-items:flex-start; margin-top:0.2rem;">
    <div style="width:500px;">
      <p style="margin:0 0 0.08rem 0; font-size:0.95rem; font-weight:800;">Static and Dynamic URL Templates</p>
      <ul style="margin:0 0 0.12rem 1rem; padding-left:1rem; font-size:0.78rem;">
        <li><span style="font-size:0.88rem; font-weight:800;">Query.people</span></li>
      </ul>
      <p style="margin:0 0 0.05rem 0; font-size:0.78rem;">Static URL for retrieving the list of people:</p>
      <pre v-pre style="margin:0 0 0.5rem 0; background:transparent; color:#171932; font-size:0.76rem; line-height:1.35; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre-wrap;">https://people-api.dev/people</pre>
      <ul style="margin:0 0 0.12rem 1rem; padding-left:1rem; font-size:0.78rem;">
        <li><span style="font-size:0.88rem; font-weight:800;">Query.person</span></li>
      </ul>
      <p style="margin:0 0 0.05rem 0; font-size:0.78rem;">Uses the <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">id</span> argument dynamically in the URL:</p>
      <pre v-pre style="margin:0 0 0.5rem 0; background:transparent; color:#171932; font-size:0.71rem; line-height:1.32; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre-wrap;">https://people-api.dev/people/{{.arguments.id}}</pre>
      <ul style="margin:0 0 0.12rem 1rem; padding-left:1rem; font-size:0.78rem;">
        <li><span style="font-size:0.88rem; font-weight:800;">Person.driverLicense</span></li>
      </ul>
      <p style="margin:0 0 0.05rem 0; font-size:0.78rem;">Uses data from the parent object via <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">.object</span> placeholder:</p>
      <pre v-pre style="margin:0; background:transparent; color:#171932; font-size:0.66rem; line-height:1.28; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre-wrap;">https://driver-license-api.dev/driver-licenses/{{.object.driverLicenseID}}</pre>
    </div>
    <div style="width:280px; border:3px solid #121533; padding:0.9rem 1rem 0.8rem 1rem; margin-top:0.85rem;">
      <p style="margin:0 0 0.2rem 0; font-size:0.98rem; font-weight:900;">Reminder:</p>
      <ul style="margin:0 0 0 0.9rem; padding-left:1rem; font-size:0.78rem; line-height:1.35;">
        <li>Use <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">.object</span> to reference fields from the parent object.</li>
        <li>Use <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">.arguments</span> to reference query arguments.</li>
      </ul>
    </div>
  </div>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Now that we’ve defined our schema, the next step is to connect each field to the appropriate data source using URLs.
For simple fields like people, you can use a static URL. But when arguments are involved — like the id in person(id: Int!) — you use the .arguments placeholder to inject the argument into the URL.
For nested objects like driverLicense, we want to use a field (driverLicenseID) from the parent object (Person). This is where .object.driverLicenseID comes in — it tells Tyk to use a property from the parent object when forming the request URL. -->
