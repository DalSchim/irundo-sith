<script>

export default {
  name: 'SplineComponent',
}


</script>

<template>
  <div class="spline-containe">
    <div class="filter"></div>
    <img src="../../public/Img/bg.png" alt="">
  </div>
</template>
<style scoped lang="scss">


.spline-containe {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  img {
    object-fit: cover;
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