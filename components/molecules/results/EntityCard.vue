<template>
  <div 
    class="
    entity-card
    d-flex
    align-items-center
    justify-content-around
    ">
    <div>
        <i
          class="fa"
          :class="{
            'fa-grin-hearts':sentiment==='positive',
            'fa-sad-cry':sentiment==='negative',
            'far fa-meh-rolling-eyes':sentiment==='neutral',
          }"
          aria-hidden="true"
        />
      </div>
      <div>
        <h6>{{name}}</h6>
        <p>{{type}}</p>
      </div>
      <div class="overfloww-icon">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EntityCard',
  data: () => ({
    name: 'Thom Yorke',
    type: 'Cantante',
    sentiment: 'positive'
  }),
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   type: {
  //     type: String,
  //     required: true,
  //   },
  //   sentiment: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>

<style lang="scss">
.entity-card {
  border-radius: 16px;
  border: 2px solid black;
  font-family: $title-font;
  h6{
    font-size: 1.8em;
    font-weight: bolder;
    color: black;
  }
  p{
    font-weight: 500;

  }
  i{
    font-size: 4em;
    color: $beta-color;
  }
  .overfloww-icon{
    margin-top:-20%;
    padding:4% 4%;
    border-radius:50%;
    border: 2px solid black;
    box-shadow: $box-shadow-alpha;
    background-color: $alpha-color;
    i{
      color:white;
      font-size:1.5em;
    }
  }
}
</style>