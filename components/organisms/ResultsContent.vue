<template>
<div class="row m-0">
    <div class="col-12">
      <sentiment-card/>
    </div>
    <h3 class="title-section">
      {{activeResult | topicTitle}}
    </h3>
    <div class="col-12 mb-3">
      <personal-card/>
    </div>
    <h3 class="title-section">
      {{activeResult | entityTitle}}
    </h3>
    <div class="col-12 mb-3">
      <topic-card/>
    </div>
    <div class="col-12 mb-3 mt-4">
      <entity-card/>
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
    ...mapState({
      activeResult: (state) => state.activeResult,
    }),
  },
  filters: {
    topicTitle:(activeResult) => {
      switch (activeResult) {
        case 'Yo':
          return 'Mis temas favoritos'
        break;

        case 'Gustos':
          return 'Temas que leo'
        break;

        case 'Amigos':
          return 'Lo que hablo con mis amigos'
        break;

        default:
        break;
      }
    },
    entityTitle:(activeResult) => {
      switch (activeResult) {
        case 'Yo':
          return 'Mis personas favoritas'
        break;

        case 'Gustos':
          return 'Las personas que leo'
        break;

        case 'Amigos':
          return 'Personas favoritas con mis amigos'
        break;

        default:
        break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title-section{
  text-align: center;
}
</style>