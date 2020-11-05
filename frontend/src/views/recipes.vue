<script>
import { mapActions } from 'vuex'

export default {
  name: 'Recipes',
  data() {
    return {
      recipes: [],
      recipe: {}
    }
  },
  async created() {
    console.log('created')
    this.recipes = await this.fetchRecipes()
  },
  methods: {
    ...mapActions(['fetchRecipes', 'createRecipe'])
  }
}
</script>

<template lang="pug">
  .home
    .container
      .row.create-recipe
        h2 Create a Recipe
        form(@submit.prevent='createRecipe(recipe)')
          .form-group
            label(for='name') Name
            input.form-control#name(v-model='recipe.name' type='text' name='name')
          .form-group
            label(for='description') Description
            input.form-control#description(v-model='recipe.description' type='text' name='decscription')
          .form-group
            label(for='ingredients') Ingredients
            textarea.form-control#ingredients(v-model='recipe.ingredients' rows='4' name='ingredients')
          .form-group
            label(for='instructions') Instructions
            textarea.form-control#instructions(v-model='recipe.instructions' rows='4' name='instructions')
          .form-row
            .form-group.col-2
              label.sr-only(for='cookTime') Cook Time
              input.form-control#cookTime(v-model.number='recipe.cookTime' type='number' name='cookTime')
            .form-group.col-2
              label.sr-only(for='serves') Serves
              input.form-control#serves(v-model.number='recipe.serves' type='number' name='serves')
          .form-group
            button.btn.btn-primary(type='submit') Submit

    .container.text-center.display-recipes
      h2 All Recipes
      div(v-for="recipe in recipes")
        router-link(:to="`/recipes/${recipe._id}`") {{ recipe.name }}
</template>

<style lang="scss"></style>
