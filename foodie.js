class Foodie {

    constructor(name) {
        this.name = name
        this.recipes = []
        this.favoritedRecipes = []
        this.followers = []
        this.following = []
    }

    ratedRecipe(recipe, rating, review) {
        if (rating > 0 && rating <= 5) {
            recipe.reviews.push([this.name, rating, review])
            recipe.calculateRating(rating)
        } else {
            console.log(`Please choose a number between 1 and 5.`)
            return
        }
        console.log(`${this.name} rates ${recipe.name} ${rating} stars!`)
    }

    favorited(recipe) {
        recipe.favorites++
        this.favoritedRecipes.push(recipe)
    }

    unfavorited(recipe) {
        if (recipe.favorites > 0) {
            recipe.favorites--
        }
        this.favoritedRecipes.splice(this.favoritedRecipes.indexOf(recipe), 1)
    }

    createdRecipe(recipe) {
        this.recipes.push(recipe)
    }

    followed(person) {
        this.following.push(person.name)
        person.followers.push(this.name);
        console.log(`${this.name} is now following ${person.name}!`)
    }

    unfollowed(person) {
        this.following.slice(this.following.indexOf(person), 1)
        console.log(`${this.name} unfollowed ${person.name}`);
    }
}

module.exports = Foodie