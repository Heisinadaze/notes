import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const welcome = () => import('@/pages/welcome.vue');
const home = () => import('@/pages/home.vue');
const index = () => import('@/pages/index.vue');
const artList = () => import('@/pages/artList.vue');
const article = () => import('@/pages/article.vue');
const nofind = () => import('@/pages/404.vue');

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '首页',
        component: index
      },
      {
        path: '/artlist',
        name: '列表',
        component: artList
      },
      {
        path: '/article',
        name: '详情',
        component: article
      }
    ]
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
