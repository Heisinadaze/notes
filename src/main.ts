import Vue from 'vue';
import App from './layout/App.vue';
import router from './router/router';
import store from './store/store';
import elementUI from './utils/elementUI';
import './assets/scss/index.scss';
import { success, notice } from '@/utils/res';

Vue.prototype.$success = success;
Vue.prototype.$notice = notice;
Vue.config.productionTip = false;

elementUI();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
