const express = require('express')

const router = express.Router()

const Recipe = require('../models/recipe')

// Get all recipes in database

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Recipe.find(query))
})

/* GET Recipes page. */
router.get('/', function (req, res) {
  res.render('recipes', { title: 'Recipes' })
})

// Get Recipe page

router.get('/:recipeId', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)

  if (recipe) res.render('recipe', { recipe })
  else res.sendStatus(404)
})

module.exports = router
