import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
// Vue.use(Vuex)

import Login from './Login.vue'

const routes = [
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

