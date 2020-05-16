<template>
  <div class="login container-fluid">
      <circle-background
        class="align-self-center"
      />
    <div class="background-page-image col-12 pt-5">
        <img
          src="/images/peeps/pepe/background-login.png"
          alt="iniciar-sesion"
          class="img-fluid"
        >
    </div>
    <div class="col-12">
      <basic-card
        :title="'¡Comencemos!'"
        :content="contentCard"
        :ctaButton="'Iniciar sesión'"
        :customColor="'#1DA1F2'"
        :ctaIcon="'twitter'"
        @clickCta="goToTwitterAuth()"
      />
    </div>
  </div>
</template>

<script>
import BasicCard from '@/components/molecules/BasicCard';

export default {
  name: 'IniciarSesión',
  components: {
    BasicCard,
  },
  computed: {
    contentCard:() => 'Inicia sesión en tu cuenta de Twitter y obtén los resultados en menos de 30 segundos.'
  },
  methods: {
    goToTwitterAuth() {
      window.open('http://localhost:8080/auth/twitter', '_self');
    },
  },
};
</script>

<style lang="scss" scoped>
.background-page-image{
  // padding-top: 90vw;
  margin-bottom:-30vw;
}
.login {
  min-height:100vh;
  background-color:$alpha-color;
}
</style>