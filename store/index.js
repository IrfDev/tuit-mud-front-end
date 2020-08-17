const state = () => ({
  activeResult: 'Me',
  results: {},
  user: {},
  tweets: {
    tweets: {},
    mentions: {},
    favs: {},
  },
  analizedText: {
    tweets: {},
    mentions: {},
    favs: {},
  },
  activePeep: undefined,
});

const getters = {
  activeResultTarget: state => {
    switch (state.activeResult) {
      case 'Me':
        return 'tweets';
      case 'Likes':
        return 'favs';
      case 'Friends':
        return 'mentions';
    }
  },
};

const mutations = {
  ACTIVE_RESULT_MODULE(state, result) {
    state.activeResult = result;
  },
  SET_USER_INFO(state, userObject) {
    state.user = userObject;
  },
  SET_TWEETS(state, { target, data }) {
    switch (target) {
      case 'user':
        state.tweets.tweets = data;
        break;
      case 'mentions':
        state.tweets.mentions = data;
        break;
      case 'favs':
        state.tweets.favs = data;
        break;
    }
  },
  SET_ANALIZED_TEXT(state, { target, data }) {
    switch (target) {
      case 'tweets':
        state.analizedText.tweets = data;
        break;
      case 'mentions':
        state.analizedText.mentions = data;
        break;
      case 'favs':
        state.analizedText.favs = data;
        break;
    }
  },
};

const actions = {
  async getAuthInfo({ commit }) {
    const data = await this.$axios.$get('/apis/auth/login/success');
    console.log(data);
    const {
      username,
      name,
      description,
      twitterId,
      picture,
    } = data.user.profile;
    commit('SET_USER_INFO', {
      username,
      name,
      description,
      twitterId,
      picture,
    });
  },
  async getUserTweets({ commit }) {
    const twittsResponse = await this.$axios.$get('/apis/tweets');
    const twittsText = twittsResponse.data.data.tweetText;
    commit('SET_TWEETS', { target: 'user', data: twittsText });
  },
  async getUserMentions({ commit }) {
    const twittsResponse = await this.$axios.$get('/apis/tweets/mentions');
    const twittsText = twittsResponse.data.data.tweetText;
    commit('SET_TWEETS', { target: 'mentions', data: twittsText });
  },
  async getUserFavs({ commit }) {
    const twittsResponse = await this.$axios.$get('/apis/tweets/favs');
    const twittsText = twittsResponse.data.data.tweetText;
    commit('SET_TWEETS', { target: 'favs', data: twittsText });
  },
  async analyzeText({ state, commit }, target) {
    const text = state.tweets[target];
    const dataResponse = await this.$axios.$post(`/apis/nlu/${target}`, text);
    const analizedText = dataResponse.data.data;
    commit('SET_ANALIZED_TEXT', { target, data: analizedText });
  },
};

export { state, getters, mutations, actions };
