<template>
  <div class="topic-card card text-center">
    <div class="card-body">
      <h4>{{text}}</h4>
      <p>{{explanation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicCard',

  props: {
    relevance: {
      type: Number,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },

  computed: {
    explanation() {
      switch (this.relevance * 10) {
        case this.relevance < 4:
          return 'Me gusta un poco';
          break;

        case this.relevance < 8:
          return 'Podría hablar por horas';
          break;

        default:
          return 'Me mama, podría hablar toda la vida';
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.topic-card {
  height: 100%;
  background-color: $beta-color;
  border: $border-alpha;
  box-shadow: $box-shadow-alpha;
  color: $dark-color;
  font-family: $title-font;
  border-radius: $rounded-alpha;
  h4 {
    font-weight: bolder;
    font-size: var(--h3);
  }
  p {
    font-weight: 500;
    color: $dark-light-color;
  }
}
</style>