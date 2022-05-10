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
const props = defineProps({
  id: String,
});
</script>

<style scoped>
</style>