<template>
  <div>
    <h1>这是detail组件</h1>
    <h1>{{ props.id }}</h1>
    <router-link to="/detail/index">去detail下面的index页面</router-link>
    <div class="container">
      <router-view name="left"></router-view>
      <router-view name="default"></router-view>
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Detail",
};
</script>

<script setup>
const props = defineProps({
  id: String,
});
</script>

<style scoped>
.container{
  padding: 20px;
  background: greenyellow;
  display: flex;
  justify-content:space-between;
}
</style>