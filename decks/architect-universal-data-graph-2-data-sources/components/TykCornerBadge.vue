<template>
  <div class="tyk-corner-badge" aria-hidden="true">
    <div class="leaf"></div>
    <div class="wordmark">Tyk</div>
  </div>
</template>

<style scoped>
.tyk-corner-badge {
  position: absolute;
  right: -6px;
  bottom: -6px;
  width: 118px;
  height: 84px;
  background: #000;
  border-top-left-radius: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 16px 16px 15px;
  box-sizing: border-box;
  overflow: hidden;
}

.leaf {
  width: 18px;
  height: 18px;
  background: #21e9ba;
  border-top-left-radius: 3px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 3px;
  margin-right: 6px;
  margin-bottom: 2px;
}

.wordmark {
  font-size: 1.05rem;
  line-height: 1;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
