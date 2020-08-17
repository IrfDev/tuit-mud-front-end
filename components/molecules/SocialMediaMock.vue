<template>
  <div
    class="social-media-mocks justify-content-center d-flex flex-column mt-3 mb-3"
  >
    <div class="d-flex justify-content-start mb-2 mt-3 ml-4 align-self-start">
      <avatar :name="peepToUppercase" style="h6{text-transform:capitalize}" />
    </div>
    <div class="main-image align-self-center">
      <peep action="socialMedia" width="100" />
    </div>
    <div class="reactions ml-4 mt-2 mb-2">
      <i class="fa fa-comment" aria-hidden="true" />
      {{ comments }}
      <i class="fa fa-heart" aria-hidden="true" />
      {{ likes }}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
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
        const randomNumber = Math.floor(Math.random() * (2000 - 0)) + 0;
        return randomNumber;
      },

      likes() {
        const randomNumber = Math.floor(Math.random() * (2000 - 0)) + 0;
        return randomNumber;
      },

      peepToUppercase() {
        return (
          this.activePeep.charAt(0).toUpperCase() + this.activePeep.slice(1)
        );
      },

      ...mapState(['activePeep']),
    },
  };
</script>

<style lang="scss">
  .social-media-mocks {
    border: 2px solid #18191f;
    border-radius: $rounded-alpha;
    box-shadow: $box-shadow-alpha;
    .main-image {
      width: 90%;
      .peep {
        background-color: $beta-color;
        border-radius: 21.3px;
        border: 3px solid #18191f;
      }
    }
  }
</style>
