import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Error from '../layouts/Error.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue'),
      meta: {
        layout: Error,
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('../views/basic/Basic.vue'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: () => import('../views/advanced'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/provide_inject',
      name: 'provide_inject',
      component: () => import('../views/advanced/provide_inject'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/async_component',
      name: 'async_component',
      component: () => import('../views/advanced/async_component'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/suspense',
      name: 'suspense',
      component: () => import('../views/advanced/suspense'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/composable',
      name: 'composable',
      component: () => import('../views/advanced/composable'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/custom_directive',
      name: 'custom_directive',
      component: () => import('../views/advanced/custom_directive'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: () => import('../views/advanced/plugins'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/keep_alive',
      name: 'keep_alive',
      component: () => import('../views/advanced/keep_alive'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: () => import('../views/advanced/teleport'),
      meta: {
        reload: true,
        layout: 'layout-default',
      },
    },
  ],
});

export default router;
