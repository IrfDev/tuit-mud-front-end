<template>
  <main>
    <nav-bar />
    <nuxt />
    <the-footer />
  </main>
</template>

<script>
  import NavBar from '@/components/molecules/Navigation/NavBar.vue';
  import TheFooter from '@/components/molecules/Navigation/TheFooter.vue';

  export default {
    name: 'DefaultLayout',

    components: {
      NavBar,
      TheFooter,
    },

    head() {
      return {
        titleTemplate: '%s | Tuitmud 🦜',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Know your mood, topics and stuff you like from your Tweets. Click now and have some fun with us!',
          },
        ],
      };
    },
  };
</script>

<style>
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
