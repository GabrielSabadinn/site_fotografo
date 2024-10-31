// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './HomeView/HomeView.vue';
import LoginPage from './LoginView/LoginPage.vue';
import AdminPage from './AdminView/AdminPage.vue';
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginPage  },
  { path: '/admin', name: 'Admin', component:  AdminPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
