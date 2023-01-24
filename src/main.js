import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import Notifications from 'vue-notification'
import "animate.css"
import store from './store'
Vue.config.productionTip = false
Vue.use(Notifications)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
