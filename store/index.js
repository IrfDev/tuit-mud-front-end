const state = () => ({
    activeResult: 'Yo',
    results: {},
});

const getters = {};

const mutations = {
    ACTIVE_RESULT_MODULE(state, result) {
        state.activeResult = result;
    }
};

const actions = {

};

export { state, getters, mutations, actions }