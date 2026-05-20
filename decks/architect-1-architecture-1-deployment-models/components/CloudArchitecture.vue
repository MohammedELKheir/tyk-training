<template>
  <svg viewBox="0 0 1180 560" width="100%" height="100%" role="img" aria-label="Cloud deployment model architecture">
    <defs>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1e9bb2" />
        <stop offset="100%" stop-color="#16d4c0" />
      </linearGradient>
      <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d92762" />
        <stop offset="100%" stop-color="#ff1250" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#232e8d" />
        <stop offset="100%" stop-color="#2f3eb4" />
      </linearGradient>
    </defs>

    <rect x="180" y="30" width="760" height="470" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="200" y="60" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">TYK INFRASTRUCTURE</text>

    <rect x="640" y="56" width="300" height="270" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="665" y="90" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">AUTO SCALING</text>

    <rect x="310" y="312" width="280" height="145" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="335" y="344" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">AUTO SCALING</text>

    <rect x="965" y="350" width="220" height="120" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="987" y="380" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">API OWNER INFRASTRUCTURE</text>

    <line x1="120" y1="400" x2="210" y2="400" stroke="#666a78" stroke-width="3" />
    <line x1="315" y1="125" x2="315" y2="225" stroke="#666a78" stroke-width="3" />
    <line x1="315" y1="125" x2="510" y2="125" stroke="#666a78" stroke-width="3" />
    <line x1="510" y1="125" x2="640" y2="125" stroke="#666a78" stroke-width="3" />
    <line x1="510" y1="225" x2="640" y2="225" stroke="#666a78" stroke-width="3" />
    <line x1="315" y1="225" x2="315" y2="312" stroke="#666a78" stroke-width="3" />
    <line x1="315" y1="312" x2="450" y2="312" stroke="#666a78" stroke-width="3" />
    <line x1="180" y1="400" x2="310" y2="400" stroke="#666a78" stroke-width="0" />
    <line x1="210" y1="400" x2="310" y2="400" stroke="#666a78" stroke-width="3" />
    <line x1="590" y1="400" x2="960" y2="400" stroke="#666a78" stroke-width="3" />
    <line x1="740" y1="225" x2="740" y2="312" stroke="#666a78" stroke-width="3" />
    <line x1="740" y1="312" x2="590" y2="312" stroke="#666a78" stroke-width="3" />
    <line x1="870" y1="125" x2="965" y2="125" stroke="#666a78" stroke-width="3" />
    <line x1="870" y1="225" x2="965" y2="225" stroke="#666a78" stroke-width="3" />

    <rect x="20" y="365" width="190" height="60" rx="8" fill="url(#pinkGrad)" />
    <text x="115" y="402" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Consumer</text>

    <rect x="210" y="90" width="210" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="315" y="128" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Pump</text>

    <rect x="210" y="195" width="210" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="315" y="233" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Redis Cluster</text>

    <rect x="210" y="365" width="210" height="60" rx="8" fill="url(#tealGrad)" />
    <text x="315" y="402" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Load Balancer</text>

    <rect x="335" y="365" width="180" height="60" rx="8" fill="url(#tealGrad)" />
    <text x="425" y="402" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Gateway</text>

    <rect x="470" y="90" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="580" y="118" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">MongoDB Replica</text>
    <text x="580" y="142" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Set</text>

    <rect x="665" y="88" width="225" height="68" rx="8" fill="url(#tealGrad)" />
    <text x="777" y="127" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Portal</text>

    <rect x="665" y="195" width="225" height="68" rx="8" fill="url(#tealGrad)" />
    <text x="777" y="234" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Dashboard</text>

    <rect x="995" y="88" width="180" height="68" rx="8" fill="url(#pinkGrad)" />
    <text x="1085" y="127" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Developer</text>

    <rect x="995" y="195" width="180" height="68" rx="8" fill="url(#pinkGrad)" />
    <text x="1085" y="234" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Owner</text>

    <rect x="985" y="385" width="190" height="60" rx="8" fill="url(#blueGrad)" />
    <text x="1080" y="422" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Upstream Endpoints</text>
  </svg>
</template>
