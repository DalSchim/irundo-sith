<script>

import ButtonComponent from "@/components/ButtonCoponent.vue";

export default {
  name: 'FormView',
  components: {ButtonComponent},
  data(){
    return {
      nom: '',
      prenom: '',
      email: '',
      collectivite: '',
      telephone: '',
      fonction: '',
      message: ''
    }
  },
  methods: {
    submitForm(){
      console.log(this.nom, this.prenom, this.email, this.collectivite, this.telephone, this.fonction, this.message);
    }
  }
}
</script>

<template>
  <!-- form : nom, prenom, email, nom de la collectivité ou de l'entreprise, telephone fonction éxercée -->
  <div class="form">
    <h2>Formulaire de contact</h2>
    <form>
      <div class="section-name">
        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" id="nom" placeholder="Nom">
        </div>
        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" placeholder="Prénom">
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="collectivite">Nom de la collectivité ou de l'entreprise</label>
        <input type="text" id="collectivite" placeholder="Nom de la collectivité ou de l'entreprise">
      </div>
      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="tel" id="telephone" placeholder="Téléphone">
      </div>
      <div class="form-group">
        <label for="fonction">Fonction éxercée</label>
        <input type="text" id="fonction" placeholder="Fonction éxercée">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Message"></textarea>
      </div>

      <hr>
      <button-component class="buton" color="blue" text="Envoyer" type="submit"></button-component>
    </form>
  </div>

</template>

<style scoped>
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

hr{
  border: 1px solid #e0e0e0;
}

@media screen and (min-width: 768px) {
  .form {
    padding: 125px 0px;
    margin: 0px 32px;
  }

}



</style>