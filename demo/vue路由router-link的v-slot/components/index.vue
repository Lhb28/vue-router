<template>
  <div>
    <h1>这是index组件</h1>
    <router-link 
      to="/home" 
      active-class="box" 
      custom
      v-slot="{ href, route, navigate, isActive, isExactActive, GO }"
    >
      <h1 @click="navigate">{{ route.fullPath }}-{{ href }}</h1>
    </router-link><br>
    <router-link to="/about" replace>去about组件</router-link><br>
    <button @click="GO('/aaaa')">去错误组件</button>
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
import { useRouter } from 'vue-router';

const router = useRouter();

function GO(path){
  router.push(path);
}
</script>

<style scoped>
.container{
  background:aquamarine;
  min-height: 500px;
  overflow: auto;
}

.box{
  color: red;
}
</style>