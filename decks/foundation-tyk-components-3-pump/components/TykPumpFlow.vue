<script setup lang="ts">
interface Sink {
  label: string
  icon: string
  x: number
  y: number
  width?: number
  height?: number
}

const props = withDefaults(defineProps<{
  thirdParty?: boolean
  sinks?: Sink[]
}>(), {
  thirdParty: false,
  sinks: () => []
})

const main = {
  gateway: { x: 162, y: 222, w: 108, h: 108, label: 'Tyk Gateway' },
  redis: { x: 403, y: 232, w: 104, h: 104, label: 'Redis' },
  pump: { x: 602, y: 221, w: 108, h: 108, label: 'Tyk Pump' },
}
</script>

<template>
  <div class="pump-flow-shell">
    <div class="pump-flow-frame"></div>

    <svg class="pump-flow-lines" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7.5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#666666" />
        </marker>
      </defs>

      <line x1="266" y1="275" x2="382" y2="275" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)" />
      <line x1="510" y1="275" x2="584" y2="275" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)" />

      <template v-if="!thirdParty">
        <line x1="712" y1="275" x2="816" y2="275" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)" />
      </template>

      <template v-else>
        <line x1="712" y1="275" x2="772" y2="275" stroke="#666666" stroke-width="2" />
        <line x1="772" y1="275" x2="844" y2="275" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)" />
        <line x1="772" y1="275" x2="834" y2="115" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)" />
        <line x1="772" y1="275" x2="836" y2="369" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)" />
      </template>
    </svg>

    <div class="pump-node gateway" :style="{ left: `${main.gateway.x}px`, top: `${main.gateway.y}px`, width: `${main.gateway.w}px` }">
      <img src="/icons/gateway-icon.png" alt="Tyk Gateway" class="pump-icon gateway-icon" />
      <div class="pump-label">{{ main.gateway.label }}</div>
    </div>

    <div class="pump-node redis" :style="{ left: `${main.redis.x}px`, top: `${main.redis.y}px`, width: `${main.redis.w}px` }">
      <img src="/icons/redis-icon.png" alt="Redis" class="pump-icon" />
      <div class="pump-label">{{ main.redis.label }}</div>
    </div>

    <div class="pump-node pump" :style="{ left: `${main.pump.x}px`, top: `${main.pump.y}px`, width: `${main.pump.w}px` }">
      <img src="/icons/pump-icon.png" alt="Tyk Pump" class="pump-icon" />
      <div class="pump-label">{{ main.pump.label }}</div>
    </div>

    <template v-if="!thirdParty">
      <div class="pump-node sink" style="left: 826px; top: 226px; width: 120px;">
        <img src="/icons/database-icon.png" alt="Database" class="pump-icon database-icon" />
        <div class="pump-label">Database</div>
      </div>
    </template>

    <template v-else>
      <div
        v-for="sink in sinks"
        :key="sink.label"
        class="pump-node sink"
        :style="{ left: `${sink.x}px`, top: `${sink.y}px`, width: `${sink.width ?? 142}px` }"
      >
        <img :src="sink.icon" :alt="sink.label" class="pump-icon" :class="{ 'database-icon': sink.label === 'Database', 'datadog-icon': sink.label === 'DataDog', 'elastic-icon': sink.label === 'ElasticSearch' }" :style="{ width: sink.width ? `${sink.width}px` : undefined, height: sink.height ? `${sink.height}px` : undefined }" />
        <div class="pump-label">{{ sink.label }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.pump-flow-shell {
  position: relative;
  width: 1000px;
  height: 402px;
}

.pump-flow-frame {
  position: absolute;
  inset: 16px 34px 18px 34px;
  border: 2px solid #666666;
  border-radius: 46px;
  background: #ededed;
}

.pump-flow-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.pump-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #111111;
}

.pump-icon {
  width: 96px;
  height: 96px;
  object-fit: contain;
}

.gateway-icon,
.database-icon {
  width: 100px;
  height: 100px;
}

.datadog-icon {
  width: 92px;
  height: 92px;
}

.elastic-icon {
  width: 92px;
  height: 92px;
}

.pump-label {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.1;
  font-weight: 400;
}
</style>
