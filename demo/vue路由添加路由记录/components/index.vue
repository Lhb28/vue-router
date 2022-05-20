<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go(`/home`)">去home组件</button><br />
    <button @click="Go(`/store`)">去store组件</button><br />
    <!-- <button @click="Go(`/about`)">去about组件</button><br /> -->
    <button @click="add">添加一条路由</button><br />
    <div class="container">
      <router-view v-slot="{ Component, route}">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Index",
};
</script>

<script setup>
import { useRoute, useRouter } from 'vue-router';

// const route = useRoute();
const router = useRouter();

function Go(path){
  router.push(path);
}

function add(){
  router.addRoute({
    path:'/store',
    component: () => import('./children/about')
  })
  console.log(router.getRoutes());
  router.replace(router.currentRoute.value.fullPath)
}
</script>

<style scoped>
.container{
  background:aquamarine;
  min-height: 500px;
  overflow: auto;
}
</style>