<template>
  <div class="switch-component d-flex justify-content-around text-center" @click="clickObject">
    <div class="nav text-center" :class="{ select: select === 'Me' }">
      <a>Me</a>
    </div>
    <div class="nav text-center" :class="{ select: select === 'Likes' }">
      <a>Likes</a>
    </div>
    <div class="nav text-center" :class="{ select: select === 'Friends' }">
      <a>Friends</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SwitchResults',
  computed: {
    ...mapState({
      select: (state) => state.activeResult,
    }),
  },
  methods: {
    clickObject(e) {
      const targetNav = e.srcElement.innerText;
      this.$store.commit('ACTIVE_RESULT_MODULE', targetNav);
      // this.select = targetNav;
    },
  },
};
</script>

<style lang="scss">
.select {
  background-color: #00c6ae;
  border-radius: 50px;
  color: white;
  transition: 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
}
a {
  font-family: $title-font;
  font-weight: 700;
}
.nav {
  transition: 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  padding: 4.5% 0%;
  flex-basis: 100%;
  justify-content: center;
}
.switch-component {
  cursor: pointer;
  background: white;
  border: 2px solid black;
  border-radius: 50px;
  margin: 0% 10%;
}
</style>
