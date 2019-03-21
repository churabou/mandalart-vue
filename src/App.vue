<template>
  <div>
    <app-header></app-header>
    <chart-section/>
  </div>
</template>

<script>
import AppHeader from './components/app-header';
import ChartSection from './components/chart-section';

const data = {
  components: {
    AppHeader,
    ChartSection
  },
}

export default data
</script>