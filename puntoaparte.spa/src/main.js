import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Store from './store'

new Vue({
  render: h => h(App),
  Store
}).$mount('#app')
