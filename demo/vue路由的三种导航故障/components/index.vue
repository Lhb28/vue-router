<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go(`/home`)">去home组件</button><br />
    <button @click="Go(`/detail/123`)">去detail123组件</button><br />
    <button @click="Go(`/detail/888`)">去detail888组件</button><br />
    <button @click="Go(`/about`)">去about组件</button><br />
    <button @click="Go(`/`)">去/组件</button><br />
    <div class="container">
      <router-view v-slot="{ Component }" name="Home">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
      <router-view v-slot="{ Component, route }">
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
  beforeRouteLeave(){
    console.log("即将离开当前组件");
  }
};
</script>

<script setup>
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import { NavigationFailureType, isNavigationFailure } from 'vue-router';

const router = useRouter();

onBeforeRouteUpdate((to,from) => {
  if(to.fullPath === '/home'){
    console.log("index组件即将更新了");
    router.push('/detail/888');
  };
})

async function Go(path) {
  const result = await router.push(path);
  if(isNavigationFailure(result, NavigationFailureType.aborted)){
    console.log("导航出出现aborted错误了");
  } else if(isNavigationFailure(result, NavigationFailureType.cancelled)){
    console.log("导航出出现cancelled错误了");
  } else if(isNavigationFailure(result, NavigationFailureType.duplicated)){
    console.log("导航出出现duplicated错误了");
  } else {
    console.log(router.currentRoute.value.redirectedFrom);
  }
}
</script>

<style scoped>
.container{
  background:aquamarine;
  min-height: 500px;
  overflow: auto;
}
</style>