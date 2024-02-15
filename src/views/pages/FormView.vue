<script>


export default {
  name: 'FormView',

  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      collectivite: '',
      telephone: '',
      fonction: '',
      message: '',
      error: ''
    }
  },

  methods: {
    //verification des champs si, l'email n'est pas bon ou si un champ est vide je renvoie un message d'erreur et si ce n'est pas des chiffres je renvoie un message d'erreur
    submitForm() {
      if (this.nom === '' || this.prenom === '' || this.email === '' || this.collectivite === '' || this.telephone === '' || this.fonction === '' || this.message === '') {
        this.error = 'Veuillez remplir tous les champs';
      } else if (!this.email.includes('@') || !this.email.includes('.')) {
        this.error = 'Veuillez entrer un email valide';
      } else if (isNaN(this.telephone) || this.telephone.length !== 10) {
        this.error = 'Veuillez entrer un numéro de téléphone valide';
      } else {
        this.error = '';
        alert('Votre message a bien été envoyé');
      }
    }
  }
}

</script>
<template>
  <!-- form : nom, prenom, email, nom de la collectivité ou de l'entreprise, telephone fonction éxercée -->
  <div class="form">
    <div class="container">
      <div class="info">
        <h2>
          Curieux ? vous pouvez nous contacter
        </h2>
        <div class="text">
          <p>
            Posez-nous toutes vos questions et plongez dans la découverte de notre solution ! Fournissez-nous vos
            coordonnées, et nous vous recontacterons entre 9 h 30 et 18 h 30 du lundi au vendredi. On est là pour vous !
            🚀
          </p>
        </div>
      </div>
      <div class="formulaire-containeur">
        <form @submit.prevent="submitForm">
          <input type="hidden" name="contact_number">
          <div class="section-name">
            <div class="form-group">
              <label for="nom">Nom</label>
              <input type="text" v-model="nom" id="nom" placeholder="Nom">
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input type="text" v-model="prenom" id="prenom" placeholder="Prénom">
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="collectivite">Nom de la collectivité ou de l'entreprise</label>
            <input type="text" id="collectivite" v-model="collectivite"
                   placeholder="Nom de la collectivité ou de l'entreprise">
          </div>
          <div class="form-group">
            <label for="telephone">Téléphone</label>
            <input type="tel" id="telephone" v-model="telephone" placeholder="Téléphone">
          </div>
          <div class="form-group">
            <label for="fonction">Fonction éxercée</label>
            <input type="text" id="fonction" v-model="fonction" placeholder="Fonction éxercée">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="message" placeholder="Message"></textarea>
          </div>
          <hr>
          <span>{{ error }}</span>
          <button class=".btn" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


.form {
  padding-top: 100px;
  grid-column: span 12/span 12;


  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding: 8px 40px;
    }
    padding: 20px 80px;
    max-width: 1200px;
    display: grid;
    margin: auto;

    .info {
      h2 {
        font-size: 40px;
        font-family: Orbitron, sans-serif;
        font-weight: 600;
        font-optical-sizing: auto;
        margin-bottom: 32px;

      }

      .text {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
        @media screen and (max-width: 920px) {
          font-size: 16px;
          padding-bottom: 20px;
        }
      }
    }

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

  }
}


//responsive


</style>