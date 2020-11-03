<script>
import { mapActions } from 'vuex'

export default {
  name: 'Inspiration',
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
      h2 Get inspired with these delicious recipes!
      div(v-for="recipe in recipes")
        router-link(:to="`/inspiration/recipe/${recipe._id}`") {{ recipe.name }}
</template>
