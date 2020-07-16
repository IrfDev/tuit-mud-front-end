<template>
  <span :class="`background`" />
</template>

<script>
  export default {
    name: 'CircleBackground',
    props: {
      circleWidth: {
        type: Number,
        default: 100,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .background {
    content: '';
    padding: 50%;
    position: absolute;
    left: 0;
    background-color: $beta-color;
    border-radius: 50%;
    z-index: 0;
  }
</style>
