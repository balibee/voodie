import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  SET_FOODIE: 'set foodie'
}

const store = new Vuex.Store({
  state: {
    foodie: null
  },
  mutations: {
    [mutations.SET_FOODIE](state, foodie) {
      state.foodie = foodie
    }
  },
  actions: {
    async fetchSession({ commit }) {
      const foodie = await axios.get('/api/account/session')
      commit(mutations.SET_FOODIE, foodie.data || null)
    },

    async login({ commit }, credentials) {
      try {
        const foodie = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_FOODIE, foodie.data)
      } catch (e) {
        throw e
      }
    },

    async register(store, foodie) {
      return axios.post('/api/account', foodie)
    },

    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_FOODIE, null)
    },

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

    async createReview(store, { recipeId, review }) {
      await axios.post(`/api/recipes/${recipeId}/reviews`, {
        text: review.text,
        rating: review.rating
      })
    },

    async fetchReviews(store, id) {
      const reviewsRequest = await axios.get(`/api/recipes/${id}/reviews`)

      return reviewsRequest.data
    }
  }
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
