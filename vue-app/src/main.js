import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

const getGDPR = localStorage.getItem('GDPR:accepted');

if (typeof getGDPR !== 'undefined' && getGDPR === 'true' ) {
  Vue.use(VueAnalytics, {
    id: 'UA-54514383-9',
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false'){
  Vue.use(VueAnalytics, {
    id: 'UA-54514383-9',
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
}

new Vue({
  render: h => h(App)
}).$mount('#app')
