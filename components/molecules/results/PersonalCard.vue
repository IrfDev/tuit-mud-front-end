<template>
  <div class="personal-card d-flex justify-content-between">
    <div class="information m-3">
      <h5>{{name}}</h5>
      <h6>@{{username}}</h6>
      <div class="status mt-4 d-flex">
        <i
          class="fa"
          :class="{
            'fa-smile-o':sentiment==='positive',
            'fa-sad-cry':sentiment==='negative',
            'far fa-meh-rolling-eyes':sentiment==='neutral',
            }"
          aria-hidden="true"
        />
        <h6 class="ml-2">{{sentiment}}</h6>
      </div>
    </div>
    <div class="picture">
      <img :src="peep" alt class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  data: () => ({
    name: "El Irving",
    username: "Irffffs",
    peep: "/images/peeps/pepe/personal.png",
    sentiment: "positive"
  })
};
</script>

<style lang="scss" scoped>
.personal-card {
  overflow: hidden;
  background-color: #00c6ae !important;
  box-shadow: $box-shadow-alpha;
  border-radius: $rounded-alpha;
  border: 2px solid black;
  h6 {
    font-family: $title-font;
    font-weight: 500;
    color: white;
    font-size: 5vw;
  }
  h5 {
    font-size: 10vw;
    color: #18191f;
    font-family: $title-font;
    font-weight: bolder;
  }
  i {
    font-size: 1.5em;
  }
}
</style>