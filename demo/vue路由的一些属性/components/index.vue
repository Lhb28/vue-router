<template>
  <div>
    <h1>这是index组件</h1>
    <router-link
      to="/default"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <h1 @click="navigate">GO_DEFAULT</h1>
    </router-link>
    <router-link 
      to="/home"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <h1>GO_HOME</h1>
    </router-link><br>
    <router-link
      to="/about"
      custom
      v-slot="{ href, route, navigate, isActive, isExactActive }"  
    >
      <h1 @click="navigate">GO_ABOUT</h1>
    </router-link>
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