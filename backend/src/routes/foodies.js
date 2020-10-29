const express = require('express')

const router = express.Router()

const Foodie = require('../models/foodie')
const Recipe = require('../models/recipe')

/* GET all foodies listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Foodie.find(query))
})

router.get('/initialize', async (req, res) => {
  // create foodies
  const jill = await Foodie.create({ name: 'jill', email: 'jill@coyotiv.com', password: 'mypassword' })
  const steve = await Foodie.create({ name: 'steve', email: 'steve@coyotiv.com', password: 'mypassword' })

  // create recipe
  const bananabread = await Recipe.create({
    name: 'banana bread',
    ingredients: ['banana'],
    instructions: ['mix and bake'],
    cookTime: 30,
    serves: 4,
  })

  await jill.createRecipe(bananabread)

  // favorite recipe
  await steve.favorite(bananabread)

  res.send(200)
})

// Foodie page
router.get('/:userId', async (req, res) => {
  const foodie = await Foodie.findById(req.params.userId)

  if (foodie) res.render('foodie', { foodie })
  else res.sendStatus(404)
})

module.exports = router
