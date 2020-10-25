const express = require('express')

const router = express.Router()

const Foodie = require('../models/foodie')
// const Recipe = require('../models/recipe')

// // signup foodies
// const jill = new Foodie({ name: 'jill', email: 'jill@coyotiv.com', password: 'abc123' })
// const steve = new Foodie({ name: 'steve', email: 'steve@coyotiv.com', password: 'abc123' })

// // create recipe
// const bananabread = new Recipe({
//   name: 'Banana Bread',
//   ingredients: 'banana',
//   instructions: 'mix and bake',
//   cookTime: 25,
//   serves: 4,
// })

/* GET all foodies listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Foodie.find(query))
})

// Foodie page
router.get('/:userId', async (req, res) => {
  const foodie = await Foodie.findById(req.params.userId)

  if (foodie) res.render('foodie', { foodie })
  else res.sendStatus(404)
})

module.exports = router
