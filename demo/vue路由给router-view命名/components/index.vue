<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go_Home(`/home`)">去home组件</button><br />
    <button @click="Go_Detail(`/detail`)">去detail组件</button><br />
    <div>
      <router-view></router-view>
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

function Go_Home(path) {
  router.push(path);
}

function Go_Detail(path) {
  router.push(path);
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 500px;
  padding: 50px;
  background: #b6d391;
}
</style>