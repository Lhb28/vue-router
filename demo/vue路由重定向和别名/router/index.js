import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        alias:'/index/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        alias:'/index/detail',
        component: () => import('../components/children/detail.vue'),
    },
    {
        path: '/about',
        component: () => import('../components/children/about.vue'),
        alias:'/index/about',
        redirect: to => {
            console.log(to);
            return {
                path: 'home',
            }
        },
        children:[
            {
                path: 'index',
                component: () => import('../components/children/aboutIndex.vue'),
            }
        ]
    },

];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;