<template>
  <div>
    <h1>这是detail组件</h1>
    <!-- props为布尔值时使用 -->
    <!-- <h1>{{props.id}}</h1> -->
    <!-- props为对象时使用 -->
    <!-- <h1>{{name}}</h1> -->
    <!-- props为函数时使用 -->
    <h1>{{age}}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Detail",
};
</script>

<script setup>
// const props = defineProps({
//   name:String
// })
const props = defineProps({
  age:Number
})
</script>

<style scoped>
</style>