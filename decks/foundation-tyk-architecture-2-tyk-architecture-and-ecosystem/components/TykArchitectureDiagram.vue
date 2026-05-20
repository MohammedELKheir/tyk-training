<script setup>
const props = defineProps({
  width: { type: Number, default: 360 },
  height: { type: Number, default: 250 },
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] },
})
</script>

<template>
  <div
    class="diagram-shell"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <svg
      class="diagram-edges"
      :viewBox="`0 0 ${width} ${height}`"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line
        v-for="(edge, index) in edges"
        :key="index"
        :x1="edge.x1"
        :y1="edge.y1"
        :x2="edge.x2"
        :y2="edge.y2"
        :stroke="edge.color || '#8F8F96'"
        :stroke-width="edge.width || 2"
        stroke-linecap="round"
      />
    </svg>

    <div
      v-for="node in nodes"
      :key="node.id"
      class="diagram-node"
      :style="{
        left: `${node.x}px`,
        top: `${node.y}px`,
      }"
    >
      <div
        class="diagram-label top"
        :style="{ marginBottom: node.topLabelGap || '4px' }"
      >
        {{ node.topLabel }}
      </div>
      <img
        :src="node.icon"
        :alt="node.label"
        class="diagram-icon"
        :style="{
          width: `${node.iconWidth || 46}px`,
          height: `${node.iconHeight || 46}px`,
          transform: node.rotate ? `rotate(${node.rotate}deg)` : 'none',
        }"
      />
      <div class="diagram-label bottom" :style="{ marginTop: node.bottomLabelGap || '4px' }">
        {{ node.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.diagram-shell {
  position: relative;
  border: 1.5px solid #b9b9bf;
  border-radius: 18px;
  background: #efefef;
}

.diagram-edges {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.diagram-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 58px;
}

.diagram-icon {
  object-fit: contain;
}

.diagram-label {
  color: #111111;
  font-size: 10px;
  line-height: 1.1;
  text-align: center;
  white-space: nowrap;
}

.diagram-label.top {
  font-weight: 500;
}

.diagram-label.bottom {
  font-weight: 500;
}
</style>
