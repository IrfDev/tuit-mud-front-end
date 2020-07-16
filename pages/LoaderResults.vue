<template>
  <div
    class="loader text-center d-flex flex-column align-items-center justify-content-around"
  >
    <div class="title mt-4">
      <h1 v-if="action === 'waiting'">Leyenedo tus tweets...</h1>
      <h1 v-if="action === 'reading'">Analizando tus tweets...</h1>
      <h1 v-if="action === 'ready'">¡Listo!</h1>
    </div>
    <div v-if="action !== 'ready'" class="text-center">
      <div
        class="spinner-border text-light"
        style="width: 3rem; height: 3rem;"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <peep
      v-if="action === 'waiting'"
      action="waiting"
      :activePeep="activePeep"
    />
    <peep
      v-if="action === 'reading'"
      action="reading"
      :activePeep="activePeep"
    />
    <peep v-if="action === 'ready'" action="ready" :activePeep="activePeep" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'loader',
    components: {
      Peep,
    },
    computed: {
      // ...mapState(["actionLoading", "activePeep"])
    },
    data() {
      return {
        action: 'ready',
        activePeep: 'dani',
      };
    },
  };
</script>

<style lang="scss">
  .loader {
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    background: url('/images/loader/background.svg');
    h1 {
      font: $title-font;
      color: white;
      font-weight: $font-weight-title;
    }
  }
</style>
