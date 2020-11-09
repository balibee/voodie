import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '5fa573db69e59702a61a2d35'
  },
  mutations: {},
  actions: {
    async fetchRecipe(store, id) {
      const recipeRequest = await axios.get(`/api/recipes/${id}`)

      return recipeRequest.data
    },

    async fetchRecipes() {
      const recipesRequest = await axios.get(`/api/recipes`)

      return recipesRequest.data
    },

    async createRecipe(store, recipe) {
      await axios.post(`/api/recipes`, {
        name: recipe.name,
        description: recipe.description,
        tags: recipe.tags.split(', '),
        ingredients: recipe.ingredients.split('\n'),
        instructions: recipe.instructions.split('\n'),
        cookTime: recipe.cookTime,
        serves: recipe.serves
      })
    },

    async toggleFavorited(store, id) {
      const toggleFavorited = await axios.post(`/api/recipes/${id}/favorite`)
      return toggleFavorited.data
    },

    async createReview(store, recipeId, review) {
      await axios.post(`/api/recipes/${recipeId}/reviews`, {
        text: review.text,
        rating: review.rating
      })
    },

    async fetchReviews(store, id) {
      const reviewsRequest = await axios.get(`/api/recipes/${id}/reviews`)

      return reviewsRequest.data
    }

    // async fetchFavoritedRecipes() {
    //   const favoritedRecipesRequest = await axios.get(`/api/recipes`)

    //   return favoritedRecipesRequest.data
    // }
  },
  modules: {}
})
