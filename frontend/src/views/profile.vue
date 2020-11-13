<script>
import mealcard from '@/components/mealcard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    mealcard
  },
  data() {
    return {
      month: new Date().toLocaleString('default', { month: 'short' }),
      day: new Date().getDate()
    }
  },
  computer: {
    ...mapState(['foodie'])
  }
}
</script>

<template lang="pug">
  .home
    .greeting.container
      .row
        .col-3
          h3 {{ month }} {{ day }}
        .col-9.text-right
          h3 Good morning, {{ foodie.name }}!
          p Here's what's on the menu for today.

    .daily-recipe-plan.container.d-flex.flex-column.align-content-around
      h2 Breakfast
        mealcard
      h2 Lunch
        mealcard
      h3 Dinner
        mealcard
</template>

<style lang="scss">
.greeting {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
