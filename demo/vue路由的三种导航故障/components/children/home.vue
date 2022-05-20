<template>
  <div>
    <h1>这是home组件</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Home",
  beforeRouteLeave(){
    console.log("即将离开当前组件");
  },
};
</script>

<style scoped>
</style>