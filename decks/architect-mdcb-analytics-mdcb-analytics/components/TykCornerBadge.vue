<template>
  <div class="corner-badge">
    <div class="dot"></div>
    <div class="wordmark">Tyk</div>
  </div>
</template>

<style scoped>
.corner-badge {
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 106px;
  height: 72px;
  background: #07072a;
  border-top-left-radius: 26px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 13px 13px 12px;
  box-sizing: border-box;
}
.dot {
  width: 16px;
  height: 16px;
  background: #20edba;
  border-top-left-radius: 4px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 4px;
  margin-right: 6px;
  margin-bottom: 1px;
}
.wordmark {
  color: white;
  font-size: 0.92rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.04em;
}
</style>
