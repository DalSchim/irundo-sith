<script>

import ButtonComponent from "@/components/ButtonCoponent.vue";

export default {
  components: {ButtonComponent}
}

</script>

<template>
  <footer>
    <div class="conatin">
      <div class="wrappers">
        <img src="../../public/Img/Fichier3.png" alt="">
        <div class="info">
          <h2>Irundo</h2>
          <ul>
            <li>Accueil</li>
            <li>Qui sommes-nous</li>
            <li>Nos objectifs</li>
            <li>Nos solutions</li>
          </ul>
        </div>
        <div class="buton">
          <button-component color="blue" path="/form" text="contactez-nous"/>
        </div>
      </div>
    </div>
    <hr>
    <div class="conatin">
      <p>© 2021 Irundo. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  padding: 80px 30px;
  background-color: #f5f7fa;
  color: black;

  .wrappers{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .buton {
    display: flex;
    align-self: start;
    justify-content: end;
  }

  .conatin {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .info {
    display: flex;
    justify-content: start;

    flex-direction: column;
    gap: 20px;

    h2 {
      font-family: Orbitron, sans-serif;
      font-size: 24px;
      font-weight: 600;
      font-optical-sizing: auto;
      margin-bottom: 32px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      li{
        list-style: none;
      }
    }
  }

  button {
    width: 200px;
  }

  hr {
    margin-top: 80px;
    border: 1px solid #e0e0e0;
  }
  p{
    font-family: "Orbitron", sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-optical-sizing: auto;
    line-height: 1.5;
  }

}

@media screen and (max-width: 920px) {
  footer {
    padding: 80px 30px;
    background-color: #f5f7fa;
    color: black;

    .wrappers{
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      gap: 20px;
      width: 100%;
    }

    img {
      max-width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .buton {
      display: flex;
      align-self: center;
      justify-content: center;
    }

    .conatin {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;
    }

    .info {
      display: flex;
      justify-content: start;
      flex-direction: column;
      gap: 20px;

      h2 {
        font-family: Orbitron, sans-serif;
        font-size: 24px;
        font-weight: 600;
        font-optical-sizing: auto;
        margin-bottom: 32px;
        text-align: center;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        li{
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          list-style: none;
        }
      }
    }

    button {
      width: 200px;
    }

    hr {
      margin-top: 80px;
      border: 1px solid #e0e0e0;
    }
    p{
      text-align: center;
      font-family: "Orbitron", sans-serif;
      font-size: 16px;
      font-weight: 400;
      font-optical-sizing: auto;
      line-height: 1.5;
    }
  }
}
</style>