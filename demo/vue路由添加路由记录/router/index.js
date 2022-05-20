import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
      path:'/:name',
      component: () => import('@/components/children/home'),
    },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// router.beforeEach((to, from, next) => {
//   if(to.path === '/store'){
//     router.addRoute({
//       path:'/about', 
//       component: () => import('../components/children/about')
//     });
//     console.log(to);
//     next({
//       path: '/about',
//     })
//   } else {
//     next();
//   }
// })

export default router;