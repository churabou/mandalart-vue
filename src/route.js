import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// load components
import VuexSample from './pages/VuexSample.vue';
import Login from './pages/Login.vue';
import Qiita from './pages/Qiita.vue';
import MyApp from './pages/MyApp.vue';
import Edit from './pages/Edit.vue';
import Items from './pages/Items.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/edit', component: Edit },
  { path: '/sample', component: VuexSample },
  { path: '/qiita', component: Qiita },
  { path: '/myapp', component: MyApp },
  { path: '/items', component: Items },
];

export default new VueRouter({
  routes // `routes: routes` の短縮表記
})
