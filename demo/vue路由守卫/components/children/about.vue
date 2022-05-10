<template>
  <div>
    <h1>这是about组件</h1>
    <h1>{{ route.meta.title }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "About",
};
</script>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onBeforeMount(() => {
    console.log("组件被挂载之前！！")
})

onMounted(() => {
    console.log('组件被挂载了！')
})
</script>

<style scoped>
</style>