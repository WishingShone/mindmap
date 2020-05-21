import Vue from 'vue'
import App from './App.vue'
import UUID from 'vue-uuid'
Vue.use(UUID)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
