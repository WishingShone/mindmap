import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import UUID from 'vue-uuid'

Vue.use(UUID)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
