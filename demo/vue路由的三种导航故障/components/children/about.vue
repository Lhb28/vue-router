<template>
  <div class="about">
    <h1>这是about组件</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "About",
  beforeRouteLeave(){
    console.log("即将离开当前组件");
  },
  beforeRouteEnter(to, from){
    console.log("即将进入about组件");
    return false;
  }
};
</script>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
</style>