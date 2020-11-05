<script>
export default {
  name: 'Navbar'
}
</script>

<template lang="pug">
  nav.navbar.navbar-expand-md.navbar-light.bg-light
    .container-fluid
      a.navbar-brand(href='/') Voodie
      button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarsExampleDefault.collapse.navbar-collapse
        ul.navbar-nav.mr-auto.mb-2.mb-md-0
          li.nav-item
            router-link.nav-link(aria-current='page' to="/") Home
          li.nav-item
            router-link.nav-link(to='/mealplanner') Meal Planner
          li.nav-item
            router-link.nav-link(to='/recipes') Recipes
          li.nav-item
            router-link.nav-link(to='/profile') Profile
        router-link.btn.btn-outline-success(to="/login" role="button") Logout
</template>
