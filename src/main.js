import Vue from 'vue'
import App from './App.vue'
import tes from './tes.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render : h => h(tes),
}).$mount('#tes')