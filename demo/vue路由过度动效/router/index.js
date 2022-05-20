import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
        meta:{
            title:'home组件',
            transition: 'my_transition'
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        props: true,
        component: () => import('../components/children/detail.vue'),
        meta:{
            title:'home组件',
            transition: 'my_transition'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/children/about.vue'),
        meta:{
            title: 'about的标题',
            transition: 'my_transition'
        }
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    next();
})

export default router;