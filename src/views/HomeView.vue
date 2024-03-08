<template>
  <header class="home" id="notre-solutions">
    <div class="description">
      <div class="titre">
        <h1>Irundo : une alternative pour le SI des collectivités</h1>
        <div class="desciption">
          <h2>Irundo est une solution souveraine open source. Son interface web permet la centralisations et
            l'infogérance
            de l'ensemble du SI des établissements scolaires de la collectivité.
          </h2>
        </div>
      </div>
    </div>
    <div class="spline">
      <spline-component/>
    </div>
  </header>
  <section>
    <div class="tab-buttons" id="nos-fonctionnalites">
      <div class="card-wrapper" id="cards">
        <router-link class="tab" to="/fonctionnalite1#nos-fonctionnalites">
          <div class="card">
            <h3>Serveurs hébergés</h3>
            <p>Une solution reposant sur des services en data-center pour une performance maximum</p>
          </div>
        </router-link>
        <router-link class="tab" to="/fonctionnalite2#nos-fonctionnalites">
          <div class="card">
            <h3>Serveurs locaux</h3>
            <p>Une réplication pour offrir des services spécifiques ainsi qu'une haute disponibilité</p>
          </div>
        </router-link>
        <router-link class="tab" to="/fonctionnalite3#nos-fonctionnalites">
          <div class="card">
            <h3>Administration</h3>
            <p>Une interface pour gérer, configurer, maintenir, et surveiller les serveurs rattachés</p>
          </div>
        </router-link>
        <router-link class="tab" to="/fonctionnalite4#nos-fonctionnalites">
          <div class="card">
            <h3>Support</h3>
            <p>Surveiller et gérer vos appareils réseau sans agent ou client</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="tab-content">

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
  </section>
  <section id="nos-objectifs">
    <div class="container">
      <div class="wrapper">
        <div class="image-qsn">
          <img src="../../public/Img/Multi-device%20targeting-amico.png" alt="nos objectifs">
        </div>
        <div class="desciption">
          <h2>Nos objectifs</h2>
          <ul>
            <li>Apporter une solution disruptive, libre et évolutive de centralisation de serveurs</li>
            <li>Offrir un produit développé pour les besoins des équipes qui doivent gérer des solutions éducatives en
              multi-sites (avec un MCO compétitif)
            </li>
            <li>Aider à mettre en place une démarche numérique responsable dans le respect du SDET et conforme au RGPD
            </li>
            <li>Garantir le fonctionnement grâce à un produit unique éprouvé (650 serveurs en production)</li>
            <li>Permettre l'utilisation d'un cloud souverain</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <slider-component/>
</template>
<script>
import ButtonComponent from "@/components/ButtonCoponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";
import SplineComponent from "@/components/SplineComponent.vue";
import {Icon} from "@iconify/vue";

export default {
  name: 'HomeView',
  components: {Icon, SplineComponent, SliderComponent, ButtonComponent},
  beforeRouteUpdate(to, from, next) {
    // Vérifiez si la route actuelle a une ancre
    if (to.hash) {
      // Effectuez le défilement vers l'élément avec l'ID correspondant à l'ancre
      this.scrollToElement(to.hash);
    }
    next();
  },
  methods: {
    scrollToElement(hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Utilisez la fonction scrollTo pour effectuer le défilement
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>
<style scoped lang="scss">


.tab {
  text-decoration: none;
}

.tab.router-link-active .card {
  background-color: #283783;
  color: white;
}

fade-enter-from, fade-leave-active {
  transition: opacity 0.5s;
}

.tab-buttons {
  z-index: 4;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -80px;
  width: 100%;
  @media screen and (max-width: 920px) {
    position: static;
  }
}

.card-wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  color: black;
  width: 100%;

  .card {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    height: 100%;
    text-align: center;
    max-height: 305px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #283783;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    h3 {
      font-family: Orbitron, sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
    }

    p {

      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 1rem;
    }
  }

}

@media screen and (max-width: 920px) {
  .card-wrapper {
    padding: 80px 30px;

  }
}


.spline {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
}

.home {
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #253441;
  background-size: cover;
  background-position: center;
  color: #f5f7fa;
  position: relative;

  .description {
    position: absolute;
    left: 10px;
    width: 50%;
    z-index: 12;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 80px 30px;

    .titre {
      padding-top: 64px;

      h1 {
        font-size: 32px;
        font-family: Orbitron, sans-serif;
        margin-bottom: 32px;
      }

      h2 {
        font-size: 20px;
        font-family: Orbitron, sans-serif;
        font-weight: 600;
        font-optical-sizing: auto;
        margin-bottom: 32px;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-left: 16px;
      }
    }

    p {
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 18px;
      line-height: 24px;
      font-weight: 300;
    }
  }

  .buton-link {
    position: absolute;
    bottom: 50px;
    display: flex;
    gap: 20px;
    right: 20px;
  }


}

#nos-objectifs {
  background: #2d3e50;
  padding: 80px 30px;

  .container {
    margin: 0px auto;
    max-width: 940px;
    width: 100%;

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .desciption {
        width: 50%;
        color: white;

        ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-left: 16px;
        }
      }

      .image-qsn {
        width: 40%;
        max-width: 46%;

        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 920px) {
  .home {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .description {
      position: absolute;
      width: 100%;
      padding: 15px;
      bottom: 90px;
      left: 0;

      .titre {

        h1 {
          font-size: 24px;

        }

        h2 {
          font-size: 18px;
        }
      }
    }

    .buton-link {
      position: absolute;
      bottom: 50px;
      z-index: 10;
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    .spline {
      width: 100%;
      height: 100vh;
      margin: 0;

    }
  }


  #qui-sommes-nous {
    .container {
      .wrapper {
        flex-direction: column;

        .desciption {
          width: 100%;
          margin-bottom: 32px;
        }

        .image-qsn {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
  #nos-objectifs {
    .container {
      .wrapper {
        flex-direction: column-reverse;

        .desciption {
          width: 100%;
          margin-bottom: 32px;
        }

        .image-qsn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
