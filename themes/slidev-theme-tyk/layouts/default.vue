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
    class="slidev-layout default"
    :style="style"
  >
    <slot />
  </div>
</template>
