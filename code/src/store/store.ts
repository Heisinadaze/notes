import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';
import { serve } from '@/api/index';

Vue.use(Vuex);

interface State {
  list: object;
  treeList: any[];
  concat: boolean;
}

const state: State = {
  list: {},
  treeList: [],
  concat: false
};

const actions: ActionTree<State, any> = {
  async concat ({ commit }, data) {
    const res = await serve.concat(data);
    if (res && res.name === 'jsan') commit('CONCAT', true);
  }
};

const mutations: MutationTree<State> = {
  LIST (state, data) {
    state.list = data;
  },
  TREELIST (state, data) {
    state.treeList = data;
  },
  CONCAT (state, data) {
    state.concat = data;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
