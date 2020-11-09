const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
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
  totalRatings: { type: Number, default: 0 },
  reviews: [
    {
      author: String,
      text: String,
      rating: Number,
    },
  ],
  starRatings: [[0], [0], [0], [0], [0]],
  favoritedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Foodie',
    },
  ],
  personalNote: { type: String },
  rating: { type: Number, default: 0 },
})

class Recipe {
  async addReview(review) {
    if (review.rating < 0 && review.rating > 5) {
      throw Error
    }

    this.reviews.push(review)

    this.starRatings[review.rating]++
    this.totalRatings++

    this.rating =
      (5 * this.starRatings[4] +
        4 * this.starRatings[3] +
        3 * this.starRatings[2] +
        2 * this.starRatings[1] +
        1 * this.starRatings[0]) /
      this.totalRatings.toFixed(1)

    await this.save()

    return review
  }
}

recipeSchema.loadClass(Recipe)
recipeSchema.plugin(autopopulate)
module.exports = mongoose.model('Recipe', recipeSchema)
