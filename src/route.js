import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// load components
import VuexSample from './pages/VuexSample.vue';
import Login from './pages/Login.vue';
import ChartSection from './components/chart-section';

const routes = [
  { path: '/login', component: Login },
  { path: '/items', component: ChartSection },
  { path: '/sample', component: VuexSample },
];

export default new VueRouter({
  routes // `routes: routes` の短縮表記
})
