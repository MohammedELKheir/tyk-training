<template>
  <div class="flow-root" aria-label="Request throttling flow chart">
    <div class="pill start">Start</div>
    <div class="arrow v a-start"></div>
    <div class="box receive-request">Receive request</div>
    <div class="dashed-loop"></div>
    <div class="loop-label">Throttling loop</div>
    <div class="diamond exceed">
      <div class="diamond-text">Does<br>request<br>exceed<br>rate limit?</div>
    </div>
    <div class="yes-label yes-1">Yes</div>
    <div class="no-label no-1">No</div>
    <div class="box proxy-request">Proxy request to API<br>Server</div>
    <div class="arrow h left-from-exceed"></div>
    <div class="arrow v down-from-proxy"></div>
    <div class="box receive-response">Receive response<br>from API Server</div>
    <div class="arrow v down-from-exceed"></div>
    <div class="diamond retry">
      <div class="diamond-text">Is retry<br>limit<br>reached?</div>
    </div>
    <div class="yes-label yes-2">Yes</div>
    <div class="no-label no-2">No</div>
    <div class="arrow h to-wait"></div>
    <div class="box wait">Wait for interval period</div>
    <div class="loop-return-v"></div>
    <div class="loop-return-h"></div>
    <div class="box generate">Generate HTTP 429<br>response</div>
    <div class="arrow v down-from-retry"></div>
    <div class="arrow v down-from-generate"></div>
    <div class="box return-response">Return response</div>
    <div class="return-left-v"></div>
    <div class="return-left-h"></div>
    <div class="arrow v down-from-return"></div>
    <div class="pill end">End</div>
  </div>
</template>

<style scoped>
.flow-root {
  position: relative;
  width: 640px;
  height: 470px;
  color: #111;
  font-family: Arial, Helvetica, sans-serif;
}
.box, .pill, .diamond {
  position: absolute;
  background: #fff;
  border: 1.5px solid #111;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.18;
}
.box {
  font-size: 10.5px;
}
.pill {
  width: 104px;
  height: 29px;
  border-radius: 18px;
  font-size: 11px;
}
.start { left: 270px; top: 8px; }
.end { left: 270px; top: 436px; }
.receive-request { left: 270px; top: 67px; width: 106px; height: 40px; }
.proxy-request { left: 78px; top: 164px; width: 106px; height: 40px; }
.receive-response { left: 78px; top: 278px; width: 106px; height: 39px; }
.wait { left: 456px; top: 278px; width: 104px; height: 39px; }
.generate { left: 270px; top: 356px; width: 106px; height: 40px; }
.return-response { left: 270px; top: 410px; width: 106px; height: 39px; }
.dashed-loop {
  position: absolute;
  left: 248px;
  top: 125px;
  width: 307px;
  height: 200px;
  border: 1px dashed #b5b5b5;
  box-sizing: border-box;
}
.loop-label {
  position: absolute;
  left: 504px;
  top: 136px;
  font-size: 11px;
}
.diamond {
  width: 74px;
  height: 74px;
  transform: rotate(45deg);
}
.diamond-text {
  transform: rotate(-45deg);
  font-size: 10px;
  line-height: 1.05;
}
.exceed { left: 272px; top: 162px; }
.retry { left: 272px; top: 278px; }
.arrow, .loop-return-v, .loop-return-h, .return-left-v, .return-left-h {
  position: absolute;
  background: #111;
}
.arrow.v { width: 1.5px; }
.arrow.h { height: 1.5px; }
.a-start { left: 321px; top: 39px; height: 28px; }
.a-start::after,
.down-from-proxy::after,
.down-from-exceed::after,
.down-from-retry::after,
.down-from-generate::after,
.down-from-return::after,
.loop-return-v::after {
  content: '';
  position: absolute;
  left: -4px;
  bottom: -1px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 7px solid #111;
}
.left-from-exceed { left: 184px; top: 201px; width: 88px; }
.left-from-exceed::after,
.return-left-h::after {
  content: '';
  position: absolute;
  left: -1px;
  top: -4px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 7px solid #111;
}
.down-from-proxy { left: 131px; top: 204px; height: 74px; }
.down-from-exceed { left: 321px; top: 239px; height: 39px; }
.down-from-retry { left: 321px; top: 355px; height: 1px; }
.down-from-generate { left: 321px; top: 396px; height: 14px; }
.down-from-return { left: 321px; top: 449px; height: 17px; }
.to-wait { left: 346px; top: 298px; width: 110px; }
.to-wait::after {
  content: '';
  position: absolute;
  right: -1px;
  top: -4px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 7px solid #111;
}
.loop-return-v { left: 503px; top: 205px; width: 1.5px; height: 73px; }
.loop-return-h { left: 346px; top: 205px; width: 157px; height: 1.5px; }
.loop-return-h::after {
  content: '';
  position: absolute;
  left: -1px;
  top: -4px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 7px solid #111;
}
.return-left-v { left: 131px; top: 317px; width: 1.5px; height: 112px; }
.return-left-h { left: 131px; top: 429px; width: 139px; height: 1.5px; }
.yes-label, .no-label {
  position: absolute;
  font-size: 11px;
  color: #222;
}
.yes-1 { left: 315px; top: 250px; }
.yes-2 { left: 316px; top: 360px; }
.no-1 { left: 226px; top: 198px; }
.no-2 { left: 397px; top: 295px; }
</style>
