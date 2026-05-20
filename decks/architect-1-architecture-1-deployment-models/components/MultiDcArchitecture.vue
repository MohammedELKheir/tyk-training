<template>
  <svg viewBox="0 0 1400 560" width="100%" height="100%" role="img" aria-label="Hybrid on-premise multi-data-center deployment model architecture">
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

    <rect x="180" y="18" width="1020" height="500" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="200" y="48" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">API OWNER INFRASTRUCTURE</text>

    <rect x="210" y="70" width="290" height="380" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="235" y="100" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">DATA CENTER 1</text>

    <rect x="245" y="112" width="290" height="380" fill="none" stroke="#c8c8c8" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="270" y="470" font-size="16px" fill="#9f9f9f" font-family="Georgia, serif">DATA CENTER 2</text>

    <rect x="280" y="150" width="290" height="380" fill="none" stroke="#c8c8c8" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="305" y="510" font-size="16px" fill="#9f9f9f" font-family="Georgia, serif">DATA CENTER N</text>

    <rect x="610" y="70" width="610" height="380" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="635" y="100" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">MASTER DATA CENTER</text>

    <rect x="900" y="95" width="280" height="170" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />

    <line x1="120" y1="265" x2="245" y2="265" stroke="#666a78" stroke-width="3" />
    <line x1="390" y1="170" x2="390" y2="235" stroke="#666a78" stroke-width="3" />
    <line x1="390" y1="290" x2="390" y2="370" stroke="#666a78" stroke-width="3" />
    <line x1="500" y1="265" x2="650" y2="265" stroke="#666a78" stroke-width="3" />
    <line x1="775" y1="170" x2="775" y2="235" stroke="#666a78" stroke-width="3" />
    <line x1="775" y1="170" x2="900" y2="170" stroke="#666a78" stroke-width="3" />
    <line x1="775" y1="290" x2="775" y2="365" stroke="#666a78" stroke-width="3" />
    <line x1="775" y1="365" x2="925" y2="365" stroke="#666a78" stroke-width="3" />
    <line x1="900" y1="265" x2="1210" y2="265" stroke="#666a78" stroke-width="3" />
    <line x1="1040" y1="265" x2="1040" y2="335" stroke="#666a78" stroke-width="3" />
    <line x1="925" y1="335" x2="900" y2="365" stroke="#666a78" stroke-width="3" />
    <line x1="1145" y1="170" x2="1220" y2="170" stroke="#666a78" stroke-width="3" />
    <line x1="1145" y1="265" x2="1220" y2="265" stroke="#666a78" stroke-width="3" />

    <rect x="20" y="235" width="160" height="60" rx="8" fill="url(#pinkGrad)" />
    <text x="100" y="272" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Consumer</text>

    <rect x="245" y="135" width="210" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="350" y="173" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Redis Secondary</text>

    <rect x="245" y="235" width="210" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="350" y="273" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Gateway</text>

    <rect x="245" y="370" width="210" height="65" rx="8" fill="url(#blueGrad)" />
    <text x="350" y="405" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Upstream</text>
    <text x="350" y="428" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Endpoints</text>

    <rect x="650" y="135" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="760" y="173" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">MongoDB</text>

    <rect x="650" y="235" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="760" y="273" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">MDCB</text>

    <rect x="650" y="365" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="760" y="403" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Redis Primary</text>

    <rect x="925" y="135" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="1035" y="173" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Portal</text>

    <rect x="925" y="235" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="1035" y="273" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Dashboard</text>

    <rect x="925" y="365" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="1035" y="403" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Gateway</text>

    <rect x="1220" y="135" width="170" height="65" rx="8" fill="url(#pinkGrad)" />
    <text x="1305" y="173" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Developer</text>

    <rect x="1220" y="235" width="170" height="65" rx="8" fill="url(#pinkGrad)" />
    <text x="1305" y="273" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Owner</text>
  </svg>
</template>
