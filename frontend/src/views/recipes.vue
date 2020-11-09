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
            input.form-control#name(v-model='recipe.name' type='text' name='name' placeholder='Write the name of your recipe')
          .form-group
            label(for='description') Description
            input.form-control#description(v-model='recipe.description' type='text' name='decscription' placeholder='Write about your recipe')
          .form-group
            label(for='tags') Tags
            input.form-control#tags(v-model='recipe.tags' type='text' name='tags' placeholder='Separate tags by commas')
          .form-group
            label(for='ingredients') Ingredients
            textarea.form-control#ingredients(v-model='recipe.ingredients' rows='4' name='ingredients' placeholder='List your ingredients, each on a new line')
          .form-group
            label(for='instructions') Instructions
            textarea.form-control#instructions(v-model='recipe.instructions' rows='4' name='instructions' placeholder='List the instructions, each on a new line')
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
