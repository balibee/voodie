<script>
import { mapActions } from 'vuex'

export default {
  name: 'Recipe',
  async created() {
    this.recipe = await this.fetchRecipe(this.$route.params.id)
  },
  data() {
    return {
      recipe: null
    }
  },
  methods: {
    ...mapActions(['fetchRecipe'])
  }
}
</script>

<template lang="pug">
  .recipe(v-if="recipe")
    .container.recipe-page-image
      .row
        img.recipe-page.img-fluid(src='https://picsum.photos/600/300?random=1', alt='...')
        svg.bi.bi-plus-circle(width='3em', height='3em', viewBox='0 0 16 16', fill='currentColor', xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd', d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z')
          path(fill-rule='evenodd', d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z')

    .container.recipe-info
      .row
        h2.text-center {{recipe.name}}
        .row
          .col-3.text-center
            p Favorites: {{recipe.favorites}}
          .col-3.text-center
            p Ratings: {{recipe.totalRatings}}
          .col-3.text-center
            p Cook Time: {{recipe.cookTime}}
          .col-3.text-center
            p Serves: {{recipe.serves}}
        p {{recipe.description}}

      .row
        .container.ingredient-list
          table.table
            h2 Ingredients
            tbody
                tr(v-for="ingredient in recipe.ingredients")
                  td {{ ingredient }}

        .container.instructions
          h2 Steps
          p(v-for="instruction, index in recipe.instructions") {{index + 1}}. {{ instruction }}

      .row
        form.personal-note
          .form-group
            label(for='formGroupExampleInput')
            textarea.form-control(type='text', placeholder='Add personal note about this recipe')
            button.btn.btn-primary.btn-sm.float-right(type="submit") Save

    .container.d-flex.tags
      .row
        .col-sm-auto
          button.btn.btn-primary.btn-sm(v-for="tag in recipe.tags" type='button') {{ tag }}
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

.recipe-info {
  padding-top: 25px;
}

.ingredient-list {
  padding: 0px 25px;
}

.instructions {
  padding: 25px;
}
</style>
