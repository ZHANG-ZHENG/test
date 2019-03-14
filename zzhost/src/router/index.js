import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Java from '@/view/Java'
import Web from '@/view/Web'
import VuePage from '@/view/web/VuePage'
import HtmlPage from '@/view/web/HtmlPage'
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
import Zookeeper from '@/view/Zookeeper'

Vue.use(Router)

export default new Router({
	//mode: 'history',
  routes: [
    {
      path: '/', 
      redirect: '/index'
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
          path: '/main/zookeeper',
          name: 'Zookeeper',
          component: Zookeeper
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
        }
      ] 
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,     
    },      
  ]
})
