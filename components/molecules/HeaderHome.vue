<template>
  <div
    class="header-home row justify-content-center align-items-lg-center flex-lg-column mb-3"
  >
    <div
      class="col-10 col-lg-3 mt-md-4 mt-1 col-md-4 d-flex justify-content-center align-items-center"
    >
      <peep action="stand" width="50" class="d-xs-none" />
      <circle-background />
    </div>
    <div class="col-12 col-lg-9 mt-lg-2 mt-3 mt-md-1 text-center">
      <h1>One Tweet says more than a hundred words</h1>
      <h2 class="mt-2 mt-lg-2 mb-lg-3">
        How much your tweets can tell about you?
      </h2>
      <basic-button :content="'Comenzar ahora'" @click.native="goToLogin" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderHome',

    methods: {
      goToLogin() {
        this.$router.push({
          path: '/login',
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  img {
    z-index: 2;
  }
  h1 {
    font-family: $title-font;
    font-weight: $font-weight-title;
  }
  h2 {
    font-family: $title-font;
    font-weight: $font-weight-paragraph;
  }
</style>
