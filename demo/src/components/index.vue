<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go(`/home`)">去home组件</button><br />
    <button @click="Go(`/detail/123`)">去detail123组件</button><br />
    <button @click="Go(`/detail/456`)">去detail456组件</button><br />
    <button @click="Go(`/about`)">去about组件</button><br />
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
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
  background:skyblue;
  color:rgb(206, 117, 15);
}

.fade-enter-from{
  /* background:#b67373; */
  color:red;
}

.fade-enter-active{
  transition: color 3s ease;
}

.fade-enter-to{
  color:blue;
}

.fade-leave-from{
  color: yellow;
}

.fade-leave-active{
  transition: color 3s ease;
}

.fade-leave-to{
  color:deeppink;
}

/* .fade-leave-to{
  background: #19d2d8;
  color:blue;
} */
</style>