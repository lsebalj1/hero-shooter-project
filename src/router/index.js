import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import HeroView from '../views/HeroView.vue';

const routes = [
  { path: '', component: Home },
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/heroes', component: HeroView, name: 'Heroes' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
