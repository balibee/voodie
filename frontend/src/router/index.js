import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import MealPlanner from '../views/mealplanner.vue'
import Recipes from '../views/recipes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mealplanner',
    name: 'mealplanner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MealPlanner
  },
  // {
  //   path: '/inspiration/',
  //   name: 'inspiration',
  //   component: () => import('../views/inspiration.vue')
  // },
  {
    path: '/recipes/:id',
    name: 'recipe detail',
    component: () => import('../views/recipe.vue')
  },
  {
    path: '/recipes/',
    name: 'recipes',
    component: Recipes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
