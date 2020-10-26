const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  cookTime: {
    type: String,
    required: true,
  },
  serves: {
    type: String,
    required: true,
  },
  totalRatings: 0,
  reviews: [],
  starRatings: [[0], [0], [0], [0], [0]],
  recipeRating: 0,
  favorites: Number,
})

class Recipe {
  get rating() {
    if (this.totalRatings === 0) {
      return `No rating yet`
    }

    return (
      (5 * this.starRatings[4] +
        4 * this.starRatings[3] +
        3 * this.starRatings[2] +
        2 * this.starRatings[1] +
        1 * this.starRatings[0]) /
      this.totalRatings
    ).toFixed(1)
  }

  printRecipe() {
    return `Recipe printed successfully!
${this.name}
Rating: ${this.rating} out of 5.0 stars
Cook Time: ${this.cookTime} mins
Serves: ${this.serves}
Ingredients: ${this.ingredients.join(', ')}
Instructions: ${this.instructions}`
  }

  get allReviews() {
    console.log(`Reviews for ${this.name}`)

    if (this.reviews.length === 0) {
      return `There are no reviews yet.`
    }

    return this.reviews.map(review => `${review[1]} stars ${review[2]} -${review[0]}`).join('\n')
  }
}

recipeSchema.loadClass(Recipe)
recipeSchema.plugin(autopopulate)
module.exports = mongoose.model('Recipe', recipeSchema)
