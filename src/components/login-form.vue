<template>
  <div　class="login-form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1"
        description="We'll never share your email with anyone else."
      >
      <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email" 
          />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter name"
        />
      </b-form-group>
      <b-button class="button" type="submit" variant="primary">Submit</b-button>
      <b-button class="button" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<style>

.button {
  float: right;
  margin-left: 5px;
}

  
.login-form {
  width: 500px;
  display: inline-block;
}

</style>
<script>
  export default {
    data() {
      return {
        form: {
          email: 'email@example.com',
          name: 'guest',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        this.$router.push('/items')
        // evt.preventDefault()
        // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.email = ''
        this.form.name = ''
      }
    }
  }
</script>