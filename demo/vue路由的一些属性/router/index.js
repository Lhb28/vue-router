import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
      path:'/',
      redirect: '/default',
    },
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

router.beforeEach((to, from) => {
  // // route.matched
  // console.log(to.matched);
  // console.log(from.matched);

  // route.redirectedFrom
  console.log(to.redirectedFrom)
})

export default router;