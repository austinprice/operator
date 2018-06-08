import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// document.onkeypress = function(e) {
//     console.log(e)
// },

new Vue({
  render: h => h(App)
}).$mount('#app')
