class Recipe {
  constructor(name, ingredients, instructions, cookTime, serves) {
    this.name = name
    this.ingredients = [ingredients]
    this.instructions = instructions
    this.cookTime = cookTime
    this.serves = serves
    this.totalRatings = 0
    this.reviews = []
    this.starRatings = [[0], [0], [0], [0], [0]]
    this.recipeRating = 0
    this.favorites = 0
  }

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

  get printRecipe() {
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

module.exports = Recipe
