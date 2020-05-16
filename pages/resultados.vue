<template>
  <div class="results container-fluid p-0 m-0 pr-0">
    <div class="col m-0 p-0">
      <intro-card/>
    </div>
    <results-content/>
  </div>
</template>

<script>
import axios from 'axios'
import IntroCard from '@/components/molecules/results/IntroCard';
import ResultsContent from '@/components/organisms/ResultsContent';

export default {
  name: 'Resultados',
  components: {
    IntroCard,
    ResultsContent,
  },
  async mounted() {
  },
  data() {
    return {
      username: '',
      user: {}
    }
  }
};
</script>

<style lang="scss">
.results {
  min-height: 100vh;
}
</style>