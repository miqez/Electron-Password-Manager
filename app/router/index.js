import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { IS_ELECTRON } from '@root/config';
import ElectronHome from '@/views/ElectronHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ElectronHome,
  },
  {
    path: '/:nonExistent(.*)*',
    component: ElectronHome,
  },
];

const router = createRouter({
  history: IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
});

export default router;