import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../components/children/detail.vue'),
    }
];

const router = createRouter({
    routes,
    // history: createWebHashHistory()
    history: createWebHistory(),
});

export default router;