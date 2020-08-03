<template>
  <div
    class="sentiment card justify-content-between align-items-center d-flex flex-row p-3 mb-3"
  >
    <div class="content">
      <h2>{{ intro }}</h2>
      <h6>{{ explanation }}</h6>
    </div>
    <div class="sentiment-icon align-item-center">
      <i
        class="fa"
        :class="{
          'fa-smile-o': label === 'positive',
          'fa-sad-cry': label === 'negative',
          'far fa-meh-rolling-eyes': label === 'neutral',
        }"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SentimentalCard',

    props: {
      label: {
        type: String,
        required: true,
      },

      score: {
        type: Number,
        required: true,
      },
    },

    data() {
      return {
        positiveResponses: [
          "I smile to everything, it doesn't matter the why 😁",
          "You can't kill my vibe, I'm totally positive right now 😌",
          'I love to think the world and time are on my side 😋',
        ],

        negativeResponses: [
          "I'm kind of darkie but deep inside I smile to everyone 🌚",
          'I see everything just the way it is 🤪',
          'I see myself like a realistic person 🤓',
        ],

        neutralResponses: [
          "I'm just chilling all the time, please don't butter me 🦦",
          "The chilliest person in town, the sun chill when I'm out 🌞",
          "If you look for 'Chill person' in Google I'll be the first result",
        ],
      };
    },

    computed: {
      intro() {
        switch (this.label) {
          case 'positive':
            return 'Positive person';
            break;
          case 'negative':
            return 'Drama lover';
            break;
          case 'neutral':
            return 'Neutral above all';
            break;

          default:
            break;
        }
        // return this.data
      },

      explanation() {
        const randomNumber = Math.ceil(Math.random() * 3);
        switch (this.label) {
          case 'positive':
            return this.positiveResponses[randomNumber - 1];
            break;
          case 'negative':
            return this.negativeResponses[randomNumber - 1];
            break;
          case 'neutral':
            return this.neutralResponses[randomNumber - 1];
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
    h2 {
      font-weight: 700;
    }
    i {
      color: $gamma-color;
      font-size: 4em;
    }
    flex-basis: 90%;
    @media screen and (min-width: 480px) {
      flex-basis: 80%;
    }
    @media screen and (min-width: 768px) {
      flex-basis: 60%;
    }
  }
</style>
