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

module.exports = Recipe