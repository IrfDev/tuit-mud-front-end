<template>
  <div class="login container-fluid align-items-center">
    <section class="row justify-content-center m-0 ">
      <div class="background-page-image col-12 col-lg-5 mt-5">
        <peep action="chill" width="100" />
        <circle-background class="circle" />
      </div>
      <div class="col-12 col-lg-8">
        <basic-card
          :title="'¡Comencemos!'"
          :content="contentCard"
          :ctaButton="'Iniciar sesión'"
          :customColor="'#1DA1F2'"
          :ctaIcon="'twitter'"
          @clickCta="goToTwitterAuth()"
        />
      </div>
    </section>
  </div>
</template>

<script>
  import BasicCard from '@/components/molecules/BasicCard';

  export default {
    name: 'LoginTwitter',
    components: {
      BasicCard,
    },
    computed: {
      contentCard: () =>
        'Inicia sesión en tu cuenta de Twitter y obtén los resultados en menos de 30 segundos.',
    },
    methods: {
      goToTwitterAuth() {
        window.open('http://localhost:8080/auth/twitter', '_self');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .peep {
    /* z-index: 1; */
    background-color: transparent;
  }
  .background-page-image {
    margin-bottom: -30vw;
    display: flex;
  }
  .login {
    min-height: 100vh;
    background-color: $alpha-color;
  }
</style>
