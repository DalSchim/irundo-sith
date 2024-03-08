<template>
  <section id="nos-partenaires">
    <div class="container">
      <div class="wraper">
        <h2>Nos partenaires et technologies</h2>
        <Splide :options="splideOptions">
          <splide-slide class="slide">
            <img src="../../public/Img/levelsys_cover.jpg" alt="logo levelsys">
          </splide-slide>
          <splide-slide class="slide">
            <img src="../../public/Img/logo_SambaEdu_223px100px.png" alt="logo SambaEdu">
          </splide-slide>
          <splide-slide class="slide">
            <img src="../../public/Img/neo.png" alt="Logo Neofutur">
          </splide-slide>
          <splide-slide class="slide">
            <img src="../../public/Img/debian_logo_icon_168290.png" alt="logoDebian">
          </splide-slide>
          <splide-slide class="slide">
            <img src="../../public/Img/Proxmox.webp" alt="">
          </splide-slide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
// import Splide library
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';

export default ({
  name: 'SliderComponent',
  // import the slider library
  components: {
    Splide,
    SplideSlide,
  },
  methods: {},
  setup() {
    return {
      // options for the slider library
      splideOptions: {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        autoScroll: true,
        arrows: false,
        autoWidth: true,
        autoplay: true, // use this instead of autoScroll
        pauseOnHover: true,
        resetProgress: false,
        interval: 2000,
        breakpoints: {
          600: {
            perPage: 2,
          },
          800: {
            perPage: 2,
          },
        },
      },
    };
  },
});
</script>
<style scoped lang="scss">

section {
  background-color: #ffff;
  padding: 80px 30px;
}

.container {
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 30px;

  .wraper {
    margin: 0px auto;
    max-width: 940px;

    h2 {
      font-family: Orbitron, sans-serif;
      font-size: 24px;
      font-weight: 600;
      font-optical-sizing: auto;
      margin-bottom: 32px;
      text-align: center;
    }

    .slide {
      img {
        max-width: 100%;
        height: 64px;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 920px) {
  .container {
    padding: 0;

    .wraper {
      padding: 0;

      .splide {
        padding: 0;
      }
    }
  }
}
</style>
