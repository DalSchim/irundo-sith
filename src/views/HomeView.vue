<template>
  <header id="accueil">

    <div class="titre">
      <h1>Irundo : Révolutionnez l'Éducation en Toute Liberté</h1>
      <p class="desciption"></p>
    </div>

    <div class="spline">
      <spline-component/>
    </div>

    <div class="buton-link">
      <button-component class="buton" color="white" text="Contact" path="/form"></button-component>
      <button-component class="buton" color="white" text="En savoir plus" path="/about"></button-component>
    </div>
  </header>
  <section id="nos-solutions">
    <div class="container">
      <div class="wrapper">
        <div class="desciption">
          <h2>Notre solution</h2>
          <p>Irundo est une solution open source libre et souveraine qui a pour but d’offrir une interface web
            centralisée de déploiement et d’infogérance de l'ensemble des établissements scolaires de la
            collectivité.</p>
          <ul>
            <li>POC réalisé et fonctionnel</li>
            <li>MCO ccompétitif</li>
            <li>Coformité RGPD</li>
            <li>Respect du SDET</li>
            <li>Une sécurité numérique rendorcée pour la collectivité</li>
          </ul>
        </div>
        <div class="image-qsn">
          <img src="../../public/Img/Fichier3.png" alt="nos solutions">
        </div>
      </div>
    </div>
  </section>
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
#accueil {
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #283783;
  background-size: cover;
  background-position: center;
  color: #f5f7fa;
  position: relative;

  .titre {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 40%;
    height: 100%;
    margin-left: 64px;

    h1 {
      font-size: 64px;
      text-align: start;

      @media screen and (max-width: 920px) {
        font-size: 38px;
        margin-left: 16px;
      }
    }

    @media screen and (max-width: 920px) {
      color: white;
      z-index: 2;
      position: absolute;
      margin: 0;
      left: 16px;
      height: fit-content;
      bottom: 20%;
      font-size: 38px;
      width: 80%;

    }

  }

  .spline {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 920px) {
      width: 100%;
      z-index: 1;
      height: 80%;
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
  background: #283783;
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

#nos-solutions {
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

        ul {
          margin-top: 32px;
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      }

      .image-qsn {
        width: 40%;
        max-width: 46%;

        img {
          width: 70%;
        }
      }
    }
  }
}

@media screen and (max-width: 920px) {
  #accueil {
    h1 {
      font-size: 38px;
      width: 80%;
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
