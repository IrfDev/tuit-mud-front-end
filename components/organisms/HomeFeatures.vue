<template>
  <div class="features row m-0">
    <feature
      :title="
        `Basta de rodeos.
      ¡Eres único y lo sabes!`
      "
      :subtitle="
        'Conoce un poco más sobre ti con éste simple, pero divertido análisis'
      "
    />
    <feature
      :title="`Hazle saber al mundo lo que eres`"
      :icon="'share-alt'"
      :subtitle="
        'Comparte tus resultados con todo el mundo y logra reflejar tu personalidad'
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
