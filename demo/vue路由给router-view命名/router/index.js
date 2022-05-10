import { createRouter, createWebHashHistory } from 'vue-router';
import Left from '../components/children/left.vue';
import Center from '../components/children/center.vue';
import Right from '../components/children/right.vue';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../components/children/detail.vue'),
        redirect:'/detail/index',
        children: [
            {
                path:'index',
                components: {
                    default: Center,
                    left: Left,
                    right: Right
                },
            }
        ]
    },

];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;