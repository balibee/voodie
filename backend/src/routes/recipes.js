const express = require('express')

const router = express.Router()

const Recipe = require('../models/recipe')
const recipes = require('../models/recipes.json')

// Get all recipes in database

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Recipe.find(query))
})

/* GET all recipes page. */
router.get('/', function (req, res) {
  res.render('recipes', { title: 'Recipes' })
})

// Initialize recipes
router.get('/initialize', async (req, res) => {
  // initialize recipes.json
  for (let i = 0; i < recipes.length; i++) {
    // eslint-disable-next-line
    await Recipe.create(recipes[i])
  }

  res.send(200)
})

// Get individual recipe page
router.get('/:recipeId', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)

  if (recipe) {
    return res.send(recipe)
  }
  res.sendStatus(404)
})

module.exports = router
