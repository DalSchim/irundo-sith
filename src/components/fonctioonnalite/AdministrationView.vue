<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "fonctionnalite1View",
  components: {CardComponent}
}
</script>

<template>
  <div class="content" id="content">
    <div class="card-f-wraper">
      <card-component title="Déploiment automatique d'applications "
                      image="fluent--tasks-app-28-regular"
                      description="Déploiement automatique d’applications pédagogiques. Plus de 200 applications sont disponibles et maintenues à jour"/>

      <card-component title="Gestion des parcs et des salles"
                      image="icon-park-outline--setting-computer"
                      description="Inventaire des machines, état des logiciels installés, déploiement et configuration de nouveaux appareils"/>

      <card-component title="Configuration des droits et permissions"
                      image="icon-park-outline--permissions"
                      description="Configuration des rôles et droits sur les différents parcs de machines pour des utilisateurs / groupes d'utilisateurs"/>

      <card-component title="Configuration des espaces de travail"
                      image="fluent--desktop-edit-20-regular"
                      description="Configuration simplifiée des profils et des stations via l'interface Web. Aucun client ou agent n’est à déployer sur les postes"/>

      <card-component title="Ergonomie et simplicité"
                      image="gala--display-eye"
                      description="Espace de travail optimisé en fonction du type d'enseignement, matière. les racourcis et applications sont définis en fonction de chaque salle"/>

      <card-component title="Green IT"
                      image="cryptocurrency--ppc"
                      description="Architecture réseau scalable, gestion des dispositifs d'économie d'énergie, démarrage automatique pour les mises à jour à horaire décalé, extinction automatique des postes"/>

      <card-component title="Déploiement automatique de poste"
                      image="icon-park-outline--download-computer"
                      description="Déploiement automatique de Windows 10, 11 et GNU/Linux Debian avec intégration automatisée au domaine des postes"/>

    </div>
  </div>

</template>

<style scoped lang="scss">
.content {
  margin: 150px 20px;
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
    margin: 20px 20px;
  }
}
</style>