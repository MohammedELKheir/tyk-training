<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: undefined,
  },
})

const style = computed(() => props.background ? handleBackground(props.background, false) : {})
</script>

<template>
  <div
    class="slidev-layout fullscreen"
    :style="style"
  >
    <slot />
  </div>
</template>

<style>
.slidev-layout.fullscreen {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
