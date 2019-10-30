import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
     isMobile: false
    }
  },
  methods: {
    getMobile() {
      return this.isMobile
    }
  },
  render: h => h(App),
}).$mount('#app')
