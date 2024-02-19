<template>

  <header class="home" id="notre-solutions">
    <div class="description">
      <div class="titre">
        <h1>Irundo : Révolutionnez l'Éducation en Toute Liberté</h1>
        <div class="desciption">
          <p>Irundo est une solution open source libre et souveraine qui a pour but d’offrir une interface web
            centralisée de déploiement et d’infogérance de l'ensemble des établissements scolaires de la
            collectivité.</p>
          <br>
          <ul>
            <li>Conformité RGPD</li>
            <li>Respect du schéma directeur des ENT (SDET)</li>
            <li>Sécurisation de l'environnement IT pour la collectivité</li>
            <li>MCO Performant, fiable et sécurisé</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="spline">
      <spline-component/>
    </div>
    <div class="buton-link">
      <button-component class="buton" color="white" text="Contact" path="/form"></button-component>
      <button-component class="buton" color="white" text="En savoir plus" path="/about"></button-component>
    </div>
  </header>
  <tabs-component/>
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
            <li>Développée pour les besoins des équipes qui doivent gérer des solutions éducatives en multi-sites.</li>
            <li>Mettre en place une démarche numérique responsable</li>
            <li>Basé sur un produit unique éprouvé (650 serveurs en production)</li>
            <li>Une garantie de pérennité, une reprise d’actifs possible.</li>
            <li>Intégration d'un cloud souverain</li>
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
import TabsComponent from "@/components/tab/TabsComponent.vue";

export default {
  name: 'HomeView',
  components: {TabsComponent, SplineComponent, SliderComponent, ButtonComponent},
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
  //creation  d'un scroll pour chaque #id
}
</script>
<style scoped lang="scss">

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
        font-size: 56px;
        font-family: Orbitron, sans-serif;
        margin-bottom: 32px;
      }

      h2 {
        font-size: 38px;
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

#qui-sommes-nous {
  background-color: #f5f7fa;
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
        color: black;
      }

      .image-qsn {
        width: 40%;
        max-width: 46%;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
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
  #nos-solutions {
    .container {
      .wrapper {
        flex-direction: column;

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
