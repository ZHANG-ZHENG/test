import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pmp from '@/components/Pmp'
import Main from '@/components/Main'
//import Java from '@/view/Java'
//import DesignPattern from '@/view/java/DesignPattern'
//import JavaFrame from '@/view/java/JavaFrame'
//import Web from '@/view/Web'
//import VuePage from '@/view/web/VuePage'
//import HtmlPage from '@/view/web/HtmlPage'
//import ResponsiveLayout from '@/view/web/ResponsiveLayout'
//import Summary from '@/view/Summary'
//import Docker from '@/view/Docker'
//import Android from '@/view/Android'
//import Wechat from '@/view/Wechat'
//import Mysql from '@/view/Mysql'
//import Redis from '@/view/Redis'
//import Memcached from '@/view/Memcached'
//import Mongo from '@/view/Mongo'
//import Fastdfs from '@/view/Fastdfs'
//import Linux from '@/view/Linux'
//import RabbitMQ from '@/view/RabbitMQ'
//import MQTransaction from '@/view/rabbitMQ/MQTransaction'
//import Zookeeper from '@/view/Zookeeper'
//import ZooTransaction from '@/view/zookeeper/ZooTransaction'
//import Git from '@/view/build/Git'
//import Jenkins from '@/view/build/Jenkins'
//import Nexus from '@/view/build/Nexus'
//import CDN from '@/view/loadBalance/CDN'

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
          component: resolve=>(require(["@/view/Linux"],resolve))
        },      
        {
          path: '/main/rabbitMQ',
          name: 'rabbitMQ',
          component: resolve=>(require(["@/view/RabbitMQ"],resolve))
        },  
        {
          path: '/main/mq-transaction',
          name: 'MQTransaction',
          component: resolve=>(require(["@/view/rabbitMQ/MQTransaction"],resolve))
        },            
        {
          path: '/main/zookeeper',
          name: 'Zookeeper',
          component: resolve=>(require(["@/view/Zookeeper"],resolve))
        },
        {
          path: '/main/zoo-transaction',
          name: 'ZooTransaction',
          component: resolve=>(require(["@/view/zookeeper/ZooTransaction"],resolve))
        },        
        {
          path: '/main/summary',
          name: 'Summary',
          component: resolve=>(require(["@/view/Summary"],resolve))
        },
        {
          path: '/main/fastdfs',
          name: 'Fastdfs',
          component: resolve=>(require(["@/view/Fastdfs"],resolve))
        },        
        {
          path: '/main/java',
          name: 'Java',
          component: resolve=>(require(["@/view/Java"],resolve))
        },
        {
          path: '/main/design-pattern',
          name: 'DesignPattern',
          component: resolve=>(require(["@/view/java/DesignPattern"],resolve))
        },  
        {
          path: '/main/java-frame',
          name: 'JavaFrame',
          component: resolve=>(require(["@/view/java/JavaFrame"],resolve))
        },               
        {
          path: '/main/web',
          name: 'Web',
          component: resolve=>(require(["@/view/Web"],resolve))
        },
        {
          path: '/main/web/vuePage',
          name: 'VuePage',
          component: resolve=>(require(["@/view/web/VuePage"],resolve))
        },
        {
          path: '/main/responsive-layout',
          name: 'ResponsiveLayout',
          component: resolve=>(require(["@/view/web/ResponsiveLayout"],resolve))
        },        
        {
          path: '/main/htmlPage',
          name: 'HtmlPage',
          component: resolve=>(require(["@/view/web/HtmlPage"],resolve))
        },
        {
          path: '/main/docker',
          name: 'Docker',
          component: resolve=>(require(["@/view/Docker"],resolve))
        },
        {
          path: '/main/android',
          name: 'Android',
          component: resolve=>(require(["@/view/Android"],resolve))
        },
        {
          path: '/main/wechat',
          name: 'Wechat',
          component: resolve=>(require(["@/view/Wechat"],resolve))
        },
        {
          path: '/main/mysql',
          name: 'Mysql',
          component: resolve=>(require(["@/view/Mysql"],resolve))
        },
        {
          path: '/main/memcached',
          name: 'Memcached',
          component: resolve=>(require(["@/view/Memcached"],resolve))
        },        
        {
          path: '/main/redis',
          name: 'Redis',
          component: resolve=>(require(["@/view/Redis"],resolve))
        },
        {
          path: '/main/mongo',
          name: 'Mongo',
          component: resolve=>(require(["@/view/Mongo"],resolve))
        },
        {
          path: '/main/git',
          name: 'Git',
          component: resolve=>(require(["@/view/build/Git"],resolve))
        },
        {
          path: '/main/jenkins',
          name: 'Jenkins',
          component: resolve=>(require(["@/view/build/Jenkins"],resolve))
        }, 
        {
          path: '/main/nexus',
          name: 'Nexus',
          component: resolve=>(require(["@/view/build/Nexus"],resolve))
        },  
        {
          path: '/main/cdn',
          name: 'CDN',
          component: resolve=>(require(["@/view/loadBalance/CDN"],resolve))
        },                             
      ] 
    },     
  ]
})
