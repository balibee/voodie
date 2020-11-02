<script>
// import axios from 'axios'
import mealcard from '@/components/mealcard.vue'

export default {
  name: 'Home',
  components: {
    mealcard
  }
}
</script>

<template lang="pug">
  .home
    .container
      .row
        .col-3
          h3 Oct 12
        .col-9.text-right
          h3 Good morning, Jill!
          p Here's what's on the menu for today.

    .daily-recipe-plan.container.d-flex.flex-column.align-content-around
      h2 Breakfast
      mealcard
      h2 Lunch
      mealcard
      h3 Dinner
      mealcard
</template>
