<template>
  <div>
    <p>Vuex Store Counter sample</p>
    <p>{{ count }}</p>
    <p>
      <b-button variant="primary" @click="decrement">-</b-button>
      <b-button variant="danger" @click="increment">+</b-button>
    </p>
  </div>
</template>

<style scoped>

div {
  padding: 40px;
  text-align: center;
}

</style>

<script>


export default {
  computed: {
    count () {
	    return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    }
  },
};
</script>