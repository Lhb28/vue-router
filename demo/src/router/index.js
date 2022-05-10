import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
        meta:{
            title:'home组件'
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        props: true,
        component: () => import('../components/children/detail.vue'),
        meta:{
            title:'home组件'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/children/about.vue'),
        meta:{
            title: 'about的标题',
        }
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    console.log(to.matched)
    next();
})

export default router;