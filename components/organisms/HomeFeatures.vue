<template>
  <div class="features row m-0 mb-5">
    <feature
      :title="
        `You're unique and you know it`
      "
      :subtitle="
        'Know yourself a little more with this simple but funny analysis'
      "
    />
    <feature
      :title="`Let the world know you`"
      :icon="'share-alt'"
      :subtitle="
        'Share your results with the world and reflect the real you!'
      "
    />
  </div>
</template>

<script>
import Feature from '@/components/molecules/Feature';

export default {
  name: 'HomeFeatures',
  components: {
    Feature,
  },
};
</script>

<style lang="scss"></style>
