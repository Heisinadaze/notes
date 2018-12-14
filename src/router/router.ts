import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const home = () => import('@/pages/home.vue');
const nofind = () => import('@/pages/404.vue');

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '*',
    component: nofind
  }
];

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(route => {
  NProgress.done();
});

export default router;
