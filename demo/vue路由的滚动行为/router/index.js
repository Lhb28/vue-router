import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () => import('../components/children/home.vue'),
        meta:{
            title:'home组件',
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        props: true,
        component: () => import('../components/children/detail.vue'),
        meta:{
            title:'home组件',
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
    history: createWebHashHistory(),
    scrollBehavior(to, from ,savedPosition) {
      if(savedPosition) {
        console.log(1)
        return savedPosition
      } else {
        console.log(2)
        return {
          selector: '.container',
          top: 700,
        }
      }
    }
    // scrollBehavior(to, from, savedPosition) {
    //   console.log(22);
    //   return { top: 600 }
    // },
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    next();
})

export default router;