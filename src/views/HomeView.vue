<template>
  <section id="heade">
    <h1>Irundo<br>une solution souveraine et innovante</h1>
    <div class="buton-link">
      <button-component class="buton" color="white" text="Contact" path="/contact"></button-component>
      <button-component class="buton" color="white" text="En savoir plus" path="/about"></button-component>
    </div>
  </section>
  <section id="qui-sommes-nous">
    <div class="container">
      <div class="wrapper">
        <div class="desciption">
          <h2>Qui sommes-nous ?</h2>
          <p>Des entrepreneurs, experts du monde l’éducation, des infrastructures, des logiciels, de l’interfaçage
            mettent en commun leurs compétences et celles de leurs sociétés dans un projet innovant.</p>
        </div>
        <div class="image-qsn">
          <img src="../../public/Coworking-amico.png" alt="qui-sommes-nous">
        </div>
      </div>
    </div>
  </section>
  <section id="nos-objectifs">
    <div class="container">
      <div class="wrapper">
        <div class="image-qsn">
          <img src="../../public/Multi-device%20targeting-amico.png" alt="nos objectifs">
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
  <section id="nos-solutions">
    <div class="container">
      <div class="wrapper">
        <div class="desciption">
          <h2>Nos solutions</h2>
          <p>Irundo est une solution open source libre et souveraine qui a pour  but d’offrir une interface web centralisée de déploiement  et d’infogérance de l'ensemble des établissements scolaires de la collectivité.</p>
          <ul>
            <li>POC réalisé et fonctionnel</li>
            <li>MCO ccompétitif</li>
            <li>Coformité RGPD</li>
            <li>Respect du SDET</li>
            <li>Une sécurité numérique rendorcée pour la collectivité</li>
          </ul>
        </div>
        <div class="image-qsn">
          <img src="../../public/Fichier3.png" alt="nos solutions">
        </div>
      </div>
    </div>
  </section>
  <slider-component/>
</template>

<script>


import ButtonComponent from "@/components/ButtonCoponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";

export default {
  name: 'HomeView',
  components: {SliderComponent, ButtonComponent},
}
</script>
<style scoped lang="scss">
#heade {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('../../public/datacenter-son-role.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  color: #ffff;

  .buton-link {
    position: absolute;
    bottom: 50px;
    display: flex;
    gap: 20px;
    right: 20px;
  }

  h1 {
    font-family: Orbitron, sans-serif;
    font-size: 64px;
    font-weight: 700;
    font-optical-sizing: auto;
    text-align: center;
    width: 60%;
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




</style>
