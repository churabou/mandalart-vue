import Vue from 'vue';
import App from './App.vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './store/index'; // index省略できそう
import router from './route.js';

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

