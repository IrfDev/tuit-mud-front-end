<template>
  <div class="loader text-center container-fluid d-flex align-items-center">
    <div class="row flex-row justify-content-center">
      <div class="title mt-4 col-12 ">
        <h5 v-if="action === 'waiting'">Leyenedo tus tweets...</h5>
        <h5 v-if="action === 'reading'">Analizando tus tweets...</h5>
        <h5 v-if="action === 'ready'">¡Listo!</h5>
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
      <div class="col-sm-10 col-lg-5 col-12 ">
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
        <peep
          v-if="action === 'ready'"
          action="ready"
          :activePeep="activePeep"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'ResultsLoader',
    props: {
      action: {
        type: String,
        required: true,
      },
    },
    computed: {
      ...mapState(['actionLoading', 'activePeep']),
    },
  };
</script>

<style lang="scss">
  .loader {
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    background: url('/images/loader/background.svg');
    h5 {
      font: $title-font;
      color: white;
      font-weight: $font-weight-title;
    }
  }
</style>
