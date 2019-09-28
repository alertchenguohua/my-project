import Vue from 'vue'
import App from './App.vue'
import vpay from './lib/vpay'
Vue.config.productionTip = false
console.log(vpay);
Vue.use(vpay);
new Vue({
  render: h => h(App),
}).$mount('#app')
