<template>
  <div>
    <app-header></app-header>
    <p>
      <router-link to="/foo">About</router-link>
    </p>
    
    <chart-section/>
    <login-form/>
  </div>
</template>

<script>
import AppHeader from './components/app-header';
import ChartSection from './components/chart-section';
import LoginForm from './components/login-form';

const data = {
  components: {
    AppHeader,
    ChartSection,
    LoginForm
  },
}

export default data
</script>