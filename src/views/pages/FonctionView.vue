<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: 'FonctionView',
  components: {CardComponent},

}
</script>

<template>

  <section class="head">
    <h1>Les fonctionnalitées</h1>
  </section>
  <section class="fonctionalité-sec">
    <div class="contaner">
      <h2>Les fonctionnalitées</h2>
      <div class="wrapper">
        <card-component title="Controle domaine" image="mdi:number-1-circle"
                        description="Contrôleur de domaine AD, alimenté depuis les différentes bases disponibles (Pronote/EDT, Siecle/STS ou les ENT)"/>
        <card-component title="Serveur de fichier" image="mdi:number-2-circle"
                        description="Serveur de fichiers SMB, NFS4 avec séparation des réseaux "/>
        <card-component title="Reservation dhcp et ip" image="mdi:number-3-circle"
                        description="DHCP et réservations IP Multi-réseaux et multi-VLANs"/>
        <card-component title="Gestion parcs" image="mdi:number-4-circle"
                        description="Gestion des parcs, des salles Extinction automatique, démarrage automatique, réinstallation, déploiements"/>
        <card-component title="Serveur impression" image="mdi:number-5-circle"
                        description="Serveur d'impression SMB/CUPS. Les imprimantes sont déployées de façon native avec des stratégies de groupe (GPO)"/>
        <card-component title="Déploiment automatique d'application" image="mdi:number-6-circle"
                        description="Déploiement automatique d’applications. Plus de 200 applications sont disponibles et maintenues à jour directement dans SambaÉdu"/>
        <card-component title="Déploiment automatique d'os" image="mdi:number-7-circle"
                        description="Déploiement automatique de Windows 10, 11 et GNU/Linux Debian avec intégration automatisée au domaine des postes"/>
        <card-component title="Configuration des profil et des station" image="mdi:number-8-circle"
                        description="Configuration simplifiée des profils et des stations par GPO via interface Web. Aucun client ou agent n’est à déployer sur les postes"/>
        <card-component title="Configuration des droits et permissions" image="mdi:number-9-circle"
                        description="Configuration des rôles et droits sur les différents parcs de machines pour des utilisateurs / groupes d'utilisateurs"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.head {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  color: #ffff;

  h1 {
    font-size: 64px;
    color: #ffff;
  }
}


.fonctionalité-sec {
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  .contaner {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      padding: 32px;
      font-size: 2rem;
      color: #283783;
    }

    // grid 3 par 3 responsive 2 par 2   et 1 par 1

    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

  }
}


@media screen and (max-width: 920px){
  .head {
    h1 {
      text-align: center;
      font-size: 32px;
    }
  }
  .fonctionalité-sec {
    .contaner {
      .wrapper {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
  }
}

</style>