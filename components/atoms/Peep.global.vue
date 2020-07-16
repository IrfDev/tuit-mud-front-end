<template>
  <img
    :src="`/images/peeps/${activePeep}/${action}.svg`"
    :alt="`peep-${action}`"
    :class="`w-${width} peep`"
  />
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Peep',
    props: {
      action: {
        type: String,
        required: true,
        validator: val =>
          [
            'waiting',
            'reading',
            'ready',
            'chill',
            'stand',
            'socialMedia',
          ].includes(val),
      },
      width: {
        type: [Number, String],
        default: 75,
      },
    },
    computed: {
      ...mapState({
        activePeep: state => state.activePeep,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  img {
    z-index: 1;
  }
</style>
