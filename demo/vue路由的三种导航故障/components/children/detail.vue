<template>
  <div>
    <h1>这是detail组件</h1>
    <h1>{{ props.id }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Detail",
};
</script>

<script setup>
import { useRouter, onBeforeRouteUpdate } from "vue-router";

const props = defineProps({
  id: String,
})

const router = useRouter();

onBeforeRouteUpdate((to,from) => {
  if(to.fullPath.includes('/detail')){
    console.log("detail组件即将更新了");
    router.push('/home');
  };
})
</script>

<style scoped>
</style>