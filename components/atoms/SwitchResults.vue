<template>
  <div
    class="switch-component row justify-content-around text-center"
    @click="clickObject"
  >
  <div
    class="nav col text-center"
    :class="{'select': select === 'Yo'}"
  >
    <a>Yo</a>
  </div>
  <div
    class="nav col text-center"
    :class="{'select': select === 'Gustos'}"
  >
    <a>Gustos</a>
  </div>
  <div
    class="nav col text-center"
    :class="{'select': select === 'Amigos'}"
  >
    <a>Amigos</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchResults', 
  computed: {
    select() {
      return this.$store.state.activeResult;
    }
  },
  methods: {
    clickObject(e) {
      const targetNav = e.srcElement.innerText;
      this.$store.commit('ACTIVE_RESULT_MODULE', targetNav)
      this.select = targetNav;
    },
  },
};
</script>

<style lang="scss">
.select{
  background-color:#00C6AE;
  border-radius: 50px;
  color:white;
  transition: .3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
}
a{
  font-family: $title-font;
  font-weight: 600;
}
.nav{
  transition: .4s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  // background: white;
  padding: 2% 0%;
  justify-content: center;
}
.switch-component {
  background: white;
  border: 2px solid black;
  border-radius: 50px;
  margin:0% 10%;
}
</style>