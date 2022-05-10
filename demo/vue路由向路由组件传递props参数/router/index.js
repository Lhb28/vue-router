import { createRouter, createWebHashHistory } from 'vue-router';
import Left from '../components/children/left.vue';
import Right from '../components/children/right.vue';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        // path: '/detail/:id',
        path: '/detail',
        name: 'detail',
        component: () => import('../components/children/detail.vue'),
        // 路由组件传参：
        // 1、布尔模式，所有的params参数都被当作props参数传递进路由组件中
        // props: true,
        // 2、对象模式，一般用于向路由组件传递静态数据
        // props: {name:'suwukong'},
        // 3、函数模式
        props: () => ({ age :18})
    },
    // 命名视图分别控制是否接收props参数
    {
        path:'/about/:name/:age',
        components: {
            left: Left,
            right: Right,
        },
        props:{ left:true, right:false}
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;