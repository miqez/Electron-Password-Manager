import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { IS_ELECTRON } from '@root/config';
import ElectronHome from '@/views/ElectronHome.vue';
import ElectronManager from '@/views/ElectronManager.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ElectronHome,
  },
  {
    path: '/manager',
    name: 'Manager',
    component: ElectronManager,
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