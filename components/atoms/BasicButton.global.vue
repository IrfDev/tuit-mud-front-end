<template>
  <button
    class="basic-button b-none"
    :class="{
      'shadoww':boxShadow,
      'main-color':mainColor,
      'complementary-color':complementaryColor,
    }"
    :style="`backgroundColor: ${customColor}`"
  >
    <i :class="`fa fa-${ctaIcon}`" aria-hidden="true" />
    {{content}}
  </button>
</template>

<script>
export default {
  name: 'BasicButton',

  props: {
    content: {
      type: String,
      default: 'Entrar ahora',
    },
    ctaIcon: {
      type: String,
    },
    mainColor: {
      type: Boolean,
      default: true,
    },
    complementaryColor: {
      type: Boolean,
      default: false,
    },
    customColor: {
      type: String,
      default: '',
    },
    boxShadow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.shadoww {
  box-shadow: 0px 6px 0px #18191f;
}
.main-color {
  background-color: $alpha-color;
  color: white;
}
.complementary-color {
  background-color: $beta-color;
}
.basic-button {
  padding: 2% 12%;
  border-radius: $rounded-alpha;
  font-family: $title-font;
  font-size: var(--h3);
  font-weight: bolder;
}
</style>