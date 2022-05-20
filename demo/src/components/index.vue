<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="GO('/default')">default</button><br>
    <button @click="GO('/home')">home</button><br>
    <button @click="GO('/about')">about</button><br>
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
import { NavigationFailureType, isNavigationFailure } from 'vue-router';
export default {
  name: "Index",
  methods:{
    GO(path){
      this.$router.push(path).then(() => {
        console.log("导航成功");
      }).catch((failure) => {
        console.log("导航失败");
        if(isNavigationFailure(result, NavigationFailureType.aborted)){
          console.log("导航出出现aborted错误了");
        } else if(isNavigationFailure(result, NavigationFailureType.cancelled)){
          console.log("导航出出现cancelled错误了");
        } else if(isNavigationFailure(result, NavigationFailureType.duplicated)){
          console.log("导航出出现duplicated错误了");
        } else {
          console.log(router.currentRoute.value.redirectedFrom);
        }
      })
    }
  }
};
</script>

// <script setup>
// import { useRouter, NavigationFailureType, isNavigationFailure } from 'vue-router';

// const router = useRouter();

// async function GO(path){
//   const result = await router.push(path);
//   if(isNavigationFailure(result, NavigationFailureType.aborted)){
//     console.log("导航出出现aborted错误了");
//   } else if(isNavigationFailure(result, NavigationFailureType.cancelled)){
//     console.log("导航出出现cancelled错误了");
//   } else if(isNavigationFailure(result, NavigationFailureType.duplicated)){
//     console.log("导航出出现duplicated错误了");
//   } else {
//     console.log(router.currentRoute.value.redirectedFrom);
//   }
// } 
// </script>

<style scoped>
.container{
  background:aquamarine;
  min-height: 500px;
  overflow: auto;
}
</style>