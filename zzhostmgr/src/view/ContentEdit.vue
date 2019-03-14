<template>
  <div>

  	<div>新增记录</div>
  	<div>
			<el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="内容">
			    <el-input v-model="form.val"></el-input>
			  </el-form-item>
			  <el-form-item>
		    	<el-button type="primary">提交</el-button>
		  	</el-form-item>	
			</el-form>	
  	</div> 

		<div>当前记录</div>
  	<div v-for="contentBean in contentList" >
  		{{contentBean.id}}:{{contentBean.val}}
  	</div>  		
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
		contentList: [],
	    form: {
	      val: '',
	    }      
    }
  },
  methods: {
    httpGetList: function() {
      //console.log("httpAiClsresult");    
 
      let vm = this;
      this.$http.post('/mongo/content/list')
        .then(function(response){
        	console.log(response.body);
       		vm.contentList = response.body;
        },function(response){
          //响应错误回调
        }
      );    
    },
  },
  mounted(){
  	this.httpGetList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
