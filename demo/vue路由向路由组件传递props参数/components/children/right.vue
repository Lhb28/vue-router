<template>
  <div class="container">
    <h1>这是right组件</h1>
    <h1>{{props.age}}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Right",
};
</script>

<script setup>
const props = defineProps({
  age:String
})
</script>

<style scoped>
.container{
  padding: 20px;
  background: greenyellow;
}
</style>