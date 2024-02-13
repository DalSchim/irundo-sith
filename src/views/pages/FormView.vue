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
  <div class="form"  >
    <h2>Formulaire de contact</h2>
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
        <input type="text" id="collectivite" v-model="collectivite" placeholder="Nom de la collectivité ou de l'entreprise">
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
      <span>{{error}}</span>
      <button class=".btn" type="submit">Envoyer</button>
    </form>
  </div>

</template>

<style scoped lang="scss">
h1 {
  margin-bottom: 20px;
  margin-top: 12px;
}

.form {
  padding: 125px 0px;
  margin: 0px 32px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.section-name {
  display: flex;
  gap: 20px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 150px;
}

hr {
  border: 1px solid #e0e0e0;
}

button {
  max-width: fit-content;
  padding: 12px 25px;
  border-radius: 8px;
  font-family: Orbitron, sans-serif;
  font-weight: 600;
  font-optical-sizing: auto;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
  border: #283783 1px solid;
  color: #283783;

  &:hover {
    background-color: #283783;
    color: white;
  }


}

@media screen and (min-width: 768px) {
  .form {
    padding: 125px 0px;
    margin: 0px 32px;
  }

}


</style>