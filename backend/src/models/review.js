const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  foodieId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Foodie',
      required: true,
    },
  ],
  recipeId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
  ],
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Review', reviewSchema)
