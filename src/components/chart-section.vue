<template>
  <div class="wrapper">
    <div class="item-container" v-for="item in items">
      <input class="chart-item-title" type="text" v-model="item.title">
      <textarea class="chart-item-textarea" v-model="item.body"> </textarea>
    </div>
    <div class="item-container">
      <input class="chart-item-title" type="text" v-model="itemTitle">
      <textarea class="chart-item-textarea"> </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartSection',
  data() {
    return {
      itemTitle: "",
    }
  },
  created() {
    const length = 9;
    this.items = Array.apply(null, {length}).map(Number.call, Number).map((index) => {
      return { title: `title${index}`, body: `body${index}` };
    });
  },
  beforeDestroy() {
    const json = JSON.stringify(this.items);
    localStorage.setItem('chart-item', json);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item-container {
  margin-top: 5px;
  text-align: center;
}

.chart-item-title {
  width: 90%;
  height: 20px;
  border: 2px #77ddff solid;
  background-color: white;
  display: inline-block;
  margin-bottom: 5px;
}

.chart-item-textarea {
  width: 90%;
  height: 150px;
  border: 2px #77ddff solid;
  background-color: white;
    display: inline-block;
}
</style>
