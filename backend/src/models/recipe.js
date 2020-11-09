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
  starRatings: { type: Object, default: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } },
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
    console.log(review)
    if (review.rating < 0 && review.rating > 5) {
      throw Error
    }

    this.reviews.push(review)
    console.log(this.starRatings)
    this.starRatings[review.rating]++
    this.totalRatings++
    console.log(this.starRatings)
    this.rating =
      (5 * this.starRatings[5] +
        4 * this.starRatings[4] +
        3 * this.starRatings[3] +
        2 * this.starRatings[2] +
        1 * this.starRatings[1]) /
      this.totalRatings.toFixed(1)

    await this.save()

    return this
  }
}

recipeSchema.loadClass(Recipe)
recipeSchema.plugin(autopopulate)
module.exports = mongoose.model('Recipe', recipeSchema)
