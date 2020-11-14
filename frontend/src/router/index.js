import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/profile.vue'
import MealPlanner from '../views/mealplanner.vue'
import Recipes from '../views/recipes.vue'
import Favorited from '../views/favorited.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/mealplanner',
        name: 'mealplanner',
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
        path: '/recipes',
        name: 'recipes',
        component: Recipes
      },
      {
        path: '/recipes/:id/favorites',
        name: 'Favorited',
        component: Favorited
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.foodie) return next('/profile')
          return next()
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.foodie) return next('/profile')
          return next()
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.foodie) return next('/login')
          return next()
        }
      }
    ]
  })
}
