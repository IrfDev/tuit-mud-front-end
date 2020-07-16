<template>
  <div class="basic-card card text-center p-4">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <basic-button
      :content="ctaButton"
      :customColor="customColor"
      :boxShadow="ctaShadow"
      :ctaIcon="ctaIcon"
      @click.native="clickCtaHandler()"
    />
  </div>
</template>

<script>
  export default {
    name: 'BasicCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      customColor: {
        type: String,
      },
      ctaButton: {
        type: String,
      },
      ctaShadow: {
        type: Boolean,
        default: false,
      },
      ctaIcon: {
        type: String,
      },
    },
    methods: {
      clickCtaHandler(event) {
        this.$emit('clickCta', event);
      },
    },
  };
</script>

<style lang="scss">
  .basic-card {
    border-radius: $rounded-alpha;
    border: 2px solid black;
    box-shadow: $box-shadow-alpha;
    z-index: 2;

    h1,
    p {
      font-family: $title-font;
    }
    h1 {
      font-size: 8.5vw;
      font-weight: bolder;
    }
  }
</style>
