import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async fetchRecipe(store, id) {
      const recipeRequest = await axios.get(`/api/recipes/${id}`)
      return recipeRequest.data
    },
    async fetchRecipes() {
      const recipesRequest = await axios.get(`/api/recipes`)
      return recipesRequest.data
    }
  },
  modules: {}
})
