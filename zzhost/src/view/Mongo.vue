<template>
  <div>
  	<p>mongo容器部署</p>
	<p>
		<a href="http://note.youdao.com/noteshare?id=1b7592ac2a631fd5653040afacc42622&sub=8F698EECE4C745EEB8C6A7A9D1880A66" target="_blank">点击查看</a>
	</p> 
  <div class="operateDiv"><el-button type="primary" @click="mongoGet">mongo查询</el-button>{{mongoGetInfo}}</div>
  <div class="operateDiv"><el-button type="primary" @click="mongoAdd">mongo插入</el-button>{{mongoAddInfo}}</div>
  <div class="operateDiv"><el-button type="primary" @click="mongoDel">mongo删除</el-button>{{mongoDelInfo}}</div>
  <div class="operateDiv"><el-button type="primary" @click="mysqlGet">mysql查询</el-button>{{mysqlGetInfo}}</div>
  <div class="operateDiv"><el-button type="primary" @click="mysqlAdd">mysql插入</el-button>{{mysqlAddInfo}}</div>
  <div class="operateDiv"><el-button type="primary" @click="mysqlDel">mysql删除</el-button>{{mysqlDelInfo}}</div>
  <p>源码地址 mongo和mysql工程</p>
	<p>
		<a href="https://github.com/ZHANG-ZHENG/spring-boot-study" target="_blank">https://github.com/ZHANG-ZHENG/spring-boot-study</a>
	</p>
  </div>

</template>

<script>
// 1、引入子组件
export default {
  data: function() {
    return {
		mongoGetInfo:'-',
		mongoAddInfo:'-',
		mongoDelInfo:'-',
		mysqlGetInfo:'-',
		mysqlAddInfo:'-',
		mysqlDelInfo:'-',
    }
  },
  methods: {
    test: function(){ 
      console.log("test");
    },
    mongoGet: function() {

      let vm = this;
      this.$http.get('https://bird.ioliu.cn/v1?url=http://182.61.57.136:8888/mongo/test/get',{})
        .then(function(response){
        	vm.mongoGetInfo = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    }, 
    mongoAdd: function() {
    	let vm = this;
			vm.mongoAddInfo = "数据插入中"
      
      this.$http.get('https://bird.ioliu.cn/v1?url=http://182.61.57.136:8888/mongo/test/add',{})
        .then(function(response){
        	vm.mongoAddInfo = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    },  
    mongoDel: function() {
    	let vm = this;
			vm.mongoDelInfo = "数据删除中"
      
      this.$http.get('https://bird.ioliu.cn/v1?url=http://182.61.57.136:8888/mongo/test/del',{})
        .then(function(response){
        	vm.mongoDelInfo = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    },
    mysqlGet: function() {

      let vm = this;
      this.$http.get('https://bird.ioliu.cn/v1?url=http://182.61.57.136:8889/mysql/test/get',{})
        .then(function(response){
        	vm.mysqlGetInfo = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    }, 
    mysqlAdd: function() {
    	let vm = this;
			vm.mysqlAddInfo = "数据插入中"
      
      this.$http.get('https://bird.ioliu.cn/v1?url=http://182.61.57.136:8889/mysql/test/add',{})
        .then(function(response){
        	vm.mysqlAddInfo = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    },  
    mysqlDel: function() {
    	let vm = this;
			vm.mysqlDelInfo = "数据删除中"
      
      this.$http.get('https://bird.ioliu.cn/v1?url=http://182.61.57.136:8889/mysql/test/del',{})
        .then(function(response){
        	vm.mysqlDelInfo = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    },              
  }
}
</script>
<style scoped>
.operateDiv{
	margin-top: 20px;
}	
</style>