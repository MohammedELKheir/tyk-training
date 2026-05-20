<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: 'linear-gradient(45deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)',
  },
})

const style = computed(() => handleBackground(props.background, false))
</script>

<template>
  <div
    class="slidev-layout cover text-center"
    :style="style"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
