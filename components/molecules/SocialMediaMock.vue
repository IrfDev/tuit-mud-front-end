<template>
  <div
    class="
    social-media-mocks
    justify-content-center
    d-flex
    flex-column
    mt-3
    mb-3
    "
  >
      <div class="d-flex justify-content-start mb-2 mt-3 ml-4 align-self-start">
        <avatar
          :name="'TuitMud'"
        />
      </div>
      <div class="main-image align-self-center">
        <img 
          :src="img"
          alt=""
        >
      </div>
      <div class="reactions ml-4 mt-2 mb-2">
        <i class="fa fa-comment" aria-hidden="true"/>
        {{comments}}
        <i class="fa fa-heart" aria-hidden="true"/>
        {{likes}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaMock',
  props: {
    img: {
      type: String,
      default: '/images/peeps/pepe/main-image.png',
    },
  },
  computed: {
    comments() {
      const randomNumber = Math.floor(Math.random() * (2000 - 0))+0
      return randomNumber;
    },
    likes() {
      const randomNumber = Math.floor(Math.random() * (2000 - 0))+0
      return randomNumber;
    },
  },
};
</script>

<style lang="scss">
.social-media-mocks {
  border: 2px solid #18191F;
  border-radius: $rounded-alpha;
  box-shadow: $box-shadow-alpha;
  img{
    border-radius: 21.3px;
  }
}
</style>