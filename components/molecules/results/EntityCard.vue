<template>
  <div class="entity-card d-flex align-items-center justify-content-between mt-4 mb-4">
    <div>
      <i
        class="fa"
        :class="{
            'fa-grin-hearts':sentiment.label==='positive',
            'fa-sad-cry':sentiment.label==='negative',
            'far fa-meh-rolling-eyes':sentiment.label==='neutral',
          }"
        aria-hidden="true"
      />
    </div>
    <div>
      <h6>{{text}}</h6>
      <p>{{type}}</p>
    </div>
    <div class="overfloww-icon">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntityCard",
  props: {
    sentiment: {
      type: Object,
      default: () => ({
        label: "neutral"
      })
    },
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    relevance: {
      type: Number,
      required: true
    }
  }
  // data: () => ({
  //   sentiment: {
  //     label: "positive"
  //   }
  // })
};
</script>

<style lang="scss">
.entity-card {
  border-radius: 16px;
  border: 2px solid black;
  font-family: $title-font;
  h6 {
    font-size: 1.6em;
    font-weight: bolder;
    color: black;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
    max-width: 200px;
  }
  p {
    font-weight: 500;
  }
  i {
    font-size: 4em;
    color: $beta-color;
    margin-left: 0.1em;
  }
  .overfloww-icon {
    margin-top: -20%;
    padding: 4% 4%;
    border-radius: 50%;
    border: 2px solid black;
    box-shadow: $box-shadow-alpha;
    background-color: $alpha-color;
    i {
      color: white;
      font-size: 1.5em;
    }
  }
}
</style>