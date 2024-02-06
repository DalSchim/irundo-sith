<script>

import ButtonComponent from "@/components/ButtonCoponent.vue";

export default {
  name: 'NavComponents',
  components: {
    ButtonComponent
  },
  // la nav est obligatoirement visible sur les écrans de plus de 768px sinon elle est cachée
  data() {
    return {
      hiden: true
    }
  },


  methods: {

  }


}
</script>

<template>
  <div>
    <div class="burger">
      <div @click="toggleNav" class="burger" :class="{open: hiden}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div v-if="hiden" class="nav-head">
      <div class="logo">
        <img src="../../public/Vector.png" alt="logo"/>
        <h1>Irundo</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Acceil</a></li>
          <li><a href="#">Qui sommes-nous</a></li>
          <li><a href="#">Nos partenaires</a></li>
          <li><a href="#">Notre actualité</a></li>
          <button-component class="buton" color="white" text="Contact" path="/form"></button-component>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.burger {
  display: none;
}

.nav-head {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.56);
  height: 90px;
  width: 100vw;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  width: 64px;
}

.logo h1 {
  font-size: 2.375rem;
  color: #ffff;
}

nav ul {
  display: flex;
  gap: 20px;
  align-items: center;
}

nav li {
  list-style: none;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-family: Orbitron, sans-serif;
  font-weight: 600;
}

@media screen and (max-width: 920px) {
  .burger {
    z-index: 9999;
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;

    span {
      width: 100%;
      height: 3px;
      background-color: #000000;
      transition: all 0.3s ease;
    }
  }
  .nav-head {
    height: 100vh;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.56);
    transition: all 0.3s ease;

    nav {
      display: flex;
      flex-direction: column;
      height: 100%;

      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
      }
    }
  }

}
</style>