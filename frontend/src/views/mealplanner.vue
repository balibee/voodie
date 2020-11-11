<script>
import axios from 'axios'
import mealcard from '@/components/mealcard.vue'

export default {
  name: 'Mealplanner',
  components: {
    mealcard
  },
  data() {
    return {
      meals: null
    }
  },
  mounted() {
    axios
      .get(
        'https://api.spoonacular.com/mealplanner/generate?apiKey=cdd592f2f3684fbba38cc76c8eb9aa63&diet=vegan&timeFrame=day&exclude=shellfish,dairy'
      )
      .then(response => (this.meals = response.data.meals))
  }
}
</script>

<template lang="pug">
  .container
    .mealplanner
      h2 Plan your meals!
      form
        .form-row.align-items-center
          .col-auto.my-1
            label.mr-sm-2(for='inlineFormCustomSelect') Day or Week?
            select.custom-select.mr-sm-2#inlineFormCustomSelect
              option(selected) Choose...
              option(value='day') Day
              option(value='week') Week
          .col-auto.my-1
            button.btn.btn-primary(type='submit') Submit

      mealcard(v-for='meal in meals' :title='meal.title' :readyInMinutes='meal.readyInMinutes' :id='meal.id' :imageType='meal.imageType')


</template>
