//Create a foodie class to represent the users
/*
Name, recipes uploaded, # of reviews, followers, following
rate recipes, post recipe, follow, 
*/
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

//Create a recipe class
/*
Name, rating, cook time, yield, ingredients, instructions
calculate 5 star rating, print recipe
*/
class Recipe {

    constructor(name, ingredients, instructions, cookTime, serves) {
        this.name = name
        this.ingredients = [ingredients]
        this.instructions = instructions
        this.cookTime = cookTime
        this.serves = serves
        this.totalRatings = 0
        this.reviews = []
        this.rating = 0
        this.favorites = 0
    }

    calculateRating(rating) {
        this.rating = (((this.rating * this.totalRatings) + rating) / (this.totalRatings + 1)).toFixed(1)
        this.totalRatings++
    }

    printRecipe() {
        console.log(`Recipe printed successfully!`)
        console.log(
            `${this.name}\nRating: ${this.rating} out of 5.0 stars\nCook Time: ${this.cookTime} mins\nServes: ${this.serves}\nIngredients: ${this.ingredients.join(', ')}\nInstructions: ${this.instructions}`)
    }

    displayReviews() {
        console.log(`Reviews for ${this.name}`)
        for (let i = 0; i < this.reviews.length; i++) {
            console.log(`${this.reviews[i][1]} stars. ${this.reviews[i][2]} -${this.reviews[i][0]}`)
        }
    }

    convertMeasurements() {
        
    }

}

const regina = new Foodie('Regina')
const jill = new Foodie('Jill')

const bananaBread = new Recipe(
    'Banana Bread', 
    ['1 whole banana', '1 cup sugar', '2 cups flour', '1/2 cup oil', '1 cup non-dairy milk', '1 tbsp baking powder'], 
    'Mash bananas. Mix dry and wet ingredients. Bake at 180 degrees for 20 mins', 
    30, 4
)

console.log(bananaBread)
