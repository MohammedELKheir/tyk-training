<template>
  <svg viewBox="0 0 980 520" width="100%" height="100%" role="img" aria-label="On-premise deployment model architecture">
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

    <rect x="190" y="24" width="680" height="456" rx="0" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="210" y="54" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">API OWNER INFRASTRUCTURE</text>

    <rect x="520" y="180" width="270" height="180" rx="0" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />

    <line x1="160" y1="320" x2="260" y2="320" stroke="#666a78" stroke-width="3" />
    <line x1="410" y1="110" x2="410" y2="170" stroke="#666a78" stroke-width="3" />
    <line x1="410" y1="110" x2="570" y2="110" stroke="#666a78" stroke-width="3" />
    <line x1="650" y1="110" x2="650" y2="180" stroke="#666a78" stroke-width="3" />
    <line x1="410" y1="230" x2="410" y2="280" stroke="#666a78" stroke-width="3" />
    <line x1="410" y1="230" x2="520" y2="230" stroke="#666a78" stroke-width="3" />
    <line x1="410" y1="330" x2="520" y2="330" stroke="#666a78" stroke-width="3" />
    <line x1="410" y1="330" x2="410" y2="390" stroke="#666a78" stroke-width="3" />
    <line x1="790" y1="230" x2="920" y2="230" stroke="#666a78" stroke-width="3" />
    <line x1="790" y1="330" x2="920" y2="330" stroke="#666a78" stroke-width="3" />

    <rect x="40" y="280" width="120" height="46" rx="8" fill="url(#pinkGrad)" />
    <text x="100" y="310" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Consumer</text>

    <rect x="260" y="70" width="150" height="56" rx="8" fill="url(#tealGrad)" />
    <text x="335" y="104" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Pump</text>

    <rect x="260" y="170" width="150" height="56" rx="8" fill="url(#tealGrad)" />
    <text x="335" y="204" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Redis</text>

    <rect x="260" y="280" width="150" height="56" rx="8" fill="url(#tealGrad)" />
    <text x="335" y="314" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Gateway</text>

    <rect x="220" y="390" width="190" height="56" rx="8" fill="url(#blueGrad)" />
    <text x="315" y="424" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Upstream Endpoints</text>

    <rect x="520" y="70" width="170" height="58" rx="8" fill="url(#tealGrad)" />
    <text x="605" y="104" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">MongoDB</text>

    <rect x="560" y="195" width="170" height="58" rx="8" fill="url(#tealGrad)" />
    <text x="645" y="229" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Portal</text>

    <rect x="560" y="295" width="170" height="58" rx="8" fill="url(#tealGrad)" />
    <text x="645" y="329" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Dashboard</text>

    <rect x="920" y="195" width="150" height="58" rx="8" fill="url(#pinkGrad)" />
    <text x="995" y="229" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Developer</text>

    <rect x="920" y="295" width="150" height="58" rx="8" fill="url(#pinkGrad)" />
    <text x="995" y="329" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Owner</text>
  </svg>
</template>
