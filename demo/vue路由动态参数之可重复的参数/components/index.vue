<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go_Detail(`/detail/123`)">去detail1组件</button><br />
    <button @click="Go_Detail(`/detail/123/456`)">去detail2组件</button><br />
    <button @click="Go">去detail3组件</button><br />
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

function Go_Detail(path) {
  router.push(path);
}

function Go(){
  router.push({
    name: 'detail',
    params: {
      id: [123, 456, 789, 147]
    }
  })
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