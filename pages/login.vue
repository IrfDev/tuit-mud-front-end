<template>
  <div
    class="login container-fluid align-items-center align-self-center text-center"
  >
    <section class="row justify-content-center m-0">
      <div class="background-page-image col-12 col-lg-5 col-md-9 mt-5">
        <peep action="chill" width="100" />
        <circle-background class="circle" />
      </div>
      <div class="col-12 col-lg-6 col-md-8 twitter-login-card">
        <basic-card
          :title="'Lets get started!'"
          :content="contentCard"
          :ctaButton="'Login'"
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

    head() {
      return {
        title: 'Login',
      };
    },

    components: {
      BasicCard,
    },

    computed: {
      contentCard: () =>
        `Login into your Twitter account and in less than 20 seconds you'll get the results`,
    },

    methods: {
      goToTwitterAuth() {
        window.open('http://localhost:8080/auth/twitter', '_self');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .twitter-login-card {
    position: absolute;
    top: 65%;
  }
  .peep {
    background-color: transparent;
  }
  .background-page-image {
    margin-top: 100vw;
    display: flex;
  }
  .login {
    min-height: 100vh;
    height: 100%;
    background-color: $alpha-color;
  }
</style>
