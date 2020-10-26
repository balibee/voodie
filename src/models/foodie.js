const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
require('./recipe')

const foodieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      autopopulate: true,
    },
  ],
  favoritedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      autopopulate: true,
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Foodie',
      autopopulate: true,
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Foodie',
      autopopulate: true,
    },
  ],
  bio: String,
  diet: [],
  dislikes: [],
  preferredCuisines: [],
})

class Foodie {
  rateRecipe(recipe, rating, review) {
    if (rating > 0 && rating <= 5) {
      recipe.reviews.push([this.name, rating, review])
      console.log(`${this.name} rates ${recipe.name} ${rating} stars!`)

      for (let i = 1; i <= 5; i++) {
        if (rating === i) {
          recipe.starRatings[i - 1]++
        }
      }

      recipe.totalRatings++
    }
    return `Please choose a number between 1 and 5.`
  }

  async favorite(recipe) {
    if (this.favoritedRecipes.includes(recipe)) return

    recipe.favorites++
    this.favoritedRecipes.push(recipe)
    await this.save()
    await recipe.save()
  }

  unfavorite(recipe) {
    if (!this.favoritedRecipes.includes(recipe)) return

    if (recipe.favorites > 0) {
      recipe.favorites--
    }

    this.favoritedRecipes.splice(this.favoritedRecipes.indexOf(recipe), 1)
  }

  async createRecipe(recipe) {
    this.recipes.push(recipe)
    await this.save()
  }

  deleteRecipe(recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  follow(person) {
    this.following.push(person)
    person.followers.push(this)
  }

  unfollow(person) {
    this.following.slice(this.following.indexOf(person), 1)
  }
}

foodieSchema.loadClass(Foodie)
foodieSchema.plugin(autopopulate)
module.exports = mongoose.model('Foodie', foodieSchema)

// module.exports = Foodie
