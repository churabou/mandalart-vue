<template>
  <div>
    <login-form/>
  </div>
</template>

<style scoped>

div {
  padding: 40px;
  text-align: center;
}

</style>
<script>
import LoginForm from './components/login-form';

// import Vuex from 'vuex'
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//   	increment: state => state.count++,
//     decrement: state => state.count--
//   }
// });

export default {
    components: {
      LoginForm,
    },
}
</script>