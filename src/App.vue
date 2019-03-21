<template>
  <div>
    <app-header></app-header>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </p>
    
    <router-view></router-view>
    <chart-section/>
  </div>
</template>

<script>
import AppHeader from './components/app-header';
import ChartSection from './components/chart-section';


const data = {
  components: {
    AppHeader,
    ChartSection,
  },
}

export default data
</script>