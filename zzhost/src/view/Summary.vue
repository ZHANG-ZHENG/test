<template>
  <div >
  	<h1>概述</h1>
	<p>网站目前正处于持续集成中</p>
  	<h3>总体架构</h3>
	<img src="../assets/summary.png" alt="">
	<h3>物理设备</h3>
	<p>百度云BCC1 182.61.57.136 1G 1Mbps 40G</p>
	<p>百度云BCC2 106.12.122.128 2G 1Mbps 40G</p>
  	<h3>架构中涉及到的知识点</h3>
	<p>docker容器化部署</p>
	<p>流量负载均衡</p>
	<p>spring cloud 微服务集群</p>
	<p>mycat mysql 集群</p>
	<p>redis 集群</p>
	<p>mongo 集群</p>
	<p>分布式文件事务协同</p>
	<p>消息中间件</p>
	<p>分布式文件系统FastDFS</p>
	<p>缓存系统</p>
	<p>Maven git jenkins自动化部署工具</p>
	<el-collapse>
	  <el-collapse-item title="场景选择" name="1">
	    <div>集群的场景比较复杂，以上只是一个示例，根据应用场景的不同，需要建立不同的集群，例如：</div>
	    <div>1.	12306类似的高并发访问的场景，集群需要关注前端的分流，处理高并发场景下的复杂均衡以及数据的强一致性。</div>
	    <div>2.	www.youku.com类似的视频网站，集群需要关注内容分发的cache，引入CDN等技术。</div>
	    <div>3.	一些数据分析应用，实时性要求不高的场景，需要大量的计算资源，集群需要关注Map Redis，分布式存储等技术。</div>
	    <div>以上引用主要为了说明集群场景的复杂性，实际场景要复杂得多，对于现有的互联网服务提供商的架构学习可以发现，没有完全相同的集群架构。集群架构更多的是一种实践科学，需要实际业务流程出发进行优化和构建。</div>
	  </el-collapse-item>
	</el-collapse>
  </div>
</template>


<script>
// 1、引入子组件
export default {
  data: function() {
    return {

    }
  },
}
</script>