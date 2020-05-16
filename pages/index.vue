<template>
  <div class="container-fluid">
    <header-home/>
    <home-feature/>
    <social-media-mock/>
  </div>
</template>

<script>
import HeaderHome from "~/components/molecules/HeaderHome.vue";
import SocialMediaMock from "~/components/molecules/SocialMediaMock.vue";
import HomeFeature from "~/components/organisms/HomeFeatures.vue";

export default {
  components: {
    SocialMediaMock,
    HomeFeature,
    HeaderHome,
  }
};
</script>

<style lang='scss'>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
