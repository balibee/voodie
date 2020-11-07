const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Recipe = require('./recipe')

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

  async toggleFavorite(recipe) {
    // eslint-disable-next-line no-underscore-dangle
    if (recipe.favoritedBy.includes(this._id)) {
      this.favoritedRecipes.splice(this.favoritedRecipes.indexOf(recipe), 1)
      recipe.favoritedBy.splice(recipe.favoritedBy.indexOf(recipe), 1)

      await recipe.save()
      await this.save()

      return recipe
    }

    this.favoritedRecipes.push(recipe)
    recipe.favoritedBy.push(this)

    await recipe.save()
    await this.save()

    return recipe
  }

  async createRecipe(recipe) {
    const createdRecipe = await Recipe.create(recipe)
    this.recipes.push(createdRecipe)
    await this.save()
    return createdRecipe
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
