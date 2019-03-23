<template>
  <div class="chart-secion">
    <div class="wrapper">
     <div class="item-container" v-for="item in items">
        <input class="chart-item-title" type="text" v-model="item.title">
        <p class="chart-item-textarea">{{item.body}}</p>
      </div>
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

.chart-section {
  position: relative; 
  display: inline-block;
}

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
