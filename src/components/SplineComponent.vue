<script>
import { Application } from '@splinetool/runtime';

export default {
name: 'SplineComponent',
  mounted() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/ttR0x8HFSAPA5cIC/scene.splinecode')
  }

}


</script>

<template>

    <canvas id="canvas3d"></canvas>


</template>

<style scoped lang="scss">
canvas {
  width: 100%;
  height: 100%;
  display: block;
}

</style>