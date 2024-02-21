<script>
export default {
  name: "PointNavComponenet"
}
</script>

<template>
  <div class="point-nav">
    <ul>
      <li>
        <router-link to="/#notre-solutions">
          <div class="point"></div>
        </router-link>
      </li>

      <li>
        <div>
          <router-link to="/#nos-fonctionnalites">
            <div class="point"></div>
          </router-link>
        </div>
      </li>

      <li>
        <router-link exact-active-class="active" to="/#nos-objectifs">
          <div class="point"></div>
        </router-link>
      </li>

      <li>
        <router-link exav to="/#nos-partenaires">
          <div class="point"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
// style pour la route actuelle
.point-nav {
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  z-index: 9999;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;

      .point {
        width: 10px;
        height: 10px;
        background-color: #283783;
        border: 2px solid #283783;
        border-radius: 50%;
        transition: all 0.3s ease;

        &.active {
          background-color: #ffffff;
          border: 2px solid #283783;
        }
      }
    }
  }
}


</style>