import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContentEdit from '@/view/ContentEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentEdit',
      component: ContentEdit
    },
    {
      path: 'contentEdit',
      name: 'ContentEdit',
      component: ContentEdit
    }    
  ]
})
