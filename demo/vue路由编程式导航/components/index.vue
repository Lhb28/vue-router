<template>
  <div>
    <h1>这是index组件</h1>
    <button @click="Go_Detail(`/detail/123`)">去detail1组件</button><br />
    <button @click="Go_Detail(`/detail/456`)">去detail2组件</button><br />
    <button @click="Go_Detail(`/detail/789`)">去detail3组件</button><br />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Index",
};
</script>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// push导航，会留下历史记录，可以通过浏览器的回退按钮回退
// function Go_Detail(path) {
//   router.push(path);
// }

// replace导航，不会留下历史记录，不能够通过浏览器的回退按钮回退
function Go_Detail(path) {
  // 第一种写法：通过router.replace()方法实现
  // router.replace(path,);
  // 第二种写法：通过给router.push()方法的参数对象添加replace:true属性;
  // 第一种写法与第二种写法的区别是，第一种写法在history栈中只会有一个url记录，就是当前的url;
  // 而第二种写法在history栈中会有两个url记录，就是最开始的url和最后的url记录，仍然可以通过浏览器的回退按钮退回到第一个url记录
  router.push({
    path:path,
    replace:true,
  })
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 500px;
  padding: 50px;
  background: #b6d391;
}
</style>