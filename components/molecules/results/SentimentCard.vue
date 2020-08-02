<template>
  <div class="sentiment card justify-content-between align-items-center d-flex flex-row p-3 mb-3">
    <div class="content">
      <h2>{{intro}}</h2>
      <h6>{{explanation}}</h6>
    </div>
    <div class="sentiment-icon align-item-center">
      <i
        class="fa"
        :class="{
            'fa-smile-o':label==='positive',
            'fa-sad-cry':label==='negative',
            'far fa-meh-rolling-eyes':label==='neutral',
            }"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SentimentalCard',
  props: {
    label: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  computed: {
    intro() {
      switch (this.label) {
        case 'positive':
          return 'Persona positiva';
          break;
        case 'negative':
          return 'Amante del drama';
          break;
        case 'neutral':
          return 'Neutral ante todo';
          break;

        default:
          break;
      }
      // return this.data
    },
    explanation() {
      switch (this.label) {
        case 'positive':
          return 'Me encanta pensar que el mundo está a mi favor';
          break;
        case 'negative':
          return 'Soy medio darks, pero muy en el fondo sonrío a todos';
          break;
        case 'neutral':
          return 'Me da igual todo, que se caiga el mundo, seguiré bien';
          break;

        default:
          break;
      }
      // return this.data
    },
  },
};
</script>

<style lang="scss" scoped>
.sentiment {
  box-shadow: $box-shadow-alpha;
  border: 2px solid black;
  border-radius: 16px;
  h2 {
    font-weight: 700;
  }
  i {
    color: $gamma-color;
    font-size: 4em;
  }
  flex-basis: 90%;
  @media screen and (min-width: 768px) {
    flex-basis: 40%;
  }
  @media screen and (min-width: 480px) {
    flex-basis: 80%;
  }
}
</style>