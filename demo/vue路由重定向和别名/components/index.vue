<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go(`/home`)">去home组件</button><br />
    <button @click="Go(`/detail`)">去detail组件</button><br />
    <button @click="Go(`/about`)">去about组件</button><br />
    <button @click="Go(`/about/index`)">去aboutIndex组件</button><br />
    <!-- 使用别民访问这几个组件 -->
    <button @click="Go(`/index/home`)">去home组件</button><br />
    <button @click="Go(`/index/detail`)">去detail组件</button><br />
    <button @click="Go(`/index/about`)">去about组件</button><br />
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

function Go(path) {
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