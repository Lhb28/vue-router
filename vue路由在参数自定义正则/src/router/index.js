import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    // {
    //     path: '/',
    //     component: () => import('../components/index.vue'),
    //     redirect:'/home',
    //     children: [
    //         {
    //             path: 'home',
    //             component: () => import('../components/children/home.vue'),
    //         },
    //         {
    //             path: 'detail/:number(\\d+)',
    //             component: () => import('../components/children/detail.vue'),
    //             props: true,
    //         },
    //         {
    //             path: 'detail/:name',
    //             component: () => import('../components/children/about.vue'),
    //             props: true,
    //         },
    //     ]
    // },
    // {
    //     path: '/',
    //     redirect:'/home',
    //     children: [
    //         {
    //             path: 'home',
    //             component: () => import('../components/children/home.vue'),
    //         },
    //         {
    //             path: 'detail/:number(\\d+)',
    //             component: () => import('../components/children/detail.vue'),
    //             props: true,
    //         },
    //         {
    //             path: 'detail/:name',
    //             component: () => import('../components/children/about.vue'),
    //             props: true,
    //         },
    //     ]
    // },
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail/:number(\\d+)',
        component: () => import('../components/children/detail.vue'),
        props: true,
    },
    {
        path: '/detail/:name(.*)',
        component: () => import('../components/children/about.vue'),
        props: true,
    },

];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;