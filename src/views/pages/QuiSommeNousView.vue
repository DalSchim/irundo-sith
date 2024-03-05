<script>
export default {
  name: "QuiSommeNousView"
}
</script>
<template>
  <section class="hero">
    <div class="info">
      <div class="titre">
        <h1>Qui sommes-nous</h1>
        <p>Fondée par des entrepreneurs experts en éducation, infrastructures, logiciels et interfaçage, la société Irundo offre une solution disruptive et novatrice.
          Elle permet une gestion simple et centralisée de solutions éducatives en multi-sites et la maîtrise totale du SI des établissement de la collectivité.
          Le coeur de l'engagement d'Irundo repose sur des produits développés pour les besoins spécifiques du monde de l'éducation.
          Aujourd'hui près d'une trentaine de collaborateurs participent à la mise en œuvre des produits Irundo, en interne ou au sein des sociétés partenaires.</p>
      </div>
      <div class="image">
        <img src="../../../public/Img/Coworking-amico.png" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
  color: black;

  .info {
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    width: 100%;

    .titre {
      width: 50%;

      h1 {
        font-family: Orbitron, sans-serif;
        font-size: 40px;
        margin-bottom: 16px;
      }

      p {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        font-optical-sizing: auto;
        line-height: 1.5;
      }
    }

    .image {
      width: 50%;

      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
}

.notre-histoire {
  padding: 100px 0;
  background-color: #283783;
  color: white;

  .container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;

    .wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      .image-qsn {
        width: 50%;

        img {
          max-width: 100%;
          object-fit: cover;
        }
      }

      .desciption {
        width: 50%;

        h2 {
          font-family: Orbitron, sans-serif;
          font-size: 40px;
          font-weight: 600;
          font-optical-sizing: auto;
          margin-bottom: 32px;
        }

        p {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          line-height: 24px;
          font-weight: 300;
        }
      }
    }
  }
}

@media screen and (max-width: 920px) {
  .hero {
    height: 140vh;
    .info {
      flex-direction: column;
      gap: 20px;

      .titre {
        width: 100%;
        text-align: center;
      }

      .image {
        width: 100%;
      }
    }
  }
  .notre-histoire {
    .container {
      .wrapper {
        flex-direction: column;
        gap: 20px;

        .image-qsn {
          width: 100%;
        }

        .desciption {
          width: 100%;
        }
      }
    }
  }
}


//mobile
@media screen and (max-width: 920px) {
  .hero {
    .info {
      flex-direction: column;
      gap: 20px;

      .titre {
        width: 100%;
        text-align: center;
      }

      .image {
        width: 100%;
      }
    }
  }
  .notre-histoire {
    .container {
      .wrapper {
        flex-direction: column;
        gap: 20px;

        .image-qsn {
          width: 100%;
        }

        .desciption {
          width: 100%;

          p {
            padding: 20px 8px;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>