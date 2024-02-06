<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    color: String,
    path: {
      type: String,
      default: ''
    },
    type:{
      type: String,
      default: 'button'
    },
  },
  computed: {
    colorClass() {
      return `${this.color}`;
    },

  }
}
</script>

<template>
  <router-link :to="path">
    <button :type="type" :class="['btn', colorClass]">{{ text }}</button>
  </router-link>
</template>

<style scoped lang="scss">
.btn {

  padding: 12px 25px;
  border-radius: 8px;
  font-family: Orbitron, sans-serif;
  font-weight: 600;
  font-optical-sizing: auto;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &.white {
    background-color: transparent;
    border: white 1px solid;
    color: white;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  &.blue {
    background-color: transparent;
    border: 1px solid #283783;
    color: #283783;

    &:hover {
      background-color: #283783;
      color: white;
    }
  }
}
</style>
