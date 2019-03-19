<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 80%">
      <el-table-column
        prop="name"
        label="框架"
        width="180">
      </el-table-column>
      <el-table-column
        prop="official"
        label="官网"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="源码">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="说明"
        :show-overflow-tooltip="true">
      </el-table-column>
    </el-table>			
  </div>
</template>


<script>
// 1、引入子组件
export default {
  data: function() {
    return {
		tableData: [
		{
        	name: 'Spring',
        	official: 'https://spring.io/projects/spring-framework',
        	address: 'https://github.com/spring-projects/spring-framework',
        	desc:""
      	},{
        	name: 'Spring MVC',
        	official: 'https://spring.io/projects/spring-framework',
        	address: 'https://github.com/spring-projects/spring-framework',
        	desc:""
      	},{
        	name: 'Spring Boot',
        	official: 'https://spring.io/projects/spring-boot',
        	address: 'https://github.com/spring-projects/spring-boot',
        	desc:""
      	},{
        	name: 'Spring Cloud',
        	official: 'http://projects.spring.io/spring-cloud/',
        	address: 'https://github.com/spring-cloud',
        	desc:""
      	},{
        	name: 'Mybatis',
        	official: 'http://www.mybatis.org/mybatis-3/',
        	address: 'https://github.com/mybatis',
        	desc:""
      	},{
        	name: 'Hibernate',
        	official: 'http://hibernate.org/',
        	address: 'https://github.com/hibernate',
        	desc:""
      	},{
        	name: 'Dubbo',
        	official: 'http://dubbo.apache.org',
        	address: 'https://github.com/apache/incubator-dubbo',
        	desc:""
      	},{
        	name: 'Netty',
        	official: 'https://netty.io/',
        	address: 'https://github.com/netty/netty',
        	desc:""
      	},{
        	name: 'Shiro',
        	official: 'http://shiro.apache.org/',
        	address: 'https://github.com/apache/shiro',
        	desc:"Apache Shiro是一个强大而灵活的开源安全框架，它干净利落地处理身份认证，授权，企业会话管理和加密。"
      	},{
        	name: 'Ehcache',
        	official: 'http://www.ehcache.org/',
        	address: 'https://github.com/ehcache/ehcache3',
        	desc:"EhCache 是一个纯Java的进程内缓存框架，具有快速、精干等特点，是 Hibernate 中默认的CacheProvider。它使用的是 JVM 的堆内存，超过内存可以设置缓存到磁盘，企业版的可以使用 JVM 堆外的物理内存。"
      	},{
        	name: 'Quartz',
        	official: 'http://www.quartz-scheduler.org/',
        	address: 'https://github.com/quartz-scheduler/quartz',
        	desc:"Quartz 是一个基于 Java 的广泛使用的开源的任务调度框架。"
      	},{
        	name: 'Velocity',
        	official: 'http://velocity.apache.org/',
        	address: 'https://github.com/apache/velocity-engine',
        	desc:"Velocity 是一个基于 Java 的模板引擎，简单而强大的模板语言为各种 Web 框架提供模板服务，来适配 MVC 模型。"
      	},{
        	name: 'JUnit',
        	official: 'https://junit.org',
        	address: 'https://github.com/junit-team/',
        	desc:""
      	},{
        	name: 'Log4j',
        	official: 'https://logging.apache.org/log4j/2.x/',
        	address: 'https://logging.apache.org/log4j/2.x/source-repository.html',
        	desc:""
      	},
      	]
    }
  },
}
</script>
<style scoped>
.el-table{
	margin:0 auto;
}
td .cell{
		color:#ff0000;
      white-space:nowrap;overflow:hidden;text-overflow: ellipsis;

}
.el-tooltip{
width:200px;
		color:#ff0000;
      white-space:nowrap;overflow:hidden;text-overflow: ellipsis;

}
</style>