<script>
import emailjs from '@emailjs/browser';
export default {
  name: "FormComponents",
  data() {
    return {
      show: false,
      status: 'Envoi en cours...',
      error: '',
    };
  },

  mounted() {
    // Chargement du script reCAPTC
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },


  methods: {
    sendEmail() {
      var response = window.grecaptcha.getResponse();
      if (response.length === 0) {
        this.error = 'Veuillez cocher la case "Je ne suis pas un robot"';
        return false;
      } else {
        this.error = '';
      }
      this.show = true;
      emailjs.sendForm('service_1pv68d6', 'template_rdopjjl', this.$refs.form, { publicKey: 'IxcCC4LpCtMe3xHFx' })
          .then(
              () => {
                setTimeout(() => {
                  this.show = false;
                }, 1000);
                this.status = 'Message envoyé avec succès';
                this.$refs.form.reset();
                setTimeout(() => {
                  this.status = 'Envoi en cours...';
                }, 3000);
              },
              (error) => {
                setTimeout(() => {
                  this.show = false;
                }, 1000);
                this.status = 'Une erreur est survenue, veuillez réessayer plus tard : ' + error.text;
                this.$refs.form.reset();
                setTimeout(() => {
                  this.status = 'Envoi en cours...';
                }, 3000);
              },
          );
    }
  }
}
</script>

<template>
  <div class="formulaire-containeur">
    <div class="loading" v-if="show">
      <span class="loader2"></span>
      <h2>{{ status }}</h2>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
      <input type="hidden" name="contact_number">


      <div class="section-name">
        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" name="nom" id="nom" placeholder="Nom" v-model="nom">
        </div>

        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input type="text" name="prenom" placeholder="Prénom" id="prenom" v-model="prenom">
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" v-model="email">
      </div>

      <div class="form-group">
        <label for="collectivite">Nom de la collectivité ou de l'entreprise</label>
        <input type="text" name="collectivite" placeholder="Nom de la collectivité ou de l'entreprise"
               v-model="collectivite">
      </div>

      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="tel" id="telephone" name="phone" placeholder="Téléphone" v-model="phone">
      </div>

      <div class="form-group">
        <label for="fonction">Fonction éxercée</label>
        <input type="text" id="fonction" name="fonction" placeholder="Fonction éxercée" v-model="fonction">
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" v-model="message"></textarea>
      </div>
      <div class="g-recaptcha" data-sitekey="6Lcf-JgpAAAAAOBo73s_DHd6CFfavrVhQzTV0ga5"></div>
      <hr>
      <p>{{ errore }}</p>
      <button class=".btn" type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped lang="scss">

.formulaire-containeur {

  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    gap: 32px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 55, 131, 0.59);
    z-index: 1000000000;

    h2 {
      color: white;
    }

    .loader2 {
      position: relative;
      border-style: solid;
      box-sizing: border-box;
      border-width: 40px 60px 30px 60px;
      border-color: #3760C9 #96DDFC #96DDFC #36BBF7;
      animation: envFloating 1s ease-in infinite alternate;
    }

    .loader2:after {
      content: "";
      position: absolute;
      right: 62px;
      top: -40px;
      height: 70px;
      width: 50px;
      background-image: linear-gradient(#fff 45px, transparent 0),
      linear-gradient(#fff 45px, transparent 0),
      linear-gradient(#fff 45px, transparent 0);
      background-repeat: no-repeat;
      background-size: 30px 4px;
      background-position: 0px 11px, 8px 35px, 0px 60px;
      animation: envDropping 0.75s linear infinite;
    }

    @keyframes envFloating {
      0% {
        transform: translate(-2px, -5px)
      }
      100% {
        transform: translate(0, 5px)
      }
    }

    @keyframes envDropping {
      0% {
        background-position: 100px 11px, 115px 35px, 105px 60px;
        opacity: 1;
      }
      50% {
        background-position: 0px 11px, 20px 35px, 5px 60px;
      }
      60% {
        background-position: -30px 11px, 0px 35px, -10px 60px;
      }
      75%, 100% {
        background-position: -30px 11px, -30px 35px, -30px 60px;
        opacity: 0;
      }
    }
  }


  form {
    display: flex;
    flex-direction: column;
    background-color: #f5f7fa;
    border-radius: 8px;
    padding: 24px;
    gap: 20px;

    .section-name {
      display: flex;
      gap: 20px;

      input {
        width: 50%;
      }
    }

    .form-group {
      label {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 18px;
        font-weight: 300;
        font-optical-sizing: auto;
        margin-bottom: 8px;
      }

      input, textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 300;
        font-optical-sizing: auto;
        border: none;
        border-bottom: 1px solid #f5f7fa;
        transition: all 0.3s;

        &:focus {
          outline: none;
          border-bottom: 1px solid #2d3e50;
        }
      }
    }

    button {
      padding: 10px 32px;
      font-size: 16px;
      font-family: "Plus Jakarta Sans", sans-serif;
      font-weight: 300;
      background-color: #2d3e50;
      color: #f5f7fa;
      border: none;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: #f5f7fa;
        color: #2d3e50;
      }
    }
  }
}

</style>