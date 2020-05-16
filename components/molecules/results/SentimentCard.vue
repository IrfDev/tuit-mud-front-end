<template>
  <div
    class="
      sentiment
      card
      justify-content-between
      align-items-center
      d-flex flex-row
      p-3
      mb-3"
  >
    <div class="content">
      <h5>{{intro}}</h5>
      <h6>{{explanation}}</h6>
    </div>
    <div class="sentiment-icon align-item-center">
      <i
        class="fa"
        :class="{
            'fa-smile-o':sentiment==='positive',
            'fa-sad-cry':sentiment==='negative',
            'far fa-meh-rolling-eyes':sentiment==='neutral',
            }"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SentimentalCard",
  data: () => ({
    name: "El Irving",
    username: "Irffffs",
    peep: "/images/peeps/pepe/personal.png",
    sentiment: "positive"
  }),
  computed: {
    intro() {
      switch (this.sentiment) {
        case 'positive':
          return 'Persona positiva'
        break;
        case 'negative':
          return 'Amante del drama'
        break;
        case 'neutral':
          return 'Neutral ante todo'
        break;
      
        default:
          break;
      }
      // return this.data 
    },
    explanation() {
      switch (this.sentiment) {
        case 'positive':
          return 'Me encanta pensar que el mundo está a mi favor'
        break;
        case 'negative':
          return 'Soy medio darks, pero muy en el fondo sonrío a todos'
        break;
        case 'neutral':
          return 'Me da igual todo, que se caiga el mundo, seguiré bien'
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
  h5, h6{
    font-family: $title-font;
  }
  h5{
    font-weight: 600;
  }
  i {
    color:$gamma-color;
    font-size: 4em;
  }
}
</style>