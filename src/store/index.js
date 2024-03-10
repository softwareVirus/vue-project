import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // Define your state properties here
    // For example:
    count: 0,
  },
  mutations: {
    // Define your mutation functions here
    // Mutations are responsible for changing the state
    // For example:
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    // Define your action functions here
    // Actions are responsible for performing async tasks and then committing mutations
    // For example:
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    asyncDecrement(context) {
      setTimeout(() => {
        context.commit("decrement");
      }, 1000);
    },
  },
});

export default store;
