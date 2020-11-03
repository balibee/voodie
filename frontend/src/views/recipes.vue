<script>
import { mapActions } from 'vuex'

export default {
  name: 'Recipes',
  data() {
    return {
      recipes: []
    }
  },
  async created() {
    this.recipes = await this.fetchRecipes()
  },
  methods: {
    ...mapActions(['fetchRecipes'])
  }
}
</script>

<template lang="pug">
  .home
    .container.text-center
      h2 All Recipes
      div(v-for="recipe in recipes")
        router-link(:to="`/recipes/${recipe._id}`") {{ recipe.name }}
</template>
