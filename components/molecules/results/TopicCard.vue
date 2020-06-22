<template>
  <div class="topic-card card text-center mt-4 mb-4">
    <h6>{{text}}</h6>
    <p>{{explanation}}</p>
  </div>
</template>

<script>
export default {
  name: "TopicCard",
  props: {
    relevance: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    explanation() {
      switch (this.relevance * 10) {
        case this.relevance < 4:
          return "Me gusta un poco";
          break;

        case this.relevance < 8:
          return "Podría hablar por horas";
          break;

        default:
          return "Me mama, podría hablar toda la vida";
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.topic-card {
  background-color: #ffbd12;
  border: 2px solid black;
  box-shadow: $box-shadow-alpha;
  color: #18191f;
  font-family: $title-font;
  border-radius: 16px;
  h6 {
    font-weight: bolder;
    font-size: 8vw;
  }
  p {
    font-weight: 400;
  }
}
</style>