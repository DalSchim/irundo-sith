<script>
export default {
// creation de tabs avec 4 onglets
  name: "FonctioComponent",

}

</script>

<template>

  <router-link to="fontion#1" class="btn">Les fonctionnalitées</router-link>
  <router-link to="fontion#2" class="btn">Les fonctionnalitées</router-link>
  <router-link to="fontion#3" class="btn">Les fonctionnalitées</router-link>
  <router-link to="fontion#4" class="btn">Les fonctionnalitées</router-link>

  <router-view/>


</template>

<style scoped lang="scss">

</style>