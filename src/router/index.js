import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Profile from '@/views/ProfileView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Profile,
      requiresAuth: true,
      // beforeEnter: (to, from, next) => {

      // },
    },
  ],
});
