<template>
  <div>
    <h1>这是detail组件</h1>
    <h1>{{ props.number }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Detail",
};
</script>

<script setup>
const props = defineProps({
  number: Number,
});
</script>

<style scoped>
</style>