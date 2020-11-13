export default {
  }
}
</script>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
</style>

<template lang="pug">
  #app
    #navbar
      nav.navbar.navbar-expand-md.navbar-light.bg-light
        .container-fluid
          a.navbar-brand Voodie
          button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbarsExampleDefault.collapse.navbar-collapse
            ul.navbar-nav.mr-auto.mb-2.mb-md-0
              li.nav-item
                router-link.nav-link(to='/profile') Profile
              li.nav-item
                router-link.nav-link(to='/mealplanner') Meal Planner
              li.nav-item
                router-link.nav-link(to='/recipes') Recipes
            a.btn.btn-outline-success(@click='doLogout' href="#") Logout
    router-view
</template>
