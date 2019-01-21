import Vue from 'vue';
import App from './layout/App.vue';
import router from './router/router';
import store from './store/store';
import elementUI from './utils/elementUI';
import VueAnalytics from 'vue-analytics/dist/vue-analytics.js';
import './assets/scss/index.scss';
import { success, notice } from '@/utils/res';
import Highlight from './utils/highlight.js';

Vue.use(Highlight);

Vue.prototype.$success = success;
Vue.prototype.$notice = notice;
Vue.config.productionTip = false;

elementUI();

Vue.use(VueAnalytics, {
  id: 'UA-131011679-1',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
