<template>
  <div id="mainDiv">
    <img id="logoimg" src="/static/logo-z.jpg" alt="">
    <h1>本站是开发学习网站，公开架构设计，模块部署，源码等所有资料。</h1>
    <h1><router-link to="/main">点击进入</router-link></h1>
    <span id="version">Copyright 2019. All Rights Reserved.版权所有 © zz    闽ICP备19005429号</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: '你好 '
    }
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
}
</script>

<style scoped>
#mainDiv{
  text-align: center;
}
#logoimg{
  width: 30%;
  margin:40px;
}
#version{
  font-size: 10px;
}

@media screen and (max-width: 600px) {
  #logoimg{
    width: 50%;
  }
}
</style>
