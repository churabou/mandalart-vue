<template>
  <div>
    <chart-section id="right-panel"/>
    <edit-item id="left-panel"/>
  </div>
</template>

<style scoped>

div {
  padding: 40px;
  text-align: center;
}

</style>
<script>
import ChartSection from '../components/chart-section';
import EditItem from '../components/edit-item';

export default {
    components: {
      ChartSection,
      EditItem
    },
}
</script>