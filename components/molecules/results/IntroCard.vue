<template>
  <div class="Intro pt-3 text-center m-0 pb-4 mb-3 row flex-row justify-content-center">
    <div class="col-12">
      <avatar class="avatar-intro" :vertical="true" :name="''" :image="image" />
      <h1>{{ name }}</h1>
      <h3>@{{ username }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="col-12 col-lg-4 col-md-7">
      <switch-results />
    </div>
  </div>
</template>

<script>
import SwitchResults from '@/components/atoms/SwitchResults';
import { mapState } from 'vuex';

export default {
  name: 'introCard',
  components: {
    SwitchResults,
  },
  computed: {
    ...mapState({
      name: (state) => state.user.name,
      username: (state) => state.user.username,
      description: (state) => state.user.description,
      image: (state) => state.user.picture,
      sentiment: (state) => state.analizedText.tweets.sentiments[0].label,
    }),
  },
  filters: {
    translate: (sentiment) => {
      switch (sentiment) {
        case 'positive':
          return 'positiva';
          break;
        case 'negative':
          return 'negativa';
          break;
        case 'neutral':
          return 'neutral';
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.Intro {
  width: 100%;
  background-color: $gamma-color;
  border-radius: 0px 0px 32px 32px;
  h1,
  h3 {
    color: white;
  }
  h1 {
    font-weight: $font-weight-title;
  }
  h3 {
    font-weight: 500;
  }
  p {
    color: white;
  }
}
</style>
