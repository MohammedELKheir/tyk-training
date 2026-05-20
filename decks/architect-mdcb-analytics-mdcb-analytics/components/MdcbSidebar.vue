<script setup>
const props = defineProps({
  active: { type: Number, required: true },
})

const items = [
  { number: '01', label: ['MDCB', 'Analytics'] },
  { number: '02', label: ['MDCB Direct'] },
  { number: '03', label: ['Control Plane', 'Pump'] },
  { number: '04', label: ['Edge Pump'] },
  { number: '05', label: ['Edge Pump w/', 'Hybrid Forward'] },
]
</script>

<template>
  <div class="sidebar">
    <div
      v-for="(item, idx) in items"
      :key="item.number"
      class="nav-item"
      :class="{ active: props.active === idx + 1 }"
      :style="{ top: `${44 + idx * 90}px` }"
    >
      <div class="badge">{{ item.number }}</div>
      <div class="label">
        <div v-for="line in item.label" :key="line">{{ line }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: 228px;
  height: 100%;
  background: linear-gradient(180deg, #6d2eff 0%, #8c42ff 100%);
  overflow: hidden;
}
.nav-item {
  position: absolute;
  left: 18px;
  width: 192px;
  display: flex;
  align-items: center;
  color: white;
}
.badge {
  width: 72px;
  height: 72px;
  border: 2px solid rgba(255,255,255,0.9);
  border-radius: 22px 0 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.36rem;
  font-weight: 800;
  line-height: 1;
  box-sizing: border-box;
}
.label {
  width: 100px;
  margin-left: 12px;
  font-size: 0.84rem;
  line-height: 1.05;
  font-weight: 500;
}
.active .badge {
  background: white;
  color: #6c31ff;
  border-color: white;
}
.active .label {
  font-weight: 800;
}
</style>
