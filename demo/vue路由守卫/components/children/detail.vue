<template>
  <div>
    <h1>这是detail组件</h1>
    <h1>{{ props.id }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Detail",
  beforeCreate(){
    console.log('beforeCreate执行了')
  },
  created(){
    console.log('created执行了')
  },
  beforeMount(){
    console.log('beforeMount执行了')
  },
  Mounted(){
    console.log('Mounted执行了')
  },
  // 路由独享的守卫,其执行顺序在全局前置守卫和路由独享守卫之后，在全局解析守卫和全局后置守卫之前执行；
  // beforeRouteEnter守卫在生命周期钩子函数beforeCreate之前执行，也即执行beforeRouteEnter守卫的时候，组件实例还未创建；
  // beforeRouteUpdate守卫在组件的params、query 或 hash 发生改变时执行
  // beforeRouteLeave守卫在离开该组件的时候执行，仍然可以在守卫中访问到组件实例
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouterEnter执行了");
    next(vm => {
      console.log(vm.$props)
    })
  },

  beforeRouteUpdate(to, from) {
    console.log("beforeRouterUpdate执行了");
  },

  beforeRouteLeave(to, from){
    console.log("beforeRouterLeave执行了");
  },
};
</script>

<script setup>
// import { onBeforeMount, onMounted } from 'vue';
// import { onBeforeRouteEnter, beforeRouteUpdate, beforeRouteLeave } from 'vue-router';

const props = defineProps({
  id: String,
})

// onBeforeMount(() => {
//     console.log("组件被挂载之前！！")
// })

// onMounted(() => {
//     console.log('组件被挂载了！')
// })
</script>

<style scoped>
</style>