<!-- TabC.vue -->
<template>
  <section>
    <div class="tab-buttons">
      <div class="card-wrapper">
        <div class="card" @click="selectTab(index) && scrollToContent(index)" v-for="(tab, index) in tabs" :key="index"
             :class="{ 'selected-tab': isSelectedTab(index) }">
          <Icon :icon="icon[index].icon"/>
          <h3>{{ title[index].titre }}</h3>
          <p>{{ tab.description }}</p>
        </div>
      </div>
    </div>

    <div>
      <!-- Boutons de navigation dans le contenu -->
      <div class="tab-content" id="nos-fonctionnalites">
        <div class="content" v-show="selectedTab === 0" id="content-0">
          <div class="buton-nav">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
                    :class="{ 'selected-tab': isSelectedTab(index) }">
              {{ tab.label }}
            </button>
          </div>
        </div>
        <div class="content" v-show="selectedTab === 1" id="content-1">
          <div class="buton-nav">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
                    :class="{ 'selected-tab': isSelectedTab(index) }">
              {{ tab.label }}
            </button>
          </div>
        </div>
        <div class="content" v-show="selectedTab === 2" id="content-2">
          <div class="buton-nav">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
                    :class="{ 'selected-tab': isSelectedTab(index) }">
              {{ tab.label }}
            </button>
          </div>
        </div>
        <div class="content" v-show="selectedTab === 3" id="content-3">
          <div class="buton-nav">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
                    :class="{ 'selected-tab': isSelectedTab(index) }">
              {{ tab.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "TabC",
  components: {Icon},
  data() {
    return {
      selectedTab: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    title: {
      type: Array,
      required: true,
    },
    icon: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isSelectedTab(index) {
      return this.selectedTab === index;
    },
    selectTab(index) {
      this.selectedTab = index;
      this.$emit("tab-changed", index);
      this.scrollToContent(index);
      this.$nextTick(() => {
        this.scrollToContent(index);
      });
      // Récupérer l'élément du contenu associé à l'index sélectionné

    },
    scrollToContent(index) {
      const contentElement = this.$el.querySelector(`#content-${index}`);
      if (contentElement) {
        contentElement.scrollIntoView({behavior: "smooth"});
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.content-navigation button {
  margin: 0 10px;
  padding: 8px 12px;
  cursor: pointer;
}

.tab-buttons {
  z-index: 4;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -70px;
  width: 100%;

}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.card {
  background: white;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  transition: 2ms ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
}

.card button {
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;

}

.tab-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.buton-nav {
  padding-top: 95px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  button {
    background: transparent;
    color: #283783;
    border-top: 2px solid #283783;
    border-bottom: 2px solid #283783;
    border-left: none;
    border-right: none;
    padding: 12px 25px;
    font-family: Orbitron, sans-serif;
    font-weight: 600;
    font-optical-sizing: auto;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &::after {
      content: '';
    }

    &:first-child {
      border-left: #283783 2px solid;
      border-radius: 8px 0 0 8px;
      background-color: transparent;
      color: #283783;
    }

    &:last-child {
      border-right: #283783 2px solid;
      background-color: transparent;
      border-radius: 0 8px 8px 0;
      color: #283783;
    }

    &:hover {
      background-color: #283783;
      color: white;
    }
  }
}

@media screen and (max-width: 920px) {
  .tab-content {
    height: auto;
  }
  .buton-nav {
    padding-top: 0;
  }
}
</style>
