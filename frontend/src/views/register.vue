<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      backendError: null
    }
  },

  methods: {
    ...mapActions(['register']),

    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
    .login.container
      form.form-signin(@submit='submitLogin')
        h1.h3.mb-3.font-weight-normal Create a New Account
        label.sr-only(for='name')
          input#name.form-control(v-model='name' type='text' placeholder='Name' required='' autofocus='')
        label.sr-only(for='email')
          input#email.form-control(v-model='email' type='email' placeholder='Email address' required='')
        label.sr-only(for='password')
          input#password.form-control(v-model='password' type='password' placeholder='Password' required='')
        input(type="submit" value="Register")
      br
      div(v-if="backendError") {{ backendError }}
      p Already have an account? <router-link to="/login">Login</router-link>
</template>

<style lang="scss"></style>
