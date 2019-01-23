
import { ActionTree, MutationTree } from 'vuex';
import { serve } from '@/api/index';
import { success, notice } from '@/utils/res';

interface State {
  billList: object[];
}

const state: State = {
  billList: []
};

const actions: ActionTree<State, any> = {
  async getBill ({ commit }, data) {
    const res = await serve.getBill(data);
    if (!res || res.code !== 1) notice(res.message);
    else commit('BILLLIST', res.data);
    return res;
  },
  async delBill ({ commit }, data) {
    const res = await serve.delBill(data);
    if (!res || res.code !== 1) notice(res.message);
    else success(res.message);
    return res;
  },
  async addBill ({ commit }, data) {
    const res = await serve.addBill(data);
    if (!res || res.code !== 1) notice(res.message);
    else success(res.message);
    return res;
  },
  async getLog ({ commit }, data) {
    const res = await serve.getLog(data);
    if (!res || res.code !== 1) notice(res.message);
    return res;
  },
  async delLog ({ commit }, data) {
    const res = await serve.delLog(data);
    if (!res || res.code !== 1) notice(res.message);
    else success(res.message);
    return res;
  },
  async addLog ({ commit }, data) {
    const res = await serve.addLog(data);
    if (!res || res.code !== 1) notice(res.message);
    else success(res.message);
    return res;
  }
};

const mutations: MutationTree<State> = {
  BILLLIST (state, data) {
    state.billList = data;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
