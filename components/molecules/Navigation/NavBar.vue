<template>
  <div
    class="container-fluid d-flex flex-row justify-content-between align-items-stretch"
  >
    <div class="logo">
      <nuxt-link to="/">
        <img
          src="/logo-color.png"
          alt="logo-tuitmud"
          class="img-fluid login-false"
          v-if="!isResults && !isLogin"
        />
        <img
          src="/logo-light.png"
          alt="logo-tuitmud-light"
          class="img-fluid login-true"
          v-if="!isResults && isLogin"
        />
      </nuxt-link>
    </div>
    <div>
      <h3
        v-if="!isResults"
        :class="{ 'light-color': isLogin }"
        class="logo-name"
      >
        TuitMud
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheNavbar',

    computed: {
      isResults() {
        if (this.$route.path.includes('resultados')) return true;
      },
      isLogin() {
        if (
          this.$route.path.includes('login') ||
          this.$route.path.includes('resultados')
        ) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container-fluid {
    position: absolute;
    top: 0.7%;

    .login-true,
    .login-false {
      transition: 5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      animation: fadeIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }

    .logo {
      flex-basis: 8%;
    }

    @media screen and (min-width: 768px) {
      top: 1.5%;
      .logo {
        flex-basis: 4.5%;
      }
    }

    .logo-name {
      transition: 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      font-weight: $font-weight-title;
      font-size: var(--h3);
      @media screen and (min-width: 768px) {
        font-size: var(--h4);
      }
    }

    .light-color {
      transition: 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: #f8f8f8 !important;
    }
    @keyframes fadeIn {
      0% {
        filter: blur(1px);
      }

      100% {
        filter: blur(0px);
      }
    }
  }
</style>
