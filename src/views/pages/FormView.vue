<script>


import FormComponents from "@/components/FormComponents.vue";

export default {
  name: 'FormView',
  components: {FormComponents},
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
            coordonnées, et nous vous recontacterons.
          </p>
        </div>
      </div>
      <FormComponents/>
    </div>
  </div>
</template>

<style scoped lang="scss">


.form {
  padding-top: 100px;
  grid-column: span 12/span 12;
  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding: 8px 16px;
    }
    padding: 20px 80px;
    max-width: 1200px;
    display: grid;
    margin: auto;
    .info {
      padding: 8px;
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
        @media screen and (max-width: 1024px) {
          font-size: 16px;
          padding-bottom: 20px;
        }
      }
    }
  }
}
</style>