<!-- DropdownMenu.vue -->
<template>
  <div class="dropdown-menu" @mouseover="overin" @mouseleave="overout">
    <router-link to="/#nos-fonctionnalites" class="dropbtn">Fonctionnalités</router-link>
    <div v-if="showMenu" class="dropdown-content">
      <div class="liste" @click="selectTab(index)" v-for="(tab, index) in tabs" :key="index">
        <h3>{{ tabs[index].titre }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",

  data() {
    return {
      showMenu: false,
    };
  },
  props: {
    titre: {
      type: Array,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
  },

  methods: {
    overin() {
      this.showMenu = true;
    },
    overout() {
      this.showMenu = false;
    },
    selectTab(index) {
      this.$emit("tab-changed", index);
    },
  },
};
</script>

<style scoped lang="scss">
/* Ajoutez vos styles spécifiques au menu déroulant ici */
.dropdown-menu {
  position: relative;
  display: inline-block;

  .liste {
    display: flex;
    flex-direction: column;
  }

  .dropbtn {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-family: Orbitron, sans-serif;
    font-weight: 600;
  }

  .dropdown-content {
    padding: 8px;
    border: #FFFFFF 2px solid;
    border-radius: 8px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    min-width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
}
</style>
