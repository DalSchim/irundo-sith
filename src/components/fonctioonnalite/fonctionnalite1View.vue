<script>
import CardComponent from "@/components/CardComponent.vue";


export default {
  name: "fonctionnalite1View",
  components: {CardComponent,}
}
</script>

<template>
  <div class="content"  ref="content0" id="content-0" key="0">
    <div class="card-f-wraper">
      <card-component title="Controle domaine"
                      image="mdi:number-1-circle"
                      description="Contrôleur de domaine AD, alimenté depuis les différentes bases disponibles (GPEI / Pronote / EDT  / Siecle / STS / ENT)"/>

      <card-component title="Serveur de Sauvegarde"
                      image="mdi:number-2-circle"
                      description="Serveur de sauvegarde pour une reprise d'activité rapide des serveurs locaux et des serveurs hebergés"/>

      <card-component title="Serveur DHCP"
                      image="mdi:number-3-circle"
                      description="Définition des plages IP des serveurs locaux"/>

      <card-component title="Serveur DNS"
                      image="mdi:number-4-circle"
                      description=" Serveur DNS pour les serveurs locaux et les serveurs hebergés "/>

      <card-component title="Serveur Cloud"
                      image="mdi:number-5-circle"
                      description="Hebergement des données-échanges des élèves et des professeurs"/>

      <card-component title="Serveur de métriques"
                      image="mdi:number-6-circle"
                      description="Permet de collecter et d'aggreger des metriques pour faciliter  la gestion  de l'activité informatique des serveurs"/>
    </div>
  </div>

</template>

<style scoped lang="scss">
.content{
  margin: 150px 20px;
  @media (max-width: 920px) {
    margin: 30px 20px;
  }
}
.card-f-wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin: 20px 80px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  @media (max-width: 920px) {
    margin: 20px 20px;
  }
}

</style>