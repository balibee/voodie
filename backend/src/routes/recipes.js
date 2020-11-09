const express = require('express')

const router = express.Router()

const Recipe = require('../models/recipe')
const recipes = require('../models/recipes.json')

// GET all recipes in database
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Recipe.find(query))
})

// POST a recipe
router.post('/', async (req, res) => {
  const recipe = await Recipe.create({
    name: req.body.name,
    description: req.body.description,
    tags: req.body.tags,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    cookTime: req.body.cookTime,
    serves: req.body.serves,
  })
  res.send(recipe)
})

// Initialize recipes
router.get('/initialize', async (req, res) => {
  for (let i = 0; i < recipes.length; i++) {
    // eslint-disable-next-line
    await Recipe.create(recipes[i])
  }

  res.send(200)
})

// GET individual recipe page
router.get('/:recipeId', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)

  if (recipe) {
    return res.send(recipe)
  }
  return res.sendStatus(404)
})

// POST favorite property of recipe
router.post('/:recipeId/favorite', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)

  const updatedRecipe = await req.user.toggleFavorite(recipe)

  return res.send(updatedRecipe)
})

// POST review of recipe
router.post('/:recipeId/reviews', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)

  const review = { author: req.user, text: req.body.text, rating: req.body.rating }

  const updatedRecipe = await recipe.addReview(review)

  res.send(updatedRecipe)
})

// GET all reviews of recipe
router.get('/:recipeId/reviews', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Recipe.find(query))
})

// GET individual recipe favorites
// router.get('/:recipeId/favorites', async (req, res) => {
//   const query = { foodie: req.foodie }

//   if (req.query.name) {
//     query.name = req.query.name
//   }

//   if (req.query.favorited) {
//     query.favorited = req.query.favorited
//   }

//   res.send(await Recipe.find(query))
// })

module.exports = router
