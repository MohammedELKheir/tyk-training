<script setup lang="ts">
withDefaults(defineProps<{
  showMini?: boolean
}>(), {
  showMini: true,
})
</script>

<template>
  <div>
    <div
      v-if="showMini"
      style="position:absolute; left:-1.88rem; bottom:-0.76rem; display:flex; align-items:flex-end; gap:0.16rem; font-family:Inter, Arial, sans-serif; font-weight:700; font-size:0.96rem; color:#54587d;"
    >
      <div style="display:flex; gap:0.08rem; margin-bottom:0.08rem;">
        <div style="width:0.30rem; height:0.50rem; background:#20EDBA; border-radius:0.10rem 0.10rem 0.24rem 0.24rem; transform:rotate(-10deg);"></div>
        <div style="width:0.34rem; height:0.72rem; background:#54587d; border-radius:0.10rem 0.10rem 0.28rem 0.28rem; transform:rotate(-10deg);"></div>
      </div>
      <span style="letter-spacing:-0.03em; line-height:1;">Tyk</span>
    </div>

    <div style="position:absolute; right:-1.74rem; bottom:-1.34rem; width:112px; height:76px; background:#000; border-top-left-radius:36px; display:flex; align-items:flex-end; justify-content:flex-end; padding:12px 15px; box-sizing:border-box; overflow:hidden;">
      <div style="position:relative; width:74px; height:28px; display:flex; align-items:center; justify-content:flex-end; font-size:1.02rem; font-weight:800; color:#fff; font-family:Inter, Arial, sans-serif;">
        <div style="position:absolute; left:0; top:6px; width:10px; height:10px; background:#20EDBA; border-bottom-left-radius:7px;"></div>
        <span style="letter-spacing:-0.03em;">Tyk</span>
      </div>
    </div>
  </div>
</template>
