<template>
  <transition name="fade" v-if="loading">
    <div>
      <LoadingScreen/>
      <spline-component/>
    </div>
  </transition>
  <div v-else>
    <NavComponents class="nav" @tab-selected="changeTab"/>
    <router-view :selectedTabIndex="selectedTabIndex" @tab-changed="changeTab"/>
    <FooterComponents/>
  </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


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
import LoadingScreen from "@/components/LoadingScreen.vue";
import SplineComponent from "@/components/SplineComponent.vue";

export default {
  name: "App",
  components: {
    SplineComponent,
    NavComponents,
    FooterComponents,
    LoadingScreen,
  },
  data() {
    return {
      loading: true,
      selectTabindex: 0,
    };
  },
  mounted() {
    // verify si la page est chargée ou non
    setTimeout(() => {
      this.loading = false;
    }, 0);
  },
  methods: {
    changeTab(index) {
      this.selectedTabIndex = index;
    },
  },

};


</script>