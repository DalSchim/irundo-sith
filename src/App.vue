<template>
  <div>
    <nav-components/>
    <router-view />
    <FooterComponents/>
  </div>
</template>
<style>
$color-primary: white;
$color-secondary: #283783;
$color-tersier: black;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  scroll-behavior: smooth;
}

nav {
  padding: 30px;
}

h1 {
  font-family: Orbitron, sans-serif;
  font-size: 64px;
}

h2 {
  font-family: Orbitron, sans-serif;
  font-size: 38px;
  font-weight: 600;
  font-optical-sizing: auto;
  margin-bottom: 32px;
}

p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-optical-sizing: auto;
  line-height: 1.5;
}

label {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-optical-sizing: auto;
  line-height: 1.5;
}

li {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-optical-sizing: auto;
  line-height: 1.5;
}
</style>
<script>
import FooterComponents from "@/components/FooterComponents.vue";
import NavComponents from "@/components/NavComponents.vue";

export default {
  name: "App",
  components: {
    NavComponents,

    FooterComponents,

  },

};


</script>