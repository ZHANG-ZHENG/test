import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pmp from '@/components/Pmp'
import Main from '@/components/Main'
import Java from '@/view/Java'
import DesignPattern from '@/view/java/DesignPattern'
import JavaFrame from '@/view/java/JavaFrame'
import Web from '@/view/Web'
import VuePage from '@/view/web/VuePage'
import HtmlPage from '@/view/web/HtmlPage'
import ResponsiveLayout from '@/view/web/ResponsiveLayout'
import Summary from '@/view/Summary'
import Docker from '@/view/Docker'
import Android from '@/view/Android'
import Wechat from '@/view/Wechat'
import Mysql from '@/view/Mysql'
import Redis from '@/view/Redis'
import Memcached from '@/view/Memcached'
import Mongo from '@/view/Mongo'
import Fastdfs from '@/view/Fastdfs'
import Linux from '@/view/Linux'
import RabbitMQ from '@/view/RabbitMQ'
import MQTransaction from '@/view/rabbitMQ/MQTransaction'
import Zookeeper from '@/view/Zookeeper'
import ZooTransaction from '@/view/zookeeper/ZooTransaction'
import Git from '@/view/build/Git'
import Jenkins from '@/view/build/Jenkins'
import Nexus from '@/view/build/Nexus'
import CDN from '@/view/loadBalance/CDN'

Vue.use(Router)

export default new Router({
	//mode: 'history',
  routes: [
    {
      path: '/', 
      redirect: '/index'
    },
    {
      path: '/pmp',
      name: 'Pmp',
      component: Pmp,     
    },   
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,     
    },     
    {
      path: '/main',
      redirect:'/main/summary',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/linux',
          name: 'Linux',
          component: Linux
        },      
        {
          path: '/main/rabbitMQ',
          name: 'rabbitMQ',
          component: RabbitMQ
        },  
        {
          path: '/main/mq-transaction',
          name: 'MQTransaction',
          component: MQTransaction
        },            
        {
          path: '/main/zookeeper',
          name: 'Zookeeper',
          component: Zookeeper
        },
        {
          path: '/main/zoo-transaction',
          name: 'ZooTransaction',
          component: ZooTransaction
        },        
        {
          path: '/main/summary',
          name: 'Summary',
          component: Summary
        },
        {
          path: '/main/fastdfs',
          name: 'Fastdfs',
          component: Fastdfs
        },        
        {
          path: '/main/java',
          name: 'Java',
          component: Java
        },
        {
          path: '/main/design-pattern',
          name: 'DesignPattern',
          component: DesignPattern
        },  
        {
          path: '/main/java-frame',
          name: 'JavaFrame',
          component: JavaFrame
        },               
        {
          path: '/main/web',
          name: 'Web',
          component: Web
        },
        {
          path: '/main/web/vuePage',
          name: 'VuePage',
          component: VuePage
        },
        {
          path: '/main/responsive-layout',
          name: 'ResponsiveLayout',
          component: ResponsiveLayout
        },        
        {
          path: '/main/htmlPage',
          name: 'HtmlPage',
          component: HtmlPage
        },
        {
          path: '/main/docker',
          name: 'Docker',
          component: Docker
        },
        {
          path: '/main/android',
          name: 'Android',
          component: Android
        },
        {
          path: '/main/wechat',
          name: 'Wechat',
          component: Wechat
        },
        {
          path: '/main/mysql',
          name: 'Mysql',
          component: Mysql
        },
        {
          path: '/main/memcached',
          name: 'Memcached',
          component: Memcached
        },        
        {
          path: '/main/redis',
          name: 'Redis',
          component: Redis
        },
        {
          path: '/main/mongo',
          name: 'Mongo',
          component: Mongo
        },
        {
          path: '/main/git',
          name: 'Git',
          component: Git
        },
        {
          path: '/main/jenkins',
          name: 'Jenkins',
          component: Jenkins
        }, 
        {
          path: '/main/nexus',
          name: 'Nexus',
          component: Nexus
        },  
        {
          path: '/main/cdn',
          name: 'CDN',
          component: CDN
        },                             
      ] 
    },     
  ]
})
