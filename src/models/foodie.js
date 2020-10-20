class Foodie {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
    this.recipes = []
    this.favoritedRecipes = []
    this.followers = []
    this.following = []
    this.bio = ''
    this.diet = []
    this.dislikes = []
    this.preferredCuisines = []
  }

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

  favorite(recipe) {
    if (this.favoritedRecipes.find(recipe)) return

    recipe.favorites++
    this.favoritedRecipes.push(recipe)
  }

  unfavorite(recipe) {
    if (!this.favoritedRecipes.find(recipe)) return

    if (recipe.favorites > 0) {
      recipe.favorites--
    }

    this.favoritedRecipes.splice(this.favoritedRecipes.indexOf(recipe), 1)
  }

  createRecipe(recipe) {
    this.recipes.push(recipe)
  }

  deleteRecipe(recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  follow(person) {
    this.following.push(person)
    person.followers.push(this)
    console.log(`${this.name} is now following ${person.name}!`)
  }

  unfollow(person) {
    this.following.slice(this.following.indexOf(person), 1)
    console.log(`${this.name} unfollowed ${person.name}`)
  }
}

module.exports = Foodie