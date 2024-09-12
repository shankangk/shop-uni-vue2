import App from './App'
import store from './store'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
Vue.prototype.$shopPrefix = '/static/shop';

App.mpType = 'app'
const app = new Vue({
  ...App,
  store,
})
app.$mount()
// #endif

import uView from './uni_modules/vk-uview-ui';
Vue.use(uView);

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	store,
  }
}
// #endif