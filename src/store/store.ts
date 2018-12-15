import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';

Vue.use(Vuex);

interface State {
  list: object;
  treeList: any[];
}

const state: State = {
  list: {},
  treeList: []
};

const actions: ActionTree<State, any> = {

};

const mutations: MutationTree<State> = {
  LIST (state, data) {
    state.list = data;
  },
  TREELIST (state, data) {
    state.treeList = data;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
