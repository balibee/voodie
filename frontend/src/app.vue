<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['foodie'])
  },
  methods: {
    ...mapActions(['logout']),

    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<template lang="pug">
  #app
    #navbar
      nav.navbar.navbar-expand-md.navbar-light.bg-light
        .container-fluid
          a.navbar-brand(href='#') Voodie
          button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbarsExampleDefault.collapse.navbar-collapse
            ul.navbar-nav.mr-auto.mb-2.mb-md-0
              li.nav-item(v-if='this.foodie')
                router-link.nav-link(to='/') Profile
              li.nav-item(v-if='this.foodie')
                router-link.nav-link(to='/mealplanner') Meal Planner
              li.nav-item(v-if='this.foodie')
                router-link.nav-link(to='/recipes') Recipes
              li.nav-item.p-2(v-if='!this.foodie')
                  router-link.nav-link(to="/register") Register
              li.nav-item.p-2(v-if='!this.foodie')
                  router-link.nav-link(to="/login") Login
            li.nav-item(v-if='this.foodie')
              a.btn.btn-outline-success(@click='doLogout' href="#") Logout
    router-view
</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
</style>
