<template>
  <footer
    class="row m-0 footer d-flex justify-content-between align-items-center align-content-center "
    :class="{ 'p-2 mt-4 round-footer': !isLogin }"
  >
    <div class="logo align-self-center">
      <img
        v-if="!isLogin"
        src="/logo-light.png"
        class="img-fluid"
        alt="logo-tuitmud"
      />
    </div>
    <div class="anouncements text-right pr-3">
      <span>Made with ❤️ by IrfDev </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    computed: {
      isLogin() {
        return this.$route.path.includes('login');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .footer {
    background-color: $alpha-color;
    color: white;
    align-items: center !important;
    & + .round-footer {
      border-radius: 16px 16px 0 0;
    }
    .logo {
      flex-basis: 10%;
    }
    .anouncements {
      flex-basis: 90%;
    }
    @media screen and (min-width: 768px) {
      .anouncements {
        flex-basis: 40%;
      }
      .logo {
        flex-basis: 3.5%;
      }
    }
    li {
      font-family: Montserrat;
    }
    ul {
      list-style: none;
      li {
        display: inline-block;
      }
    }
  }
</style>
