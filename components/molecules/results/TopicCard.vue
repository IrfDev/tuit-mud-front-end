<template>
  <div class="topic-card card text-center">
    <div class="card-body">
      <h4>{{text}}</h4>
      <p>{{explanation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicCard',

  props: {
    relevance: {
      type: Number,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      positiveResponses: [
        'I love it 😍, I could talk all day about it',
        'One of my favorite topics ⚡️, I cant live without it',
        "I don't get how people are not talking about this right now! 🤔😛",
        'I literally can write a book about it! 🤓',
        'This topic is like wooh! and yeepa! together 😎😂',
      ],
    };
  },

  computed: {
    explanation() {
      const randomNumber = Math.ceil(Math.random() * 5);
      switch (this.relevance * 10) {
        case this.relevance < 4:
          return 'I like a little';
          break;

        case this.relevance < 8:
          return 'Podría hablar por horas';
          break;

        default:
          return this.positiveResponses[randomNumber - 1];
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.topic-card {
  height: 100%;
  background-color: $beta-color;
  border: $border-alpha;
  box-shadow: $box-shadow-alpha;
  color: $dark-color;
  font-family: $title-font;
  border-radius: $rounded-alpha;
  h4 {
    font-weight: bolder;
    font-size: var(--h3);
  }
  p {
    font-weight: 500;
    color: $dark-light-color;
  }
}
</style>