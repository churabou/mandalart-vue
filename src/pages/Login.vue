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
import LoginForm from '../components/login-form';

export default {
    components: {
      LoginForm,
    },
}
</script>