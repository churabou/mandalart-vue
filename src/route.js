import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// load components
import VuexSample from './pages/VuexSample.vue';
import Login from './pages/Login.vue';
import ChartSection from './components/chart-section';
import Qiita from './pages/Qiita.vue';
import MyApp from './pages/MyApp.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/items', component: ChartSection },
  { path: '/sample', component: VuexSample },
  { path: '/qiita', component: Qiita },
  { path: '/myapp', component: MyApp },
];

export default new VueRouter({
  routes // `routes: routes` の短縮表記
})
