<template>
  <div class="wrapper">
    <div class="item-container">
      <input class="chart-item-title" type="text" v-model="itemTitle">
      <textarea class="chart-item-textarea"> </textarea>
    </div>
    <div class="item-container">
      <input class="chart-item-title" type="text" name="" value="">
      <textarea class="chart-item-textarea"> </textarea>
    </div>
    <div  class="item-container">
      <input class="chart-item-title" type="text" name="" value="">
      <textarea class="chart-item-textarea"> </textarea>
    </div>
    <div  class="item-container">
      <input class="chart-item-title" type="text" name="" value="">
      <textarea class="chart-item-textarea"> </textarea>
    </div>
    <li v-for="item in items">
      {{ item.message }}
    </li>
    <p>{{itemTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: String
  },

  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      itemTitle: "",
    }
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
