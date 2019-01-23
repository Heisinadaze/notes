import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';
import { serve } from '@/api/index';
import bill from '@/store/modules/bill';

Vue.use(Vuex);

interface State {
  list: object;
  treeList: any[];
  concat: boolean;
  user: object;
}

const state: State = {
  list: {},
  treeList: [],
  concat: false,
  user: JSON.parse(window.localStorage.WCPSITEUSER || '{"id": "", "name": ""}')
};

const actions: ActionTree<State, any> = {
  async concat ({ commit }, data) {
    const res = await serve.concat(data);
    if (res && res.name === 'jsan') commit('CONCAT', true);
  },
  async getUser ({ commit }, data) {
    const res = await serve.user(data);
    if (res && res.code === 1) commit('USER', { id: data.id, name: res.result });
    return res;
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
  },
  USER (state, data) {
    state.user = data;
    window.localStorage.WCPSITEUSER = JSON.stringify(data);
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    bill
  }
});
