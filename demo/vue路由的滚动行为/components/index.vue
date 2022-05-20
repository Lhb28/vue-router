<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go(`/home`)">去home组件</button><br />
    <button @click="Go(`/detail/123`)">去detail123组件</button><br />
    <button @click="Go(`/detail/456`)">去detail456组件</button><br />
    <button @click="Go(`/about`)">去about组件</button><br />
    <div class="container">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </transition>
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
import { useRouter } from "vue-router";

const router = useRouter();

function Go(path) {
  router.push(path);
}
</script>

<style scoped>
.container{
  background:aquamarine;
  min-height: 500px;
  overflow: auto;
}
</style>