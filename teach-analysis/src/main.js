// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VideoPlayer from 'vue-video-player'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import utils from './utils'
Vue.prototype.$utils=utils
 // import IEcharts from 'vue-echarts-v3'
 // import 'echarts/lib/chart/line'
 // Vue.prototype.$IEcharts = IEcharts

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts
require('echarts-wordcloud')

Vue.use(VueResource)

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
//Vue.prototype.$VideoPlayer = VideoPlayer
Vue.use(VideoPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
