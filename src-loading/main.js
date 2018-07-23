import Vue from 'vue'
import App from './App.vue'

import router from './router.config'
import 'animate.css'

import loading from './loading'
// console.log(loading);
Vue.use(loading);

new Vue({
  el: '#app',
  render: h => h(App),
  router
  // components:{App},
  // template:'<App/>'
})

