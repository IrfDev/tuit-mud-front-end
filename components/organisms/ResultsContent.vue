<template>
  <div class="row m-0 justify-content-center">
    <div
      class="col-12 col-lg-7 justify-content-center d-flex m-1"
      v-for="(sentiment, sentimentIndex) in sentiments"
      :key="sentimentIndex"
    >
      <sentiment-card v-bind="sentiment" />
    </div>
    <div class="col-12 mb-3 col-lg-6 col-md-12 mt-4">
      <h2 class="title-section">{{ activeResult | topicTitle }}</h2>
      <div class="row align-items-stretch justify-content-center m-0">
        <div
          class="col-12 col-lg-6 col-md-6 mb-lg-3 mb-md-3 mt-3 mt-md-3 mt-lg-3"
          v-for="(topic, topicIndex) in topics"
          :key="topicIndex"
        >
          <topic-card v-bind="topic" />
        </div>
      </div>
    </div>
    <div class="col-12 mt-2 mb-3 col-lg-6 mt-4">
      <h2 class="title-section mb-4">{{ activeResult | entityTitle }}</h2>
      <div class="row align-items-stretch justify-content-center m-0">
        <div
          class="col-12 col-lg-6 col-md-6 mb-3 mt-2"
          :key="entityIndex"
          v-for="(entity, entityIndex) in entities"
        >
          <entity-card v-bind="entity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalCard from '@/components/molecules/results/PersonalCard';
import SentimentCard from '@/components/molecules/results/SentimentCard';
import TopicCard from '@/components/molecules/results/TopicCard';
import EntityCard from '@/components/molecules/results/EntityCard';
import { mapState } from 'vuex';

export default {
  name: 'ResultContent',
  components: {
    PersonalCard,
    SentimentCard,
    TopicCard,
    EntityCard,
  },
  computed: {
    sentiments() {
      const activeResult = this.$store.getters.activeResultTarget;
      return this.$store.state.analizedText[activeResult].sentiments;
    },

    topics() {
      const activeResult = this.$store.getters.activeResultTarget;
      return this.$store.state.analizedText[activeResult].concepts;
    },

    entities() {
      const activeResult = this.$store.getters.activeResultTarget;
      return this.$store.state.analizedText[activeResult].entities;
    },

    ...mapState(['activeResult']),
  },
  filters: {
    topicTitle: (activeResult) => {
      switch (activeResult) {
        case 'Yo':
          return 'My favorite topics';
          break;

        case 'Gustos':
          return 'Topics that I read';
          break;

        case 'Amigos':
          return 'Topics that my friends like';
          break;

        default:
          break;
      }
    },
    entityTitle: (activeResult) => {
      switch (activeResult) {
        case 'Yo':
          return 'Mis cosas favoritas';
          break;

        case 'Gustos':
          return 'Las cosas que leo';
          break;

        case 'Amigos':
          return 'Cosas favoritas con mis amigos';
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  text-align: center;
}
h2 {
  font-weight: 800;
}
</style>
