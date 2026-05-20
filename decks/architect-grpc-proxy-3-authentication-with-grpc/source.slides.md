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
title: "Authentication with gRPC"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; background:linear-gradient(120deg, #7f3df1 0%, #8f35f5 55%, #c214ff 100%); overflow:hidden;">
  <h1 style="margin:-0.45rem 0 0 0; color:#ffffff; font-size:3.08rem; font-weight:800; line-height:1.08; border:0;">Authentication with gRPC</h1>
  <div style="position:absolute; right:0; bottom:0; width:8.85rem; height:5.75rem; background:#07051c; border-top-left-radius:2.15rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:3.45rem; height:auto;" />
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; min-height:100%; padding-right:3.35rem;">
  <h1 style="margin:0; color:#5707d9; font-size:2.16rem; font-weight:800; line-height:1.05; border:0;">Authentication for gRPC APIs in Tyk</h1>

  <div style="margin-top:1.55rem; margin-left:1rem; max-width:50rem; color:#0d1128; font-size:1.01rem; line-height:1.2;">
    <ul style="margin:0; padding-left:1.55rem; list-style-type:disc;">
      <li style="margin:0 0 0.3rem 0; padding-left:0.5rem;">
        <span style="font-size:1.16rem; font-weight:800;">Mutual TLS (mTLS)</span>
        <ul style="margin:0.28rem 0 0 0.18rem; padding-left:1.85rem; list-style-type:circle;">
          <li style="margin:0 0 0.2rem 0; padding-left:0.42rem;">Two-way certificate validation</li>
          <li style="margin:0 0 0.2rem 0; padding-left:0.42rem;">Ideal for secure internal communication</li>
          <li style="margin:0; padding-left:0.42rem;">Configure using standard Tyk Mutual TLS settings</li>
        </ul>
      </li>
      <li style="margin:0.26rem 0 0.3rem 0; padding-left:0.5rem;">
        <span style="font-size:1.16rem; font-weight:800;">Basic Authentication</span>
        <ul style="margin:0.28rem 0 0 0.18rem; padding-left:1.85rem; list-style-type:circle;">
          <li style="margin:0 0 0.2rem 0; padding-left:0.42rem;">Uses username and password encoded in base64</li>
          <li style="margin:0 0 0.2rem 0; padding-left:0.42rem;">Sent in the <span style="font-family:'Courier New', monospace;">Authorization</span> header</li>
          <li style="margin:0; padding-left:0.42rem;">Example: <span style="font-family:'Courier New', monospace;">Authorization: Basic base64(username:password)</span></li>
        </ul>
      </li>
      <li style="margin:0.26rem 0 0 0; padding-left:0.5rem;">
        <span style="font-size:1.16rem; font-weight:800;">Token-Based Authentication</span>
        <ul style="margin:0.28rem 0 0 0.18rem; padding-left:1.85rem; list-style-type:circle;">
          <li style="margin:0 0 0.2rem 0; padding-left:0.42rem;">Sends a bearer token in the Authorization header</li>
          <li style="margin:0 0 0.2rem 0; padding-left:0.42rem;">Example: <span style="font-family:'Courier New', monospace;">Authorization: Bearer your-token</span></li>
          <li style="margin:0; padding-left:0.42rem;">Works seamlessly with Tyk’s policies and API key system</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:8.7rem; height:5.7rem; background:#07051c; border-top-left-radius:2.1rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:3.38rem; height:auto;" />
  </div>
</div>

<!-- Notes: In this section, we’ll look at how Tyk secures gRPC-based services. gRPC is often used for high-performance microservice communication, so securing it is critical. Tyk supports standard authentication mechanisms like Mutual TLS, Basic Auth, and Bearer Tokens.

Mutual TLS, or mTLS, is the most secure way to authenticate clients and servers. Both parties must present valid certificates, and Tyk will validate them. This is excellent for service-to-service authentication in a zero-trust environment.

Basic Authentication is straightforward and supported by most clients. Tyk will decode the base64 string, verify the credentials, and grant access accordingly. It's great for quick testing or legacy system integration.

Token-based auth is what we commonly use for APIs—simple, secure, and scalable. Your gRPC client just needs to attach the token in the header, and Tyk handles the validation based on your configured policies. -->
