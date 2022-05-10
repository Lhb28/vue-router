<template>
  <div class="container">
    <h1>这是left组件</h1>
    <h1>{{props.name}}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Left",
};
</script>

<script setup>
const props = defineProps({
  name:String
})
</script>

<style scoped>
.container{
  padding: 20px;
  background: greenyellow;
}
</style>