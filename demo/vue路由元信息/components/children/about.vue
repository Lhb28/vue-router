<template>
  <div>
    <h1>这是about组件</h1>
    <h1>{{ $route.meta.title }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "About",
  created(){
    console.log(this);
    console.log(this.$route.matched)
  }
};
</script>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
</style>