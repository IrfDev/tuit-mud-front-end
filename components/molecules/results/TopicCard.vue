<template>
  <div class="topic-card card text-center">
    <h6>{{topic}}</h6>
    <p>{{explanation}}</p>
  </div>
</template>

<script>
export default {
  name: 'TopicCard',
  data: () => ({
    topic: 'Memes', 
    relevance: 9,
  }),
  computed: {
    explanation() {
      switch (this.relevance) {
        case this.relevance < 4:
          return 'Me gusta un poco'
        break;

        case this.relevance < 8:
          return 'Podría hablar por horas'
        break;
      
        default: return 'Me mama, podría hablar toda la vida'
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.topic-card {
  background-color:$alpha-color;
  border:2px solid black;
  box-shadow: $box-shadow-alpha;
  color:#18191F;
  font-family: $title-font;
  border-radius: 16px;
  h6{
    font-weight: bolder;
    font-size: 8vw;
  }
  p{
    font-weight: 400;
  }
}
</style>