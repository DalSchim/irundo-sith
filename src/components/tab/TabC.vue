<!-- TabC.vue -->
<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "TabC",
  components: {CardComponent,},
  data() {
    return {
      selectedTab: 0,
    };
  },

  props: {
    tabs: {
      type: Array,
      required: true,
    },
    title: {
      type: Array,
      required: true,
    },

  },
  methods: {
    isSelectedTab(index) {
      return this.selectedTab === index;
    },
    selectTab(index) {
      this.selectedTab = index;
      this.$emit("tab-changed", index);
      this.scrollToContent(index);
    },
    //scroll  to tab content
    scrollToContent(index) {
      this.$nextTick(() => {
        const contentElement = this.$refs[`content${index}`];
        if (contentElement) {
          contentElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
      });
    },
  },
};
</script>

<template>
  <section>
    <div class="tab-buttons" id="nos-fonctionnalites">
      <div class="card-wrapper">
        <div class="card" @click="selectTab(index)" v-for="(tab, index) in tabs"
             :key="index"
             :class="{ 'selected-tab': isSelectedTab(index) }">
          <h3>{{ title[index].titre }}</h3>
          <p>{{ tab.description }}</p>
        </div>
      </div>
    </div>

    <div>
      <!-- Boutons de navigation dans le contenu -->
      <div class="tab-content">
        <div class="content" v-if="selectedTab === 0" ref="content0" id="content-0" key="0">
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
                            description="Hebergement des données échanges des élèves et des professeurs"/>

            <card-component title="Serveur de métriques"
                            image="mdi:number-6-circle"
                            description="Permet de collecter et d'aggreger des metriques pour faciliter  la gestion  de l'activité informatique des serveurs"/>


          </div>
        </div>
        <div class="content" v-if="selectedTab === 1" ref="content1" id="content-1" key="1">

          <div class="card-f-wraper">

            <card-component title="Controleur de domaine"
                            image="mdi:number-1-circle"
                            description="L'annuaire est répliqué dans l'ensemble des établissements pour une question de résilience"/>

            <card-component title="Serveur de fichiers"
                            image="mdi:number-2-circle"
                            description="Serveur de fichiers SMB, NFS4 avec séparation du réseaux administratif et pédagogique"/>

            <card-component title="Reservation DHCP et ip"
                            image="mdi:number-3-circle"
                            description="DHCP et réservations IP Multi-réseaux et multi-VLANs"/>

            <card-component title="Serveur impression"
                            image="mdi:number-4-circle"
                            description="Serveur d'impression SMB/CUPS. Les imprimantes sont déployées de façon native avec des stratégies de groupe (GPO)"/>

            <card-component title="Serveur d'application"
                            image="mdi:number-5-circle"
                            description="Permettre de lancer des application exécutable depuis les serveurs"/>

          </div>
        </div>
        <div class="content" v-if="selectedTab === 2" ref="content2" id="content-2" key="2">

          <div class="card-f-wraper">
            <card-component title="Déploiment automatique d'application "
                            image="mdi:number-1-circle"
                            description="Déploiement automatique d’applications pédagogique. Plus de 200 applications sont disponibles et maintenues à jour directement dans SambaÉdu."/>

            <card-component title="Gestion des parcs et des salles"
                            image="mdi:number-2-circle"
                            description="Inventaire des machines, états des logiciels installés, déploiement et configuration de nouveaux appareils."/>

            <card-component title="Configuration des droits et permissions"
                            image="mdi:number-3-circle"
                            description="Configuration des rôles et droits sur les différents parcs de machines pour des utilisateurs / groupes d'utilisateurs."/>

            <card-component title="Configuration des espaces de travail"
                            image="mdi:number-4-circle"
                            description="Configuration simplifiée des profils et des stations via l'interface Web. Aucun client ou agent n’est à déployer sur les postes."/>

            <card-component title="Ergonomie et simplicité"
                            image="mdi:number-5-circle"
                            description="Espace de travail optimisé en fonction du type d'enseignement, matière. les racourcis et applications sont définient en fonction de chaque salle"/>

            <card-component title="Green IT"
                            image="mdi:number-6-circle"
                            description="Avec une architecture réseau scalable, une gestion des dispositifs d'économie d'énergie, le démarrage automatique pour les mises à jour à horaire décalée, et un extinction automatique des postes "/>

            <card-component title="Déploiement automatique de poste"
                            image="mdi:number-7-circle"
                            description="Déploiement automatique de Windows 10, 11 et GNU/Linux Debian avec intégration automatisée au domaine des postes"/>

          </div>
        </div>
        <div class="content" v-if="selectedTab === 3" ref="content3" id="content-3" key="3">

          <div class="card-f-wraper">
            <card-component title="Support a distance"
                            image="mdi:number-1-circle"
                            description="Éffectuez la maintenance, vérifiez les problèmes et fournissez une assitance rapide."/>

            <card-component title="Réinstallation de poste"
                            image="mdi:number-2-circle"
                            description="Gagnez du temps et économisez des déplacements grâce à notre solution de réinstallation et d'integration au domaine des postes clients."/>

            <card-component title="Automatisation et maintenance"
                            image="mdi:number-3-circle"
                            description="Augmentez la productivité à l'aide de l'automatisation des tâches reproductibles"/>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">


.selected-tab {
  background-color: #283783 !important;
  color: white;
  transform: translateY(-5px);
  cursor: pointer;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.content-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.content-navigation button {
  margin: 0 10px;
  padding: 8px 12px;
  cursor: pointer;
}

.tab-buttons {
  z-index: 4;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -70px;
  width: 100%;

}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.card {
  background: white;
  max-width: 250px;
  width: 100%;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
    cursor: pointer;
  }
}

.card button {
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;

}

.tab-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.buton-nav {
  padding-top: 95px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  button {
    background: transparent;
    color: #283783;
    border-top: 2px solid #283783;
    border-bottom: 2px solid #283783;
    border-left: none;
    border-right: none;
    padding: 12px 25px;
    font-family: Orbitron, sans-serif;
    font-weight: 600;
    font-optical-sizing: auto;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &::after {
      content: '';
    }

    &:first-child {
      border-left: #283783 2px solid;
      border-radius: 8px 0 0 8px;
      background-color: transparent;
      color: #283783;
    }

    &:last-child {
      border-right: #283783 2px solid;
      background-color: transparent;
      border-radius: 0 8px 8px 0;
      color: #283783;
    }

    &:hover {
      background-color: #283783;
      color: white;
    }
  }
}

.card-f-wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

@media (max-width: 920px) {
  .tab-buttons {
    position: static;
    max-width: 100%;
  }
  .card-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 90%;
    margin: 0;
  }
}

.buton-nav {
  display: none;
}

</style>
