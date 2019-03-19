<template>
  <div>
  	<p>安装docker</p>
	<p>
		<a href="http://note.youdao.com/noteshare?id=68a0ec545caaaef20c19e2d793f7ec7a&sub=16D83AD78A52446193EDE8F8C8A8C093" target="_blank">点击查看</a>
	</p>
  	<p>安装docker compose</p>
	<p>
		<a href="http://note.youdao.com/noteshare?id=dde12ca5f5c0d322b96de2eaa0540a0e&sub=B381FC58284948FB8F1CDF4F8A05B28A" target="_blank">点击查看</a>
	</p>
  	<p>docker weave跨主机通信</p>
	<p>
		<a href="http://note.youdao.com/noteshare?id=ef0f0b67e965396e0b835fd7be268ee1&sub=A42CDD8587064476BB3DC3DFC34B3120" target="_blank">点击查看</a>
	</p>
	<p>dockerhub仓库地址 https://cloud.docker.com/repository/docker/zzsgame</p>	
	<p>docker阿里仓库地址 registry.cn-hangzhou.aliyuncs.com/zzdocker</p>
	</br>	
	<p>
		3.5.1.	引入原因</br>
		项目部署存在以下问题：</br>
		1.	在生产环境交付部署软件时，为了正常部署组件如nginx、redis、mariadb等，经常需要额外的配置：比如安装rpm包又或者gcc编译等。由于生产环境不固定，这些 配置无法保证生效。
		2.	各项目部署第三方组件的方法有差异，比如mariadb就有rpm包安装、编译安装、二进制包安装等，运维难度高。</br>
		3.	各项目的部署脚本、运行脚本没有统一格式规范，运维难度高。</br>
		4.	只有代码通过svn进行版本管控，第三方组件和编译包都没有版本管控。</br>
		基于以上原因，需要引入统一的部署运维方案docker。</br>
		1.	只需要在版本发行时打包组件的镜像，然后在安装了docker的生产环境上就能得到和测试环境完全一致的结果。</br>
		2.	统一使用官方的docker镜像来部署。</br>
		3.	统一使用docker-compose.yml配置文件来描述部署细节。</br>
		4.	部署本地私有（或云端私有）的docker仓库，管控镜像版本。</br>
		3.5.2.	docker特性</br>
		1.	轻量级虚拟化</br>
		相比虚拟机，容器的虚拟化程度更为轻量级，其启动、停止跟管理进程一样迅速，用起来感觉跟虚拟机一样没什么区别，且耗费的资源小得多。</br>
		2.	简化交付部署</br>
		docker提供了一整套平台无关的标准化技术，极大简化了第三方组件的部署、升级、维护。现在只需要在版本发行时打包这些第三方组件的镜像，然后在安装了docker engine的生产环境上就能得到和测试环境完全一致的结果。</br>
		3.	组件标准化、服务化</br>
		容器技术出现前，软件的基础设施组件比如数据库、web容器等等的运行维护比较难以标准化，因为每个人的操作系统不同，安装方式也不同（比如yum安装、二进制包安装），目录也各不相同。</br>
		容器技术出现后，这些组件不再依赖于宿主机的具体环境，因此得以标准化。类似于yum等软件包管理工具，docker也有官方的镜像仓库用于维护并发布一些常用组件的官方镜像，大大方便了这些组件的运维。</br>
		另外基于“容器即服务”的概念，docker还提供CMD和entry-point等特性，让容器启动时可执行命令。</br>
		4.	容器集群化</br>
		docker支持swarm集群模式，可以做到无缝的服务缩扩容、服务调用的负载均衡、滚动更新、更新回滚等功能。</br>
		
	</p>	
  </div>

</template>