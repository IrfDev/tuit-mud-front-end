<template>
  <loading-results :action="loadingStatus" v-if="loading === true" />
  <div v-else class="results container-fluid p-0 m-0 pr-0">
    <div class="row m-0 p-0">
      <intro-card />
    </div>
    <results-content />
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Resultados',
    components: {
      IntroCard: () => import('@/components/molecules/results/IntroCard'),
      ResultsContent: () => import('@/components/organisms/ResultsContent'),
      LoadingResults: () => import('@/components/organisms/LoadingResults'),
      activeResult: state => state.activeResult,
    },

    head() {
      return {
        title: 'Results',
      };
    },

    async beforeMount() {
      await this.$store.dispatch('getAuthInfo');
      const userId = this.$store.state.user.twitterId;
      const userData = await axios.get(`/apis/user/${userId}`);

      if (userData.data.data.wasAnalyzed === false) {
        await this.$store.dispatch('getUserTweets');
        await this.$store.dispatch('getUserMentions');
        await this.$store.dispatch('getUserFavs');
        this.loadingStatus = 'reading';
        await this.$store.dispatch('analyzeText', 'tweets');
        await this.$store.dispatch('analyzeText', 'mentions');
        this.loadingStatus = 'ready';
        await this.$store.dispatch('analyzeText', 'favs');
        this.loading = false;
      } else {
        this.loadingStatus = 'ready';
        userData.data.data.user.textAnalytics.forEach(textAnalytics => {
          this.$store.commit('SET_ANALIZED_TEXT', {
            target: textAnalytics.type,
            data: textAnalytics,
          });
        });
        this.loadingStatus = 'ready';
        this.loading = false;
      }
    },

    data() {
      return {
        loading: true,
        loadingStatus: 'waiting',
      };
    },
  };
</script>

<style lang="scss">
  .results {
    min-height: 100vh;
  }
</style>
