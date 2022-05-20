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
          <component :is="Component"></component>
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
.fade-enter-from{
  color:red;
}

.fade-enter-to{
  color:blue;
}

.fade-leave-active,
.fade-enter-active{
  transition: color 3s ease;
}

.my_transition-enter-from,
.my_transition-leave-to,{
  color: green;
  background: #7ecfe7;
}

.my_transition-enter-active,
.my_transition-leave-active{
  transition: color 5s ease-in-out 0s;
  transition: background-color 5s ease-in-out 0s;
}

.my_transition-leave-from{
  background: #7ecfe7;
  color: rgb(199, 121, 121);
}

.my_transition-enter-to{
  color: red;
  background: blue;
}
</style>