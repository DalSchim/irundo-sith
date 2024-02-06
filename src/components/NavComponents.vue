<script>

import ButtonComponent from "@/components/ButtonCoponent.vue";

export default {
  name: 'NavComponents',
  components: {
    ButtonComponent
  },

  // la nav barre est caché par défaut en media screen max-width: 920px
  data() {
    return {
      hiden: true
    }
  },

  methods: {
    toggleNav() {
      this.hiden = !this.hiden;
    },
    isMobile() {
      return window.innerWidth <= 920;
    },
    isDesktop() {
      return window.innerWidth > 920;
    }


  },
  mounted() {
    if (this.isMobile()) {
      this.hiden = false;
    }

    if (this.isDesktop()) {
      this.hiden = true;
    }

    window.addEventListener('resize', () => {
      if (this.isMobile()) {
        return this.hiden = false;
      }
      if (this.isDesktop()) {
        return this.hiden = true;
      }

    });

  }
}
</script>

<template>
  <div>
    <img class="logo-burgeur" src="../../public/Vector.png" alt="">
    <div class="head-responce">
      <div class="burgers">
        <div @click="toggleNav" class="burger" :class="{open: hiden}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div v-show="hiden" class="nav-head">
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

.logo-burgeur {
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
  .logo-burgeur {
    display: block;
    width: 64px;
    height: 64px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
  }


  .head-responce {
    z-index: 10;
    position: fixed;
    display: flex;
    align-items: center;
    width: 100vw;
    justify-content: space-between;
    padding: 20px;

    // burger cross
    .burgers {
      display: flex;
      gap: 20px;
    }

    .burger {
      display: block;
      width: 30px;
      height: 30px;
      position: relative;
      cursor: pointer;
      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: #ffff;
        position: absolute;
        transition: all 0.3s ease;
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
      &.open {
        span {
          &:nth-child(1) {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
          }
        }
      }
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
    backdrop-filter: blur(10px);
    z-index: 2;

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