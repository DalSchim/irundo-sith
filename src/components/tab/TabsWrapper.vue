<script>
import{ref,provide} from 'vue'
export default{
  setup(props, {slots}) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide('selectedTitle',selectedTitle)
    return {
      selectedTitle,
      tabTitles
    }
  }
}
</script>

<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li v-for="title in tabTitles"
          :key="title"
          @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
  </div>

</template>

<style scoped lang="scss">

</style>