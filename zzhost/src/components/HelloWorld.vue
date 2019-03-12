<template>
  <div>
    <h1>{{ msg }} <router-link to="/main">main</router-link></h1>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to zzhost website index'
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
