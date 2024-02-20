<!-- App.vue -->
<template>
  <div id="app">
    <TabC :tabs="tabs" :title="titre">
      <!-- Contenu de l'onglet -->
    </TabC>
    <DropdownMenu :tabs="tabs" :titre="titre">
      <!-- Contenu du menu déroulant -->
    </DropdownMenu>
  </div>
</template>

<script>
import TabC from "@/components/tab/TabC.vue";
import DropdownMenu from "@/components/DropDown.vue";


export default {
  components: {
    DropdownMenu,
    TabC,
  },
  data() {
    return {
      titre: [
        {titre: "Serveurs hebergés"},
        {titre: "Serveurs Locaux"},
        {titre: "Administration"},
        {titre: "Support"},
      ],
      tabs: [
        {description: "La solution repose sur des services en data-center pour une gestion performante"},
        {description: "Une réplication pour offrir des services spécifiques ainsi qu'une haute disponibilité"},
        {description: "Une interface visant a gérer, configurer, maintenir, et surveiller les serveurs rattachés "},
        {description: "Surveiller et gérer vos appareils réseau sans agent ou client"},
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
