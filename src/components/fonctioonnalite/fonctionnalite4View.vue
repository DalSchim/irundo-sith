<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "fonctionnalite1View",
  components: {CardComponent}
}
</script>

<template>

  <div class="content">
    <div class="card-f-wraper">
      <card-component title="Support à distance"
                      image="mdi:number-1-circle"
                      description="Éffectuez la maintenance, vérifiez les problèmes et fournissez une assitance rapide."/>

      <card-component title="Réinstallation de poste"
                      image="mdi:number-2-circle"
                      description="Gagnez du temps et économisez des déplacements grâce à notre solution de réinstallation et d'intégration au domaine des postes clients."/>

      <card-component title="Automatisation et maintenance"
                      image="mdi:number-3-circle"
                      description="Augmentez la productivité à l'aide de l'automatisation des tâches reproductibles"/>
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