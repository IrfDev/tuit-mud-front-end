<template>
  <div class="row m-0">
    <div class="col-12" v-for="(sentiment, sentimentIndex) in sentiments" :key="sentimentIndex">
      <sentiment-card v-bind="sentiment" />
    </div>
    <div class="col-12 mb-3">
      <h3 class="title-section">{{activeResult | topicTitle}}</h3>
      <topic-card v-for="(topic, topicIndex) in topics" :key="topicIndex" v-bind="topic" />
    </div>
    <div class="col-12 mt-2 mb-3">
      <h3 class="title-section mb-4">{{activeResult | entityTitle}}</h3>
      <entity-card v-for="(entity, entityIndex) in entities" :key="entityIndex" v-bind="entity" />
    </div>
  </div>
</template>

<script>
import PersonalCard from "@/components/molecules/results/PersonalCard";
import SentimentCard from "@/components/molecules/results/SentimentCard";
import TopicCard from "@/components/molecules/results/TopicCard";
import EntityCard from "@/components/molecules/results/EntityCard";
import { mapState } from "vuex";

export default {
  name: "ResultContent",
  components: {
    PersonalCard,
    SentimentCard,
    TopicCard,
    EntityCard
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
    ...mapState(["activeResult"])
  },
  filters: {
    topicTitle: activeResult => {
      switch (activeResult) {
        case "Yo":
          return "Mis temas favoritos";
          break;

        case "Gustos":
          return "Temas que leo";
          break;

        case "Amigos":
          return "Lo que hablo con mis amigos";
          break;

        default:
          break;
      }
    },
    entityTitle: activeResult => {
      switch (activeResult) {
        case "Yo":
          return "Mis cosas favoritas";
          break;

        case "Gustos":
          return "Las cosas que leo";
          break;

        case "Amigos":
          return "Cosas favoritas con mis amigos";
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title-section {
  text-align: center;
}
</style>