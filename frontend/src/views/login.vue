<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['login']),

    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password
        })
        this.$router.push('/profile')
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
        h1.h3.mb-3.font-weight-normal Login
        label.sr-only(for='email')
          input#email.form-control(v-model='email' type='email' placeholder='Your email address' required autofocus='')
        label.sr-only(for='password')
          input#password.form-control(v-model='password' type='password' placeholder='Your password' required)
        input(type="submit" value="Log in")
      div(v-if='backendError') {{ backendError }}
      p Are you new here? <router-link to="/register">Sign Up</router-link>
</template>

<style lang="scss"></style>
