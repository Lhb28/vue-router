import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail/:id*',
        name:'detail',
        component: () => import('../components/children/detail.vue'),
        props: true,
    },

];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;