import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router';

const routes = [
    {
      path:'/home',
      component: () => import('@/components/children/home'),
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
  console.log(router.currentRoute.value.path)
})

router.onError((to, from) => {
  if(to.fullPath === '/home'){
    console.log("路由导航发生错误了！")
  }
})

export default router;