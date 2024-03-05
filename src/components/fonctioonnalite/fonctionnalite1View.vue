<script>
import CardComponent from "@/components/CardComponent.vue";
import {Icon} from "@iconify/vue";


export default {
  name: "fonctionnalite1View",
  components: {Icon, CardComponent,}
}
</script>

<template>
  <div class="content"  ref="content0" id="content"  key="0">
    <div class="card-f-wraper">
      <card-component title="Contrôleur de domaine"
                      image="mdi--domain"
                      description="Contrôleur de domaine AD, alimenté depuis les différentes bases disponibles (GPEI / Pronote / EDT  / Siècle / STS / ENT)"/>

      <card-component title="Serveur de Sauvegarde"
                      image="clarity--backup-solid"
                      description="Serveur de sauvegarde pour une reprise d'activité rapide des serveurs locaux et des serveurs hebergés"/>

      <card-component title="Serveur DHCP"
                      image="mdi--ip-network-outline"
                      description="Définition des plages IP des serveurs locaux"/>

      <card-component title="Serveur DNS"
                      image="eos-icons--dns"
                      description=" Serveur DNS pour les serveurs locaux et les serveurs hebergés "/>

      <card-component title="Serveur Cloud"
                      image="tabler--cloud-upload"
                      description="Hébergement des données-échanges des élèves et des professeurs"/>

      <card-component title="Serveur de métriques"
                      image="material-symbols--health-metrics-outline-rounded"
                      description="Permet de collecter et d'agréger des métriques pour faciliter  la gestion  de l'activité informatique des serveurs"/>
    </div>
    <router-link to="/fonctionnalite1#nos-fonctionnalites" class="buton-link">
      <Icon width="32px" color="#283783" icon="line-md:chevron-up-circle"/>
    </router-link>
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