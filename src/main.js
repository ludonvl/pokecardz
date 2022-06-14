import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import helper from './mixins/helper'

import './assets/styles/tailwind.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(helper)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
