<template>
  <div class="header-home row justify-content-center mb-3">
    <div class="col-10 d-flex justify-content-center align-items-center">
      <img src="/images/Home/stand-peep.png" class="img-fluid ml-5" alt="">
      <circle-background/>
    </div>
    <div class="col text-center">
      <h1>
        Un Tweet dice más que mil palabra
      </h1>
      <h2 class="mt-4">
        ¿Qué tanto dicen tus Tweet's sobre ti?
      </h2>
      <basic-button
        :content="'Comenzar ahora'"
        @click.native="goToLogin"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderHome',
  methods: {
    goToLogin() {
      this.$router.push({
        path:'/iniciar-sesion'
      })
    },
  },
};
</script>

<style lang="scss" scoped>
img{
  z-index:2;
}
h1{
  font-family: $title-font;
  font-weight: $font-weight-title;
}
h2{
  font-family: $title-font;
  font-weight: $font-weight-paragraph;
  font-size: 7vw;

}
</style>