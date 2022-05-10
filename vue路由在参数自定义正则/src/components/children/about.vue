<template>
  <div>
    <h1>这是about组件</h1>
    <h1>{{ props.name }}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "About",
};
</script>

<script setup>
const props = defineProps({
  name: String,
});
</script>

<style scoped>
</style>