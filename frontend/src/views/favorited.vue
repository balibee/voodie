<script>
import { mapActions } from 'vuex'

export default {
  name: 'Favorites',
  components: {},
  data() {
    return {
      favoritedRecipes: []
    }
  },

  async created() {
    this.favoritedRecipes = await this.fetchFavoritedRecipes()
  },

  methods: {
    ...mapActions(['fetchFavoritedRecipes'])
  }
}
</script>

<template lang="pug">
  .container
    h1 Favorited Recipes
    router-link(:to="`/recipes/${recipe.id}`") {{ recipe.name }}
    div (v-for='recipe in favoritedRecipes')
</template>
