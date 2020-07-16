<template>
  <div class="feature col-md-6 col-12 mt-5 mb-3 text-center">
    <i :class="`fa fa-${icon} mb-3`" aria-hidden="true" />
    <h3 class="title">
      {{ title }}
    </h3>
    <h4 class="subtitle">
      {{ subtitle }}
    </h4>
    <p>
      {{ content }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Feature',
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      content: {
        type: String,
      },
      icon: {
        type: String,
        default: 'heart',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .feature {
    i {
      background-color: $beta-color;
      padding: 6%;
      border-radius: 50%;
      color: white;
      font-size: 10vw;
    }
    .title {
      font-family: $title-font;
      font-weight: bolder;
    }
    .subtitle {
      font-family: $title-font;
      font-size: 5.5vw;
      font-weight: $font-weight-paragraph;
    }
  }
</style>
