<script>

import ButtonComponent from "@/components/ButtonCoponent.vue";

export default {
  name: 'NavComponents',
  components: {
    ButtonComponent
  },
  data() {
    return {
      hiden: true,
      show: false
    }
  },

  methods: {
    toggleNav() {
      this.hiden = !this.hiden;
    },
    isMobile() {
      return window.innerWidth <= 1024;
    },
    isDesktop() {
      return window.innerWidth > 1024;
    },
    closeNav() {
      this.hiden = true;
    },
    indiv() {
      this.show = true;
    },
    outdiv() {
      this.show = false;
    },

    closelink() {
      document.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', () => {
          this.hiden = false;
        });
      });
    }


  },
  mounted() {

    //si on clique sur un lien de la nav on ferme le menu

    // si le lien est #nos-fonctionnalites on scroll vers la section 100 px audessus


    if (this.isMobile()) {
      this.hiden = false;
      this.closelink();
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

  },
}
</script>

<template>
  <div>
    <img class="logo-burgeur" src="../../public/Img/Vector.png" alt="">
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
      <router-link class="link" to="/">
        <div class="logo">
          <img src="../../public/Img/Vector.png" alt="logo"/>
          <h1>Irundo</h1>
        </div>
      </router-link>
      <nav>
        <ul>
          <li>
            <router-link class="link" to="/#notre-solutions">La solution</router-link>
          </li>

          <li>
            <div class="links" @mouseover="indiv" @mouseleave="outdiv">
              <router-link class="link" to="/#nos-fonctionnalites">Nos fonctionnalités</router-link>
              <div class="dropdown" v-if="show">
                <router-link class="link" to="/ServeursHeberges#nos-fonctionnalites">Serveur hebergés</router-link>
                <router-link class="link" to="/ServeursLocaux#nos-fonctionnalites">Serveurs Locaux</router-link>
                <router-link class="link" to="/Administration#nos-fonctionnalites">Administration</router-link>
                <router-link class="link" to="/SuportFunctionView#nos-fonctionnalites">Support</router-link>
              </div>
            </div>
          </li>
          <li>
            <router-link class="link" to="/#nos-objectifs">Nos objectifs</router-link>
          </li>
          <li>
            <router-link class="link" to="/#nos-partenaires">Nos partenaires</router-link>
          </li>
          <button-component class="buton link" color="white" text="Contact" path="/form"></button-component>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">

.links {
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.dropdown {
  background-color: rgba(0, 0, 0, 0.56);
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    position: static;

  }
}

.link {
  text-decoration: none;

}

.burger {
  display: none;
}

.logo-burgeur {
  display: none;
}

.nav-head {
  transition: transform 0.3s ease;
  transform: translateY(0); // Position initiale
  z-index: 9999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.56);
  height: 70px;
  width: 100vw;

  &.cache {
    transform: translateY(-100%);
  }
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


//under bar link  smooth
nav ul li a {
  position: relative;
  transition: all 0.3s ease;


  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffff;
    transform: scaleX(0);
    transform-origin: right;
    transition: all 0.3s ease;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

}

@media screen and (max-width: 1024px) {
  .logo-burgeur {
    display: block;
    width: 64px;
    height: 64px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9;
  }

  .head-responce {
    z-index: 9999;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 10px 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.56);

    // burger cross
    .burgers {
      display: flex;
      gap: 20px;
    }

    .burger {
      display: block;
      width: 24px;
      height: 24px;
      position: relative;
      cursor: pointer;

      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: #ffff;
        position: absolute;
        transition: all 0.3s ease;
        border-radius: 32px;

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
    z-index: 999;

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