<template>
  <div class="container-fluid">
    <header-home />
    <div class="row">
      <home-feature />
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-12">
        <social-media-mock />
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderHome from '~/components/molecules/HeaderHome.vue';
  import SocialMediaMock from '~/components/molecules/SocialMediaMock.vue';
  import HomeFeature from '~/components/organisms/HomeFeatures.vue';

  export default {
    components: {
      SocialMediaMock,
      HomeFeature,
      HeaderHome,
    },
  };
</script>

<style lang="scss"></style>
