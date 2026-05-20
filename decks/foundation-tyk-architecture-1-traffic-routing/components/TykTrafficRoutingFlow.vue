<template>
  <div style="position: relative; width: 520px; height: 430px;">
    <svg viewBox="0 0 520 430" style="position:absolute; inset:0; width:100%; height:100%; overflow:visible;">
      <defs>
        <marker id="arrow-head-right" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L10,4 L0,8 z" fill="#6a6a6a" />
        </marker>
        <marker id="arrow-head-left" markerWidth="10" markerHeight="8" refX="2" refY="4" orient="auto" markerUnits="strokeWidth">
          <path d="M10,0 L0,4 L10,8 z" fill="#6a6a6a" />
        </marker>
        <marker id="arrow-head-up" markerWidth="10" markerHeight="8" refX="5" refY="1" orient="auto" markerUnits="strokeWidth">
          <path d="M0,8 L5,0 L10,8 z" fill="#6a6a6a" />
        </marker>
      </defs>

      <line
        v-if="clientToGateway"
        x1="104"
        y1="252"
        x2="188"
        y2="252"
        stroke="#6a6a6a"
        stroke-width="2"
        marker-end="url(#arrow-head-right)"
      />

      <line
        v-if="gatewayToServer"
        x1="316"
        y1="252"
        x2="404"
        y2="252"
        stroke="#6a6a6a"
        stroke-width="2"
        marker-end="url(#arrow-head-right)"
      />

      <line
        v-if="serverToGateway"
        x1="404"
        y1="252"
        x2="316"
        y2="252"
        stroke="#6a6a6a"
        stroke-width="2"
        marker-end="url(#arrow-head-left)"
      />

      <line
        v-if="gatewayToClientBack"
        x1="188"
        y1="252"
        x2="104"
        y2="252"
        stroke="#6a6a6a"
        stroke-width="2"
        marker-end="url(#arrow-head-left)"
      />
    </svg>

    <div style="position:absolute; left:8px; top:184px; width:96px; display:flex; flex-direction:column; align-items:center; color:#222;">
      <img src="../public/icons/client-icon.png" style="width:78px; height:78px; object-fit:contain;" />
      <div style="margin-top:10px; font-size:18px;">Client</div>
    </div>

    <div :style="containerStyle">
      <div style="position:absolute; left:0; right:0; top:34px; text-align:center; font-size:18px; color:#222;">Redis</div>
      <img src="../public/icons/redis-icon.png" style="position:absolute; left:50%; top:76px; transform:translateX(-50%); width:88px; height:88px; object-fit:contain;" />
      <img src="../public/icons/gateway-icon.png" style="position:absolute; left:50%; top:182px; transform:translateX(-50%) rotate(90deg); width:86px; height:86px; object-fit:contain;" />
      <div style="position:absolute; left:0; right:0; top:252px; text-align:center; font-size:18px; color:#222;">Gateway</div>

      <svg v-if="gatewayToRedis" viewBox="0 0 170 375" style="position:absolute; inset:0; width:100%; height:100%; overflow:visible;">
        <line x1="85" y1="204" x2="85" y2="140" stroke="#6a6a6a" stroke-width="2" marker-end="url(#arrow-head-up)" />
      </svg>

      <div v-if="showGear" style="position:absolute; left:50%; bottom:18px; transform:translateX(-50%); width:54px; height:54px;">
        <svg viewBox="0 0 64 64" style="width:54px; height:54px;">
          <g fill="#111">
            <rect x="28" y="2" width="8" height="12" rx="2" />
            <rect x="28" y="50" width="8" height="12" rx="2" />
            <rect x="2" y="28" width="12" height="8" rx="2" />
            <rect x="50" y="28" width="12" height="8" rx="2" />
            <rect x="28" y="2" width="8" height="12" rx="2" transform="rotate(45 32 32)" />
            <rect x="28" y="50" width="8" height="12" rx="2" transform="rotate(45 32 32)" />
            <rect x="2" y="28" width="12" height="8" rx="2" transform="rotate(45 32 32)" />
            <rect x="50" y="28" width="12" height="8" rx="2" transform="rotate(45 32 32)" />
            <circle cx="32" cy="32" r="19" />
            <circle cx="32" cy="32" r="10" fill="#f3f3f3" />
          </g>
        </svg>
      </div>
    </div>

    <div style="position:absolute; left:388px; top:184px; width:110px; display:flex; flex-direction:column; align-items:center; color:#222;">
      <img src="../public/icons/server-icon.png" style="width:86px; height:86px; object-fit:contain;" />
      <div style="margin-top:10px; font-size:18px;">Server</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  clientToGateway?: boolean
  gatewayToRedis?: boolean
  showGear?: boolean
  gatewayToServer?: boolean
  serverToGateway?: boolean
  gatewayToClientBack?: boolean
}>(), {
  clientToGateway: false,
  gatewayToRedis: false,
  showGear: false,
  gatewayToServer: false,
  serverToGateway: false,
  gatewayToClientBack: false,
})

const containerStyle = computed(() => {
  const height = props.showGear ? 375 : 330
  return `position:absolute; left:150px; top:28px; width:170px; height:${height}px; border:2px solid #707070; border-radius:34px; background:#f3f3f3;`
})
</script>
