<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: number
    height?: number
    nodes: Array<{
      id: string
      icon: string
      x: number
      y: number
      w: number
      h: number
      label: string
      labelOffsetY?: number
      labelWidth?: number
      labelSize?: string
      labelColor?: string
      labelWeight?: number
    }>
    edges?: Array<{
      x1: number
      y1: number
      x2: number
      y2: number
      color?: string
      width?: number
      arrowStart?: boolean
      arrowEnd?: boolean
    }>
    annotations?: Array<{
      text: string
      x: number
      y: number
      width?: number
      align?: 'left' | 'center' | 'right'
      color?: string
      fontSize?: string
      fontWeight?: number
      lineHeight?: number
    }>
  }>(),
  {
    width: 760,
    height: 270,
    edges: () => [],
    annotations: () => [],
  },
)
</script>

<template>
  <div class="td-diagram" :style="{ width: `${width}px`, height: `${height}px` }">
    <div class="td-card" />

    <svg class="td-svg" :viewBox="`0 0 ${width} ${height}`" aria-hidden="true">
      <defs>
        <marker id="td-arrow-end" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L10,5 L0,10 z" fill="#a7a7b1" />
        </marker>
        <marker id="td-arrow-start" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M10,0 L0,5 L10,10 z" fill="#a7a7b1" />
        </marker>
      </defs>

      <line
        v-for="(edge, index) in edges"
        :key="`edge-${index}`"
        :x1="edge.x1"
        :y1="edge.y1"
        :x2="edge.x2"
        :y2="edge.y2"
        :stroke="edge.color ?? '#a7a7b1'"
        :stroke-width="edge.width ?? 2.2"
        stroke-linecap="round"
        :marker-start="edge.arrowStart ? 'url(#td-arrow-start)' : undefined"
        :marker-end="edge.arrowEnd === false ? undefined : 'url(#td-arrow-end)'"
      />
    </svg>

    <div
      v-for="node in nodes"
      :key="node.id"
      class="td-node"
      :style="{ left: `${node.x}px`, top: `${node.y}px`, width: `${node.w}px` }"
    >
      <img :src="node.icon" :style="{ width: `${node.w}px`, height: `${node.h}px` }" />
      <div
        class="td-label"
        :style="{
          marginTop: `${node.labelOffsetY ?? 8}px`,
          width: `${node.labelWidth ?? Math.max(node.w + 50, 110)}px`,
          color: node.labelColor ?? '#2e3342',
          fontSize: node.labelSize ?? '11.5px',
          fontWeight: `${node.labelWeight ?? 500}`,
        }"
        v-html="node.label.replace(/\n/g, '<br/>')"
      />
    </div>

    <div
      v-for="(annotation, index) in annotations"
      :key="`annotation-${index}`"
      class="td-annotation"
      :style="{
        left: `${annotation.x}px`,
        top: `${annotation.y}px`,
        width: `${annotation.width ?? 140}px`,
        textAlign: annotation.align ?? 'center',
        color: annotation.color ?? '#646b78',
        fontSize: annotation.fontSize ?? '11px',
        fontWeight: `${annotation.fontWeight ?? 500}`,
        lineHeight: `${annotation.lineHeight ?? 1.18}`,
      }"
        v-html="annotation.text.replace(/\n/g, '<br/>')"
    />
  </div>
</template>

<style scoped>
.td-diagram {
  position: relative;
  margin: 0 auto;
}

.td-card {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  border: 1.5px solid #b9b9c1;
  background: #f3f3f5;
}

.td-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.td-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.td-node img {
  object-fit: contain;
}

.td-label {
  white-space: normal;
  line-height: 1.18;
}

.td-annotation {
  position: absolute;
  white-space: normal;
}
</style>
