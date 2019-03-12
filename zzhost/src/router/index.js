import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Java from '@/view/Java'
import Web from '@/view/Web'

Vue.use(Router)

export default new Router({
	//mode: 'history',
  routes: [
    {
      path: '/', 
      redirect: '/main'
    },
    {
      path: '/main',
      redirect:'/main/java',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/java',
          name: 'Java',
          component: Java
        },
        {
          path: '/main/web',
          name: 'Web',
          component: Web
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
