<script>
import {Application} from '@splinetool/runtime';

export default {
  name: 'SplineComponent',
  mounted() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/Jm3nh-nLnnSa-uKk/scene.splinecode');
  }

}


</script>
<template>
  <div class="spline-containe">
    <div class="filter"></div>
    <canvas id="canvas3d"></canvas>
  </div>
</template>

<style scoped lang="scss">


.spline-containe {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  canvas {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 920px) {
  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

}
</style>