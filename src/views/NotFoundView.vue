<script>
export default {
  name: 'NotFoundView',
};

</script>
<template>
  <div>
    <h1>404</h1>
    <p>Page not found</p>
  </div>

</template>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  h1 {
    font-size: 3rem;
    color: #283783;
    text-align: center;
    margin-top: 100px;
  }
  p {
    font-size: 1.5rem;
    color: #283783;
    text-align: center;
  }

</style>