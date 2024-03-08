<script>
import ButtonComponent from "@/components/ButtonCoponent.vue";
import {Icon} from "@iconify/vue";

export default {
  components: {Icon, ButtonComponent},
  methods: {
    up() {
      window.scrollTo(0, 0);
    },
  }
}
</script>
<template>
  <footer>
    <div class="contain">
      <div class="wrappers">
        <img src="../../public/Img/Fichier3.png" alt="">
        <div class="info">
          <h2>Irundo</h2>
          <ul>
            <li>
              <router-link to="/#notre-solutions">La solution</router-link>
            </li>
            <li>
              <router-link to="/#nos-fonctionnalites">Nos fonctionalites</router-link>
            </li>
            <li>
              <router-link to="/#nos-objectifs">Nos objectifs</router-link>
            </li>
            <li>
              <router-link to="/#nos-partenaires">Nos partenaires</router-link>
            </li>
          </ul>
        </div>
        <div class="buton">
          <button-component color="blue" path="/form" text="contactez-nous"/>
          <ul class="footer-2">
            <li>
              <router-link to="/qui-sommes-nous">Qui sommes-nous</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <div class="conatin">
      <p>© 2024 Irundo. Tous droits réservés.</p>
    </div>
    <div class="ruturn-top">
      <Icon @click="up" width="32px" color="#283783" icon="line-md:chevron-up-circle"/>
    </div>
  </footer>
</template>
<style scoped lang="scss">

footer {
  padding: 80px 30px;
  background-color: #f5f7fa;
  color: black;


  .wrappers {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  .buton {
    display: flex;
    align-self: start;
    justify-content: end;
    flex-direction: column;
  }

  .contain {
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

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: #283783;
          font-size: 16px;
          font-family: Orbitron, sans-serif;
          font-weight: 600;
          position: relative;
          transition: all 0.3s ease;

          &:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #283783;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          &:hover {
            &:after {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        }
      }
    }
  }

  .footer-2 {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: #283783;
        font-size: 16px;
        font-family: Orbitron, sans-serif;
        font-weight: 600;
        position: relative;
        transition: all 0.3s ease;

        &:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #283783;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        &:hover {
          &:after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
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

  p {
    font-family: "Orbitron", sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-optical-sizing: auto;
    line-height: 1.5;
  }

}

.ruturn-top {
  display: none;
}

@media screen and (max-width: 920px) {

  .ruturn-top {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    cursor: pointer;
  }
  .down {
    display: none;
  }

  footer {
    padding: 80px 30px;
    background-color: #f5f7fa;
    color: black;

    .wrappers {
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
      flex-direction: column;
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

        li {
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

    p {
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