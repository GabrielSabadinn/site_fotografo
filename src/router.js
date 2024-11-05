// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import HomeView from './HomeView/HomeView.vue';
import LoginPage from './LoginView/LoginPage.vue';
import AdminPage from './AdminView/AdminPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/admin', name: 'Admin', component: AdminPage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//  verifica token para proteger rotas
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = Cookies.get('token');
    if (token) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
