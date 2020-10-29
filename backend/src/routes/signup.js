const express = require('express')

const router = express.Router()

const Foodie = require('../models/foodie')

/* GET signup page. */
router.get('/', (req, res) => {
  res.render('signup', { title: 'Signup' })
})

// POST sign up input
router.post('/', async (req, res) => {
  const { name, email, password } = req.body
  await Foodie.create({ name, email, password })
  res.redirect('/homepage')
})

module.exports = router
