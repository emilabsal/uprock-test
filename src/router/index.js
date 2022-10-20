import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Profile from '@/views/ProfileView.vue';
import NotFound from '@/views/NotFound.vue';
import { VueCookieNext } from 'vue-cookie-next';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (VueCookieNext.getCookie('token')) {
          next('/404');
        } else {
          next();
        }
      },
    },
    {
      path: '/',
      component: Profile,
      requiresAuth: true,
      beforeEnter: (to, from, next) => {
        if (VueCookieNext.getCookie('token')) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: NotFound,
      beforeEnter: (to, from, next) => {
        if (VueCookieNext.getCookie('token')) {
          next();
        } else {
          next('/login');
        }
      },
    },
  ],
});
