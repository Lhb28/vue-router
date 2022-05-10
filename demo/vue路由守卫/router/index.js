import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
    },
    {
        path: '/detail/:id',
        name: 'detail',
        props: true,
        component: () => import('../components/children/detail.vue'),
        // beforeEnter：路由独享的守卫,其执行顺序在全局前置守卫之后,在全局解析守卫与全局后置守卫之前;
        // z在params、query 或 hash 发生改变时不会触发该守卫，但是会触发全局前置守卫、全局解析守卫与全局后置守卫
        beforeEnter:(to,from) => {
            console.log('路由独享守卫被执行了')
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
    if (to.fullPath === '/home') {
        console.log("进入home组件了");
        next();
    } else if (to.fullPath === '/detail') {
        console.log('进入detail组件了');
        next();
    } else {
        console.log('进入其他组件了');
        next()
    };
})

// 全局解析守卫
router.beforeResolve((to,from) => {
    console.log('全局解析守卫被执行了！！')
})

// 全局后置守卫，执行这个守卫的时候已经完成了路由导航，进入到了新组建当中
router.afterEach((to,from) => {
    console.log("全局后置守卫被执行了")
    if(to.fullPath === '/about'){
        to.meta.title = 'about的新标题'
    }
})

export default router;