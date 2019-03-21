<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/app-header';

const data = {
  components: {
    AppHeader
  },
}

export default data
</script>