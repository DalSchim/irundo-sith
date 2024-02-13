<!-- App.vue -->
<template>
  <div id="app">
    <TabC :tabs="tabs" :title="titre" :icon="icon" >
      <!-- Contenu de l'onglet -->
    </TabC>
  </div>
</template>

<script>
import TabC from "@/components/tab/TabC.vue";

export default {
  components: {
    TabC,
  },
  data() {
    return {
      icon: [
        { icon: "solar:pen-bold" },
        { icon: "bx:bx-user" },
        { icon: "bx:bx-message" },
        { icon: "bx:bx-heart" },
      ],

      titre: [
        { titre: "Onglet 1", icon: "solar:pen-bold" },
        { titre: "Onglet 2", icon: "bx:bx-user" },
        { titre: "Onglet 3", icon: "bx:bx-message" },
        { titre: "Onglet 4", icon: "bx:bx-heart" },
      ],
      tabs: [
        { label: "Onglet 1", description: "Description de l'onglet 1" },
        { label: "Onglet 2", description: "Description de l'onglet 2" },
        { label: "Onglet 3", description: "Description de l'onglet 3" },
        { label: "Onglet 4", description: "Description de l'onglet 4" },
      ],
      selectedTabIndex: 0,
    };
  },
  methods: {
    updateSelectedTab(index) {
      this.selectedTabIndex = index;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
