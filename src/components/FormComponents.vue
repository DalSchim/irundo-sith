<script>
import emailjs from '@emailjs/browser';
export default {
  name: "FormComponents",
  methods: {
    //submit form



    sendEmail() {
      emailjs
          .sendForm('service_1pv68d6', 'template_rdopjjl', this.$refs.form, {
            publicKey: 'IxcCC4LpCtMe3xHFx',
          })
          .then(
              () => {
                alert('Votre message a bien été envoyé')
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
          );
    },
  },


}

</script>

<template>
  <div class="formulaire-containeur">
    <form ref="form" @submit.prevent="sendEmail">
      <input type="hidden" name="contact_number">
      <div class="section-name">

        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" name="nom" id="nom" placeholder="Nom">
        </div>

        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input type="text" name="prenom" placeholder="Prénom">
        </div>

      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email">
      </div>

      <div class="form-group">
        <label for="collectivite">Nom de la collectivité ou de l'entreprise</label>
        <input type="text" name="collectivite"
               placeholder="Nom de la collectivité ou de l'entreprise">
      </div>

      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="tel" id="telephone" name="phone" placeholder="Téléphone">
      </div>

      <div class="form-group">
        <label for="fonction">Fonction éxercée</label>
        <input type="text" id="fonction" name="fonction" placeholder="Fonction éxercée">
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Message"></textarea>
      </div>
      <hr>
      <button class=".btn" type="submit">Envoyer</button>
    </form>
  </div>

</template>

<style scoped lang="scss">

.formulaire-containeur {
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