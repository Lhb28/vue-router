import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
      path: '/default',
      component: () => import('@/components/children/default'),
    },
    {
      path:'/home',
      component: () => import('@/components/children/home'),
      alias: '/homepage',
    },
    {
      path:'/about',
      component: () => import('@/components/children/about'),
    },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  if(to.path === '/default'){
    return false
  } else {
    next();
  }
})

export default router;