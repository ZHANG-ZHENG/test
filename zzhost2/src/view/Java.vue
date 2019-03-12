<template>
  <div >
  <div style="height: 100px;background-color:aquamarine;">
  this is JAVA.vue!
  <!-- 进行路由跳转  -->
  <router-link to="/web">点击切换路由</router-link>
  </div>
  {{msg}}
    <!-- 2、插入子组件 -->
    <a-com></a-com>
  </div>
</template>


<script>
// 1、引入子组件
import Web from '../view/Web'
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { Web}
}
</script>