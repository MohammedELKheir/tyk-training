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
title: "Hands-On: Onboarding a GraphQL API"
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Hands-On</h1>
  <p style="font-size:0.95rem; color:#20EDBA; font-weight:bold; text-align:center; max-width:600px; margin-top:1rem;">Onboarding a GraphQL API</p>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; bottom:1.5rem; right:1.5rem; width:6rem; opacity:0.8;" />
</div>

---
layout: default
---

<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Onboarding a GraphQL API</h1>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.4; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <p style="margin-top:0;">Like a REST API, you can onboard via the Dashboard UI, Dashboard API or Gateway API for OSS</p>
    <p style="font-weight:bold; margin-top:0.8rem;">Steps:</p>
    <ol style="padding-left:1.2rem; margin-top:0.3rem;">
      <li>Go to System Management → APIs</li>
      <li>Click Add New API</li>
      <li>Fill out Base Configuration:
        <ul style="padding-left:1rem; margin-top:0.2rem;">
          <li>Name, Type = GraphQL</li>
          <li>Target URL (e.g. https://countries.trevorblades.com/)</li>
        </ul>
      </li>
      <li>Click Configure API</li>
      <li>Choose Authentication Mode (e.g. Auth Token)</li>
      <li>Click SAVE – Your GraphQL API is now active and secured.</li>
      <li>Go to 'Playgrounds'</li>
      <li>Send the following query:</li>
    </ol>
  </div>

  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:14px 18px; align-self:flex-start;">
    <p style="color:#8438FA; font-size:0.75rem; font-weight:600; margin:0 0 6px 0;">GraphQL Query</p>
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">query {
  countries {
    code
    name
    emoji
  }
}</pre>
  </div>
</div>

<!-- Notes: query {
  countries {
    code
    name
    emoji
  }
} -->
