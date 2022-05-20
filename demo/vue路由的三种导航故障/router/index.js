import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
      path:'/',
      components:{
        Home: () => import('@/components/children/home'),
      },
      redirect: '/detail/888',
    },
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail/:id',
        name: 'detail',
        props: true,
        component: () => import('../components/children/detail.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/children/about.vue'),
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    console.log("执行beforeEach钩子");
    next();
})

export default router;