// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Java from '@/view/Java.vue'
import Web from '@/view/Web.vue'
import Router from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

Vue.use(Router)
// 3、实例化
export default new Router({
	routes: [
	{
    // 4、配置路由
		path: '/',
      name: 'Java',
      component: Java
    },{
    	path: '/web',
    	component: Web
    }
  ]
})