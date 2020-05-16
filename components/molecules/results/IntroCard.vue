<template>
  <div class="Intro pt-3 text-center m-0 pb-4 mb-3">
    <avatar
      class="avatar-intro"
      :vertical="true"
      :name="''"
      :image="image"
    />
    <h2>
      {{name}}
    </h2>
    <h3>
      @{{username}}
    </h3>
    <p>
      Soy una persona {{sentiment|translate}}
    </p>
    <switch-results/>
  </div>
</template>

<script>
import SwitchResults from '@/components/atoms/SwitchResults';

export default {
  name: 'introCard', 
  components: {
    SwitchResults,
  },
  data: () => ({
    name: 'El Irving',
    username: 'irfffs',
    image:'/images/peeps/pepe/avatar.png',
    sentiment: 'positive'
  }),
  filters: {
    translate: (sentiment) => {
      switch (sentiment) {
        case 'positive':
          return 'positiva'
        break;
        case 'negative':
          return 'negativa'
        break;
        case 'neutral':
          return 'neutral'
        break;
      
        default:
          break;
      }
    }
  }
  // props: {
  //   name: {
  //     type: String,
  //   },
  // },
};
</script>

<style lang="scss">
.Intro {
  min-width: 100vw;
  background-color: $gamma-color;
  border-radius: 0px 0px 32px 32px;
    h2, h3{
      color:white;
      font-family: $title-font;
    }
  h2{
    font-weight: bolder;
  }
  h3{
    font-weight: 500;
  }
}
</style>