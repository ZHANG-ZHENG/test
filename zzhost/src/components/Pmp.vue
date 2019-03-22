<template>
  <div>

  <p>访问首页</p>
  <p>
    <router-link to="/index">首页</router-link>
  </p>
  <div v-for="zone in pmpData">
    {{zone.zone}}
    <div v-for="p in zone.ps">
      {{p.pname}} {{p.i}}
      <div v-for="a in p.i">
        {{a}}
      </div> 
      <div v-for="b in p.t">
        {{b}}
      </div>  
      <div v-for="c in p.o">
        {{c}}
      </div>            
    </div>
   
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: '你好 '
      pmpData:{}
    }
  },

  mounted () {
    this.getDataList()
  },
  methods: {
    getDataList: function() {

      let vm = this;
      this.$http.get('/static/pmp.json',{})
        .then(function(response){
          console.log(response.bodyText);
          vm.pmpData = JSON.parse(response.bodyText);
          console.log(vm.pmpData);
        },function(response){
          //响应错误回调
        }
      );    
    },    
    // getDataList () {
    //   this.$axios.get('/static/ceshi.json').then((res) => {

    //   this.res=res
    //   console.log(res)
    // })
  },


}
</script>

<style scoped>

</style>
