<script>
import review from '@/components/review.vue'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Recipe',
  components: {
    review
  },

  data() {
    return {
      recipe: {},
      review: {},
      reviews: []
    }
  },

  async created() {
    this.recipe = await this.fetchRecipe(this.$route.params.id)
    this.reviews = await this.fetchReviews(this.$route.params.id)
  },

  computed: {
    ...mapState(['foodie']),

    favoriteCounter() {
      if (!this.recipe.favoritedBy) return 0

      return this.recipe.favoritedBy.length
    },

    favorited() {
      if (!this.recipe.favoritedBy) return false

      return this.recipe.favoritedBy.includes(this.foodie)
    }
  },

  methods: {
    ...mapActions(['fetchRecipe', 'toggleFavorited', 'createReview', 'fetchReviews']),

    async handleFavorite() {
      const updatedRecipe = await this.toggleFavorited(this.$route.params.id)
      this.recipe.favoritedBy = updatedRecipe.favoritedBy
    }
  }
}
</script>

<template lang="pug">
  .recipe(v-if="recipe")
    .container
      .row.recipe-page-image
        img.recipe-page.img-fluid(src='https://picsum.photos/600/300?random=1', alt='...')

      .row.recipe-info
        .container
          h2.text-center.title {{ recipe.name }}
        .row
          .col-3.text-center
            button.btn.btn-outline-dark.btn-sm.favoriteButton(@click='handleFavorite') {{ favorited ? 'Unfavorite' : 'Favorite' }}
            p.favoriteCounter {{ favoriteCounter }}
          .col-3.text-center
            p Ratings: {{ recipe.totalRatings }}
          .col-3.text-center
            p Cook Time: {{ recipe.cookTime }}
          .col-3.text-center
            p Serves: {{ recipe.serves }}
        .row
          p {{ recipe.description }}

        .row.ingredient-list
          h2 Ingredients
          table.table
            tbody
              tr(v-for="ingredient in recipe.ingredients")
                td {{ ingredient }}

        .row.instructions
          h2 Steps
          p(v-for="instruction, index in recipe.instructions") {{ index + 1 }}. {{ instruction }}

        .row.personal-note
          form
            .form-group
              textarea.form-control(type='text', placeholder='Add personal note about this recipe')

        .row.d-flex
          .col-10-auto.tagslist
            button.btn.btn-primary.tags(v-for="tag in recipe.tags" type='button') {{ tag }}

        hr

        .row.review-list
          .col-6
            h2 Reviews
          .col-6.text-right
            p Ratings: {{ recipe.totalRatings }}

          review(v-for='review in reviews' :review='review')

          .row-review
            form.review-recipe(@submit.prevent='createReview({recipeId: recipe._id, review})')
              .form-group
                label(for='review') Review
                textarea.form-control#review(v-model='review.text' type='text' name='text' placeholder='Write a review!')
              .form-group.col-2
                label.sr-only(for='rating') Rating
                input.form-control#rating(v-model.number='review.rating' type='number' name='rating' placeholder='0-5')
              .form-group
                button.btn.btn-primary(type='submit') Submit

</template>

<style lang="scss">
.recipe-page-image {
  position: relative;
}

img.recipe-page {
  position: relative;
  padding: 0;
  display: block;
}

svg.bi.bi-plus-circle {
  z-index: 2;
  width: 20%;
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
}

.tagslist {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tags {
  margin: 1px;
}

.favoriteButton {
  background-color: #ffcccb;
}

.favoriteCounter {
  display: inline-block;
  padding-left: 5px;
}
</style>
