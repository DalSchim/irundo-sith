<script>

export default {
  name: 'CardComponent',
  props: {
    title: String,
    description: String,
    image: String,
  },
};

</script>

<template>
  <div class="cardf">
    <img
        :src="require(`../../public/icon/${image}.svg`)"
        :alt="title"
    >
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">

.cardf {
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 42px;
    height: 42px;
  }

  h3 {
    text-align: center;
    font-family: Orbitron, sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #283783;
  }

  p {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    color: #283783;
  }

}

</style>