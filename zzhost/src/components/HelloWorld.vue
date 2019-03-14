<template>
  <div>
    <h1>本站为分布式系统部署学习网站，公开架构设计，模块部署，源码等所有资料。</h1>
    <h1><router-link to="/main">点击进入</router-link></h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '你好 '
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
