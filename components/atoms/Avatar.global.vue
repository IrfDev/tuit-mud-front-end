<template>
  <div
    class="avatar d-flex align-items-center"
    :class="{ 'flex-column justify-content-center': vertical }"
  >
    <div
      class="img-avatar rounded-circle border-2"
      :class="vertical ? 'align-self-center' : 'align-self-end'"
    >
      <img :src="image" alt="avatar-tuit-mud" class="img-fluid rounded-circle" />
    </div>
    <div class="name-avata">
      <h6>{{ name }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: String,
      default: '/images/peeps/pepe/default.png',
    },
    name: {
      type: String,
      default: 'TuitMud',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  .img-avatar {
    img {
      border: 10px solid black;
    }
    img {
      border: 2px solid black !important;
    }
    border-radius: 50%;
  }
  h6 {
    margin-bottom: 0px;
    font-family: $title-font;
    font-weight: bolder;
  }
}
</style>
