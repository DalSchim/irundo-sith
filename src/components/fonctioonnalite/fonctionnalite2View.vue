<script>
import CardComponent from "@/components/CardComponent.vue";
import {Icon} from "@iconify/vue";

export default {
  name: "fonctionnalite1View",
  components: {Icon, CardComponent}
}
</script>

<template>
  <div class="content" id="content" key="1">
    <div class="card-f-wraper">
      <card-component title="Replication AD"
                      image="carbon--directory-domain"
                      description="L'annuaire est répliqué sur le contrôleur de domaine local des établissements pour une question de résilience"/>

      <card-component title="Serveur de fichiers"
                      image="material-symbols--folder-data-outline"
                      description="Serveur de fichiers SMB, NFS4 avec séparation des réseaux administratif et pédagogique"/>

      <card-component title="Réservation DHCP et IP"
                      image="carbon--tcp-ip-service"
                      description="DHCP et réservations IP multi-réseaux et multi-VLANs"/>

      <card-component title="Serveur d'impression"
                      image="streamline--printer"
                      description="Serveur d'impression SMB/CUPS. Les imprimantes sont déployées de façon native avec des stratégies de groupe (GPO)"/>

      <card-component title="Serveur d'applications"
                      image="healthicons--desktop-app-outline"
                      description="Lancement des applications exécutables directement depuis le serveur"/>
    </div>
    <a href="#nos-fonctionnalites" class="buton-link">
      <Icon width="32px" color="#283783" icon="line-md:chevron-up-circle"/>
    </a>
  </div>
</template>

<style scoped lang="scss">
.content {
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