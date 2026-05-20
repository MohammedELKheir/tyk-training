<template>
  <svg viewBox="0 0 1400 560" width="100%" height="100%" role="img" aria-label="Hybrid cloud deployment model architecture">
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

    <rect x="210" y="30" width="300" height="470" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="230" y="60" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">API OWNER INFRASTRUCTURE</text>

    <rect x="530" y="30" width="640" height="470" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />
    <text x="550" y="60" font-size="16px" fill="#6a6f7d" font-family="Georgia, serif">TYK INFRASTRUCTURE</text>

    <rect x="840" y="100" width="260" height="190" fill="none" stroke="#6a6f7d" stroke-width="2.5" stroke-dasharray="10 8" />

    <line x1="120" y1="240" x2="240" y2="240" stroke="#666a78" stroke-width="3" />
    <line x1="340" y1="140" x2="340" y2="210" stroke="#666a78" stroke-width="3" />
    <line x1="340" y1="240" x2="340" y2="355" stroke="#666a78" stroke-width="3" />
    <line x1="470" y1="240" x2="560" y2="240" stroke="#666a78" stroke-width="3" />
    <line x1="665" y1="140" x2="665" y2="210" stroke="#666a78" stroke-width="3" />
    <line x1="665" y1="140" x2="840" y2="140" stroke="#666a78" stroke-width="3" />
    <line x1="665" y1="240" x2="665" y2="355" stroke="#666a78" stroke-width="3" />
    <line x1="665" y1="390" x2="840" y2="390" stroke="#666a78" stroke-width="3" />
    <line x1="955" y1="290" x2="955" y2="355" stroke="#666a78" stroke-width="3" />
    <line x1="785" y1="355" x2="840" y2="290" stroke="#666a78" stroke-width="3" />
    <line x1="1098" y1="140" x2="1200" y2="140" stroke="#666a78" stroke-width="3" />
    <line x1="1098" y1="240" x2="1200" y2="240" stroke="#666a78" stroke-width="3" />

    <rect x="20" y="205" width="190" height="60" rx="8" fill="url(#pinkGrad)" />
    <text x="115" y="242" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Consumer</text>

    <rect x="240" y="105" width="230" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="355" y="143" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Redis Secondary</text>

    <rect x="240" y="205" width="230" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="355" y="243" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Gateway</text>

    <rect x="245" y="350" width="220" height="65" rx="8" fill="url(#blueGrad)" />
    <text x="355" y="388" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Upstream Endpoints</text>

    <rect x="560" y="105" width="230" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="675" y="143" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">MongoDB</text>

    <rect x="560" y="205" width="230" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="675" y="243" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">MDCB</text>

    <rect x="560" y="350" width="230" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="675" y="388" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Redis Primary</text>

    <rect x="860" y="105" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="970" y="143" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Portal</text>

    <rect x="860" y="205" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="970" y="243" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Dashboard</text>

    <rect x="860" y="350" width="220" height="65" rx="8" fill="url(#tealGrad)" />
    <text x="970" y="388" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">Gateway</text>

    <rect x="1200" y="105" width="190" height="65" rx="8" fill="url(#pinkGrad)" />
    <text x="1295" y="143" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Developer</text>

    <rect x="1200" y="205" width="190" height="65" rx="8" fill="url(#pinkGrad)" />
    <text x="1295" y="243" text-anchor="middle" font-size="18px" fill="#fff" font-family="Georgia, serif">API Owner</text>
  </svg>
</template>
