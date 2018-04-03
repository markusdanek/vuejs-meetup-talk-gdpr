import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-54514383-9',
  debug: {
    enabled: true,
    trace: true,
    sendHitTask: true
  },
  fields: {
    cookieDomain: 'none'
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
