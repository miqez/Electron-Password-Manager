import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { IS_ELECTRON } from '@root/config';

const routes = [];

const router = createRouter({
  history: IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
});

export default router;