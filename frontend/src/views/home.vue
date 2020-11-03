<script>
import mealcard from '@/components/mealcard.vue'

export default {
  name: 'Home',
  components: {
    mealcard
  },
  data() {
    return {
      month: new Date().toLocaleString('default', { month: 'short' }),
      day: new Date().getDate()
    }
  }
}
</script>

<style lang="scss">
.greeting {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>

<template lang="pug">
  .home
    .greeting.container
      .row
        .col-3
          h3 {{ month }} {{ day }}
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
