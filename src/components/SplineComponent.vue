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
</style>